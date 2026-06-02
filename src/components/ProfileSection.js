import { HeroContainer, HeroContent, HeroImageContainer, HeroTitle, HeroSubtitle, HeroActions, HeroCTA, HeroCTASecondary } from '@/style/components/ProfileSection';
import Image from 'next/image';

export default function ProfileSection({ data, getTranslation, language }) {
  return (
    <HeroContainer>
      <HeroImageContainer>
        <Image
          src="/eu-240.webp"
          alt={data.name}
          width={180}
          height={180}
          priority={true}
          sizes="180px"
        />
      </HeroImageContainer>
      <HeroContent>
        <HeroTitle>{data.heroTitle}</HeroTitle>
        <HeroSubtitle>{data.heroSubtitle}</HeroSubtitle>
        <HeroActions>
          <HeroCTA href="#casos">
            {getTranslation('viewCases', language)}
          </HeroCTA>
          <HeroCTASecondary href={`mailto:${data.contact.email}`}>
            {getTranslation('contactMe', language)}
          </HeroCTASecondary>
        </HeroActions>
      </HeroContent>
    </HeroContainer>
  );
}
