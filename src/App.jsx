import ProjectList from './ProjectList';
import './App.css';

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>Portfólio Profissional</h1>
        <p>Estudante de Tecnologia em Sistemas para Internet</p>
      </header>
      
      <main>
        <section style={{ marginBottom: '40px' }}>
          <h2>Sobre Mim</h2>
          <p>Olá! Meu nome é Bruno e este é o meu portfólio desenvolvido em React durante as aulas de sistemas para internet.</p>
        </section>

        <ProjectList />
      </main>

      <footer style={{ marginTop: '50px', textAlign: 'center', fontSize: '0.8rem' }}>
        <p>&copy; 2026 - Bruno Rodrigues</p>
      </footer>
    </div>
  );
}

export default App;
