import "./Slider.css";
import { Card } from '../Card/Card'
import words from '../../words.json'
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const Slider = ({ initialSlideIndex = 0, wordsData = wordsBackUp }) => {
    const [slideIndex, setSlideIndex] = useState(initialSlideIndex);
    const [animation, setAnimation] = useState(" ");

    wordsData = words

    const handlePrevClick = () => {
        setAnimation("previous");
        setTimeout(() => {
            setSlideIndex((slideIndex - 1 + wordsData.length) % wordsData.length);
            setAnimation(" ");
        }, 500);
    };

    const handleNextClick = () => {
        setAnimation("next");
        setTimeout(() => {
            setSlideIndex((slideIndex + 1) % wordsData.length);
            setAnimation(" ");
        }, 500);
    };

    return (
        <div className="slider-container">
            <button className="slider__button" onClick={handlePrevClick}> <FontAwesomeIcon icon={faArrowLeft} /> </button>
            <div className={"slider__content " + animation}>
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
                    />
                ))}
            </div>
            <button className="slider__button" onClick={handleNextClick}> <FontAwesomeIcon icon={faArrowRight} /> </button>
        </div>
    )
}

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
