import {
  SkillsContainer,
  SkillsTitle,
  SkillsGrid,
  SkillCard,
  SkillCardTitle,
  SkillsList,
  SkillItem,
  SkillIcon
} from "@/style/components/Skills";

const stackIconSlugs = {
  "Next.js": ["nextjs", "plain"],
  "React/Next.js": ["nextjs", "plain"],
  "TypeScript": ["typescript", "plain"],
  "React": ["react", "original"],
  "Node.js": ["nodejs", "plain"],
  "PostgreSQL": ["postgresql", "plain"],
  "Supabase": ["supabase", "plain"],
  "Docker": ["docker", "plain"],
  "Cloudflare": ["cloudflare", "original"],
  "AWS/GCP": ["amazonwebservices", "plain-wordmark"],
  "Python": ["python", "plain"],
  "Rust": ["rust", "plain"],
  "Svelte": ["svelte", "plain"],
  "GraphQL": ["graphql", "plain"]
};

const getIconUrl = (item) => {
  const iconConfig = stackIconSlugs[item] || stackIconSlugs[item.split('/')[0]];
  if (!iconConfig) {
    return null;
  }

  const [slug, variant] = iconConfig;
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-${variant}.svg`;
};

export default function Skills({ skills, getTranslation, language }) {
  return (
    <SkillsContainer>
      <SkillsTitle>{getTranslation('skillsTitle', language)}</SkillsTitle>
      <SkillsGrid>
        {Object.entries(skills).map(([key, cluster]) => (
          <SkillCard key={key}>
            <SkillCardTitle>{cluster.title}</SkillCardTitle>
            <SkillsList>
              {cluster.items.map((item, index) => (
                <SkillItem key={index}>
                  {getIconUrl(item) && (
                    <SkillIcon src={getIconUrl(item)} alt="" loading="lazy" />
                  )}
                  {item}
                </SkillItem>
              ))}
            </SkillsList>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
}
