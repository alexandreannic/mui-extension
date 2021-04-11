import * as React from 'react'
import {useState} from 'react'
import {createStyles, Theme} from '@material-ui/core'
import classNames from 'classnames'
import {makeStyles} from '@material-ui/core'
import {useTimeout} from '../core/utils/useTimeout'

const useStyles = makeStyles((t: Theme) => createStyles({
  root: {
    transition: t.transitions.create('all'),
    opacity: 0,
    transform: 'translateY(60px)',
    overflowY: 'hidden',
  },
  root_appeared: {
    opacity: 1,
    transform: 'translateY(0)',
  },
}))

export interface AnimateProps {
  delay?: number,
  children: any,
}

export const Animate = ({children, delay}: AnimateProps) => {
  const [appeared, setAppeared] = useState<boolean>(false);
  const classes = useStyles()
  useTimeout(() => setAppeared(true), delay || 0)

  return React.cloneElement(children, {
    className: classNames(classes.root, appeared && classes.root_appeared)
  })
}

// class Animate extends React.Component<AnimateProps & WithStyles<typeof styles>, any> {
//
//   state = {
//     appeared: false,
//   }
//
//   private timeout: any
//
//   render() {
//     const {children, classes} = this.props
//     return React.cloneElement(children, {
//       className: classNames(classes.root, this.state.appeared && classes.root_appeared)
//     })
//   }
//
//   componentDidMount() {
//     this.timeout = setTimeout(() => this.setState({appeared: true}), this.props.delay || 0)
//   }
//
//   componentWillUnmount() {
//     clearTimeout(this.timeout)
//   }
// }
//
// export default withStyles(styles)(Animate) as React.ComponentType<AnimateProps>
