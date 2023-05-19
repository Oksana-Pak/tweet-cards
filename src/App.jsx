import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';

const Tweets = lazy(() => import('./pages/Tweets/Tweets'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
