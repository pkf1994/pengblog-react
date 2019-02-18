import styled from 'styled-components'

const widthOfMainArea = 750
const maxMobileWidth = 750

const backgroundColor = '#F7F7F7'

export const SearchBarWrapper = styled.div`
        width: 100%;
        position: relative;
        padding: 1rem 2rem;
    `

export const Input = styled.input`
        color:${props => props.fontColor ? props.fontColor : 'black'};
        width: 80%;
        background: ${props => props.backgroundColor ? props.backgroundColor : '#F7F7F7'};
        font-size: ${props => props.fontSize ? props.fontSize + 'px' : '1rem'};
        outline: none;
        border-radius: 0.4rem;
        padding: ${props => props.padding ? props.padding : '0.5rem'};
        border: solid 1px ${props => props.showWarn ? 'red' : backgroundColor};
        transition: all 0.4s ease;
         &:focus{
            background: white;
            border: solid 1px #E6E6E6;
            width: 100%;
         }
    `

export const SubmitButton = styled.button`
        padding: 0 0.8rem;
        outline: none;
        cursor: pointer;
        position: absolute;
        right: ${props => props.isFocus ? '2rem' : 'calc(16% + 2rem)'};
        color: white;
        height: calc(100% - 2rem);
        background: #0084FF;
        border: 1px solid ${props => props.borderColor ? props.borderColor : "#0084FF"};
        border-radius: 0.4rem;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
         transition: all 0.4s ease;
         &:hover{
            background: hsl(209, 100%, 45%);
         }
    `

export const SearchTitle = styled.div`
        cursor: pointer;
        color: grey;
        font-size: 1.2rem;
        position: absolute;
        height: calc(100% - 2rem);
        right: 0rem;
        top: 1rem;
        width: calc(16% + 2rem);
        
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: ${props => props.isFocus ? '0' : '1'};
        transition: all 0.4s ease;
        &:hover{
            color: black;
        }
    `