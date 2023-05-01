import React from "react";
import styled from "styled-components";
import Item from "./Item";
import { AiOutlineCheck } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Finishhipping = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Hold>
              <InputHold>
                <Title>Contact</Title>
                <InputCont>
                  <Test>You@example.com</Test>
                </InputCont>
              </InputHold>
              <InputHold>
                <Title>Shipping Address</Title>
                <InputCont>
                  <Test>No 44 Abraham Estate, Heavens Gate</Test>
                </InputCont>
              </InputHold>
              <InputHold>
                <Title>Payment Method</Title>
                <InputCont>
                  <Test>pay on delivery</Test>
                </InputCont>
              </InputHold>

              <Buttons>
                <NavLink to="/payment" style={{ textDecoration: "none" }}>
                  {" "}
                  <Button>Finish Shipping</Button>
                </NavLink>
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

export default Finishhipping;
const Checkbox = styled.div`
  border: 1px solid black;
  background-color: ${({ bg }) => (bg ? "#D975C0" : "transparent")};
  border-radius: 50%;
  height: 25px;
  width: 25px;
  cursor: pointer;
`;

// const Test = styled.div``
const Test = styled.div`
  margin-left: 10px;
  font-weight: 600;
  color: #363636;
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

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 10px;
  margin-top: 30px;
`;
const InputCont = styled.div`
  border: 1px solid gray;
  width: 100%;
  /* height: 40px; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
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
  height: 90vh;

  display: flex;
  flex-direction: column;
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
