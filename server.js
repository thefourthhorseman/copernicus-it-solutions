// Minimal static file server for Heroku (no dependencies).
// Serves the site with clean directory URLs, a 404 page, and the /-5 redirect.
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = process.env.PORT || 3000;
const DEV = !!process.env.DEV; // `npm run dev`: no browser caching, so edits show on refresh
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json',
  '.png': 'image/png', '.mp4': 'video/mp4', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.webmanifest': 'application/manifest+json',
  '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.md': 'text/markdown; charset=utf-8'
};
const REDIRECTS = { '/-5': '/advisory/', '/-5/': '/advisory/' };
const HIDDEN = [/^\/docs(\/|$)/, /^\/server\.js$/, /^\/package\.json$/, /^\/Procfile$/, /^\/README\.md$/, /^\/\.git/];

function send(res, status, file, extra = {}, range) {
  const ext = path.extname(file).toLowerCase();
  const headers = Object.assign({
    'Content-Type': TYPES[ext] || 'application/octet-stream',
    'Cache-Control': DEV ? 'no-store' : ext === '.html' ? 'public, max-age=300' : 'public, max-age=86400',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin'
  }, extra);
  res.writeHead(status, headers);
  fs.createReadStream(file, range).pipe(res);
}

// Byte-range support so browsers (Safari/iOS in particular) can stream and seek video.
function sendFile(req, res, file, size) {
  const m = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range || '');
  if (!m || (!m[1] && !m[2])) return send(res, 200, file, { 'Accept-Ranges': 'bytes', 'Content-Length': size });
  let start = m[1] ? parseInt(m[1], 10) : size - parseInt(m[2], 10);
  let end = m[1] && m[2] ? Math.min(parseInt(m[2], 10), size - 1) : size - 1;
  if (start < 0) start = 0;
  if (start >= size || start > end) { res.writeHead(416, { 'Content-Range': `bytes */${size}` }); return res.end(); }
  send(res, 206, file, { 'Accept-Ranges': 'bytes', 'Content-Range': `bytes ${start}-${end}/${size}`, 'Content-Length': end - start + 1 }, { start, end });
}

http.createServer((req, res) => {
  let urlPath;
  try { urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname); }
  catch { res.writeHead(400); return res.end('Bad request'); }

  if (REDIRECTS[urlPath]) { res.writeHead(301, { Location: REDIRECTS[urlPath] }); return res.end(); }
  if (HIDDEN.some(re => re.test(urlPath))) return send(res, 404, path.join(ROOT, '404.html'));

  let file = path.normalize(path.join(ROOT, urlPath));
  if (!file.startsWith(ROOT)) return send(res, 404, path.join(ROOT, '404.html'));

  fs.stat(file, (err, st) => {
    if (!err && st.isDirectory()) {
      if (!urlPath.endsWith('/')) { res.writeHead(301, { Location: urlPath + '/' }); return res.end(); }
      file = path.join(file, 'index.html');
    }
    fs.stat(file, (e, fst) => {
      if (e || !fst.isFile()) return send(res, 404, path.join(ROOT, '404.html'));
      sendFile(req, res, file, fst.size);
    });
  });
}).listen(PORT, () => console.log(`Serving on port ${PORT}`));
