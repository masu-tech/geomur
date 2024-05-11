export function validateStringLength(text: string, maxLength: number) {
  return 0 < text.length && text.length <= maxLength;
}
