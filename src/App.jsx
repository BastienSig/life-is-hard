import { useState } from "react";
import "./App.css";
import questionImage from "./assets/images/question.jpg";
import ouiImage from "./assets/images/oui.png";
import oui1Image from "./assets/images/oui1.png";
import nonImage from "./assets/images/non.png";
import non1Image from "./assets/images/non1.png";
import non2Image from "./assets/images/non2.png";
import non3Image from "./assets/images/non3.png";

function App() {
  const question = questionImage;

  const yesImages = [
    oui1Image,
    ouiImage,
  ];

  const noImages = [
    nonImage,
    non1Image,
    non2Image,
    non3Image,
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
  if (mode === "question") currentImage = question;
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
