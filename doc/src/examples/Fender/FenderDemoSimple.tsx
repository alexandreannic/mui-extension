import * as React from 'react'
import {Fender} from 'mui-extension'
import {Divider} from '@material-ui/core'

const marginBottom = {style: {marginBottom: 24}}

export const FenderDemoSimple = () => {
  return (
    <div>
      <Fender {...marginBottom} title={<div>No data</div>}/>
      <Divider/>
      <Fender type="loading" {...marginBottom} title="Loading" description={<>A simple <b>loading</b> fender</>}/>
      <Divider/>
      <Fender type="error" {...marginBottom} title="Error" description={<>A simple <b>error</b> fender</>}/>
      <Divider/>
      <Fender type="success" {...marginBottom} title="Success" description={<>A simple <b>success</b> fender</>}/>
      <Divider/>
      <Fender type="warning" title="Warning" description={<>A simple <b>warning</b> fender</>}/>
    </div>
  )
}

