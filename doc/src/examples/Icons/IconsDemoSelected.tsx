import * as React from 'react'
import {Icon, Slide, Theme} from '@material-ui/core'
import {Pre} from '../../../../src/template/Demo/Pre/Pre'
import {IconBtn} from 'mui-extension'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((t: Theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    right: 0,
    borderRadius: 4,
    overflow: 'hidden',
  },
  head: {
    background: t.palette.background.default,
    paddingRight: t.spacing.unit * 2,
    paddingLeft: t.spacing.unit * 2,
    display: 'flex',
    alignItems: 'center',
  },
  pre: {
    borderRadius: '0 !important',
    margin: '0 !important',
  },
  icon: {
    marginLeft: 'auto !important',
  }
}))

interface IProps {
  name: string
  color: string
  size: number
  onClear: () => void
}

export const IconsDemoSelected = ({name, size, color, onClear}: IProps) => {
  // @ts-ignore
  const classes = useStyles()
  return (
    <Slide direction="down" in={!!name} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <header className={classes.head}>
          {name}
          <IconBtn className={classes.icon} onClick={onClear}>
            <Icon>clear</Icon>
          </IconBtn>
        </header>
        <Pre className={classes.pre} raw={
          `import {${name}} from 'mui-extension'
...
<${name} style={{height: ${size}, width: ${size}, color: '${color}'}}/>
...`
        }/>
      </div>
    </Slide>
  )
}