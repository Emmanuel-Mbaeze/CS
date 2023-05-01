import React, { useRef, useState } from "react";
import styled from "styled-components";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { NavLink } from "react-router-dom";

const Adpasswordchange = () => {
  const [value, setValue] = useState();

  return (
    <Container>
      <Wrapper>
        <Text>
          <Title> Change Password</Title>
        </Text>
        <InputHold>
          <Left>
            <Hold>
              <Name>Current Password</Name>
              <HoldInput>
                <Input placeholder="Current Password" />
              </HoldInput>
            </Hold>

            <Hold>
              <Name>New Password</Name>
              <HoldInput>
                <Input placeholder="New Password" />
              </HoldInput>
            </Hold>
          </Left>
          <Right>
            <Hold>
              <Name>Confirm New Password</Name>
              <HoldInput>
                <Input placeholder="Confirm New Password" />
              </HoldInput>
            </Hold>

            <NavLink to="/personal" style={{ textDecoration: "none" }}>
              <Button>Save Password</Button>
            </NavLink>
          </Right>
        </InputHold>
      </Wrapper>
    </Container>
  );
};

export default Adpasswordchange;
// const Left = styled.div``
const Left = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Right = styled.div`
  flex-direction: column;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  /* background-color: #1e1b1b; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  width: 360px;
  height: 50px;
  border: 0px;
  background-color: #ec00b1;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  margin: 20px;
  outline: none;
`;
const Error = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #ff0000;
`;
const Icon = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const HoldInput = styled.div`
  width: 350px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;

  .PhoneInputInput {
    width: 300px;
    height: 30px;
    outline: none;
    border: 0px;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 30px;
  outline: none;
  border: 0px;
  /* margin-bottom: 5px; */
  /* padding-left: 10px;
    padding-right: 10px; */
`;
const Name = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const Hold = styled.div`
  margin-bottom: 10px;
`;
const InputHold = styled.form`
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35px 3px;

  /* background-color: #ec00b1; */
`;

const Title = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  /* margin-bottom: 20px; */
  /* border-bottom: 1.9px solid grey; */
  padding: 0 24px;
`;
const Text = styled.div`
  width: 100%;
  border-bottom: 1.9px solid grey;
  padding: 4px 0;
  display: flex;
  align-items: center;
  /* background-color: red; */
  justify-content: flex-start;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  /* background-color: red; */
  justify-content: center;
  flex-direction: column;
  padding: 23px 0;
  /* border: 1px solid gray; */
`;
