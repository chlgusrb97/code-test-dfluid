import {css} from "@emotion/react";
import styled from "@emotion/styled";
import {ChangeEvent, useState} from "react";

const NewsLetterSubscribe = () => {
  const [email, setEmailValue] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmailValue(emailValue);
    validateEmail(emailValue);
  };

  const validateEmail = (emailValue: string) => {
    const emailRegEx = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    const testedEmailRegEx = emailRegEx.test(emailValue);

    if (emailValue === "") {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(testedEmailRegEx);
    }
  };

  console.log(isValidEmail);

  return (
    <SubscribeContainer>
      <Title>Subscribe to our newsletter</Title>

      <InputBox isValidEmail={isValidEmail} isNonValue={email !== ""}>
        <Input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={onChangeEmail}
        />

        <Submit
          type="submit"
          disabled={isValidEmail ? false : true}
          isActive={isValidEmail ? false : true}
        >
          <img src="/images/paper-plane.png" alt="전송아이콘" />
        </Submit>
      </InputBox>
      {isValidEmail === false && email !== "" && (
        <ErrorMessage>Please enter a valid email!</ErrorMessage>
      )}
    </SubscribeContainer>
  );
};

export default NewsLetterSubscribe;

const SubscribeContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  padding-bottom: 16px;
  font-size: 16px;
  font-family: Exo2-Bold;
  letter-spacing: -0.24px;
  text-align: center;
`;

const InputBox = styled.div<{isValidEmail: boolean; isNonValue: boolean}>`
  display: flex;
  width: 500px;
  height: 50px;
  border: 1px solid
    ${(props) =>
      props.isValidEmail ? "#00c300" : props.isNonValue ? "#ff6633" : "#fff"};

  padding: 4px 10px 4px 4px;
  border-radius: 7px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 12px;
  color: #fff;
  background-color: transparent;
  font-family: Exo2-Regular;
  letter-spacing: -0.24px;

  ::placeholder {
    color: #fff;
  }
`;

const Submit = styled.button<{isActive: boolean}>`
  margin-left: 8px;
  background-color: transparent;
  cursor: ${(props) => (props.isActive ? "default" : "pointer")};

  > img {
    width: 32px;
    height: 32px;

    ${(props) =>
      props.isActive &&
      css`
        filter: opacity(0.5);
      `}
  }
`;

const ErrorMessage = styled.p`
  margin-top: 9px;
  margin-left: 16px;
  color: #ff6633;
  font-size: 16px;
  font-family: Exo2-Light;
  letter-spacing: -0.24px;
`;
