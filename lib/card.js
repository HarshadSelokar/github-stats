export function card(title, content, height = 180) {
  return `
<svg width="420" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" rx="12" fill="#0d1117"/>
  <text x="20" y="32" fill="#58a6ff" font-size="20">${title}</text>
  ${content}
</svg>`;
}
