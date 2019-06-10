import * as React from 'react'
import {createStyles, Theme} from '@material-ui/core'
import {progressbarAnimationDuration, useGlobalProgressState} from './GlobalProgressContext'
import classNames from 'classnames'
import {makeStyles} from '@material-ui/styles'

const progressbarColor = (t: Theme) => t.palette.primary.main;

const useStyles = makeStyles((t: Theme) => createStyles({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    visibility: 'visible',
    opacity: 1,
    transition: 'all 400ms',
    zIndex: 9999,
  },
  progress: {
    background: progressbarColor(t),
    boxShadow: `0 0 10px ${progressbarColor(t)}, 0 0 5px ${progressbarColor(t)}`,
    height: 2,
    transition: t.transitions.create('all', {duration: progressbarAnimationDuration}),
  },
  progressHide: {
    height: '0px !important',
  },
}))

interface Props {
  className?: string
  style?: object
  styleProgress?: object
}

const INITIAL_PERCENT = 10

const GlobalProgressBar = ({className, style, styleProgress}: Props) => {
  const classes = useStyles('')
  const {currentStep, steps, started} = useGlobalProgressState()

  const getPercent = () => INITIAL_PERCENT + (100 - INITIAL_PERCENT) / steps * currentStep

  return (
    <div className={classes.root} style={style}>
      <div className={classNames(classes.progress, !started && classes.progressHide)}
           style={{...styleProgress, width: getPercent() + '%'}}/>
    </div>
  )
}

export default GlobalProgressBar
