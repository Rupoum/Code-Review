import "./App.css";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import { useEffect, useState } from "react";
import axios from "axios";
import Editor from "react-simple-code-editor";
import Markdown from "react-markdown";

function App() {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");

  useEffect(() => {
    prism.highlightAll();
  }, []); // Add dependency array to useEffect

  async function reviewCode() {
    try {
      const response = await axios.post("http://localhost:3000/ai/get-review", {
        code,
      });
      setReview(response.data);
    } catch (error) {
      console.error("Error reviewing code:", error);
    }
  }

  return (
    <>
      <header className="w-full h-16 bg-gray-800 text-white flex items-center justify-center">
        <h1 className="text-2xl">Code Review Platform</h1>
      </header>
      <main className="w-full h-screen flex">
        <div className="left w-[50%] h-screen bg-black text-white p-4">
          <div className="code-editor h-full rounded-lg border border-black p-4">
            <h2 className="text-xl mb-4 text-center text-slate-400">
              Write your code here
            </h2>
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 20,
                border: "",
                borderRadius: "4px",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div className="review-btn">
            <button
              onClick={reviewCode}
              className="text-black bg-white px-5 py-2 rounded-lg"
            >
              Review
            </button>
          </div>
        </div>
        <div
          className="right w-[50%] h-screen bg-gray-800 
        text-white p-4 overflow-auto
        
        "
        >
          <div
            className="review-output h-full 
          bg-gray-800
          
          p-4"
          >
            <h2 className="text-xl mb-4">Review Output</h2>
            <div className="output-content h-full overflow-auto">
              <Markdown>{review}</Markdown>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
