// TODO Use lodash instead
export function debounce(func: any, wait: number) {
  let timeout: any
  return (...args: any[]) => {
    // @ts-ignore
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(context, args), wait)
  }
}
