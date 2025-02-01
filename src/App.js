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
<<<<<<< HEAD
import ProtectedRoute from './components/ProtectedRoute';
=======
import Login from './pages/Login';
>>>>>>> 56d635fce656dde943b914f3508a42b4887e1621

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          } 
        />
=======
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/login" element={<Login />} />
>>>>>>> 56d635fce656dde943b914f3508a42b4887e1621
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
