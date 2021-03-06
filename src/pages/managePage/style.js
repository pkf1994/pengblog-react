import styled from 'styled-components'

const headerHeight = 70

const maxMobileWidth = 750

const milePostWidth3 = 800

const milePostWidth2 = 1200

const milePostWidth = 1440

export const CentralController = styled.div`
        position: fixed;
        top: ${headerHeight}px;
        bottom: 0;
        left: 0;
        width: 300px;
        border-right: solid 1px #EEEEEE;
        
        display: flex;
        flex-direction: column;
        
        @media(max-width:${milePostWidth3}px){
            display:none
        }
    `

export const ArticleListWrapper = styled.div`
        display: flex;
        justify-content: center;
        padding-left: 1rem;
        padding-right: 1rem;
        
        margin-left: 250px;
        width: calc(100% - 250px);
        
         @media(max-width:${milePostWidth2}px){
            margin-left: 300px;
            width: calc(100% - 300px);
        }
        
        @media(max-width:${milePostWidth3}px){
            padding: 0;
            margin-left: 0;
            width: 100%;
        }
    `

export const ArticleListFixer = styled.div`
        position: relative;
        min-height: ${props => props.heightOfBrowser - 70}px;
        width: 1000px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
         @media(max-width:${milePostWidth}px){
            width: 100%;
        }
    `

export const ArticleList = styled.div`
        flex-grow: 1;
        display:flex;
        flex-direction: column;
    `

export const Title = styled.div`
        padding: 1rem 2rem;
        padding-bottom: 0;
        font-size: 2rem;
        font-weight: 100;
        margin-bottom: 1rem;
        @media(max-width:${milePostWidth3}px){
            padding: 1rem;
            padding-bottom: 0;
            
        }
    `


export const Header = styled.div`
        position: relative;
        width: 100%;
        display: flex;
        padding-bottom: 1rem;
        margin-top: 1rem;
        border-bottom: solid 2px #EEEEEE;
        color: grey;
    `


export const HeaderArticleTitle = styled.div`
        width: 55%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 2rem;
        padding-right: 1rem;
    `

export const ArticleAuthor = styled.div`
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 1rem;
        line-height: 1.4;
    `


export const MultipleSelectTitle = styled.span`
        position:absolute;
        width: 5%;
        top: 0;
        bottom: 0;
        left: 1rem;
        padding-bottom: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color:#175199;
        overflow: visible;
        white-space: nowrap;
        &:hover{
            color: black;
        }
    `

export const ShutDownMultipleSelect = styled(MultipleSelectTitle)`
        left: calc(5% + 3rem);
    `

export const ArticleLabel = styled(ArticleAuthor)`
        width: 10%;
    `


export const ArticleReleaseTime = styled(ArticleAuthor)`
        width: 20%;
    `

export const PaginationFixer = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
    `



export const LoadingWrapper = styled.div`
        width: 100%;
        height: 100%;
    `

export const ArticleDetail = styled.div`
        z-index: 2;
        position: fixed;
        right: ${props => props.showArticleDetail ? '0' : '-700px'};
        width: 700px;
        top: 0;
        height: 100%;
        background: gray;
        overflow-y:scroll;
        transition: all 0.4s ease; 
    `

export const CentralControllerMobile = styled.div`
        
        border-bottom: solid 1px #f0f0f0; 
            margin 0 4rem;
            @media(max-width:${maxMobileWidth}px){
            margin: 0;
        }
    `


export const ArticleItemWrapper = styled.div`
        display: flex;
        align-items: center;
        border-bottom: solid 1px #f0f0f0; 
         @media(max-width:${milePostWidth3}px){
            margin: 0 4rem;
        }
         @media(max-width:${maxMobileWidth}px){
            margin: 0;
        }
    `

export const FreshCommentsTitle = styled.div`
        font-size: 1.2rem;
        font-weight: bold;
        padding-bottom: 0.8rem;
        margin: 1rem 2rem;
        margin-bottom: 0.5rem;
        border-bottom: solid 1px #f0f0f0;
    `

export const TriggerShowMoreIndexButton = styled.div`
        padding: 0.4rem 0;
        display: flex;
        color: grey;
        justify-content: center;
        align-items: center;
        border-top: solid 1px #f0f0f0;
    `

export const MoreIndex = styled.div`
    position:relative;
        height: ${props => props.showMoreIndex ? '8.5rem' : '0'};
        overflow-Y: ${props => props.showMoreIndex ? 'visible' : 'hidden'};
        opacity: ${props => props.showMoreIndex ? '1' : '0'};
        transition: all 0.4s ease;
       
    `