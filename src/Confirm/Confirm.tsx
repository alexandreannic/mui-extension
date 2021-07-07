import * as React from 'react'
import {ReactElement, useState} from 'react'
import {Button, createStyles, Dialog, DialogActions, DialogContent, DialogTitle, LinearProgress, makeStyles, Theme} from '@material-ui/core'
import {DialogProps} from '@material-ui/core/Dialog/Dialog'

export interface ConfirmProps extends Omit<DialogProps, 'children' | 'onClick' | 'open'> {
  disabled?: boolean
  title?: string
  confirmLabel?: string
  cancelLabel?: string
  content?: any
  children: ReactElement<any>
  onConfirm?: (close: () => void) => void
  confirmDisabled?: boolean
  onClick?: (event: any) => void
  loading?: boolean
}

const useStyles = makeStyles((t: Theme) => createStyles({
  progress: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
  }
}))

export const Confirm = ({
  children,
  title,
  content,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onClick,
  confirmDisabled,
  loading,
  ...props
}: ConfirmProps) => {

  const [open, setOpen] = useState<boolean>(false)
  const css = useStyles()

  const confirm = () => {
    if (onConfirm) onConfirm(() => setOpen(false))
  }

  return (
    <>
      {React.cloneElement(children, {
        onClick: (event: any) => {
          if (onClick) onClick(event)
          setOpen(true)
        }
      })}
      <Dialog open={open} {...props}>
        {loading && <LinearProgress className={css.progress}/>}
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{content}</DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => setOpen(false)}>
            {cancelLabel || 'Cancel'}
          </Button>
          {onConfirm && (
            <Button color="primary" onClick={confirm} disabled={confirmDisabled}>
              {confirmLabel || 'Confirm'}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  )
}
