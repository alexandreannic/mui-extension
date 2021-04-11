import * as React from 'react'
import {createStyles, Theme} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((t: Theme) => createStyles({
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    overflow: 'auto',
    width: '100%',
    borderCollapse: 'collapse',
    borderSpacing: 0,
    color: t.palette.text.primary,
    fontSize: t.typography.body1.fontSize,
    '& $tr': {
      backgroundColor: t.palette.background.paper,
      borderTop: `1px solid ${t.palette.divider}`,
    },
    '& $td, $th': {
      textAlign: 'left',
      border: `1px solid ${t.palette.divider}`,
      paddingTop: t.spacing(1),
      paddingBottom: t.spacing(1),
      paddingLeft: t.spacing(1.5),
      paddingRight: t.spacing(1.5),
    },
    '& $thead': {
      border: `1px solid ${t.palette.divider}`,
      padding: t.spacing(1.5),
      fontWeight: t.typography.fontWeightMedium,
    },
    '& $tr:nth-child(2n)': {
      backgroundColor: t.palette.background.default
    }
  },
}))

export const DocTable = ({children}: any) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <table className={classes.table}>{children}</table>
    </div>
  )
}
