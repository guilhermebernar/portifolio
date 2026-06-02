import './globals.css'

export const metadata = {
    icons: {
        favicon: '/favicon.ico'
    },
    title: 'Portfólio | Guilherme Bernardo da Nóbrega',
    description: 'Portfólio pessoal de Guilherme Bernardo da Nóbrega exibindo projetos full stack, automações, integrações e trajetória profissional.',
    keywords: 'full stack software engineer, desenvolvedor full stack, Next.js, React, TypeScript, Node.js, PostgreSQL, Supabase, Docker, automação, integrações, IA, Python, Rust, Svelte, VTEX',
    author: 'Guilherme Bernardo da Nóbrega',
    ogTitle: 'Portfólio: Guilherme Bernardo da Nóbrega',
    ogDescription: 'Conheça os projetos e a trajetória de Guilherme Bernardo da Nóbrega, Engenheiro de Software Full Stack.',
    ogImage: '/profile.png',
    linkedin: 'https://www.linkedin.com/in/guilherme-bernardo-da-nobrega/',
    languages: ['pt', 'en'],
    "Content-Language": "pt, en"

};

export default function RootLayout({ children }) {
  return (
    <html lang="en, pt-br">
      <body className="globalstyle">{children}</body>
    </html>
  )
}
