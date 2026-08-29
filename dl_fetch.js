async function download(url, dest) {
  const fs = require('fs');
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  const buffer = await response.arrayBuffer();
  fs.writeFileSync(dest, Buffer.from(buffer));
}

async function main() {
  try {
    await download('https://upload.wikimedia.org/wikipedia/commons/2/23/Meezan_Bank_Logo.svg', 'public/meezan.svg');
    console.log('Meezan downloaded');
    await download('https://upload.wikimedia.org/wikipedia/commons/f/f7/Bayer_Cross.svg', 'public/bayer.svg');
    console.log('Bayer downloaded');
    console.log('All done');
  } catch (e) {
    console.error(e);
  }
}
main();
