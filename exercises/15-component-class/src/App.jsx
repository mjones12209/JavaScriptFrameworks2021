import "./App.css";

import Likes from "./components/Likes/Likes";
import LessText from "./components/LessText/LessText";
import CharacterCount from './components/CharacterCount/CharacterCount';
// Import Likes here
// Import LessText here
// Import CharacterCount here

function App() {
  return (
    <>
      <div className="bg-secondary text-white pt-4 pb-4">
        <div className="container">
          <h1 className="h3">Challenge 1 - Likes</h1>
          {/* Add CharacterCount here */}
          <Likes />
        </div>
      </div>
      <div className="container pt-4 pb-4">
        <h2 className="h3">Challenge 2 - Less Text</h2>
        <LessText />
      </div>
      <div className="bg-secondary text-white pt-4 pb-4">
        <div className="container">
          <h1 className="h3">Challenge 3 - Character Count</h1>
         <CharacterCount />
        </div>
      </div>
    </>
  );
}

export default App;
