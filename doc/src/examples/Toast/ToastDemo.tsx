import * as React from 'react'
import {Page} from '../../shared/Page/Page'
import {Demo} from 'mui-extension'
import {ToastDemoExample} from './ToastDemoExample'
import preval from 'babel-plugin-preval/macro'
import {Code} from '../../shared/Code/Code'
import {PageTitle} from '../../shared/PageTitle/PageTitle'

const ToastDemo = () => {
  return (
    <Page>
      <PageTitle>Toast</PageTitle>
      <p>
        Provide a custom and simple API to handle commons snackbars.
      </p>

      <h2>Usage</h2>
      <p>
        Add <Code>{`<ToastProvider/>`}</Code> in the root of your application, then simply wrap your component
        with <Code>withToast</Code> to access the methods:
        <ul>
          <li><Code>toastError</Code></li>
          <li><Code>toastWarning</Code></li>
          <li><Code>toastSuccess</Code></li>
          <li><Code>toastInfo</Code></li>
          <li><Code>toastLoading</Code></li>
        </ul>
      </p>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./ToastDemoExample.tsx'), 'utf8')`}
        component={ToastDemoExample}/>
    </Page>
  )
}

export default ToastDemo
