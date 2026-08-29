const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src');
let changedCount = 0;

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  // We want to replace w-[XXXpx] with w-full max-w-[XXXpx]
  // Note: Only for widths >= 300px to avoid breaking small elements like icons
  const regex = /w-\[(3\d{2}|[4-9]\d{2}|\d{4})px\]/g;
  
  if (regex.test(content)) {
    const newContent = content.replace(regex, (match) => {
      return `w-full max-w-[${match.slice(3, -1)}]`;
    });
    
    if (newContent !== content) {
      fs.writeFileSync(f, newContent, 'utf8');
      console.log(`Updated ${f}`);
      changedCount++;
    }
  }
});

console.log(`\nSuccessfully updated ${changedCount} files.`);
