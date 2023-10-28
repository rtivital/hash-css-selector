import {
  getFileName,
  hashCSSSelector,
  createGenerateScopedName,
  generateScopedName,
} from './hash-css-selector';

describe('getFileName', () => {
  it('returns correct file name for windows path', () => {
    expect(getFileName('C:\\Users\\user\\Desktop\\index.module.css')).toBe('index');
    expect(getFileName('C:\\Users\\user\\Desktop\\index.css')).toBe('index');
    expect(getFileName('C:\\Users\\user\\Desktop\\index.scss')).toBe('index');
  });

  it('returns correct file name for unix path', () => {
    expect(getFileName('/home/user/Desktop/index.module.css')).toBe('index');
    expect(getFileName('/home/user/Desktop/index.css')).toBe('index');
    expect(getFileName('/home/user/Desktop/index.scss')).toBe('index');
  });
});

describe('hashCSSSelector', () => {
  it('returns correct hash', () => {
    expect(hashCSSSelector('test-class')).toBe('m-a530cc7d');
    expect(hashCSSSelector('another-test-class', 'test')).toBe('test-c43ac187');
  });
});

describe('createGenerateScopedName', () => {
  it('returns correct class name', () => {
    const generateScopedNameMPrefix = createGenerateScopedName('m');
    const generateScopedNameTestPrefix = createGenerateScopedName('test');

    expect(generateScopedNameMPrefix('test-class', 'index.module.css')).toBe('m-e219b858');
    expect(generateScopedNameMPrefix('another-test-class', 'index.module.css')).toBe('m-4193a262');

    expect(generateScopedNameTestPrefix('test-class', 'index.module.css')).toBe('test-e219b858');
    expect(generateScopedNameTestPrefix('another-test-class', 'index.module.css')).toBe(
      'test-4193a262'
    );
  });
});

describe('generateScopedName', () => {
  it('returns correct class name', () => {
    expect(generateScopedName('test-class', 'index.module.css')).toBe('m-e219b858');
    expect(generateScopedName('another-test-class', 'index.module.css')).toBe('m-4193a262');
  });
});
