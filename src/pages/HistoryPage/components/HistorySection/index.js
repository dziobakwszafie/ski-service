import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/pl";
import device, {
  queryForTitle,
  queryForText,
  queryForExtra,
} from "../../../../styles/devices";
import colors from "../../../../styles/colors";

const HistoryStyle = styled.div`
  margin-top: 3vw;
  margin-bottom: 5vw;
  width: 90%;
`;

const OrdersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const HistoryTitleStyle = styled.h3`
  ${queryForTitle}

  color: ${colors.text.Primary4};
  text-align: center;
`;

const SubTitleStyle = styled.h4`
  ${queryForText}

  margin-bottom: 10px;
  color: ${colors.text.Primary7};
  text-align: center;
`;

const SingleOrder = styled.div`
  margin: 2vw;
  ${queryForExtra}

  width: 100%;
  background-color: ${colors.background.Primary4};

  :nth-child(even) {
    background-color: ${colors.background.Primary5};
  }
`;

const OrderContentStyle = styled.div`
  display: flex;

  ${queryForText}
  ${device.XL} {
    font-size: 1.5vw;
  }
`;

const SingleLine = styled.p`
  ${queryForText}
  ${device.XL} {
    font-size: 1.5vw;
  }
`;

const SingleBox = styled.div`
  margin-left: 30%;
  padding: 2vw;
  width: 30%;
  border: solid ${colors.text.Primary1} 1px;
  border-radius: 2px;

  ${queryForText}
  ${device.XL} {
    font-size: 1.5vw;
  }
`;

const HistorySection = (key) => {
  const userOrders = useSelector((state) => state.loginReducer.orders);
  dayjs.locale("pl");

  const list = userOrders.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

  return (
    <HistoryStyle>
      <HistoryTitleStyle>Historia zamówien</HistoryTitleStyle>
      <OrdersContainer>
        {list.map((order) => (
          <SingleOrder key={order.createdAt}>
            <SubTitleStyle>
              <b>Zamówienie z dnia</b>{" "}
              {dayjs(order.createdAt).locale("pl").format("DD-MM-YYYY HH:mm")}
            </SubTitleStyle>
            <OrderContentStyle>
              <div>
                <SingleLine>
                  model nart: <b>{order.skis}</b>
                </SingleLine>
                <SingleLine>
                  długość: <b>{order.length}</b>
                </SingleLine>
                <SingleLine>
                  kąt boczny: <b>{order.sideAngle}</b>
                </SingleLine>
                <SingleLine>
                  kąt dolny: <b>{order.bottomAngle}</b>
                </SingleLine>
                <SingleLine>
                  rodzaj pilników: <b>{order.diamond}</b>
                </SingleLine>
                <SingleLine>
                  rodzaj śniegu: <b>{order.snow}</b>
                </SingleLine>
                <SingleLine>
                  rodzaj smaru: <b>{order.fluor}</b>
                </SingleLine>
              </div>

              <SingleBox>
                Tutaj mooooże zrobię możliwość komentowania zamówienia. Niby mam
                to już zrobione na serwerze ale sam nie wiem czy mi to tak do
                końca potrzebne.
              </SingleBox>
            </OrderContentStyle>
          </SingleOrder>
        ))}
      </OrdersContainer>
    </HistoryStyle>
  );
};

export default HistorySection;
