const fs = require('fs');
const files = [
  'src/app/page.tsx',
  'src/app/products/page.tsx',
  'src/app/products/[id]/page.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/#0047b3/g, '#06999b');
    content = content.replace(/#003380/g, '#057a7c');
    content = content.replace(/bg-blue-50/g, 'bg-[#06999b]/10');
    content = content.replace(/shadow-blue-900\/20/g, 'shadow-[#06999b]/20');
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
console.log('Colors replaced successfully!');
