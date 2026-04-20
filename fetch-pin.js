async function fetchOgImage(shortUrl) {
  try {
    const response = await fetch(shortUrl);
    const html = await response.text();
    // find URLs that look like image URLs in Pinterest
    const matches = Array.from(html.matchAll(/https:\/\/i\.pinimg\.com\/[a-zA-Z0-9_/]+\.jpg/g));
    const unique = [...new Set(matches.map(m => m[0]))];
    console.log(shortUrl + " => ", unique);
  } catch (e) {
    console.error(e);
  }
}
async function run() {
  await fetchOgImage('https://pin.it/7kmF5OIZF');
  await fetchOgImage('https://pin.it/5J9I7kwBN');
}
run();
