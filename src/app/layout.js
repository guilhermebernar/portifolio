import './globals.css'

export const metadata = {
    icons: {
        favicon: '/favicon.ico'
    },
    title: 'Portfólio | Guilherme Bernardo da Nóbrega',
    description: 'Portfólio pessoal de Guilherme Bernardo da Nóbrega exibindo habilidades de desenvolvimento web, projetos e trajetória profissional.',
    keywords: 'web developer, desenvolvedor web, front-end, back-end, full stack, VTEX, React, JavaScript, Node.js, HTML, CSS, SQL, MongoDB, MySQL, PostgreSQL, Git, GitHub, Bitbucket, Jira, Confluence, Scrum, Kanban, VTEX IO, VTEX CMS, VTEX Store Framework, VTEX IO Store, VTEX IO Checkout, VTEX IO Search, VTEX IO Promotions, VTEX IO Master Data, VTEX IO Workspaces, VTEX IO Site Editor, VTEX IO Site',
    author: 'Guilherme Bernardo da Nóbrega',
    ogTitle: 'Portfólio: Guilherme Bernardo da Nóbrega',
    ogDescription: 'Venha conhecer o caminho profissional e os projetos de Guilherme Bernardo da Nóbrega, Desenvolvedor Web Full Stack.',
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
