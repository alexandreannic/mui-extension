import * as React from 'react'
import {ReactNode, useContext, useState} from 'react'
import {CircularProgress, createStyles, Icon, IconButton, makeStyles, Snackbar, Theme} from '@material-ui/core'
import {colorInfo, colorSuccess, colorWarning} from '../core/style/color'

const noop = (_: string) => {}

const ToastContext = React.createContext<WithToast>({
  toastError: noop,
  toastSuccess: noop,
  toastWarning: noop,
  toastInfo: noop,
  toastLoading: noop,
})

const useStyles = makeStyles((t: Theme) => createStyles({
  iError: {
    color: t.palette.error.main,
  },
  iSuccess: {
    color: colorSuccess,
  },
  iWarning: {
    color: colorWarning,
  },
  iInfo: {
    color: colorInfo,
  },
  label: {
    marginLeft: t.spacing(2),
  }
}))

type ToastType = 'error' | 'loading' | 'warning' | 'success' | 'info' | undefined;

export interface WithToast {
  toastError: (m: string) => void;
  toastSuccess: (m: string) => void;
  toastWarning: (m: string) => void;
  toastInfo: (m: string) => void;
  toastLoading: (m: string) => void;
}

export interface ToastProviderProps {
  children: ReactNode
}

export const ToastProvider = ({children}: ToastProviderProps) => {
  const classes = useStyles()

  const [type, setType] = useState<ToastType | undefined>(undefined)
  const [message, setMessage] = useState<string | undefined>(undefined)
  const [open, setOpen] = useState(false)

  const pop = (type: ToastType) => (message: string) => {
    setOpen(true)
    setType(type)
    setMessage(message)
  }

  const renderIcon = (type: ToastType) => {
    switch (type!) {
      case 'error':
        return <Icon className={classes.iError}>error</Icon>
      case 'success':
        return <Icon className={classes.iSuccess}>check_circle</Icon>
      case 'warning':
        return <Icon className={classes.iWarning}>warning</Icon>
      case 'info':
        return <Icon className={classes.iInfo}>info</Icon>
      case 'loading':
        return <CircularProgress size={24} thickness={5}/>
      default:
        return <></>
    }
  }

  const close = () => setOpen(false)

  return (
    <ToastContext.Provider value={{
      toastError: pop('error'),
      toastSuccess: pop('success'),
      toastWarning: pop('warning'),
      toastInfo: pop('info'),
      toastLoading: pop('loading'),
    }}>
      {children}
      <Snackbar
        anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
        open={open}
        autoHideDuration={type === 'error' ? 1000000 : 6000}
        onClose={close}
        message={
          <div style={{display: 'flex', alignItems: 'center'}}>
            {renderIcon(type)}
            <span className={classes.label}>{message}</span>
          </div>
        }
        action={
          <IconButton onClick={close} color="inherit">
            <Icon>close</Icon>
          </IconButton>
        }
      />
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext);

export const withToast = (Component: any) => (props: any) => (
  <ToastContext.Consumer>
    {(other: WithToast) => <Component {...props} {...other}/>}
  </ToastContext.Consumer>
)
