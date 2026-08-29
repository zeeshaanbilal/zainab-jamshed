const fs = require('fs');

const startupSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none">
  <rect width="200" height="60" rx="8" fill="transparent"/>
  <path d="M40 30L30 20V40L40 30Z" fill="#7749F8"/>
  <circle cx="20" cy="30" r="10" stroke="#7749F8" stroke-width="4"/>
  <text x="55" y="38" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#333">Startup</text>
</svg>`;

const bronkasSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none">
  <rect width="200" height="60" rx="8" fill="transparent"/>
  <path d="M20 15H40V45H20V15Z" fill="#59168B"/>
  <path d="M30 15L45 30L30 45" stroke="#59168B" stroke-width="4" fill="none"/>
  <text x="60" y="38" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#333">Bronkas</text>
</svg>`;

const kickstartSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none">
  <rect width="200" height="60" rx="8" fill="transparent"/>
  <path d="M20 45L30 15L40 45" stroke="#7749F8" stroke-width="4" fill="none"/>
  <path d="M25 35H35" stroke="#7749F8" stroke-width="4"/>
  <text x="55" y="38" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#333">Kickstart</text>
</svg>`;

fs.writeFileSync('public/startup.svg', startupSVG);
fs.writeFileSync('public/bronkas.svg', bronkasSVG);
fs.writeFileSync('public/kickstart.svg', kickstartSVG);

console.log('SVGs created');
