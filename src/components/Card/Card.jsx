import { useState, useEffect, useRef } from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import { CardBody, CardHeader, CardWord, CardTranscription, CardTranslationContent, CardTranslation, CardButton } from "./Card.styled";
import { v4 as uuidv4 } from 'uuid';

export const Card = ({ id, english, transcription, russian, tags, boolean, visible, show, onClick }) => {

  const checkboxId = uuidv4();
  const buttonRef = useRef(null);
  const [isClicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(true);
  };

  const handleTranslationClick = () => {
    setClicked(false);
  }

  useEffect(() => {
    setClicked(false);
  }, [visible])

  useEffect(() => {
    if (!isClicked && visible) {
      buttonRef.current.focus();
    }
  }, [isClicked, visible])

  let translationContent;

  if (isClicked) {
    translationContent = <CardTranslation onClick={handleTranslationClick}>{russian}</CardTranslation>;
  } else {
    translationContent = <CardButton
      type="button"
      onClick={() => {
        handleButtonClick();
        onClick()
      }}
      ref={buttonRef}
    >Показать перевод</CardButton>;
  }

  return (
    <>
      <CardBody id={id} data-tags={tags} data-boolean={boolean} style={{ display: visible ? 'block' : 'none' }}>
        <CardHeader>
          <Checkbox
            label={'Выучено'}
            show={show}
            id={checkboxId}
          />
        </CardHeader>
        <CardWord>{english}</CardWord>
        <CardTranscription>{transcription}</CardTranscription>
        <CardTranslationContent>
          {translationContent}
        </CardTranslationContent>
      </CardBody>
    </>
  );
};