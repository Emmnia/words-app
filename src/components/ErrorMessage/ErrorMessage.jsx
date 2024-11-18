import { ErrorContainer, ErrorContent, ErrorAnimation, ErrorWord, ErrorText } from "./ErrorMessage.styled"
import { WordsContext } from '../../store/words-context'
import { useContext } from "react"

export const ErrorMessage = () => {
    const { error } = useContext(WordsContext);

    return (
        <ErrorContainer>
            <ErrorContent>
                <ErrorAnimation />
                <ErrorWord>Ошибка:</ErrorWord>
                <ErrorText>{error.message}</ErrorText>
            </ErrorContent>
        </ErrorContainer>
    )
}
