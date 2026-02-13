import { useState } from "react";
import "./App.css";

function App() {
  const questionImage = ".assets/images/question.jpg";

  const yesImages = [
    ".assets/images/oui.png",
    ".assets/images/oui1.png",
  ];

  const noImages = [
    ".assets/images/non.png",
    ".assets/images/non1.png",
    ".assets/images/non2.png",
    ".assets/images/non3.png",
  ];

  const [mode, setMode] = useState("question");
  const [imageIndex, setImageIndex] = useState(0);
  const [noPosition, setNoPosition] = useState(null);

const handleYes = () => {
  setMode("yes");
  setImageIndex(Math.floor(Math.random() * yesImages.length));
};

const handleNo = () => {
  const randomTop = Math.random() * 80;
  const randomLeft = Math.random() * 80;

  setNoPosition({
    position: "absolute",
    top: `${randomTop}%`,
    left: `${randomLeft}%`,
  });

  setMode("no");
  setImageIndex((prev) =>
    prev < noImages.length - 1 ? prev + 1 : prev
  );
};


  let currentImage;
  if (mode === "question") currentImage = questionImage;
  if (mode === "yes") currentImage = yesImages[imageIndex];
  if (mode === "no") currentImage = noImages[imageIndex];

  return (
    <div className="page">
      <div className="card">
        <div className="image-frame">
          <img src={currentImage} alt="display" />
        </div>

        <div className="buttons">
          <button className="yes-btn" onClick={handleYes}>
            Oui ❤️
          </button>

          <button
            className="no-btn"
            onMouseEnter={handleNo}
            style={noPosition || {}}
          >
            Non 😈
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
