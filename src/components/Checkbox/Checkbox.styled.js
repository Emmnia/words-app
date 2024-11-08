import styled from "styled-components"

export const CheckboxInput = styled.input.attrs({
    type: "checkbox"
})`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;

    &:checked + span svg path {
        transition: stroke-dashoffset 0.4s;
        stroke-dashoffset: 0;
    }
`

export const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const CheckboxText = styled.span`
    font-size: 15px;
`

export const CheckboxSymbol = styled.span`
    display: inline-block;
    display: flex;
    margin-right: calc(1.2em * 0.7);
    border: 1px solid #E55D87;
    position: relative;
    border-radius: 0.1em;
    width: 1.5em;
    height: 1.5em;
    transition: box-shadow 0.4s cubic-bezier(.11,.29,.18,.98), background-color 0.4s;
    box-shadow: 0 0 0 0 rgb(95 17 232 / 10%);

    &:after {
        content: "";
        position: absolute;
        top: 0.5em;
        left: 0.5em;
        width: 0.25em;
        height: 0.25em;
        background-color: rgb(95 17 232 / 20%);
        opacity: 0;
        border-radius: 3em;
        transform: scale(1);
        transform-origin: 50% 50%;
    }
`
export const CheckboxIcon = styled.svg.attrs({
    "aria-hidden": "true",
    width: "28px",
    height: "28px",
    viewBox: "0 0 28 28",
    version: "1",
    xmlns: "http://www.w3.org/2000/svg"
})`
    width: 1em;
    height: 1em;
    margin: auto;
    fill: none;
    stroke-width: 3;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
    color: #E55D87;
    display: inline-block;

    & path {
        transition: stroke-dashoffset 0.2s ease-in;
        stroke-dasharray: 30px, 31px;
        stroke-dashoffset: 31px;
    }
`