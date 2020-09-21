import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useSelector } from "react-redux";
import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/pl";

const useStyles = makeStyles({
  table: {
    minWidth: 800,
  },
});

const HistoryTableStyle = styled.div`
  margin-top: 3vw;
  margin-bottom: 5vw;
  width: 90%;
  overflow: scroll;
`;

const HistoryTitleStyle = styled.h3`
  font-family: "FlyingLeatherneck";
  font-size: 3rem;
  margin-bottom: 2vw;
  @media only screen and (max-width: 1024px) {
    font-size: 2rem;
  }
`;

const HistorySection = () => {
  const userOrders = useSelector((state) => state.loginReducer.orders);
  const classes = useStyles();
  dayjs.locale("pl");

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
              <TableCell align="right">Diamenty</TableCell>
              <TableCell align="right">Rodzaj śniegu</TableCell>
              <TableCell align="right">Fluor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userOrders.map((order) => (
              <TableRow key={order.createdAt}>
                <TableCell component="th" scope="row">
                  {dayjs(order.createdAt)
                    .locale("pl")
                    .format("DD-MM-YYYY HH:mm")}
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
