import * as React from 'react'
import {Page} from '../../shared/Page/Page'
import {Demo} from 'mui-extension'
import preval from 'babel-plugin-preval/macro'
import {BtnUploaderDemoButton} from './BtnUploaderDemoButton'
import {Code} from '../../shared/Code/Code'
import {PageTitle} from '../../shared/PageTitle/PageTitle'
import {DocTable} from '../../shared/DocTable/DocTable'

const ChipUploaderDemo = () => {
  return (
    <Page>
      <PageTitle>BtnUploader</PageTitle>
      <p>
        <Code>{`<BtnUploader/>`}</Code> provides a simple way to manage document upload.
        It behaves like <Code>{`<Button/>`}</Code>.
      </p>

      <h2>Demo</h2>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./BtnUploaderDemoButton.tsx'), 'utf8')`}
        component={BtnUploaderDemoButton}/>

      <h2>Api</h2>
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
          <td>document</td>
          <td><Code>{'{'}permalink: string, name: string{'}'}</Code></td>
          <td>Initial uploaded document.</td>
        </tr>
        <tr>
          <td>msg</td>
          <td><Code>{'{'}loading: string, upload: string, invalidSize: string{'}'}</Code></td>
          <td>Set of labels used by the component.</td>
        </tr>
        <tr>
          <td>uploading</td>
          <td><Code>boolean</Code></td>
          <td>When <Code>true</Code>, display a spinner.</td>
        </tr>
        <tr>
          <td>maxUploadFileSize</td>
          <td><Code>number</Code></td>
          <td>Max upload size in megabytes.</td>
        </tr>
        <tr>
          <td>onDelete</td>
          <td><Code>() {'=>'} void</Code></td>
          <td>Event emitted when the selected document has been removed.</td>
        </tr>
        <tr>
          <td>onUpload</td>
          <td><Code>(f: File) {'=>'} void</Code></td>
          <td>Event emitted when a file has been picked.</td>
        </tr>
        </tbody>
      </DocTable>
    </Page>
  )
}

export default ChipUploaderDemo
