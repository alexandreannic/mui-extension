import * as React from 'react'
import {Btn, ToastProvider, useToast, withToast} from 'mui-extension'

export const ToastDemoExample = () => {
  return (
    <ToastProvider>
      <App/>
    </ToastProvider>
  )
}

interface AppProps {
  toastError: (_: string) => void,
  toastWarning: (_: string) => void,
  toastSuccess: (_: string) => void,
  toastInfo: (_: string) => void,
  toastLoading: (_: string) => void,
}

const App = withToast(({toastWarning, toastSuccess, toastInfo, toastLoading}: AppProps) => {
  const {toastError: toastErrorUsingHook} = useToast()
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Btn color="primary" onClick={() => toastLoading('Loading...')}>Toast Loading</Btn>
      <Btn color="primary" onClick={() => toastErrorUsingHook('Error toast !')}>Toast error</Btn>
      <Btn color="primary" onClick={() => toastWarning('Warning toast !')}>Toast Warning</Btn>
      <Btn color="primary" onClick={() => toastSuccess('Success toast !')}>Toast Success</Btn>
      <Btn color="primary" onClick={() => toastInfo('Info toast !')}>Toast Info</Btn>
    </div>
  )
})
