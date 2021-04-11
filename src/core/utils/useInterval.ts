import {useEffect, useRef} from 'react'

export const useInterval = (callback: (...args: any[]) => void, ms: number) => {
  const savedCallback = useRef<(...args: any[]) => void>()

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    const tick = () => savedCallback.current!()
    const id = setInterval(tick, ms)
    return () => clearInterval(id)
  }, [ms])
}
