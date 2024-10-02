import "./Card.css";
import { useState } from "react";

export const Card = ({ id, english, transcription, russian, tags, boolean }) => {

  const [isClicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(true);
  };

  let translationContent;

  if (isClicked) {
    translationContent = <p className="translation__text">{russian}</p>;
  } else {
    translationContent = <button className="translation__button" type="button" onClick={handleButtonClick}>Показать перевод</button>;
  }

  return (
    <>
      <div className="card-body" id={id} data-tags={tags} data-boolean={boolean}>
        <h2>{english}</h2>
        <p>{transcription}</p>
        <div className="translation">
          {translationContent}
        </div>
      </div>
    </>
  );
};
