import * as React from 'react'
import {Page} from '../../shared/Page/Page'
import {Demo} from 'mui-extension'
import preval from 'babel-plugin-preval/macro'
import {AutocompleteDemoMultiple} from './AutocompleteDemoMultiple'
import {AutocompleteDemoSimple} from './AutocompleteDemoSimple'
import {Code} from '../../shared/Code/Code'
import {PageTitle} from '../../shared/PageTitle/PageTitle'
import {DocTable} from '../../shared/DocTable/DocTable'

const AutocompleteDemo = () => {
  return (
    <Page>
      <PageTitle>Autocomplete</PageTitle>

      <h2>Example</h2>
      <h3>Simple Autocomplete</h3>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./AutocompleteDemoSimple.tsx'), 'utf8')`}
        component={AutocompleteDemoSimple}/>

      <h3>Multi-select Autocomplete</h3>
      <p>
        It behaves like an <Code>{`<Input/>`}</Code> component. Thus, it can be wrapped inside
        a <Code>{`<FormControl/>`}</Code> and use props like <Code>multiline</Code>.
      </p>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./AutocompleteDemoMultiple.tsx'), 'utf8')`}
        component={AutocompleteDemoMultiple}/>


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
          <td>multiple</td>
          <td><Code>boolean</Code></td>
          <td>Whether the user should be allowed to select multiple options.</td>
        </tr>
        <tr>
          <td>value</td>
          <td><Code>string | string[]</Code></td>
          <td>
            Value of the select control.
            It's an array if <Code>multiple</Code> is <Code>true</Code>.
          </td>
        </tr>
        <tr>
          <td>onChange</td>
          <td><Code>(value: string | string[]) {'=>'} void</Code></td>
          <td>
            Event emitted when the selected value has been changed by the user.
            It's an array if <Code>multiple</Code> is <Code>true</Code>.
          </td>
        </tr>
        <tr>
          <td>searchLabel</td>
          <td><Code>string</Code></td>
          <td></td>
        </tr>
        <tr>
          <td>readonly</td>
          <td><Code>boolean</Code></td>
          <td>Whether the user can change the value.</td>
        </tr>
        </tbody>
      </DocTable>
    </Page>
  )
}

export default AutocompleteDemo
