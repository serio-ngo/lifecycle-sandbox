import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const types = { '.html': 'text/html', '.mjs': 'text/javascript' };

createServer(async (req, res) => {
  const file = path.join(root, path.normalize(new URL(req.url, 'http://x').pathname === '/' ? 'index.html' : new URL(req.url, 'http://x').pathname));
  try {
    if (!file.startsWith(root)) throw new Error('outside root');
    res.writeHead(200, { 'content-type': types[path.extname(file)] || 'application/octet-stream' }).end(await readFile(file));
  } catch { res.writeHead(404).end(); }
}).listen(4173, '127.0.0.1');
