import "./Slider.css";
import { Card } from '../Card/Card'
import words from '../../words.json'
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const Slider = ({ initialSlideIndex = 0 }) => {
    const [slideIndex, setSlideIndex] = useState(initialSlideIndex);
    const [animation, setAnimation] = useState(" ");

    const handlePrevClick = () => {
        setAnimation("previous");
        setTimeout(() => {
            setSlideIndex((slideIndex - 1 + words.length) % words.length);
            setAnimation(" ");
        }, 500);
    };

    const handleNextClick = () => {
        setAnimation("next");
        setTimeout(() => {
            setSlideIndex((slideIndex + 1) % words.length);
            setAnimation(" ");
        }, 500);
    };

    return (
        <div className="slider-container">
            <button className="slider__button" onClick={handlePrevClick}> <FontAwesomeIcon icon={faArrowLeft} /> </button>
            <div className={"slider__content " + animation}>
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
                    />
                ))}
            </div>
            <button className="slider__button" onClick={handleNextClick}> <FontAwesomeIcon icon={faArrowRight} /> </button>
        </div>
    )
}

Slider.defaultProps = {
    words: [
        //когда основные данные будут из апи, здесь будет на всякий случай json
    ]
};
