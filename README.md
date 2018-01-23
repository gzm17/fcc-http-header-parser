fcc: http-headers
============================

This little project prints browser IP address, language, and other browser info from http request header in the following format:

{"ipaddress":"122.216.26.17","language":"en-US","software":"Macintosh; Intel Mac OS X 10_13_1"}

request.header provides the following info (from console.log(req.header)):

{ connection: 'keep-alive',

  'x-forwarded-for': '122.216.26.17,::ffff:10.10.10.127,::ffff:10.10.10.47',

  'x-forwarded-proto': 'https,http,http',

  'x-forwarded-port': '443,80,80',

  host: 'http-headers.glitch.me',

  'x-amzn-trace-id': 'Root=1-5a669902-583386ce1711660b39a2ff52',

  'upgrade-insecure-requests': '1',

  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',

  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',

  referer: 'https://glitch.com/edit/',

  'accept-encoding': 'gzip, deflate, br',


  'accept-language': 'en-US,en;q=0.9',

  'if-none-match': 'W/"9b2-16120bb9f52"',

  'if-modified-since': 'Tue, 23 Jan 2018 01:57:02 GMT',

  'x-request-id': '54c56e5455e318b4',

  'x-glitch-routing': 'bd4df53a-fd44-4ed5-a3da-917f37c49318:1085',

  'x-forwarded-host': 'http-headers.glitch.me' }
  
  Note: index.html, client.js and style.js are not needed. They are copied over from previous project. 