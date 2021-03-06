import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import { queryForTitle } from '../../../../styles/devices';
import colors from '../../../../styles/colors';

const useStyles = makeStyles({
  table: {
    minWidth: 800,
  },
});

const HistoryTableStyle = styled.div`
  overflow: scroll;
  margin-top: 3vw;
  margin-bottom: 5vw;
  width: 90%;
`;

const HistoryTitleStyle = styled.h3`
  ${queryForTitle}

  color: ${colors.text.Primary4};
  text-align: center;
`;

const HistorySection = (key) => {
  const userOrders = useSelector((state) => state.loginReducer.orders);
  const classes = useStyles();
  dayjs.locale('pl');

  const list = userOrders.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

  return (
    <HistoryTableStyle>
      <HistoryTitleStyle>Historia zamówien</HistoryTitleStyle>
      <TableContainer component={Paper} className={classes.table}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell align="right">Narty</TableCell>
              <TableCell align="right">Długość</TableCell>
              <TableCell align="right">Kąt boczny</TableCell>
              <TableCell align="right">Kąt dolny</TableCell>
              <TableCell align="right">Rodzaj pilników</TableCell>
              <TableCell align="right">Rodzaj śniegu</TableCell>
              <TableCell align="right">Rodzaj smaru</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((order) => (
              <TableRow key={order.createdAt}>
                <TableCell component="th" scope="row">
                  {dayjs(order.createdAt)
                    .locale('pl')
                    .format('DD-MM-YYYY HH:mm')}
                </TableCell>
                <TableCell align="right">{order.skis}</TableCell>
                <TableCell align="right">{order.length}</TableCell>
                <TableCell align="right">{order.sideAngle}</TableCell>
                <TableCell align="right">{order.bottomAngle}</TableCell>
                <TableCell align="right">{order.diamond}</TableCell>
                <TableCell align="right">{order.snow}</TableCell>
                <TableCell align="right">{order.fluor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </HistoryTableStyle>
  );
};

export default HistorySection;
