import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const booksDir = path.join(__dirname, 'public', 'books');
const coversDir = path.join(__dirname, 'public', 'covers');
const outputJson = path.join(__dirname, 'public', 'books.json');

const pdfFiles = fs.readdirSync(booksDir).filter(f => f.toLowerCase().endsWith('.pdf'));
const coverFiles = fs.readdirSync(coversDir);

const books = pdfFiles.map(pdf => {
    const baseName = path.parse(pdf).name;
    const cover = coverFiles.find(
        c => path.parse(c).name.toLowerCase() === baseName.toLowerCase() && c.toLowerCase().endsWith('.jpg')
    );
    return {
        title: baseName,
        pdf: pdf,
        cover: cover || null
    };
});

fs.writeFileSync(outputJson, JSON.stringify(books, null, 2));
console.log(`books.json generated with ${books.length} books.`);