import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Root from './root';

// Import global styles
import './styles/index.scss';

const container = document.getElementById('root');
if (!container) throw new Error('Root element not found');

const root = createRoot(container);
root.render(
  <StrictMode>
    <Root />
  </StrictMode>
);
