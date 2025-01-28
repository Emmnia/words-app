import styled from 'styled-components';

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;  
    margin: 0 auto;
    padding: 20px;
    width: min(95%, 1170px);
    min-height: 240px;
    border-radius: 10px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.19);
`
export const FormHeading = styled.h2`
    margin-bottom: 30px;
    text-align: center;
`
export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
`
export const FormInputsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-evenly;
    align-content: center;
`
export const FormInputWrapper = styled.div`
    text-align: center;
`
export const FormInput = styled.input`
    padding: 10px 15px;
    text-align: center; 
    border-radius: 5px;
    border: 1px solid gray;
    font-family: "Wix Madefor Display", sans-serif;
`
export const FormError = styled.p`
    color: #E55D87;
`
export const FormSubmitWrapper = styled.div`
    margin-top: 20px;
    align-self: flex-end;
`
export const FormSubmit = styled.input.attrs({ type: 'submit', value: 'ADD WORD' })`
    padding: 10px 15px;
    text-align: center; 
    font-family: "Wix Madefor Display", sans-serif;
    letter-spacing: 2px;
    color: white;
    transition: 0.5s;
    background-image: ${(props) =>
        props.theme.palette.mode === 'dark'
            ? 'linear-gradient(to right, #1D2B64 0%, #F8CDDA  51%, #1D2B64  100%)'
            : 'linear-gradient(to right, #e075af 0%, #5FC3E4 51%, #e075af 100%)'};
    background-size: 200% auto;
    box-shadow: ${(props) =>
        props.theme.palette.mode === 'dark'
            ? '0 15px 35px rgba(255, 255, 255, 0.1), 0 5px 15px rgba(255, 255, 255, 0.08)'
            : '0 15px 35px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.19)'};
    border-radius: 50px;
    border: none;
    display: block;
    cursor: pointer;

    &:hover {
        background-position: right center;
        color: #fff;
        text-decoration: none;
    }

    &:active {
        transform: scale(0.95);
    }

    &:focus {
        border: 1px solid #E55D87;
    }
`
export const FormNote = styled.p`
    margin-top: 5px; 
    font-size: 12px;
    color: #888; 
`;