import React from 'react';

function ProjectList() {
  // REQUISITO: Array de objetos para renderização dinâmica
  const projetos = [
    { id: 1, nome: "Portfólio Estático", link: "#" },
    { id: 2, nome: "Projeto de Gestão", link: "#" },
    { id: 3, nome: "Atividade de Migração", link: "#" }
  ];

  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>
      <ul>
        {projetos.map(proj => (
          <li key={proj.id}>
            <strong>{proj.nome}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectList;
