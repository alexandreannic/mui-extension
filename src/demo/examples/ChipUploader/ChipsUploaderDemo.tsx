import * as React from 'react'
import {Page} from '../../../lib/index'
import {ChipsUploader} from '../../../lib/ChipUploader/index'
import {Panel, PanelBody} from '../../../lib/Panel/index'

class ChipUploaderDemo extends React.Component<any, any> {

  state = {
    document: null,
    isLoading: false,
  }

  render() {
    return (
      <Page>
        <Panel>
          <PanelBody>
            <ChipsUploader
              uploading={this.state.isLoading}
              document={this.state.document}
              onUpload={this.onUpload}
              onDelete={this.onDelete}/>

            <br/>

            <ChipsUploader
              uploading={this.state.isLoading}
              document={this.state.document}
              onUpload={this.onUpload}
              onDelete={this.onDelete}
              variant="contained"
              color="secondary"
            />
          </PanelBody>
        </Panel>

      </Page>
    )
  }

  onUpload = (f: File) => {
    const document = {name: f.name, permalink: 'http://google.fr'}
    this.setState({isLoading: true})
    setTimeout(() => {
      this.setState({document})
      this.setState({isLoading: false})
    }, 1200)
  }

  onDelete = () => {
    this.setState({isLoading: true})
    setTimeout(() => {
      this.setState({document: null})
      this.setState({isLoading: false})
    }, 800)
  }
}

export default ChipUploaderDemo
