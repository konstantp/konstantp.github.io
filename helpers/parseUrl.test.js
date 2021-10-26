import { parseUrlA, parseUrlB, parseUrlC } from './parseUrl';

/**
 * @jest-environment jsdom
 */
describe('parseUrlA', () => {
  it('should parse url string into object via document.createElement(\'a\')', () => {
    expect(parseUrlA('http://ffwagency.com/do/any.php?a=1#foo')).toEqual(expect.objectContaining({
      hostname: 'ffwagency.com',
      pathname: '/do/any.php',
      hash: '#foo',
    }));
  });
});


describe('parseUrlB', () => {
  it('should parse url string into object using browser URL api', () => {
    const { hostname, hash, pathname } = parseUrlB('http://ffwagency.com/do/any.php?a=1#foo');
    expect(hostname).toEqual('ffwagency.com');
    expect(pathname).toEqual('/do/any.php');
    expect(hash).toEqual('#foo');
  });
});

describe('parseUrlC', () => {
  it('should parse url string into object using custom JS logic', () => {
    const { hostname, hash, pathname } = parseUrlC('http://ffwagency.com/do/any.php?a=1#foo');
    expect(hostname).toEqual('ffwagency.com');
    expect(pathname).toEqual('/do/any.php');
    expect(hash).toEqual('#foo');
  });
});
