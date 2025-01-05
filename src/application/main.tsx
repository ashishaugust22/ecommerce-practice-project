import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import { ThemeProvider } from '@/application/providers/theme-provider.tsx';
import { BrowserRouter } from 'react-router';
import { AppRoutes } from '../presentation/routes/AppRoutes.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
