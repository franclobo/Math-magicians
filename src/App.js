import React from 'react';
import {
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
import CalculatorPage from './pages/CalculatorPage';
import Home from './pages/Home';
import Quote from './pages/Quote';
import styles from './pages/pages.module.css';

function App() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/cal',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];
  return (
    <>
      <header className={styles.header}>
        <h1 className="title">Math Magicians</h1>
        <nav className="navBar">
          <ul className="menuNav">
            {links.map((link) => (
              <li key={link.id}>
                <NavLink to={link.path}>
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/cal"
          element={<CalculatorPage />}
        />
        <Route
          path="/quote"
          element={<Quote />}
        />
      </Routes>
    </>
  );
}

export default App;
