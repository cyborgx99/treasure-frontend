import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import { StyledTableRow } from './styles';
import { ScoreTableProps } from './types';

const ScoreTable = ({ rows }: ScoreTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='Score table'>
        <TableHead>
          <TableRow>
            <TableCell>User name</TableCell>
            <TableCell align='right'>Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <TableCell component='th' scope='row'>
                {row.user.name}
              </TableCell>
              <TableCell align='right'>{row.score}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScoreTable;
