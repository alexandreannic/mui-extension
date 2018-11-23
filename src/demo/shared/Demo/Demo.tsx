// @ts-ignore
import {useState} from 'react'
import * as React from 'react'
import {Collapse, createStyles, Icon, IconButton, Theme, withStyles, WithStyles} from '@material-ui/core'
import {Code} from '../Code/Code'

const styles = (t: Theme) => createStyles({
  root: {
    boxShadow: t.shadows[1],
    borderRadius: 4,
    background: t.palette.background.default,
    overflow: 'auto',
    marginTop: t.spacing.unit * 3,
    marginBottom: t.spacing.unit * 3,
  },
  head: {
    margin: `${t.spacing.unit}px ${t.spacing.unit * 2}px ${t.spacing.unit / 2}px ${t.spacing.unit * 2}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  wrapper: {
    margin: t.spacing.unit * 2,
    background: 'white',
  }
})

interface IProps extends WithStyles<typeof styles> {
  component: any
  raw: string
}

const parseComponentCode = (code: string): string => code
  .replace(/import \{fetchUsers\} from \'.*?\'/, 'import {fetchUsers} from \'./action.js\'')
  .replace(/fetchUsers\(.*?\)/, 'fetchUsers')

export const Demo = withStyles(styles)(({component: Component, raw, classes}: IProps) => {
  const [codeOpened, setCodeOponed] = useState<boolean>(false)
  return (
    <section className={classes.root}>
      <div className={classes.head}>
        <IconButton color={codeOpened ? 'primary' : undefined} onClick={() => setCodeOponed(!codeOpened)}>
          <Icon>code</Icon>
        </IconButton>
      </div>
      <Collapse in={codeOpened} unmountOnExit>
        <Code raw={parseComponentCode(raw)} style={{margin: 0, borderRadius: 0}}/>
      </Collapse>
      <div className={classes.wrapper}>
        <Component/>
      </div>
    </section>
  )
})
