import * as React from 'react'
import {Fender} from 'mui-extension'

export const FenderDemoCustom = () => {
  return (
    <Fender icon="cloud_off" iconSize={150}>
      <div style={{textAlign: 'left'}}>
        <div style={{fontSize: '1.4em', lineHeight: 1, marginBottom: 8}}>No internet</div>
        Try
        <ul>
          <li>Checking the network cables, modem, and router</li>
          <li>Reconnecting to Wi-Fi</li>
          <li>Running Windows Network Diagnostics</li>
        </ul>
        <div style={{opacity: .5}}>DNS_PROBE_FINISHED_NO_INTERNET</div>
      </div>
    </Fender>
  )
}

