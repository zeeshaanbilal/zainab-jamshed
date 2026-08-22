
fetch('http://localhost:3000/admin', { method: 'POST', headers: { 'Next-Action': 'any' } })
  .then(res => console.log(res.status, res.statusText))
  .catch(console.error);

