const https = require('https');

function fetchOgImage(shortUrl) {
  https.get(shortUrl, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      https.get(res.headers.location, (res2) => {
        let data = '';
        res2.on('data', chunk => data += chunk);
        res2.on('end', () => {
          const match = data.match(/<meta\s+property="og:image"\s+name="og:image"\s+content="([^"]+)"/i) || data.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
          if (match) console.log(shortUrl + ' => ' + match[1].replace(/&amp;/g, '&'));
          else {
            const imgMatch = data.match(/<link\s+rel="image_src"\s+href="([^"]+)"/i) || data.match(/<img[^>]+src="([^"]+)"/gi);
            console.log(shortUrl + ' => ' + (imgMatch ? imgMatch[0] : 'no image found'));
          }
        });
      }).on('error', err => console.log(err.message));
    } else {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/<meta property="og:image" content="([^"]+)"/);
        if (match) console.log(shortUrl + ' => ' + match[1]);
        else console.log(shortUrl + ' => no og:image found');
      });
    }
  }).on('error', err => console.log(shortUrl + ' error: ' + err.message));
}

fetchOgImage('https://pin.it/7kmF5OIZF');
fetchOgImage('https://pin.it/5J9I7kwBN');
