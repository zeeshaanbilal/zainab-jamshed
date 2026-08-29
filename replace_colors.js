const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', '[lang]', 'portfolio', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace Bayer colors
content = content.replace(/bg-\[\#E0F2FE\]/g, 'bg-[#F3E8FF]');
content = content.replace(/text-\[\#0284C7\]/g, 'text-[#7749F8]');
content = content.replace(/bg-\[\#0284C7\]/g, 'bg-[#7749F8]');
content = content.replace(/from-\[\#0284C7\]/g, 'from-[#7749F8]');
content = content.replace(/to-\[\#0369A1\]/g, 'to-[#59168B]');
content = content.replace(/border-\[\#0284C7\]\/20/g, 'border-[#7749F8]/20');

// Replace NFL colors
// Note: NFL already uses bg-[#F3E8FF]
content = content.replace(/text-\[\#9333EA\]/g, 'text-[#7749F8]');
content = content.replace(/bg-\[\#9333EA\]/g, 'bg-[#7749F8]');
content = content.replace(/from-\[\#9333EA\]/g, 'from-[#7749F8]');
content = content.replace(/to-\[\#6B21A8\]/g, 'to-[#59168B]');
content = content.replace(/border-\[\#9333EA\]\/20/g, 'border-[#7749F8]/20');

// Replace CocaCola colors
content = content.replace(/bg-\[\#FEE2E2\]/g, 'bg-[#F3E8FF]');
content = content.replace(/text-\[\#DC2626\]/g, 'text-[#7749F8]');
content = content.replace(/bg-\[\#DC2626\]/g, 'bg-[#7749F8]');
content = content.replace(/from-\[\#DC2626\]/g, 'from-[#7749F8]');
content = content.replace(/to-\[\#991B1B\]/g, 'to-[#59168B]');
content = content.replace(/border-\[\#DC2626\]\/20/g, 'border-[#7749F8]/20');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Colors replaced successfully!');
