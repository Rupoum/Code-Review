import "./App.css";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    prism.highlightAll();
  });

  return (
    <>
      <header className="w-full h-16 bg-gray-800 text-white flex items-center justify-center">
        <h1 className="text-2xl">Code Review Platform</h1>
      </header>
      <main className="w-full h-screen flex">
        <div className="left w-[50%] h-screen bg-gray-900 text-white p-4">
          <div className="code-editor h-full rounded-lg border border-gray-700 p-4">
            <h2 className="text-xl mb-4">Write your code here</h2>
            <pre className="h-[70%] overflow-auto">
              <code className="language-javascript">
                {`function sum() {
  return 1 + 1;
}`}
              </code>
            </pre>
          </div>
          <div className="review-btn">
            <button className="text-black bg-white px-5 py-2 rounded-lg">
              Review
            </button>
          </div>
        </div>
        <div className="right w-[50%] h-screen bg-gray-100 p-4">
          <div className="review-output h-full rounded-lg border border-gray-300 p-4">
            <h2 className="text-xl mb-4">Review Output</h2>
            <div className="output-content h-full overflow-auto">
              {/* This is where the review output will be displayed */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
