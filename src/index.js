import React, { useState, useEffcet } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Math from "mathjs";

function Reddit() {
  const [posts, setPosts] = useState([]);
  React.useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then((res) => {
      const newPosts = res.data.data.children.map((obj) => obj.data);
      setPosts(newPosts);
    });
  }, []);
  return (
    <div>
      <h1>/r/reactjs</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={post.url}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ReactDOM.render(<Reddit />, document.getElementById("root"));
function CounterApp() {
  const [count, setCount] = useState(0);
  const handleClick = (e) => {
    try {
      setCount(Math.eval(document.getElementById("xyz").value));
    } catch (error) {
      setCount("");
    }
  };
  return (
    <div>
      value: {count}
      <input id="xyz" enterKeyHint="Math expression"></input>
      <button onClick={handleClick}>calc</button>
    </div>
  );
}

ReactDOM.render(<CounterApp />, document.getElementById("root"));
