import * as React from 'react'
import {ReactElement} from 'react'
import {ExpensionStepProps} from './index'

export interface ExpensionProps {
  readonly position?: number
  readonly className?: string
  readonly free?: boolean
  readonly autoScroll?: boolean
  readonly onNext?: (index: number, data?: any) => void
  readonly onEnd?: (data?: any) => void
  readonly children?: ReactElement<ExpensionStepProps>[]
}

interface State {
  current: number
  reached: number
}

export class ExpensionStepper extends React.Component<ExpensionProps, State> {

  constructor(props) {
    super(props)
    const stepsCount = React.Children.count(this.props.children)
    this.state = {
      current: props.position ? Math.min(props.position, stepsCount - 1) : 0,
      reached: props.free ? stepsCount - 1 : 0,
    }
  }

  render() {
    const {className, autoScroll, free, onNext, onEnd, children, ...other} = this.props
    return (
      <div className={className} {...other}>
        {React.Children.map(this.props.children, (step: any, i: number) => {
          // Cannot properly define step as ReactElement<ExpensionStepProps> in strict mode
          const castedStep = step as ReactElement<ExpensionStepProps>
          return React.cloneElement(castedStep, {
            prev: this.prev,
            next: this.next,
            goTo: this.goTo,
            free: free,
            index: i,
            disabled: castedStep.props.disabled || i > this.state.reached,
            done: castedStep.props.done || i < this.state.reached,
            autoScroll,
            isCurrent: i == this.state.current,
            isLast: i == React.Children.count(children) - 1
          })
        })}
      </div>
    )
  }

  goTo = (i: number) => {
    if (this.state.reached >= i) this.setState({current: i})
  }

  prev = () => {
    if (this.state.current > 0) {
      this.setState({current: this.state.current - 1})
    }
  }

  next = (data?: any) => {
    if (this.state.current < React.Children.count(this.props.children) - 1) {
      this.props.onNext && this.props.onNext(this.state.current, data)
      this.setState({
        current: this.state.current + 1,
        reached: Math.max(this.state.reached, this.state.current + 1)
      })
    } else if (this.props.onEnd) {
      this.props.onEnd(data)
    }
  }
}
