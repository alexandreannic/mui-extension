import * as React from 'react'
import {Alert, Btn, Panel} from 'mui-extension'

export const AlertDemoCustom = () => {
  return (
    <Panel>
      <Alert type="error" icon="cloud_off" action={
        <Btn>Retry</Btn>
      }>
        <div style={{fontSize: '1.4em', lineHeight: 1, marginBottom: 8}}>No internet</div>
        Try
        <ul>
          <li>Checking the network cables, modem, and router</li>
          <li>Reconnecting to Wi-Fi</li>
          <li>Running Windows Network Diagnostics</li>
        </ul>
        <div style={{opacity: .5}}>DNS_PROBE_FINISHED_NO_INTERNET</div>
      </Alert>
    </Panel>
  )
}
