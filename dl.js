const https = require('https');
const fs = require('fs');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  await download('https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg', 'public/coca-cola.svg');
  await download('https://upload.wikimedia.org/wikipedia/commons/f/f7/Bayer_Cross.svg', 'public/bayer.svg');
  await download('https://upload.wikimedia.org/wikipedia/commons/2/23/Meezan_Bank_Logo.svg', 'public/meezan.svg');
  console.log('Done');
}
main();
