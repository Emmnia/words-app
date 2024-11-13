import { SliderContainer, SliderButton, SliderContent } from './Slider.styled'
import { Card } from '../Card/Card'
import { useState, useContext, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { TrainingControls } from "../TrainingControls/TrainingControls"
import { Loader } from '../Loader/Loader'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import { WordsContext } from '../../store/words-context'

export const Slider = ({ initialSlideIndex = 0 }) => {
    const [slideIndex, setSlideIndex] = useState(initialSlideIndex);
    const [animation, setAnimation] = useState(" ");
    const [count, setCount] = useState(0);
    const [clickedWords, setClickedWords] = useState(new Set());
    const [showError, setShowError] = useState(false);

    const { words, loading, error } = useContext(WordsContext);

    const handlePrevClick = () => {
        setAnimation("previous");
        setSlideIndex((slideIndex - 1 + words.length) % words.length);
    };

    const handleNextClick = () => {
        setAnimation("next");
        setSlideIndex((slideIndex + 1) % words.length);
    };

    const handleAnimationEnd = () => {
        if (animation === "previous" || animation === "next") {
            setAnimation("");
        }
    };

    const startTraining = () => {
        setCount(0)
    }

    const handleCounter = (wordId) => {
        if (!clickedWords.has(wordId)) {
            setCount((count) => count + 1);
            setClickedWords((prevClicked) => new Set(prevClicked).add(wordId));
        }
        getWordForm(count)
    }

    const getWordForm = (count) => {
        const forms = ["слово", "слова", "слов"];
        const mod10 = count % 10;
        const mod100 = count % 100;

        if (mod10 === 1 && mod100 !== 11) {
            return forms[0];
        } else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
            return forms[1];
        } else {
            return forms[2];
        }
    }

    useEffect(() => {
        if (error) {
            setShowError(true);
            const timer = setTimeout(() => {
                setShowError(false);
                setAnimation("appear")
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

    return (
        <>
            <SliderContainer>
                {showError ? <ErrorMessage /> : (
                    <>
                        <SliderButton onClick={handlePrevClick}> <FontAwesomeIcon icon={faChevronLeft} /> </SliderButton>
                        <SliderContent
                            animation={animation}
                            onAnimationEnd={handleAnimationEnd}>
                            {words.map((word, index) => (
                                <Card
                                    key={word.id}
                                    id={word.id}
                                    english={word.english}
                                    transcription={word.transcription}
                                    russian={word.russian}
                                    tags={word.tags}
                                    boolean={word.boolean}
                                    index={index}
                                    visible={index === slideIndex}
                                    show={true}
                                    onClick={() => handleCounter(word.id)}
                                />
                            ))}
                        </SliderContent>
                        <SliderButton onClick={handleNextClick}> <FontAwesomeIcon icon={faChevronRight} /> </SliderButton>
                    </>)}
            </SliderContainer >
            <TrainingControls
                onClick={startTraining}
                count={count}
                getWordForm={getWordForm}
            />
        </>
    )
}


//   сделать на карточках чекбокс "выучено", в галерее добавить вариант "не показывать выученные"