import "./Slider.css";
import { Card } from '../Card/Card'
import words from '../../words.json'
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { TrainingControls } from "../TrainingControls/TrainingControls";

const wordsBackUp = [{
    id: "16334",
    english: "cat",
    transcription: "[cat]",
    russian: "кошка",
    tags: "animal",
    tags_json: "[animal]",
    boolean: "false"
},
{
    id: "16335",
    english: "dad",
    transcription: "[dæd]",
    russian: "папа",
    tags: "general",
    tags_json: "[general]",
    boolean: "false"
},
{
    id: "16365",
    english: "flower",
    transcription: "[ˈflaʊər]",
    russian: "цветок",
    tags: "nature",
    tags_json: "[nature]",
    boolean: "false"
},
{
    id: "16367",
    english: "lamb",
    transcription: "[læm]",
    russian: "ягненок",
    tags: "animal",
    tags_json: "[animal]",
    boolean: "false"
},
{
    id: "16372",
    english: "education",
    transcription: "|edʒʊˈkeɪʃ(ə)n|",
    russian: "образование",
    tags: "education",
    tags_json: "[education]",
    boolean: "false"
}
]

export const Slider = ({ initialSlideIndex = 0, wordsData = wordsBackUp }) => {
    const [slideIndex, setSlideIndex] = useState(initialSlideIndex);
    const [animation, setAnimation] = useState(" ");
    const [count, setCount] = useState(0);
    const [clickedWords, setClickedWords] = useState(new Set());

    wordsData = words || wordsBackUp

    const handlePrevClick = () => {
        setAnimation("previous");
        setSlideIndex((slideIndex - 1 + wordsData.length) % wordsData.length);
    };

    const handleNextClick = () => {
        setAnimation("next");
        setSlideIndex((slideIndex + 1) % wordsData.length);
    };

    const handleAnimationEnd = () => {
        setAnimation("");
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

    return (
        <>
            <div className="slider-container" >
                <button className="slider__button" onClick={handlePrevClick}> <FontAwesomeIcon icon={faChevronLeft} /> </button>
                <div className={`slider__content ${animation}`}
                    onAnimationEnd={handleAnimationEnd}>
                    {wordsData.map((word, index) => (
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
                </div>
                <button className="slider__button" onClick={handleNextClick}> <FontAwesomeIcon icon={faChevronRight} /> </button>
            </div>
            <TrainingControls
                onClick={startTraining}
                count={count}
                getWordForm={getWordForm}
            />
        </>
    )
}


//   разобраться с анимацией колоды карт, сделать на карточках чекбокс "выучено", в галерее добавить вариант "не показывать выученные"