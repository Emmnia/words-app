import { ErrorContainer, ErrorContent, ErrorAnimation, ErrorWord, ErrorText } from './ErrorMessage.styled'
import { observer } from 'mobx-react-lite';
import { wordsStore } from '../../store/words-store';

export const ErrorMessage = observer(() => {
    const { error } = wordsStore;

    return (
        <ErrorContainer>
            <ErrorContent>
                <ErrorAnimation />
                <ErrorWord>Ошибка:</ErrorWord>
                <ErrorText>{error.message}</ErrorText>
            </ErrorContent>
        </ErrorContainer>
    )
})
