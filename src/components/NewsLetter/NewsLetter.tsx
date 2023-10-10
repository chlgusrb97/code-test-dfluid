import styled from "@emotion/styled";
import NewsLetterText from "./NewsLetterText/NewsLetterText";
import NewsLetterSubscribe from "./NewsLetterSubscribe/NewsLetterSubscribe";

const NewsLetter = () => {
  return (
    <NewsLetterWrapper>
      <NewsLetterText />

      <NewsLetterSubscribe />
    </NewsLetterWrapper>
  );
};

export default NewsLetter;

const NewsLetterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 740px;
  padding: 152px 80px;
  color: #fff;
  background: rgba(0, 0, 0, 0.5) url("/images/banner.jpg") no-repeat center /
    contain;
  background-blend-mode: multiply;
`;
