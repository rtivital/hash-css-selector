export function getFileName(filePath: string) {
  return filePath
    .replace(/\\/g, '/')
    .split('/')
    .pop()
    .replace('.module', '')
    .replace('.css', '')
    .replace('.scss', '');
}

export function hashCSSSelector(selector: string, prefix = 'm') {
  let hash = 0;

  for (let i = 0; i < selector.length; i += 1) {
    const chr = selector.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }

  return `${prefix}-${(hash + 2147483648).toString(16)}`;
}

export function createGenerateScopedName(prefix: string) {
  return function generateScopedName(selector: string, fileName: string) {
    return hashCSSSelector(`${getFileName(fileName)}-${selector}`, prefix);
  };
}

export const generateScopedName = createGenerateScopedName('m');
