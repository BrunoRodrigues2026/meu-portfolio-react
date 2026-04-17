import ProjectCard from './ProjectCard';

export default function ProjectList() {
  const projetos = [
    { id: 1, nome: "Meu Portfólio React", desc: "Migração do portfólio para React", link: "https://github.com/BrunoRodrigues2026" },
    { id: 2, nome: "Projeto Acadêmico", desc: "Desenvolvimento de sistemas para internet", link: "https://github.com/BrunoRodrigues2026" }
  ];

  return (
    <section>
      <h2 style={{ textAlign: 'center' }}>Meus Projetos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {projetos.map((proj) => (
          <ProjectCard key={proj.id} titulo={proj.nome} descricao={proj.desc} link={proj.link} />
        ))}
      </div>
    </section>
  );
}