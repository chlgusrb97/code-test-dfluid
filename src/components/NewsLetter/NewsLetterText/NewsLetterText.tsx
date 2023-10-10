import styled from "@emotion/styled";

const NewsLetterText = () => {
  return (
    <TextContainer>
      <Title>Sed ut perspiciatis unde omnis</Title>
      <Text>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary.
      </Text>

      <DvideLine />

      <SubText>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore.
      </SubText>
    </TextContainer>
  );
};

export default NewsLetterText;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const DvideLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 32px 0;
`;

const Title = styled.h2`
  padding-bottom: 23px;
  font-size: 24px;
  font-family: Montserrat-Bold;
  line-height: 36px;
  letter-spacing: -0.36px;
`;

const Text = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -0.27px;
`;

const SubText = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.21px;
`;
