import * as React from 'react'
import {useEffect} from 'react'
import * as ReactDOM from 'react-dom'
import {Btn, GlobalProgressBar, GlobalProgressProvider, withGlobalProgress} from 'mui-extension'

const fetchSomething = (delay: number) => new Promise(resolve => setTimeout(resolve, delay))
const fetchSomethingRejected = (delay: number) => new Promise((resolve, reject) => setTimeout(() => reject('oops'), delay))

const progressbarContainer = document.createElement('div')
document.querySelector('body')!.appendChild(progressbarContainer)

export const GlobalProgressDemoRealLife = () => {

  return (
    <GlobalProgressProvider>
      {ReactDOM.createPortal(
        <GlobalProgressBar
          style={{position: 'fixed'}}
          styleProgress={{
            height: 3,
            background: 'orange',
            boxShadow: `0 0 10px orange, 0 0 5px orange`
          }}/>,
        progressbarContainer
      )}
      <App/>
    </GlobalProgressProvider>
  )
}

const App = withGlobalProgress(({promisesWithProgress}: any) => {

  useEffect(() => fetch(), [])

  const fetch = () => {
    Promise.all(promisesWithProgress(
      fetchSomething(800).then(() => console.info('Something fetched')),
      fetchSomething(1200).then(() => console.info('Something else fetched')),
      fetchSomething(1500).then(() => console.info('Something else else fetched')),
    )).then(() => console.log('All done !'))
  }

  const fetchWithError = () => {
    Promise.all(promisesWithProgress(
      fetchSomething(800).then(() => console.info('Something fetched')),
      fetchSomething(1200).then(() => console.info('Something else fetched')),
      fetchSomethingRejected(2400).catch(e => {
        console.info('Something fetched but rejected', e)
        return Promise.reject(e)
      }),
    ))
      .then(() => console.log('All done !'))
      .catch(() => console.log('At least one promise has been rejected !'))
  }

  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <Btn color="primary" variant="outlined" onClick={fetch}>Fetch</Btn>
      <Btn color="primary" variant="outlined" onClick={fetchWithError}>FetchWithError</Btn>
    </div>
  )
})
