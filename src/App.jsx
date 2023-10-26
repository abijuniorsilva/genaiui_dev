import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard';
import Layout from './components/shared/Layout';
import Products from './components/Products';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
