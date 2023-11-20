import './App.css';
import Navbar from './components/Navbar';
import Postbox from './components/Postbox';
import Profiles from './components/Profiles';
import posts from './components/posts.js'; 

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profiles/>
      {posts.map((post, index) => (
        <Postbox
          key={index}
          title={post.title}
          content={post.content}
          type={post.type}
          Date={post.Date}
          Time={post.Time}
          Views={post.views}
        />
      ))}
    </div>
  );
}

export default App;
