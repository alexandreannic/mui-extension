import * as React from 'react'
import {useState} from 'react'
import {Btn} from 'mui-extension'

export const BtnDemoButton = () => {
  const [isLoading, setIsLoading] = useState([false, false, false, false])

  const setIsLoadingAtIndex = (i: number, value: boolean) => {
    setIsLoading(pevIsLoading => pevIsLoading.map((v, j) => i === j ? value : v))
  }

  const upload = (i: number) => () => {
    setIsLoadingAtIndex(i, true)
    setTimeout(() => setIsLoadingAtIndex(i, false), 1000)
  }

  return (
    <div style={{padding: 16, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
      <Btn loading={isLoading[0]} onClick={upload(0)} color="primary">
        Confirm
      </Btn>
      <Btn loading={isLoading[1]} onClick={upload(1)} color="primary"
           iconAfter="send"
           variant="outlined">
        Send
      </Btn>
      <Btn loading={isLoading[2]} onClick={upload(2)} color="secondary"
           variant="contained"
           icon="person"
           iconAfter="keyboard_arrow_right">
        Contacts
      </Btn>
      {/*<Btn variant="fab" color="primary" loading={isLoading[3]} onClick={upload(3)}>*/}
      {/*<Icon>add</Icon>*/}
      {/*</Btn>*/}
    </div>
  )
}
