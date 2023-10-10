import styled from "@emotion/styled";

const NewsLetterSubscribe = () => {
  return (
    <SubscribeContainer>
      <Title>Subscribe to our newsletter</Title>

      <InputBox>
        <Input type="text" placeholder="Enter your email" />

        <Submit type="submit">
          <img src="/images/paper-plane.png" alt="전송아이콘" />
        </Submit>
      </InputBox>
    </SubscribeContainer>
  );
};

export default NewsLetterSubscribe;

const SubscribeContainer = styled.div``;

const Title = styled.h2`
  padding-bottom: 16px;
  font-size: 16px;
  font-family: Exo2-Bold;
  letter-spacing: -0.24px;
  text-align: center;
`;

const InputBox = styled.div`
  display: flex;
  width: 500px;
  height: 50px;
  border: 1px solid #fff;
  padding: 4px 10px 4px 4px;
  border-radius: 7px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 10px;
  color: #fff;
  background-color: transparent;
  font-family: Exo2-Regular;
  letter-spacing: -0.24px;

  ::placeholder {
    color: #fff;
  }
`;

const Submit = styled.button`
  margin-left: 8px;
  background-color: transparent;
  cursor: pointer;

  > img {
    width: 32px;
    height: 32px;
  }
`;
