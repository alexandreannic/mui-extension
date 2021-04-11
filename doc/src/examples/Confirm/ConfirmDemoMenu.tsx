import * as React from 'react'
import {Btn, Confirm} from 'mui-extension'
import {Menu, MenuItem} from '@material-ui/core'

export class ConfirmDemoMenu extends React.Component<{}, any> {

  state = {
    isLoading: false,
    anchorEl: null,
  }

  render() {
    const {anchorEl, isLoading} = this.state

    return (
      <div style={{textAlign: 'center'}}>
        <Btn loading={isLoading} onClick={this.handleClick} color="primary">
          Open Menu
        </Btn>
        <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={this.handleClose}>
          <Confirm
            title="Reset settings?"
            content={<div>This will reset your device to its <strong>default factory settings.</strong></div>}
            onConfirm={this.handleClose}>
            <MenuItem>Reset</MenuItem>
          </Confirm>
          <MenuItem disabled>Update</MenuItem>
        </Menu>
      </div>
    )
  }

  handleClick = (event: any) => {
    this.setState({anchorEl: event.currentTarget})
  }

  handleClose = () => {
    this.setState({isLoading: true})
    setTimeout(() => this.setState({isLoading: false}), 1200)
    this.setState({anchorEl: null})
  }
}
