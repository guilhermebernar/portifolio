import { ProfileContainer, ProfileImageContainer, ProfileText } from '@/style/components/ProfileSection';
import Contact from './Contact';
import Image from 'next/image'
import * as ProfileImageFile from "../app/assets/images/profile.png"

export default function ProfileSection({ data, getTranslation, language }) {
  return (
    <ProfileContainer>
      <ProfileImageContainer>
         <Image src={ProfileImageFile} alt="Guilherme Bernardo da Nóbrega" width={200} height={200} />
      </ProfileImageContainer>
      <ProfileText>
        <h1>{data.name}</h1>
        <h2>{data.title}</h2>
        <Contact
          data={data.contact}
          getTranslation={getTranslation}
          language={language}
        />
      </ProfileText>
    </ProfileContainer>
  );
}
