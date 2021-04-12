import * as React from 'react'
import Mask from './Mask'
import {Input} from '@material-ui/core'
import {InputProps} from '@material-ui/core/Input'

export interface InputDateProps extends InputProps {
  format: string;
}

export class InputDate extends React.Component<InputDateProps, {}> {

  render() {
    return (
      <Input {...this.props} inputComponent={this.mask}/>
    )
  }

  private mask = (props) => {
    return <Mask {...props} format={this.props.format}/>
  }
}
