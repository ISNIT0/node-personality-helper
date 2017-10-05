# Personality Helper
A very simple wrapper for the [personality server](https://github.com/Polite-AI/personality-server)


```javascript
const makeMessageResponder = require('personality-helper');
const messageResponder = makeMessageResponder({
  "host":"localhost",
  "port":"8000",
  "version":"v1"
}, "english", "standard");

const response - messageResponder("I hate you", "demoSource", "room1", "Event Id", Date.now());

console.log(response.response); // "Spread Love, Not Hate"
```
