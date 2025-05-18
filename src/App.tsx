import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Reception } from './pages/Reception/Reception';
import { Samples } from './pages/Laboratory/Samples/Samples';
import { Phlebotomy } from './pages/Laboratory/Phlebotomy/Phlebotomy';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reception" element={<Reception />} />
          <Route path="/laboratory/samples" element={<Samples />} />
          <Route path="/laboratory/phlebotomy" element={<Phlebotomy />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App