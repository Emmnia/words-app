import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useMediaQuery from '@mui/material/useMediaQuery';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import { SliderButton, SliderContainer, SliderContent } from './Slider.styled';
import { SliderMessage } from './SliderMessage';
import { wordsStore } from '../../store/words-store';
import { Card } from '../Card/Card';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Loader } from '../Loader/Loader';
import { TrainingControls } from '../TrainingControls/TrainingControls';

export const Slider = observer(({ initialSlideIndex = 0 }) => {
    const [slideIndex, setSlideIndex] = useState(initialSlideIndex);
    const [animation, setAnimation] = useState(' ');
    const [count, setCount] = useState(0);
    const [clickedWords, setClickedWords] = useState(new Set());
    const [showError, setShowError] = useState(false);
    const [hideLearned, setHideLearned] = useState(false);
    const [learnedWords, setLearnedWords] = useState(new Set());

    const { words, loading, error } = wordsStore;

    const filteredWords = hideLearned ? words.filter(word => !learnedWords.has(word.id)) : words;

    const matches = useMediaQuery('(min-width:600px)');

    const handlePrevClick = () => {
        setAnimation('previous');
        setSlideIndex((slideIndex - 1 + filteredWords.length) % filteredWords.length);
    };

    const handleNextClick = () => {
        setAnimation('next');
        setSlideIndex((slideIndex + 1) % filteredWords.length);
    };

    const handlers = useSwipeable({
        onSwipedLeft: handleNextClick,
        onSwipedRight: handlePrevClick,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    const handleAnimationEnd = () => {
        if (animation === 'previous' || animation === 'next') {
            setAnimation('');
        }
    };

    const startTraining = () => {
        setCount(0);
        setClickedWords(new Set());
        setLearnedWords(new Set());
        setHideLearned(false);
    }

    const handleCounter = (event, wordId) => {
        event.stopPropagation();
        if (!clickedWords.has(wordId)) {
            setCount((count) => count + 1);
            setClickedWords((prevClicked) => new Set(prevClicked).add(wordId));
        }
    }

    const markWordLearned = (wordId) => {
        setLearnedWords(prevLearned => new Set(prevLearned).add(wordId));
    }

    const handleHideLearned = () => {
        setHideLearned(!hideLearned);
    }

    useEffect(() => {
        if (error) {
            setShowError(true);
            const timer = setTimeout(() => {
                setShowError(false);
                setAnimation('appear')
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    if (loading) {
        return (
            <SliderContainer>
                <Loader />
            </SliderContainer>
        )
    }

    if (filteredWords.length === 0) {
        return (
            <SliderMessage onClick={startTraining} />
        );
    }

    const currentWord = filteredWords[slideIndex];

    if (!currentWord) {
        console.warn('Слово не найдено для индекс:', slideIndex);
        return null;
    }

    if (words.length === 0) {
        console.warn('Список слов пуст.');
        return null;
    }

    return (
        <>
            <SliderContainer {...handlers}>
                {showError ? <ErrorMessage /> : (
                    <>
                        <SliderButton onClick={handlePrevClick} style={{ display: matches ? 'block' : 'none' }}> <FontAwesomeIcon icon={faChevronLeft} /> </SliderButton>
                        <SliderContent
                            animation={animation}
                            onAnimationEnd={handleAnimationEnd}>
                            <Card
                                key={currentWord.id}
                                id={currentWord.id}
                                english={currentWord.english}
                                transcription={currentWord.transcription}
                                russian={currentWord.russian}
                                onMouseDown={() => handleCounter(event, currentWord.id)}
                                onChange={() => markWordLearned(currentWord.id)}
                                show={true}
                                learned={learnedWords.has(currentWord.id)}
                            />
                        </SliderContent>
                        <SliderButton onClick={handleNextClick} style={{ display: matches ? 'block' : 'none' }}> <FontAwesomeIcon icon={faChevronRight} /> </SliderButton>
                    </>)}
            </SliderContainer>
            <TrainingControls
                onClick={startTraining}
                count={count}
                onChange={handleHideLearned}
                checked={hideLearned}
            />
        </>
    )
})

