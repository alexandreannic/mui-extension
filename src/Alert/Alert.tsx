import * as React from 'react'
import {CSSProperties, ReactNode, useState} from 'react'
import {createStyles, Icon, IconButton, makeStyles, Theme} from '@material-ui/core'
import {colorError, colorInfo, colorSuccess, colorWarning} from '../core/style/color'
import classNames from 'classnames'
import {Theme as DefaultTheme} from '@material-ui/core/styles/createMuiTheme'
import {usePersistentState} from 'react-persistent-state/build'

const height = (dense?: boolean) => dense ? 44 : 52

const useStyles = makeStyles<DefaultTheme, AlertProps>((t: Theme) => createStyles({
  root: t.mixins.gutters({
    transition: t.transitions.create('all'),
    // @ts-ignore
    minHeight: props => height(props.dense),
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 4,
    // @ts-ignore
    paddingLeft: props => props.dense ? t.spacing(1) : t.spacing(2),
  }),
  i: {
    marginRight: t.spacing(1),
    height: props => `${height(props.dense)}px !important`,
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  body: {
    flex: 1,
    paddingTop: props => t.spacing(props.dense ? 1 : 2),
    paddingBottom: props => t.spacing(props.dense ? 1 : 2),
  },
  _success: {
    background: 'rgba(50, 255, 150, .16)',//'#e1ffe1',
    color: colorSuccess,
  },
  _info: {
    background: 'rgba(50, 200, 255, .16)', //'#e1f5fe',
    color: colorInfo,
  },
  _error: {
    background: 'rgba(255, 0, 0, .16)',//'#ffdede',
    color: colorError,
  },
  _warning: {
    background: 'rgba(255, 128, 0, .16)',
    color: colorWarning,
  },
  _hidden: {
    minHeight: '0 !important',
    height: '0 !important',
    opacity: '0 !important',
    margin: '0 !important',
  },
  _gutterBottom: {
    marginBottom: t.spacing(1),
  },
  action: {
    textAlign: 'right',
    margin: `${t.spacing(1)} ${t.spacing(1 / 2)} ${t.spacing(1 / 2)} 0`,
    marginRight: -t.spacing(2),
  }
}))

interface AlertProps {
  id?: string
  style?: CSSProperties
  type: 'info' | 'error' | 'warning' | 'success'
  icon?: string
  deletable?: boolean
  persistentDelete?: boolean
  action?: ReactNode
  className?: string
  children: ReactNode
  dense?: boolean
  gutterBottom?: boolean
}

export const Alert = ({id, style, type, dense, children, icon, action, deletable, persistentDelete, className, gutterBottom}: AlertProps) => {
  const classes = useStyles({type, dense, children, icon, action, deletable, persistentDelete, className})
  const [isPersistentVisible, setPersistentIsVisible] = usePersistentState<boolean>(true, id || 'alert')
  const [isVisible, setIsVisible] = useState<boolean>(true)

  const getIconFromType = () => {
    switch (type) {
      case 'info':
        return 'info'
      case 'error':
        return 'error'
      case 'warning':
        return 'warning'
      case 'success':
        return 'check_circle'
      default:
        return 'info'
    }
  }

  return (
    <div id={id}
         className={classNames(classes.root, classes['_' + type], className, (!isVisible || (persistentDelete && !isPersistentVisible)) && classes._hidden, gutterBottom && classes._gutterBottom)}
         style={style}>
      <Icon className={classes.i}>{icon ? icon : getIconFromType()}</Icon>
      <div className={classes.body}>
        {children}
      </div>
      <div className={classes.action}>
        {action}
        {deletable &&
        <IconButton onClick={() => {
          setIsVisible(false)
          if (persistentDelete)
            setPersistentIsVisible(false)
        }}>
          <Icon>clear</Icon>
        </IconButton>
        }
      </div>
    </div>
  )
}
