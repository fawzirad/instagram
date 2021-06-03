import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';

function App() {
  const [posts, setPosts] = useState([]);

  // UseEffect --> Runs a piece of code based on a specific condition

  useEffect(() => {
      // this is where the code runs
    db.collection('posts').onSnapshot(snapshot => {
      // every time a new post is added, this code fires...
      console.log("message", snapshot.docs.map(doc => doc.data()));
      setPosts(snapshot.docs.map(doc => doc.data()));
    })
  }, []);

  return (
    <div className="App">
      <div className="app__header">
        <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt="instagram"/>
      </div>
      <h1>
        Hello Instagram Clone !
      </h1>

      {
        posts.map(post => (<Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>))
      }

      
    </div>
  );
}

export default App;
