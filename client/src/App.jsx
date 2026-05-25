import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome Home</h1>
      <p>This paragraph uses DM Sans by default.</p>
      {/* Example using a Tabler Icon via webfont class */}
      <i className="ti ti-mail" style={{ fontSize: '24px', color: 'var(--accent-color)' }}></i>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem', gap: '10px', display: 'flex' }}>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}