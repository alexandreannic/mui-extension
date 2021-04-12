import {Txt} from './Txt'
import * as React from 'react'
import {useState} from 'react'
import {Switch} from '@material-ui/core'
import {Panel, PanelBody} from 'mui-extension'

export const TxtDemoSkeleton = () => {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <div>

      Loading
      <Switch
        color="primary"
        checked={isLoading}
        onChange={() => setIsLoading(_ => !_)}/>

      <Panel>
        <PanelBody>
          <Txt skeleton={isLoading && 60} block>Autant pas se faire d'illusions</Txt>
          <Txt skeleton={isLoading && 80} block size="small" color="hint">Les gens n'ont rien à se dire, ils ne se parlent que de leurs peines à eux chacun, c'est entendu.</Txt>
        </PanelBody>
      </Panel>
    </div>
  )
}
