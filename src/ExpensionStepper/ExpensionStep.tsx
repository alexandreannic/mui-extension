import * as React from 'react'
import {ReactElement, useEffect, useRef} from 'react'
import {Collapse, createStyles, Icon, Theme} from '@material-ui/core'
import {colorSuccess} from '../core/style/color'
import classNames from 'classnames'
import {makeStyles} from '@material-ui/core'

const animationDuration = 300

const useStyles = makeStyles((t: Theme) => createStyles({
  root: {
    '&:not(:first-of-type)': {
      borderTop: `1px solid ${t.palette.divider}`,
    }
  },
  header: {
    transition: t.transitions.create('all'),
    padding: `0 ${t.spacing(3)}px`,
    height: 68,
    display: 'flex',
    alignItems: 'center',
    fontSize: t.typography.subtitle1.fontSize,
  },
  headerCurrent: {
    fontSize: t.typography.h6.fontSize,
  },
  headerClickable: {
    cursor: 'pointer',
    '&:hover': {
      background: t.palette.background.default,
    }
  },
  i: {
    fontWeight: t.typography.fontWeightMedium,
    borderRadius: '50%',
    color: colorSuccess,
    marginRight: t.spacing(1),
  },
  body: {
    transition: t.transitions.create('all'),
    overflow: 'hidden',
  },
  content: {
    padding: `0 ${t.spacing(3)}px ${t.spacing(3)}px ${t.spacing(3)}px`
  }
}))

export interface ExpensionStepProps {
  readonly prev?: () => void
  readonly next?: (data?: any) => void
  readonly goTo?: (i: number) => void
  readonly free?: boolean
  readonly index?: number
  readonly disabled?: boolean
  readonly done?: boolean
  readonly isCurrent?: boolean
  readonly isLast?: boolean
  readonly autoScroll?: boolean
}

interface Props extends ExpensionStepProps {
  readonly className?: string
  readonly label: string
  readonly component: ReactElement<any>
}

export const ExpensionStep = ({
  disabled,
  done,
  free,
  isCurrent,
  index,
  label,
  component,
  goTo,
  prev,
  next,
  isLast,
  className,
  autoScroll,
  ...other
}: Props) => {
  let $root: HTMLElement | undefined;
  const classes = useStyles()
  const isCurrentRef = useRef<boolean>()

  const isClickable = () => !isCurrent && !disabled

  const scrollTop = () => {
    $root?.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  useEffect(() => {
    isCurrentRef.current = isCurrent
  }, [isCurrent])

  useEffect(() => {
    if (autoScroll && !isCurrentRef.current && isCurrent)
      setTimeout(scrollTop, animationDuration)
  })

  return (
    <div className={classNames(classes.root, className)} ref={node => $root = node ?? undefined} {...other}>
      <header
        className={classNames(classes.header, isCurrent && classes.headerCurrent, isClickable() && classes.headerClickable)}
        onClick={() => goTo!(index!)}>
        {!free && done && !isCurrent && <Icon className={classes.i}>check</Icon>}
        {!free && <>{index! + 1}. </>}{label}
      </header>
      <Collapse in={isCurrent} timeout={animationDuration} className={classes.body}>
        <div className={classes.content}>
          {React.cloneElement(component, {prev, next, goTo, free, index, disabled, done, isCurrent, isLast})}
        </div>
      </Collapse>
    </div>
  )
}
