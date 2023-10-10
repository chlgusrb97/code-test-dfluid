import styled from "@emotion/styled";
import ProfileCard from "components/ProfileList/ProfileCard/ProfileCard";
import {Profiles} from "./mock/profiles";

const ProfileList = () => {
  const shuffledProfiles = [...Profiles].sort(() => Math.random() - 0.5);

  return (
    <ProfileSection>
      {shuffledProfiles.map((profile, index) => (
        <ProfileCard
          key={index + 1}
          image={profile.image}
          title={profile.title}
          description={profile.description}
        />
      ))}
    </ProfileSection>
  );
};

export default ProfileList;

const ProfileSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 70px 0 110px;
  gap: 20px;
`;
