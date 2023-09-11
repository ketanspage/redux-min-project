import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ApiIntegration from './components/Integration';
function App() {
  // Style for the navbar links
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    padding: '10px',
  };

  // Style for the navbar container
  const navbarStyle = {
    backgroundColor: 'indigo',
    display: 'flex',
    flexDirection: 'row', // Arrange children in a row
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
  };

  // Style for the list items
  const listItemStyle = {
    margin: '0',
    padding: '0',
  };

  return (
    <Router>
      <div className="App">
        <nav style={navbarStyle}>
          <ul style={{ listStyleType: 'none', margin: '0', padding: '0', display: 'flex' }}>
            <li style={listItemStyle}>
              <Link to="/" style={linkStyle}>
                Todo
              </Link>
            </li>
            <li style={listItemStyle}>
              <Link to="/integration" style={linkStyle}>
                Integration
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/integration" element={<Integration />} />
        </Routes>
      </div>
    </Router>
  );
}

function Todo() {
  return (
    <div>
      
      <AddTodo />
      <Todos />
    </div>
  );
}

function Integration() {
  return (
    <div>
      <ApiIntegration/>
    </div>
  );
}

export default App;
