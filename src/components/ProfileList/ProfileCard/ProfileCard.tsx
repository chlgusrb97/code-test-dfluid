import styled from "@emotion/styled";

type ProfileCardProps = {
  image: string;
  title: string;
  description: string;
};

const ProfileCard = (props: ProfileCardProps) => {
  return (
    <Profile>
      <ImageBox>
        <img src={props.image} alt="프로필 이미지" />
      </ImageBox>

      <Title>{props.title}</Title>
      <Description>{props.description}</Description>

      <LearnMoreButton>Learn more</LearnMoreButton>
    </Profile>
  );
};

export default ProfileCard;

const Profile = styled.article`
  width: 100%;
`;

const ImageBox = styled.div`
  width: 108px;
  height: 108px;
  background-color: #fff;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Title = styled.h3`
  padding: 40px 0 24px;
  font-size: 24px;
  font-family: Montserrat-Bold;
  line-height: 36px;
  letter-spacing: -0.36px;
`;

const Description = styled.p`
  padding-bottom: 24px;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -0.27px;
  color: rgba(0, 0, 0, 0.8);
`;

const LearnMoreButton = styled.button`
  color: #18a0fb;
  font-size: 18px;
  font-family: Exo2-Bold;
  line-height: 30px;
  letter-spacing: -0.27px;
  cursor: pointer;
`;
