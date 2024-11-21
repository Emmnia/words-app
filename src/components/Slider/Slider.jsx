import { SliderContainer, SliderButton, SliderContent } from './Slider.styled'
import { Card } from '../Card/Card'
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { TrainingControls } from "../TrainingControls/TrainingControls"
import { Loader } from '../Loader/Loader'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import { observer } from 'mobx-react-lite';
import { wordsStore } from '../../store/words-store';

export const Slider = observer(({ initialSlideIndex = 0 }) => {
    const [slideIndex, setSlideIndex] = useState(initialSlideIndex);
    const [animation, setAnimation] = useState(" ");
    const [count, setCount] = useState(0);
    const [clickedWords, setClickedWords] = useState(new Set());
    const [showError, setShowError] = useState(false);

    const { words, loading, error } = wordsStore;

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
        setCount(0);
        setClickedWords(new Set());
    }

    const handleCounter = (wordId) => {
        if (!clickedWords.has(wordId)) {
            setCount((count) => count + 1);
            setClickedWords((prevClicked) => new Set(prevClicked).add(wordId));
        }
        getWordForm(count)
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

    const currentWord = wordsStore.words[slideIndex];

    if (!currentWord) {
        console.warn("Слово не найдено для индекс:", slideIndex);
        return null;
    }

    if (words.length === 0) {
        console.warn("Список слов пуст.");
        return null;
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
                            <Card
                                key={currentWord.id}
                                id={currentWord.id}
                                english={currentWord.english}
                                transcription={currentWord.transcription}
                                russian={currentWord.russian}
                                onClick={() => handleCounter(currentWord.id)}
                                visible={true}
                                show={true}
                            />
                        </SliderContent>
                        <SliderButton onClick={handleNextClick}> <FontAwesomeIcon icon={faChevronRight} /> </SliderButton>
                    </>)}
            </SliderContainer >
            <TrainingControls
                onClick={startTraining}
                count={count}
            />
        </>
    )
})


//   сделать на карточках чекбокс "выучено", в галерее добавить вариант "не показывать выученные"


// 1. Ты используешь forwardRef и ref в Modal, но нет проверки, существует ли ref.current при вызове методов showModal и close.Это может вызвать ошибку, если ref не инициализирован.Решение:
// if (ref?.current) {
//     ref.current.showModal();
// }
// fetchWords в WordsContextProvider
// В функции fetchWords ты вызываешь setLoading(true) в начале и setLoading(false) в finally. Если words загружаются локально(wordsJSON), то статус загрузки всё равно будет false до конца функции.Это может вызывать визуальные баги.Рекомендация: Убедись, что loading корректно устанавливается при всех сценариях(особенно при ошибках).
// 2. Например, в onClick внутри Card ты вызываешь toggleTranslation() и onClick(), но нет проверки, существует ли onClick.Решение:
// const toggleTranslation = () => {
//     setClicked(!isClicked);
//     if (onClick) onClick();
// };
//     4. В некоторых компонентах ты используешь async - функции внутри обработчиков, например handleDeleteClick.Если функция выбросит ошибку, это не будет корректно обработано.Рекомендация: Добавь try...catch в обработчики:
// const handleDeleteClick = async () => {
//     try {
//         await deleteWordFromServer(word);
//     } catch (error) {
//         toast.error('Ошибка при удалении');
//     }
// };

