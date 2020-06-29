import styled from "styled-components";
import { ReactComponent as Bag } from "./bag.svg";

export const BasketCart = styled(Bag)`
  width: 4rem;
  height: 4rem;
`;

export const BasketIcon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 2rem;
  top: 1.1rem;
`;
