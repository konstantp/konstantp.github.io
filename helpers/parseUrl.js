// I've listed several alternative solutions below.
// One of the assignment requirements was to use minimal amount of lines of code.
// I'm not a fan of spaghetti code myself and like eloquent solutions,
// however consider that code clarity and readability has higher priority than minimum number of lines.


// Option A.
// Currently in my production projects I use fork of this utility function -> https://gist.github.com/aymanfarhat/5608517
// However, it works only in browser environment and can not be used in Node on server side if page should be prerendered.
export function parseUrlA(input = '') {
  let url_search_arr;
  let option_key;
  let i;
  let get_param;
  let key;
  let val;
  const parameters = {};
  const a = document.createElement('a');
  const options = {
    url: input || window.location.href,
    unescape: true,
    convert_num: true,
  };


  for (option_key in options) {
    if (options.hasOwnProperty(option_key)) {
      if (options[option_key] === undefined) {
        options[option_key] = options[option_key];
      }
    }
  }

  a.href = options.url;
  url_search_arr = a.search.substring(1).split('&');

  if (url_search_arr[0].length > 1) {
    for (i = 0; i < url_search_arr.length; i += 1) {
      get_param = url_search_arr[i].split('=');

      if (options.unescape) {
        key = decodeURI(get_param[0]);
        val = decodeURI(get_param[1]);
      } else {
        key = get_param[0];
        val = get_param[1];
      }

      if (options.convert_num) {
        if (val.match(/^\d+$/)) {
          val = parseInt(val, 10);
        } else if (val.match(/^\d+\.\d+$/)) {
          val = parseFloat(val);
        }
      }

      if (parameters[key] === undefined) {
        parameters[key] = val;
      } else if (typeof parameters[key] === 'string') {
        parameters[key] = [parameters[key], val];
      } else {
        parameters[key].push(val);
      }

      get_param = [];
    }
  }

  return {
    parameters,
    protocol: a.protocol,
    hostname: a.hostname,
    host: a.host,
    port: a.port,
    hash: a.hash,
    pathname: a.pathname,
    search: a.search,
  };
}


// Option B.
// There is browser builtin URL API. It has pretty good browser support nowadays.
// However, it doesn't work in IE at all. Do you require IE support? Does anyone still use it?
// A polyfill of URL is available in core-js. It also works in Node starting from version 10.
// Modern, short and easy!
export function parseUrlB(input = '') {
  return new URL(input);
}


// Option C.
// Since you asked to implement solution from scratch, here is the one I quickly wrote.
// It's not the most efficient and it's not fully tested for edge cases.
export function parseUrlC(input = '') {
  const hash = input.includes('#') ? `#${input.split('#')[1]}` : '';
  const query = input.includes('?') ? `?${input.split('?')[1]}`.replace(hash, '') : '';

  const parts = input.split('/');
  const hostname = parts[2];

  let pathname = '';
  if (parts.length > 3) {
    pathname = `/${parts.slice(3).join('/').replace(query, '').replace(hash, '')}`;
  }

  return {
    hostname,
    pathname,
    hash,
  }
}


// Option D.
// Use a regexp. But it can be hard to read and I think it's overengineering for such a problem.

