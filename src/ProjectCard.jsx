export default function ProjectCard({ titulo, descricao, link }) {
  return (
    <div style={{ border: '1px solid #646cff', padding: '15px', margin: '10px', borderRadius: '8px', backgroundColor: '#1a1a1a', color: 'white' }}>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <a href={link} target="_blank" rel="noreferrer" style={{ color: '#646cff' }}>Ver Repositório</a>
    </div>
  );
}