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
// 3. В поле transcription ты добавляешь квадратные скобки[] автоматически, но пользователь может их включить вручную.Это приведёт к дублированию.Нет проверки на это.Рекомендация: Убедись, что квадратные скобки добавляются только один раз:
// transcription: data.transcription.startsWith('[') ? data.transcription : `[${data.transcription}]`,
//     4. В некоторых компонентах ты используешь async - функции внутри обработчиков, например handleDeleteClick.Если функция выбросит ошибку, это не будет корректно обработано.Рекомендация: Добавь try...catch в обработчики:
// const handleDeleteClick = async () => {
//     try {
//         await deleteWordFromServer(word);
//     } catch (error) {
//         toast.error('Ошибка при удалении');
//     }
// };
// 5. В WordsContextProvider у тебя есть зависимость[lastShownDate, setLastShownDate, setWordId, wordId], но setLastShownDate и setWordId — это функции, и они не должны быть в массиве зависимостей.Решение: Оставь только lastShownDate и wordId.
// 6. В Slider ты рендеришь все слова, а не только текущую карточку.Это увеличивает нагрузку при большом количестве слов.Решение: Рендери только текущую карточку.
// {
//     words[slideIndex] && (
//         <Card {...words[slideIndex]} />
//     )
// }