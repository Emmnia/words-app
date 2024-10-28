import { useState, useEffect, useRef } from "react";
import { CardBody, CardWord, CardTranscription, CardTranslationContent, CardTranslation, CardButton } from "./Card.styled";

export const Card = ({ id, english, transcription, russian, tags, boolean, visible }) => {

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
    translationContent = <CardButton type="button" onClick={handleButtonClick} ref={buttonRef}>Показать перевод</CardButton>;
  }

  return (
    <>
      <CardBody id={id} data-tags={tags} data-boolean={boolean} style={{ display: visible ? 'block' : 'none' }}>
        <CardWord>{english}</CardWord>
        <CardTranscription>{transcription}</CardTranscription>
        <CardTranslationContent>
          {translationContent}
        </CardTranslationContent>
      </CardBody>
    </>
  );
};


// в компоненте карточки слова автоматически устанавливать фокус на кнопке «посмотреть перевод» как только новая карточка отрендерилась на странице.Подумай, в каком методе жизненного цикла это сделать ?