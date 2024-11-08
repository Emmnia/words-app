import { useState, useEffect, useRef } from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import { CardBody, CardHeader, CardWord, CardTranscription, CardButton, CardButtonImage, CardButtonText } from "./Card.styled";
import owlClosedIcon from '/assets/images/owl_eyesclosed.png'
import owlOpenIcon from '/assets/images/owl_eyesopen.png'
import { v4 as uuidv4 } from 'uuid';

export const Card = ({ id, english, transcription, russian, tags, boolean, visible, show, onClick }) => {

  const checkboxId = uuidv4();
  const buttonRef = useRef(null);
  const [isClicked, setClicked] = useState(false);

  const toggleTranslation = () => {
    setClicked(!isClicked);
  };

  useEffect(() => {
    setClicked(false);
  }, [visible])

  useEffect(() => {
    if (!isClicked && visible) {
      buttonRef.current.focus();
    }
  }, [isClicked, visible])

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
        <CardButton type="button" onClick={() => { toggleTranslation(); onClick() }} ref={buttonRef}>
          <CardButtonImage src={isClicked ? owlOpenIcon : owlClosedIcon} alt="" />
          <CardButtonText>{isClicked ? russian : 'показать перевод'}</CardButtonText>
        </CardButton>
      </CardBody>
    </>
  );
};