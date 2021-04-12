import * as React from 'react'
import {Page} from '../../shared/Page/Page'
import {Demo} from 'mui-extension'
import preval from 'babel-plugin-preval/macro'
import {FenderDemoSimple} from './FenderDemoSimple'
import {FenderDemoCustom} from './FenderDemoCustom'
import {FenderDemoLoading} from './FenderDemoLoading'
import {PageTitle} from '../../shared/PageTitle/PageTitle'

const FenderDemo = () => {
  return (
    <Page>
      <PageTitle>Fender</PageTitle>
      <Demo
        reloadable
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./FenderDemoLoading.tsx'), 'utf8')`}
        component={FenderDemoLoading}/>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./FenderDemoSimple.tsx'), 'utf8')`}
        component={FenderDemoSimple}/>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./FenderDemoCustom.tsx'), 'utf8')`}
        component={FenderDemoCustom}/>
    </Page>
  )
}

export default FenderDemo

