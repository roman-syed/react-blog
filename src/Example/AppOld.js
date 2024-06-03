import Test from './Components/Test';
import About from './Components/Pages/About';
import Blog from './Components/Pages/Blog'
import Contact from './Components/Pages/Contact'
import Layout from './Components/Pages/Layout'
import NoPage from './Components/Pages/NoPage';
import './Style/Test-Style.css';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Test />} />
          <Route path="about-us" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
