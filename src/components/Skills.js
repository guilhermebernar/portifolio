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
  "Next.js": "nextjs",
  "React/Next.js": "nextjs",
  "TypeScript": "typescript",
  "React": "react",
  "Node.js": "nodejs",
  "PostgreSQL": "postgresql",
  "Supabase": "supabase",
  "Docker": "docker",
  "Cloudflare": "cloudflare",
  "AWS/GCP": "amazonwebservices",
  "Python": "python",
  "Rust": "rust",
  "Svelte": "svelte",
  "GraphQL": "graphql"
};

const getIconUrl = (item) => {
  const slug = stackIconSlugs[item] || stackIconSlugs[item.split('/')[0]];
  return slug ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg` : null;
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
