import styled from 'styled-components'
//import jumbotronImageWrapper from '../../../../image/jumbotronWrapper2.png'

export const JumbotronWrapper = styled.div`
        display:flex;
        flex-direction: column;
        justify-content: center;
        height: 400px;
        padding: 4rem 2rem;
        width: 750px;
        background: #eeeeee;
        position: relative;
    `


export const Title = styled.div`
        font-size: 2.4rem;
        line-height: 1.2em;
        margin-bottom: 10px;
        font-weight: lighter;
        width: 60%;
        display: -webkit-box;
        /* autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: on */
        -webkit-line-clamp: 4;
        overflow: hidden;
    `

export const Summary = styled.div`
        font-size: 1.2rem;
        line-height: 1.2em;
        font-weight: 100;
        width: 60%;
        display: -webkit-box;
        /* autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: on */
        -webkit-line-clamp: 4;
        overflow: hidden;
    `

export const ImageWrapper = styled.div`
        position: absolute;
        top: 4rem;
        bottom: 4rem;
        left: 60%;
        right: 2rem;
        overflow: hidden;
    `

export const ImageFirst = styled.div`
        border-radius: 2px;
        position: absolute;
        top: 0px;
        bottom: 45%;
        left: 0px;
        right: 0px;
        background: url(${props => props.imgUrl}) no-repeat center center;
        background-size: cover;
    `

export const ImageSecond = styled(ImageFirst)`
        border-radius: 2px; 
        top: 56%;
        bottom: 0px;
        left: 0px;
        right: 50%;
    `

export const ImageThird = styled(ImageFirst)`
        border-radius: 2px;
        top: 56%;
        bottom: 0px;
        left: 51%;
        right: 0px;
    `

export const PlaceholderWrapper = styled.div`
        height: 285px;
        width: 686px;
        padding: 38px 10px;
    `

