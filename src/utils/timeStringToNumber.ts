export function timeStringToNumber(time: string): number {
  const normalized = time.replace(/[^\d:]/g, '')
  const [h, m, s] = normalized.split(':').map(Number)

  return (h * 60 * 60 + m * 60 + s) * 1000
}
