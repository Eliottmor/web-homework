import React from 'react'
import { css } from '@emotion/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import InfoIcon from '@material-ui/icons/Info'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteForever from '@material-ui/icons/DeleteForever'
import { useMutation } from '@apollo/react-hooks'
import { DELETE_TRANSACTION } from '../graphql/transactions'

// eslint-disable-next-line react/prop-types
export function TransactionTable ({ transactions }) {
  const creditOrDebit = (credit) => {
    return credit === true ? 'Credit' : 'Debit'
  }

  const [deleteTransaction] = useMutation(DELETE_TRANSACTION)

  return (
    <TableContainer component={Paper} css={tableContainerStyle}>
      <Table aria-label='simple table' css={tableStyle}>
        <TableHead>
          <TableRow>
            <TableCell align='left' css={tableHeaderCellStyle}>Amount</TableCell>
            <TableCell align='left' css={tableHeaderCellStyle}>Credit or Debit</TableCell>
            <TableCell align='left' css={tableHeaderCellStyle}>Merchant</TableCell>
            <TableCell align='left' css={tableHeaderCellStyle}>User</TableCell>
            <TableCell align='center' css={[tableHeaderCellStyle, descriptionCellStyle]}>Description</TableCell>
            <TableCell align='center' css={noBorderCell}> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell align='left' css={noBorderCell}>{transaction.amount}</TableCell>
              <TableCell align='left' css={noBorderCell}>{creditOrDebit(transaction.credit)}</TableCell>
              <TableCell align='left' css={noBorderCell}>{transaction.merchant.name}</TableCell>
              <TableCell align='left' css={noBorderCell}>{transaction.user.firstName} {transaction.user.lastName}</TableCell>
              <TableCell align='center' css={[noBorderCell, descriptionCellStyle]}><Tooltip title={transaction.description}><InfoIcon /></Tooltip></TableCell>
              <TableCell align='center' css={[noBorderCell, descriptionCellStyle]}><DeleteForever css={deleteIconStyle} onClick={() => { deleteTransaction({ variables: { id: transaction.id } }) }} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const tableContainerStyle = css`
    box-shadow: none;
    display: inline-block;
    float: right;
    margin: 0px 20px;
    width: 70%;
`
const tableStyle = css`
    min-width: 650px;
`
const noBorderCell = css`
    border-bottom: none;
`
const descriptionCellStyle = css`
    width: 10%;
`

const tableHeaderCellStyle = css`
    font-weight: 600;
`
const deleteIconStyle = css`
    color: indianred;
`
