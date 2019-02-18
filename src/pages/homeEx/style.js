import styled from 'styled-components'

const headerHeight = 70

const milePostWidth = 1000

const maxMobileWidth = 750

export const ArticleListWrapper = styled.div`
        position: fixed;
        top: ${headerHeight}px;
        bottom: 0;
        left: 0;
        width: 400px;
        overflow-y:scroll;
        ${props => props.browser !== 'Safari' ? `&::-webkit-scrollbar{
            width:10px;
            height:1px;
        }
        &::-webkit-scrollbar-thumb{
            background: #DDDDDD;
        }
        &::-webkit-scrollbar-track{
            background: white;
        }` : ''}
        @media(max-width:${milePostWidth}px){
            width: 300px;
        }
        @media(max-width:${maxMobileWidth}px){
            position: static;
            width: 100%;
            &::-webkit-scrollbar{
                width:0;
                height:0;
            }
        }
    `


export const ArticleDetailWrapper = styled.div`
        margin-left: 400px;
        width: calc(100% - 400px);
        display: flex;
        padding: 0 1rem;
        @media(max-width:${milePostWidth}px){
            margin-left: 300px;
            width: calc(100% - 300px);
        }
         @media(max-width:${maxMobileWidth}px){
            display: none;
        }
    `

export const ArticleDetailFixer = styled.div`
        width: 700px;
         @media(max-width:${milePostWidth}px){
            width: 100%;
        }
    `

export const LoadingWrapper = styled.div`
        position: fixed;
        width: 100%;
        height: 100%;
    `

