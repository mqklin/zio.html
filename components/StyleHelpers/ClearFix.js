export function clearfix() {
  return `
    &:before,
  &:after {
    content: " "; // 1
    display: table; // 2
  }
  &:after {
    clear: both;
  }
  `;
}
