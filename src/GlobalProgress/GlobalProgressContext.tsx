import * as React from 'react'
import {useContext} from 'react'
import autobind from 'autobind-decorator'

export const GlobalProgressContext = React.createContext({} as IState)

export const progressbarAnimationDuration = 400

export interface IProgressState {
  currentStep: number,
  steps: number,
  started: boolean,
}

export interface GlobalProgressProviderProps {
}

export interface WithProgress {
  readonly progressStart: (steps?: number) => void;
  readonly progressStop: () => void;
  readonly progressComplete: () => void;
  readonly progressNext: () => void;
  readonly promisesWithProgress: (...promises: Promise<any>[]) => Promise<any>[];
}

export interface IState extends IProgressState,
  WithProgress {
}

class GlobalProgressProvider extends React.Component<GlobalProgressProviderProps, IState> {

  state = {
    currentStep: 0,
    steps: 1,
    started: false,
    progressStart: this.start,
    progressStop: this.stop,
    progressComplete: this.complete,
    progressNext: this.next,
    promisesWithProgress: this.promisesWithProgress,
  }
  private timeouts: number[] = []

  render() {
    return (
      <GlobalProgressContext.Provider value={this.state}>
        {this.props.children}
      </GlobalProgressContext.Provider>
    )
  }

  componentWillUnmount() {
    this.clearTimeouts()
  }

  @autobind
  private start(steps: number = 1) {
    this.clearTimeouts()
    this.setState({
      started: true,
      currentStep: 0,
      steps,
    })
  }

  @autobind
  private promisesWithProgress(...promises: Promise<any>[]): Promise<any>[] {
    this.start(promises.length)
    return promises.map(p => p
      .then(_ => {
        this.next()
        return _
      })
      .catch(_ => {
        this.stop()
        return Promise.reject(_)
      })
    )
  }

  @autobind
  private stop() {
    this.setState({
      started: false,
      currentStep: 0,
    })
  }

  @autobind
  private complete() {
    if (this.state.started) {
      this.setState(state => ({
        currentStep: state.steps,
      }), this.stopHandlingAnimation)
    }
  }

  @autobind
  private next() {
    if (this.state.started) {
      this.setState(state => ({
        currentStep: Math.min(state.currentStep + 1, state.steps),
      }), () => this.state.currentStep === this.state.steps && this.stopHandlingAnimation())
    }
  }

  private stopHandlingAnimation() {
    this.setTimeout(() => this.setState({started: false}), progressbarAnimationDuration)
    this.setTimeout(() => this.setState({currentStep: 0}), progressbarAnimationDuration * 2)
  }

  private setTimeout(fn: () => void, duration?: number) {
    this.timeouts.push(setTimeout(fn, duration))
  }

  private clearTimeouts() {
    this.timeouts.map(clearTimeout)
    this.timeouts = []
  }
}

export default GlobalProgressProvider

export const useGlobalProgress = (): WithProgress => {
  const {
    progressStart,
    progressStop,
    progressComplete,
    progressNext,
    promisesWithProgress,
  } = useContext(GlobalProgressContext) as IState
  return {
    progressStart,
    progressStop,
    progressComplete,
    progressNext,
    promisesWithProgress,
  }
}

export const useGlobalProgressState = (): IProgressState => {
  const {
    currentStep,
    steps,
    started,
  } = useContext(GlobalProgressContext) as IState
  return {
    currentStep,
    steps,
    started,
  }
}

export const withGlobalProgress = (Component: any) => (props: any) => (
  <GlobalProgressContext.Consumer>
    {(other: any /*WithProgress*/) => <Component {...props} {...other}/>}
  </GlobalProgressContext.Consumer>
)
