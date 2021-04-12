import * as React from 'react'
import {Page} from '../../shared/Page/Page'
import {Demo} from 'mui-extension'
import {TableSortDemoSimple} from './TableSortDemoSimple'
import preval from 'babel-plugin-preval/macro'
import {Code} from '../../shared/Code/Code'
import {PageTitle} from '../../shared/PageTitle/PageTitle'
import {DocTable} from '../../shared/DocTable/DocTable'
import {A} from '../../shared/A'

const TableSortDemo = () => {

  return (
    <Page>
      <PageTitle>TableSort</PageTitle>
      <p>
        <Code>TableSort</Code> provides a convenient API to handle sorting in a Material-UI&nbsp;
        <A href="https://material-ui.com/demos/tables/#sorting-amp-selecting">Table</A>.
      </p>

      <h2>Demo</h2>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./TableSortDemoSimple.tsx'), 'utf8')`}
        component={TableSortDemoSimple}/>

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
          <td>sortBy</td>
          <td><Code>string</Code></td>
          <td>Name of the initial sorted column</td>
        </tr>
        <tr>
          <td>orderBy</td>
          <td><Code>'asc' | 'desc'</Code></td>
          <td>Initial order by</td>
        </tr>
        <tr>
          <td>onSort</td>
          <td><Code>(sortBy: string, orderBy: 'asc' | 'desc') {'=>'} void</Code></td>
          <td>Event emitted when sorting by a column.</td>
        </tr>
        </tbody>
      </DocTable>
    </Page>
  )
}

export default TableSortDemo
