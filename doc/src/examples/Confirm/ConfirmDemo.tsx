import * as React from 'react'
import {Page} from '../../shared/Page/Page'
import preval from 'babel-plugin-preval/macro'
import {Demo} from 'mui-extension'
import {ConfirmDemoButton} from './ConfirmDemoButton'
import {ConfirmDemoMenu} from './ConfirmDemoMenu'
import {Code} from '../../shared/Code/Code'
import {PageTitle} from '../../shared/PageTitle/PageTitle'
import {DocTable} from '../../shared/DocTable/DocTable'

const ConfirmDemo = () => {
  return (
    <Page>
      <PageTitle>Confirm</PageTitle>
      <p>
        Wrap a component with <Code>{`<Confirm/>`}</Code> to pop a confirm dialog before to process a given action.
        It can wrap any element.
      </p>

      <h2>Demo</h2>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./ConfirmDemoButton.tsx'), 'utf8')`}
        component={ConfirmDemoButton}/>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./ConfirmDemoMenu.tsx'), 'utf8')`}
        component={ConfirmDemoMenu}/>

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
          <td>disabled</td>
          <td><Code>boolean</Code></td>
          <td>Whether the confirm button of the dialog is disabled.</td>
        </tr>
        <tr>
          <td>title</td>
          <td><Code>string | ReactChild</Code></td>
          <td>Dialog title.</td>
        </tr>
        <tr>
          <td>content</td>
          <td><Code>string | ReactChild</Code></td>
          <td>Dialog text.</td>
        </tr>
        <tr>
          <td>confirmLabel</td>
          <td><Code>string</Code></td>
          <td>Label of the confirm button of the dialog.</td>
        </tr>
        <tr>
          <td>cancelLabel</td>
          <td><Code>string</Code></td>
          <td>Label of the cancel button of the dialog.</td>
        </tr>
        <tr>
          <td>children</td>
          <td><Code>ReactChild</Code></td>
          <td>Element that will trigger the dialog on click.</td>
        </tr>
        <tr>
          <td>onConfirm</td>
          <td><Code>() {'=>'} void</Code></td>
          <td>Event emitted when the confirm button of the dialog is clicked.</td>
        </tr>
        </tbody>
      </DocTable>
    </Page>
  )
}

export default ConfirmDemo
