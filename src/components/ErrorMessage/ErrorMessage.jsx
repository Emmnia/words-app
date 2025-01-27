import { observer } from 'mobx-react-lite';

import { ErrorAnimation, ErrorContainer, ErrorContent, ErrorText, ErrorWord } from './ErrorMessage.styled'
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
