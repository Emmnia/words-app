import "./Card.css";
import { useState, useEffect } from "react";

export const Card = ({ id, english, transcription, russian, tags, boolean, visible }) => {

  const [isClicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(true);
  };

  const handleTranslationClick = () => {
    setClicked(false);
  }

  useEffect(() => {
    setClicked(false);
  }, [visible]);

  let translationContent;

  if (isClicked) {
    translationContent = <p className="translation__text" onClick={handleTranslationClick}>{russian}</p>;
  } else {
    translationContent = <button className="translation__button" type="button" onClick={handleButtonClick}>Показать перевод</button>;
  }

  if (!visible) return null;

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
