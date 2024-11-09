import { useStore } from '@nanostores/react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { themeStore } from './lib/stores/theme';

// Import styles
import 'react-toastify/dist/ReactToastify.css';
import '@unocss/reset/tailwind-compat.css';
import '@xterm/xterm/css/xterm.css';
import './styles/index.scss';
import 'virtual:uno.css';

function Layout({ children }: { children: React.ReactNode }) {
  const theme = useStore(themeStore);

  useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}

// Main App content
function MainContent() {
  return (
    <div className="w-full h-full">
      {/* Add your app content here */}
      <h1>Welcome to Bolt</h1>
    </div>
  );
}

// Main App component
export default function Root() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainContent />} />
          {/* Add more routes here as needed */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

// Initialize theme
const initialTheme = localStorage.getItem('bolt_theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.querySelector('html')?.setAttribute('data-theme', initialTheme);
