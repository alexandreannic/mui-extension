import * as React from 'react'
import {Animate} from './index'

interface IProps {
  delay?: number,
  initialDelay?: number,
}

class AnimateList extends React.Component<IProps, any> {

  state = {
    appeared: false,
  }

  private timeout: any

  render() {
    const {children, delay, initialDelay} = this.props
    return (
      <>
        {React.Children.map(children, (child, index) =>
          <Animate delay={initialDelay + index * delay}>
            {child}
          </Animate>
        )}
      </>
    )
  }

  componentDidMount() {
    this.timeout = setTimeout(() => this.setState({appeared: true}), this.props.delay || 0)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }
}

export default AnimateList