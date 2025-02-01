// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles.css';
import 'aos/dist/aos.css';

// Importuojame komponetus tiesiogiai (be lazy loading kol kas)
import Home from './pages/Home';
import Login from './pages/Login';
import Artists from './pages/Artists';
import AdminPanel from './pages/AdminPanel';
import ProtectedRoute from './components/ProtectedRoute';
import AcceptedSubmissions from './pages/AcceptedSubmissions';
import RejectedSubmissions from './pages/RejectedSubmissions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminPanel />
          </ProtectedRoute>
        } />
        <Route path="/admin/accepted" element={
          <ProtectedRoute>
            <AcceptedSubmissions />
          </ProtectedRoute>
        } />
        <Route path="/admin/rejected" element={
          <ProtectedRoute>
            <RejectedSubmissions />
          </ProtectedRoute>
        } />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
