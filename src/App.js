// Dependencies
import { Route, Routes } from 'react-router-dom';

// Styling
import './Typography.css';

// Component
import Dashboard from "./views/admin/Dashboard"
import AddProduct from "./views/admin/AddProduct"
import TopListed from './views/admin/TopListed';
import Account from './views/admin/Account';

function App() {
  return (
    <div className="bg-system-background">
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/top-listed" element={<TopListed />} />
        <Route path="/admin/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
