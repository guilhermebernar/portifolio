import { HeroContainer, HeroTitle, HeroSubtitle, HeroActions, HeroCTA, HeroCTASecondary } from '@/style/components/ProfileSection';

export default function ProfileSection({ data, getTranslation, language }) {
  return (
    <HeroContainer>
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
    </HeroContainer>
  );
}
