async function run() {
  const fs = require('fs');
  try {
    let res = await fetch('https://www.google.com/s2/favicons?domain=meezanbank.com&sz=128');
    let buf = await res.arrayBuffer();
    fs.writeFileSync('public/meezan.png', Buffer.from(buf));
    
    res = await fetch('https://www.google.com/s2/favicons?domain=bayer.com&sz=128');
    buf = await res.arrayBuffer();
    fs.writeFileSync('public/bayer.png', Buffer.from(buf));
    
    res = await fetch('https://www.google.com/s2/favicons?domain=coca-colacompany.com&sz=128');
    buf = await res.arrayBuffer();
    fs.writeFileSync('public/coca-cola.png', Buffer.from(buf));
    console.log("Logos downloaded successfully");
  } catch(e) {
    console.error(e);
  }
}
run();
