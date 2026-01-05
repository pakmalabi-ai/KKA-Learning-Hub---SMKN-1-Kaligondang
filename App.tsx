import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Materi1 from './pages/Materi1';
import Materi2 from './pages/Materi2';
import Materi3 from './pages/Materi3';
import Materi4 from './pages/Materi4';
import Materi5 from './pages/Materi5';
import Materi6 from './pages/Materi6';
import Materi7 from './pages/Materi7';
import Materi8 from './pages/Materi8';
import Materi9 from './pages/Materi9';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materi-1" element={<Materi1 />} />
        <Route path="/materi-2" element={<Materi2 />} />
        <Route path="/materi-3" element={<Materi3 />} />
        <Route path="/materi-4" element={<Materi4 />} />
        <Route path="/materi-5" element={<Materi5 />} />
        <Route path="/materi-6" element={<Materi6 />} />
        <Route path="/materi-7" element={<Materi7 />} />
        <Route path="/materi-8" element={<Materi8 />} />
        <Route path="/materi-9" element={<Materi9 />} />
      </Routes>
    </Layout>
  );
};

export default App;