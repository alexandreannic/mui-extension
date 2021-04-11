import * as React from 'react'
import {ReactNode} from 'react'

interface PageTitleProps {
  children: ReactNode;
}

export const PageTitle = ({children}: PageTitleProps) => {
  return (
    <h1>
      {children}
    </h1>
  )
}
