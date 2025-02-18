export function hanoi(
  // @ts-ignore
  disks: number,
  // @ts-ignore
  source: string,
  // @ts-ignore
  auxiliary: string,
  destination: string,
  recordMove: (from: string, to: string) => void,
) {
  console.log(disks)
  console.log(source)
  console.log(auxiliary)
  console.log(destination)
  console.log(recordMove)
  // Ваш рекурсивный код здесь, использующий recordMove для записи каждого перемещения
}
