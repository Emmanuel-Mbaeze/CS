import React from "react";
import styled from "styled-components";
import Item from "./Item";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Paystack = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Hold>
              <InputHold>
                <Title>Contact</Title>
                <InputCont>
                  <Test>Manel@test.com</Test>
                </InputCont>
              </InputHold>
              <InputHold>
                <Title>Address</Title>
                <InputCont>
                  <Test>No 44 Abraham Estate, Heavens Gate</Test>
                </InputCont>
              </InputHold>
              <InputHold>
                <Title>Payment Method</Title>
                <InputCont>
                  <Dis>
                    <Cont>
                      <Checkbox bg="fff"></Checkbox>
                      <PayOn>Pay on delivery</PayOn>
                    </Cont>
                    <Line />
                    <Cont>
                      <Checkbox bg=""></Checkbox>
                      <PayOn>Pay through Bank</PayOn>
                    </Cont>
                  </Dis>
                </InputCont>
              </InputHold>
              <Buttons>
                <Div>
                  <span>
                    <FaAngleLeft />
                  </span>
                  <div>Return to Information</div>
                </Div>
                <Link to="/completeshipping">
                  <Button>Complete Order</Button>
                </Link>
              </Buttons>
            </Hold>
          </Left>
          <Right>
            <Item />
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Paystack;
const Test = styled.div`
  /* margin-left: 10px; */
  font-weight: 600;
  color: #363636;
  width: 97%;
`;
const Right = styled.div`
  flex: 1;
  height: 100vh;
  border-left: 3px solid lightgray;
  /* background-color: blue; */
`;
const Button = styled.button`
  padding: 15px 20px;
  border: #d975c0;
  background-color: #d975c0;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
const Div = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-weight: 600;
    /* margin-left: 10px; */
    color: #3c3c3c;
  }
  span {
    margin-top: 5px;
  }
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  margin-top: 30px;
`;
const Line = styled.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`;
const PayOn = styled.div`
  font-weight: 700;
  margin-right: 20px;
`;
const Checkbox = styled.div`
  border: 1px solid black;
  background-color: ${({ bg }) => (bg ? "#D975C0" : "transparent")};
  border-radius: 50%;
  height: 25px;
  width: 25px;
  cursor: pointer;
`;
const Cont = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Dis = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InputCont = styled.div`
  border: 1px solid gray;
  width: 100%;
  /* height: 40px; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 10px 0px;

  span {
    color: blue;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    width: 100px;
  }
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const InputHold = styled.div`
  margin: 10px;
`;
const Hold = styled.div`
  width: 90%;
  margin-top: 20px;
`;
const Left = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  /* background-color: gold; */
`;
const Wrapper = styled.div`
  width: 95%;
  display: flex;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;
