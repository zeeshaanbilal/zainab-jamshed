const fs = require('fs');
const path = require('path');

const file = path.join('c:/Users/billa/Desktop/zj/src/app/services', 'page.tsx');
let content = fs.readFileSync(file, 'utf8');

// Animate the h3 text (slide from right)
content = content.replace(
  /<h3 className=\"text-\[19px\] lg:text-\[20px\] xl:text-\[22px\] font-bold text-gray-900 mb-6 px-1 whitespace-nowrap truncate tracking-tight\">/g,
  '<h3 className="text-[19px] lg:text-[20px] xl:text-[22px] font-bold text-gray-900 mb-6 px-1 whitespace-nowrap truncate tracking-tight opacity-0 animate-slide-right">'
);

// Animate the ul list (slide from right with a slight delay)
content = content.replace(
  /<ul className=\"space-y-5 mb-8 flex-1 px-1\">/g,
  '<ul className="space-y-5 mb-8 flex-1 px-1 opacity-0 animate-slide-right" style={{ animationDelay: \'0.7s\' }}>'
);

// Animate the Read More button container (slide from left)
content = content.replace(
  /<div className=\"flex justify-end mt-auto pt-6\">/g,
  '<div className="flex justify-end mt-auto pt-6 opacity-0 animate-slide-left">'
);

fs.writeFileSync(file, content);
console.log('Successfully added inner animations to the services page cards.');
