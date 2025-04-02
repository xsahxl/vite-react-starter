import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
// import Blog from './pages/blog';
// import News from './pages/news';

const Blog = lazy(() => import('./pages/blog'));
const News = lazy(() => import('./pages/news'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index element={<Blog />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;