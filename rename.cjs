const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'gallery');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png'));

const names = [
  'talat-sao-1.jpg',
  'talat-sao-2.jpg',
  'talat-sao-3.jpg',
  'night-market-1.jpg',
  'night-market-2.jpg',
  'night-market-3.jpg',
  'market-culture-1.jpg',
  'market-culture-2.jpg',
  'market-culture-3.jpg',
  'market-culture-4.jpg',
  'market-culture-5.jpg',
  'market-culture-6.jpg',
  'market-culture-7.jpg',
  'market-culture-8.jpg',
  'market-culture-9.jpg',
  'market-culture-10.jpg'
];

files.forEach((file, idx) => {
  if (idx < names.length) {
    fs.renameSync(path.join(dir, file), path.join(dir, names[idx]));
  }
});
console.log('Renamed files successfully.');
