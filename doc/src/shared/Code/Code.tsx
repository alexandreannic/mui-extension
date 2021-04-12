import * as React from 'react'
import {ReactNode} from 'react'
import {createStyles, Theme} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((t: Theme) => createStyles({
  root: {
    // background: t.palette.background.default,
    color: t.palette.text.disabled,
    // borderRadius: 3,
    // padding: '.2em .4em',
  }
}))

interface IProps {
  children: ReactNode
}

export const Code = ({children}: IProps) => {
  const classes = useStyles()
  return (
    <>
      {' '/*https://github.com/facebook/react/issues/1643*/}
      <code className={classes.root}>{children}</code>
      {' '}
    </>
  )
}
