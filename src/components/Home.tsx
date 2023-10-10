import styled from "@emotion/styled";
import ProfileList from "./ProfileList/ProfileList";
import NewsLetter from "./NewsLetter/NewsLetter";

const Home = () => {
  return (
    <HomeWrapper>
      <HeadContainer>
        <HeadTitle>
          Snap photos and share like
          <br />
          never before
        </HeadTitle>

        <ProfileList />
      </HeadContainer>

      <NewsLetter />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  padding: 120px 0 0;
  background-color: #fff;
`;

const HeadContainer = styled.div`
  padding: 0 80px;
`;

const HeadTitle = styled.h1`
  font-size: 48px;
  font-family: Exo2-Regular;
  line-height: 72px;
  letter-spacing: -0.72px;
`;
