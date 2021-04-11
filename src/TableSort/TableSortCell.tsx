import * as React from 'react'
import {TableCell, TableSortLabel} from '@material-ui/core'
import {OrderByType} from './TableSort'
import {TableCellProps} from '@material-ui/core/TableCell'

export interface ITableSortCellProps extends TableCellProps {
  name?: string
  active?: boolean
  orderBy?: OrderByType
  onSort?: () => void
}

class TableSortCell extends React.Component<ITableSortCellProps, {}> {

  render() {
    const {name, active, orderBy, onSort, children, ...rest} = this.props
    return (
      <TableCell sortDirection={false} {...rest}>
        {name ? (
          <TableSortLabel
            active={active}
            direction={orderBy}
            onClick={onSort}
          >{children}</TableSortLabel>
        ) : (
          children
        )}
      </TableCell>
    )
  }
}

export default TableSortCell

