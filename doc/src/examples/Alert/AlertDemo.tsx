import * as React from 'react'
import {Demo} from 'mui-extension'
import {AlertDemoSimple} from './AlertDemoSimple'
import preval from 'babel-plugin-preval/macro'
import {AlertDemoCustom} from './AlertDemoCustom'
import {AlertDemoWithPanel} from './AlertDemoWithPanel'
import {PageTitle} from '../../shared/PageTitle/PageTitle'
import {Page} from '../../shared/Page/Page'
import {DocTable} from '../../shared/DocTable/DocTable'
import {Code} from '../../shared/Code/Code'

const AlertDemo = () => {
  return (
    <Page>
      <PageTitle>Alert</PageTitle>

      <h2>Simple alert</h2>
      <p>
        Provide contextual feedback messages for typical user actions with the handful of available and flexible alert
        messages.
      </p>

      <Demo
        reloadable
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./AlertDemoSimple.tsx'), 'utf8')`}
        component={AlertDemoSimple}/>

      <h2>Customized Alert</h2>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./AlertDemoCustom.tsx'), 'utf8')`}
        component={AlertDemoCustom}/>

      <h2>Alert associated with Panel</h2>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./AlertDemoWithPanel.tsx'), 'utf8')`}
        component={AlertDemoWithPanel}/>

      <h2>API</h2>
      <DocTable>
        <thead>
        <tr>
          <th>Props</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>type</td>
          <td><Code>'info' | 'error' | 'warning' | 'success'</Code></td>
          <td></td>
        </tr>
        <tr>
          <td>icon</td>
          <td><Code>string</Code></td>
          <td>Material icon name to override the default one.</td>
        </tr>
        <tr>
          <td>deletable</td>
          <td><Code>boolean</Code></td>
          <td>Add an clean icon at the end of the Alert to delete it.</td>
        </tr>
        <tr>
          <td>action</td>
          <td><Code>ReactNode</Code></td>
          <td>Content that displayed at the end of the Alert. It won't override <Code>deletable</Code> props.</td>
        </tr>
        <tr>
          <td>className</td>
          <td><Code>string</Code></td>
          <td></td>
        </tr>
        <tr>
          <td>children</td>
          <td><Code>ReactNod</Code></td>
          <td></td>
        </tr>
        </tbody>
      </DocTable>
    </Page>
  )
}

export default AlertDemo
