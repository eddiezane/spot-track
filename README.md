# spot-track

A simple library to be used in demos. Grabs the preview url from Spotify's search API endpoint for a given track name.

## Usage

```javascript
const SpotTrack = require('./index')

const s = new SpotTrack('YOUR_SPOTIFY_CLIENT_ID', 'YOUR_SPOTIFY_CLIENT_SECRET')

async function main() {
  try {
    const track = await s.getTrack('never gonna give')
    console.log(track)
  } catch (err) {
    console.error(err)
  }
}

main()
```
