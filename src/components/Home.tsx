import styled from "@emotion/styled";
import ProfileList from "./ProfileList/ProfileList";

const Home = () => {
  return (
    <HomeWrapper>
      <HeadTitle>
        Snap photos and share like
        <br />
        never before
      </HeadTitle>

      <ProfileList />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  padding: 120px 80px 0;
  background-color: #fff;
`;

const HeadTitle = styled.h1`
  font-size: 48px;
  font-family: Exo2-Regular;
  line-height: 72px;
  letter-spacing: -0.72px;
`;
