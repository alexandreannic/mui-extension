import * as React from 'react'
import {useEffect, useState} from 'react'
import {Fender} from 'mui-extension'

export const FenderDemoLoading = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1600)
  }, [])

  return (
    <div>
      <Fender type={isLoading ? 'loading' : 'empty'} title={isLoading ? 'Loading...' : 'No data'}/>
    </div>
  )
}

