import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import PostListPage from  './pages/PostListPage';
import PostWritePage from './pages/PostWritePage';
import PostViewPage from  './pages/PostViewPage';
import { PostManager } from './components/Post/components/PostManager';



function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/"      element={<Home />}     />
        </Routes>
        <PostManager>
          <Routes>
          <Route path="/post/list" element={<PostListPage  />} />
          <Route path="/post/write" element={<PostWritePage />} />
          <Route path="/post/view/:uuid" element={<PostViewPage  />} />
        </Routes>
        </PostManager>
        <Routes>
          <Route path="/page2" element={<Page2 />}    />
          <Route path="/page3" element={<Page3 />}    />
        </Routes>
      </main>
    </Router>
  );
} 

export default App;
