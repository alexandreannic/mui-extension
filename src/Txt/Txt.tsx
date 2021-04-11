import {makeStyles} from '@material-ui/core'
import {Omit, Theme} from '@material-ui/core'
import classNames from 'classnames'
import * as React from 'react'
import {HTMLProps} from 'react'
import {capitalize} from '@material-ui/core/utils'
import {Skeleton} from '@material-ui/lab'

interface Props extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
  bold?: boolean
  italic?: boolean
  gutterBottom?: boolean
  block?: boolean
  skeleton?: boolean | number
  size?: 'big' | 'title' | 'small'
  color?: 'primary' | 'secondary' | 'disabled' | 'hint' | 'default' | 'error'
  uppercase?: boolean
  truncate?: boolean,
  noWrap?: boolean
  link?: boolean
}

const useStyles = makeStyles((t: Theme) => ({
  root: {
    display: 'inline',
    lineHeight: '1.5',
  },
  block: {
    display: 'block',
  },
  bold: {
    fontWeight: t.typography.fontWeightMedium,
  },
  title: {
    fontSize: '1.30rem',
  },
  big: {
    fontSize: '1.10rem',
  },
  small: {
    fontSize: '0.85rem',
  },
  italic: {
    fontStyle: 'italic'
  },
  gutterBottom: {
    marginBottom: t.spacing(1),
  },
  colorPrimary: {
    color: t.palette.primary.main,
  },
  colorSecondary: {
    color: t.palette.secondary.main,
  },
  colorDisabled: {
    color: t.palette.text.disabled,
  },
  colorHint: {
    color: t.palette.text.secondary,
  },
  colorError: {
    color: t.palette.error.main,
  },
  colorDefault: {
    color: t.palette.text.primary,
  },
  link: {
    color: t.palette.primary.main,
  },
  skeleton: {
    marginTop: 0,
    marginBottom: 0,
    height: 'auto',
    color: 'transparent',
    display: 'block',
  },
  skeletonBlock: {
    display: 'inline-block',
  },
  uppercase: {
    textTransform: 'uppercase' as any,
  },
  noWrap: {
    whiteSpace: 'nowrap' as any,
  },
  truncate: {
    whiteSpace: 'nowrap' as any,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
}))

export const Txt = ({
  skeleton,
  children,
  gutterBottom,
  block,
  bold,
  size,
  link,
  italic,
  color,
  uppercase,
  truncate,
  noWrap,
  className,
  ...otherProps
}: Props) => {
  const css = useStyles()
  const classes = classNames(
    css.root,
    gutterBottom && css.gutterBottom,
    bold && css.bold,
    (() => {
      switch (size) {
        case 'big':
          return css.big
        case 'title':
          return css.title
        case 'small':
          return css.small
      }
    }),
    italic && css.italic,
    block && css.block,
    link && css.link,
    uppercase && css.uppercase,
    truncate && css.truncate,
    noWrap && css.noWrap,
    color && css['color' + capitalize(color)],
    className,
  )
  return (
    <div className={classes} {...otherProps}>
      {skeleton ?
        (
          <Skeleton
            className={classNames(css.skeleton, block && css.skeletonBlock)}
            width={isNaN(skeleton as any) ? '80%' : skeleton as number}
          >
            _
          </Skeleton>
        ) : (
          children
        )}
    </div>
  )
}
