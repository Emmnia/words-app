import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@mui/material/styles';

import owlClosedIcon from '/assets/images/owl_eyesclosed.png'
import owlOpenIcon from '/assets/images/owl_eyesopen.png'

import { v4 as uuidv4 } from 'uuid';

import { CardBody, CardButton, CardButtonImage, CardButtonText, CardHeader, CardTranscription, CardWord } from './Card.styled';
import { Checkbox } from '../Checkbox/Checkbox';

export const Card = ({ word, id, english, transcription, russian, show, onMouseDown, onChange }) => {

  const theme = useTheme();
  const checkboxId = uuidv4();
  const buttonRef = useRef(null);
  const [isClicked, setClicked] = useState(false);

  const toggleTranslation = () => {
    setClicked(!isClicked);
  };

  useEffect(() => {
    setClicked(false);
  }, [])

  useEffect(() => {
    if (!isClicked) {
      buttonRef.current.focus();
    }
  }, [isClicked])

  return (
    <>
      <CardBody id={id} word={word} theme={theme}>
        <CardHeader>
          <Checkbox
            label={'Learned'}
            show={show}
            id={checkboxId}
            onChange={onChange}
          />
        </CardHeader>
        <CardWord>{english}</CardWord>
        <CardTranscription>{transcription}</CardTranscription>
        <CardButton type="button" onMouseDown={() => { toggleTranslation(); onMouseDown() }} ref={buttonRef} theme={theme}>
          <CardButtonImage src={isClicked ? owlOpenIcon : owlClosedIcon} alt="" />
          <CardButtonText theme={theme}>{isClicked ? russian : 'show translation'}</CardButtonText>
        </CardButton>
      </CardBody>
    </>
  );
};