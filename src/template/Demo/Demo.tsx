import * as React from 'react'
import {useState} from 'react'
import {Collapse, createStyles, Icon, IconButton, Theme} from '@material-ui/core'
import {Pre} from './Pre/Pre'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((t: Theme) => createStyles({
  root: {
    boxShadow: t.shadows[1],
    borderRadius: 4,
    background: t.palette.background.default,
    overflow: 'auto',
    marginTop: t.spacing(2),
    marginBottom: t.spacing(3),
  },
  head: {
    margin: `${t.spacing(1)}px ${t.spacing(2)}px ${t.spacing(1 / 2)}px ${t.spacing(2)}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  wrapper: {
    margin: t.spacing(1),
    padding: t.spacing(2),
    background: t.palette.background.paper,
  }
}))

export interface DemoProps {
  component: any
  raw: string
  reloadable?: boolean
}

const parseComponentCode = (code: string): string => code.replace(/\n\s*\/\/\s*@ts-ignore\s*?\n/, '\n')

export const Demo = ({component: Component, raw, reloadable}: DemoProps) => {
  const classes = useStyles()
  const [codeOpened, setCodeOponed] = useState<boolean>(false)
  const [show, setShow] = useState<boolean>(true)
  const [containerHeight, setContainerHeight] = useState<number | undefined>(undefined)
  const componentContainer = React.createRef()

  const reload = () => {
    // Manually handle container height is relevant when to prevent the
    // container to blink when the content is animated.
    if (!containerHeight) {
      setContainerHeight((componentContainer.current as any).offsetHeight - 32)
    }
    setShow(false)
    setTimeout(() => setShow(true))
    setTimeout(() => setContainerHeight(undefined))
  }

  return (
    <section className={classes.root}>
      <div className={classes.head}>
        {reloadable &&
        <IconButton disabled={!show} onClick={reload}>
          <Icon>refresh</Icon>
        </IconButton>
        }
        <IconButton color={codeOpened ? 'primary' : undefined} onClick={() => setCodeOponed(!codeOpened)}>
          <Icon>code</Icon>
        </IconButton>
      </div>
      <Collapse in={codeOpened} unmountOnExit>
        <Pre raw={parseComponentCode(raw)} style={{margin: 0, borderRadius: 0}}/>
      </Collapse>
      <div className={classes.wrapper} ref={componentContainer as any} style={{height: containerHeight}}>
        {show && <Component/>}
      </div>
    </section>
  )
}

