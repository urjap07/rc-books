import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixFilenames(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fixed = file.trim().replace(/\s+\./, '.'); // Remove spaces before extension
    if (file !== fixed) {
      fs.renameSync(path.join(dir, file), path.join(dir, fixed));
      console.log(`Renamed: "${file}" -> "${fixed}"`);
    }
  });
}

fixFilenames(path.join(__dirname, 'public', 'covers'));
fixFilenames(path.join(__dirname, 'public', 'books'));
