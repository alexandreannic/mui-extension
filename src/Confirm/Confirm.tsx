import * as React from 'react'
import {ReactElement, useState} from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core'
import {DialogProps} from '@material-ui/core/Dialog/Dialog'

export interface ConfirmProps extends Omit<DialogProps, 'children' | 'onClick' | 'open'> {
  disabled?: boolean
  title?: string
  confirmLabel?: string
  cancelLabel?: string
  content?: any
  children: ReactElement<any>
  onConfirm?: (close: () => void) => void
  onClick?: (event: any) => void
}

export const Confirm = ({children, title, content, confirmLabel, cancelLabel, onConfirm, onClick, ...props}: ConfirmProps) => {

  const [open, setOpen] = useState<boolean>(false)

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
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{content}</DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => setOpen(false)}>
            {cancelLabel || 'Cancel'}
          </Button>
          {onConfirm && (
            <Button color="primary" onClick={confirm}>
              {confirmLabel || 'Confirm'}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  )
}
