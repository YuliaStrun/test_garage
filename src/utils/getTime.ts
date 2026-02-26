export const getTime = (ms: number | string) => {
  if (typeof ms === 'string') return ms

  let seconds = Math.floor(ms / 1000)
  let minutes = Math.floor(seconds / 60)
  let hours = Math.floor(minutes / 60)

  const fillZeros = (num: number) => num.toString().padStart(2, '0')

  seconds %= 60
  minutes %= 60

  return `${fillZeros(hours)}:${fillZeros(minutes)}:${fillZeros(seconds)}`
}
