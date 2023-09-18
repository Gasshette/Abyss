import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Feed from '../Components/feed';
import Post from '../Components/post';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Feed />} />
        <Route path="post" element={<Post />} />
      </Route>
    </Routes>
  );
}

export default App;
