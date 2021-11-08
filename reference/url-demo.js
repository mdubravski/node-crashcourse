const url = require('url');
const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// get serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

// get host (root domain)
console.log(myUrl.host);

// get host name (does not get port)
console.log(myUrl.hostname);

// get path name
console.log(myUrl.pathname);

// serialized query
console.log(myUrl.search);

// params object
console.log(myUrl.searchParams);

// add param
console.log(myUrl.searchParams.append('abc', '123'));
console.log(myUrl.searchParams);

// loop
myUrl.searchParams.forEach((value,fname) => console.log(`${fname}:${value}`));
