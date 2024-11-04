import { Card } from '../Card/Card'
import './Gallery.css'
import words from '../../words.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

export const Gallery = ({ initialSlideIndex = 0 }) => {
    const [slideIndex, setSlideIndex] = useState(initialSlideIndex);
    const [animation, setAnimation] = useState(false);

    const handlePrevClick = () => {
        setAnimation(true);
        setTimeout(() => {
            setSlideIndex((slideIndex - 1 + words.length) % words.length);
            setAnimation(false);
        }, 500);
    };

    const handleNextClick = () => {
        setAnimation(true);
        setTimeout(() => {
            setSlideIndex((slideIndex + 1) % words.length);
            setAnimation(false);
        }, 500);
    };

    return (
        <div className="gallery">
            <div className={"gallery__content " + (animation ? "animation" : "")}>
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
                        className='gallery-card'
                    />
                ))}
            </div>
            <div className="gallery__buttons">
                <button className="gallery__button" onClick={handlePrevClick}> <FontAwesomeIcon icon={faArrowLeft} /> </button>
                <button className="gallery__button" onClick={handleNextClick}> <FontAwesomeIcon icon={faArrowRight} /> </button>
            </div>
        </div>
    )
}
