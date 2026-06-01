import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import { useAuthStore } from './Store/useAuthStore';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import Books from './Pages/Books';
import BookDetails from './Pages/BookDetails';
const App = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route 
        path="/books" 
        element={isAuthenticated ? <Books /> : <Navigate to="/login" />} 
      />

      <Route 
        path="/books/:id" 
        element={isAuthenticated ? <BookDetails /> : <Navigate to="/login" />} 
      />
      
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;