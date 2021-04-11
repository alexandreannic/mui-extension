import * as React from 'react'
import {useEffect, useState} from 'react'
import {Btn, GlobalProgressBar, GlobalProgressProvider, withGlobalProgress} from 'mui-extension'
import {FormControl, Input, InputLabel} from '@material-ui/core'

export const GlobalProgressDemoManual = () => {
  return (
    <GlobalProgressProvider>
      <div style={{position: 'relative'}}>
        <GlobalProgressBar/>
        <App/>
      </div>
    </GlobalProgressProvider>
  )
}

const App = withGlobalProgress(({progressStart, progressNext}: any) => {

  const [stepsCount, setStepsCount] = useState(3)
  const [delay, setDelay] = useState(1000)
  const timeouts: any[] = []

  useEffect(() => () => {
    timeouts.map(clearTimeout)
  }, [])

  const start = () => {
    timeouts.map(clearTimeout)
    progressStart(stepsCount)
    for (let i = 1; i <= stepsCount; i++) {
      timeouts.push(setTimeout(progressNext, i * delay))
    }
  }

  return (
    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingTop: 16}}>
      <FormControl>
        <InputLabel>Number of steps</InputLabel>
        <Input type="number" inputProps={{min: 1}} value={stepsCount} onChange={e => setStepsCount(+e.target.value)}/>
      </FormControl>
      <FormControl>
        <InputLabel>Delay</InputLabel>
        <Input type="number" value={delay} onChange={e => setDelay(+e.target.value)}/>
      </FormControl>
      <Btn onClick={start} variant="outlined" color="primary">Start</Btn>
    </div>
  )
})
