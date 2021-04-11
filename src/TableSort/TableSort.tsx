import * as React from 'react'
import {ReactElement} from 'react'
import {TableHead, TableRow} from '@material-ui/core'
import {ITableSortCellProps} from './TableSortCell'
import autobind from 'autobind-decorator'

export type OrderByType = 'asc' | 'desc'

export interface TableSortProps {
  sortBy: string
  orderBy: OrderByType
  onSort: (sortBy: string, orderBy: OrderByType) => void
}

class TableSort extends React.Component<TableSortProps, {}> {

  render() {
    const {orderBy, sortBy, children} = this.props
    return (
      <TableHead>
        <TableRow>
          {(React.Children.toArray(children) as ReactElement<ITableSortCellProps>[]).map((step: ReactElement<ITableSortCellProps>) =>
            React.cloneElement(step, {
              active: step.props.name === sortBy,
              orderBy,
              ...(step.props.name && {onSort: this.sort(step.props.name)}),
            })
          )}
        </TableRow>
      </TableHead>
    )
  }

  @autobind
  private sort(name: string) {
    return () => {
      const {sortBy, orderBy} = this.props
      const newOrderBy = (name === sortBy && orderBy === 'asc')
        ? 'desc'
        : 'asc'
      this.props.onSort(name, newOrderBy)
    }
  }
}

export default TableSort
