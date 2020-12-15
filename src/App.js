import React, {useState, useEffect, useCallback} from 'react';
import arrayMove from 'array-move'
import {Feed} from './components/feed';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos/')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const handleSort = useCallback(({ oldIndex, newIndex }) => {
    setPosts(arrayMove(posts, oldIndex, newIndex));
  }, [posts]);

  return (
    <div className="App">
      <Feed lockAxis="y" posts={posts} onSortEnd={handleSort} />
    </div>
  );
}

export default App;
