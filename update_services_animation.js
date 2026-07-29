const fs = require('fs');
const path = require('path');

const file = path.join('c:/Users/billa/Desktop/zj/src/app/services', 'page.tsx');
let content = fs.readFileSync(file, 'utf8');

const targetStr = '<div className="bg-white rounded-[20px] p-6 shadow-[0_4px_25px_rgba(0,0,0,0.04)] flex flex-col h-full border border-gray-100 transition-shadow hover:shadow-xl">';

let delay = 0.2;
const replacementFunc = () => {
  const result = `<div className="bg-white rounded-[20px] p-6 shadow-[0_4px_25px_rgba(0,0,0,0.04)] flex flex-col h-full border border-gray-100 transition-shadow hover:shadow-xl opacity-0 animate-slide-up" style={{ animationDelay: '${delay}s' }}>`;
  delay += 0.2;
  return result;
};

// We know there are exactly 6 cards
for (let i = 0; i < 6; i++) {
  content = content.replace(targetStr, replacementFunc());
}

fs.writeFileSync(file, content);
console.log('Successfully added staggered animations to the services page cards.');
