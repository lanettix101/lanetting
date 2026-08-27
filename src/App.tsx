/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import WhatsAppButton from './components/ui/WhatsAppButton';
import { LanguageProvider } from './i18n/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <Router basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <div className="min-h-screen flex flex-col font-sans">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/service/:id" element={<ServiceDetail />} />
            </Routes>
          </main>
          <WhatsAppButton />
        </div>
      </Router>
    </LanguageProvider>
  );
}
