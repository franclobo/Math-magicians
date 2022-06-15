import React from 'react';
import {
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
import CalculatorPage from './pages/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
import './pages/'

function App() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 2,
      path: '/quote',
      text: 'Quote',
    },
  ];
  return (
    <>
      <header>
        <h1>Math Magicians</h1>
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
          element={<Home className="home" />}
        />
        <Route
          path="/calcuator"
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
