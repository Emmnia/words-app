import { SliderMessageWrapper, SliderMessageText, SliderMessageButton, SliderImageWrapper, SliderMessageImage, SliderMessageAnimation } from './Slider.styled'
import owlPicture from '/assets/images/owl_big.png'
import heart from '/assets/images/heart_animation.gif'

export const SliderMessage = ({ onClick }) => {
    return (
        <SliderMessageWrapper>
            <SliderMessageText>Bravo! You've learned all the words, and the Owl is very impressed. Start over?</SliderMessageText>
            <SliderImageWrapper>
                <SliderMessageImage src={owlPicture} alt="Owl with beating heart" />
                <SliderMessageAnimation src={heart}></SliderMessageAnimation>
            </SliderImageWrapper>
            <SliderMessageButton onClick={onClick}>Start new revision</SliderMessageButton>
        </SliderMessageWrapper>
    )
}
