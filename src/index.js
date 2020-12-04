import React, { useState, useEffcet } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import math from "mathjs";

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

  return (
    <div>
      count: {count}
      <input id="input" defaultValue="1"></input>
      <button
        onClick={() => {
          let abc = math.eval(
            document.getElementById("input").getAttribute("value")
          );
          setCount(abc);
        }}
      >
        calc
      </button>
    </div>
  );
}

ReactDOM.render(<CounterApp />, document.getElementById("root"));
