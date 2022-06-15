import React from 'react';
import {
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
import Home from './pages/Home';
import Quote from './pages/Quote';
import styles from './pages/pages.module.css';
import CalculatorPage from './pages/CalculatorPage';

function App() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculatorpage',
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
                <NavLink to={link.path} activeClassName="active-link" exact>
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        />
        <Route
          path="/calcuatorpage"
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
