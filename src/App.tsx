import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { AuthProvider } from './context/AuthContext';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';
import { Footer } from './components/common';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import RecipeForm from './pages/admin/RecipeForm';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <FavoritesProvider>
          <AuthProvider>
            <Router>
              <Routes>
                {/* Admin routes — no Navbar/Footer */}
                <Route path="/admin/login" element={<Login />} />
                <Route path="/admin" element={<Dashboard />} />
                <Route path="/admin/new" element={<RecipeForm />} />
                <Route path="/admin/edit/:id" element={<RecipeForm />} />

                {/* Public routes */}
                <Route path="*" element={
                  <div className="min-h-screen flex flex-col">
                    <Navbar />
                    <main className="flex-1">
                      <PageTransition>
                        <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/recipes" element={<Recipes />} />
                          <Route path="/recipes/:id" element={<RecipeDetail />} />
                          <Route path="/about" element={<About />} />
                          <Route path="*" element={<NotFound />} />
                        </Routes>
                      </PageTransition>
                    </main>
                    <Footer />
                  </div>
                } />
              </Routes>
            </Router>
          </AuthProvider>
        </FavoritesProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
