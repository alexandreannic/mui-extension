import * as React from 'react'
import {Page} from '../../shared/Page/Page'
import {Demo, Pre} from 'mui-extension'
import preval from 'babel-plugin-preval/macro'
import {ExpensionStepperDemoTunnel} from './ExpensionStepperDemoTunnel'
import {ExpensionStepperDemoAccordion} from './ExpensionStepperDemoAccordion'
import {Code} from '../../shared/Code/Code'
import {PageTitle} from '../../shared/PageTitle/PageTitle'
import {DocTable} from '../../shared/DocTable/DocTable'

const ExpensionStepperDemo = () => {
  return (
    <Page>
      <PageTitle>ExpensionStepper</PageTitle>
      <p>
        <Code>ExpensionStepper</Code> is a container dividing content into logical <i>steps</i>. His advantages compared
        to
        other solutions are that <i>steps</i> are contained in their dedicated component. Therefore they are easy to
        reuse or
        shift.
      </p>

      <p>
        Each <i>step</i> is injected with props granting all the needed information and actions to interact with the
        stepper. The interface is defined as follow:
      </p>
      <Pre raw={
        `interface ExpensionStepProps {
  prev: () => void
  next: (data?: any) => void
  goTo: (i: number) => void
  free?: boolean
  index: number
  disabled: boolean
  done: boolean
  isCurrent: boolean
  isLast: boolean
}`}/>

      <h2>Examples</h2>
      <h3>Tunnel</h3>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./ExpensionStepperDemoTunnel.tsx'), 'utf8')`}
        component={ExpensionStepperDemoTunnel}/>

      <h3>Accordion</h3>
      <p>
        It can also be used as a simple accordion using the props <Code>free</Code>.
      </p>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./ExpensionStepperDemoAccordion.tsx'), 'utf8')`}
        component={ExpensionStepperDemoAccordion}/>

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
          <td>position</td>
          <td><Code>number</Code></td>
          <td>Index of the selected <i>step</i>.</td>
        </tr>
        <tr>
          <td>className</td>
          <td><Code>string</Code></td>
          <td/>
        </tr>
        <tr>
          <td>free</td>
          <td><Code>boolean</Code></td>
          <td>Whether the validity of previous <i>steps</i> should be checked or not</td>
        </tr>
        <tr>
          <td>autoScroll</td>
          <td><Code>boolean</Code></td>
          <td>Autoscroll to the ongoing <i>step</i></td>
        </tr>
        <tr>
          <td>onNext</td>
          <td><Code>(index: number, data?: any) {'=>'} void</Code></td>
          <td>Event emitted when going to the next <i>step</i></td>
        </tr>
        <tr>
          <td>onEnd</td>
          <td><Code>(data?: any) {'=>'} void</Code></td>
          <td>Event emitted when the tunnel is ended</td>
        </tr>
        <tr>
          <td>children</td>
          <td><Code>ReactElement&lt;ExpensionStepProps&gt;[]</Code></td>
          <td>Set of components representing the <i>steps</i></td>
        </tr>
        </tbody>
      </DocTable>
    </Page>
  )
}
export default ExpensionStepperDemo

