import styled from 'styled-components'

const widthOfMainArea = 750

export const CommentWrapper = styled.div`
        position: relative;
        display: flex;
        align-items: stretch;
        filter: brightness(${props => props.isBeenDeleting ? '95%' : '100%'});
        background: ${props => props.isBanned ? '#F7F7F7' : 'white'};
        margin: 0 2rem;
        transition: all 0.4s ease;
        @media(max-width: ${props => props.widthOfMainArea}px) {
            margin: 0 1rem;
        }
    `

export const VisitorInfo = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-shrink: 0;
        width: 90px;
        @media(max-width: ${widthOfMainArea}px) {
            width: 65px;
        }
    `

export const AvatarWraper = styled.div`
        margin-top: 0.8rem;
        width: 55px;
        height: 55px;
        border: solid 1px #F7F7F7;
        border-radius: 0.4rem;
        background: #EEEEEE;
    `

export const Avatar = styled.div`
        
        font-size: 1.2rem;
        font-weight: bold;
        color: ${props => props.metaColor};
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: solid 0.2rem ${props => props.metaColor};
    `

export const Name = styled.div`
        width: 100%;
        
        font-size: 0.9rem;
        line-height: 1.2;
        text-align: center;
        word-wrap: break-word; 
        text-decoration: ${props => props.isBanned ? 'line-through' : 'none'};
        color: ${props => props.isBanned ? 'grey' : 'black'};
        
        margin: 1rem 0;
        padding: 0 1rem;
    `

export const Gap = styled.div`
        width: 1px;
        margin: 1rem 0;
        border-right: solid 1px #F7F7F7;
    `

export const GapH = styled.div`
        height: 1px;
        margin: 0 1rem;
        border-bottom: solid 1px #F7F7F7;
    `

export const MultiContent = styled.div`
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    `

export const ContentWrapper = styled.div`
        max-height: ${props => props.showAll ? props.heightOfCommentContent + 'px' : '210px'};
        transition: all 0.4s ease;
        overflow: hidden;
        flex-grow: 1;    
    `

export const Content = styled.div`
        font-size: 0.9rem;
        line-height: 1.5;
        padding: 0.8rem 1rem;
        text-decoration: ${props => props.isBanned ? 'line-through' : 'none'};
        color: ${props => props.isBanned ? 'grey' : 'black'};
        @media(min-width: ${widthOfMainArea}px) {
            padding-right: 0;

        }    
    `

export const OperationBar = styled.div`
        padding: 0.8rem 1rem;
        font-size: 0.9rem;
        text-align: right;
    `

export const ReplyButton = styled.span`
        color: grey;
        cursor: pointer;
        &:hover{
            color: black;
        }
    `

export const DeleteButton = styled.i`
        color: grey;
        cursor: pointer;
        &:hover{
            color: black;
        }
    `

export const BanButton = styled(DeleteButton)`
        cursor: ${props => props.isBanned ? 'default' : 'pointer'};
        &:hover{
            color: ${props => props.isBanned ? 'grey' : 'black'};;
        }
    `

export const LiftedButton = styled.span`
        cursor: pointer;
        color: grey;
        &:hover{
            color: black;
        }
    `

export const SubCommentEditorWrapper = styled.div`
        height: ${props => props.showSubCommentEditor ? window.heightOfSubCommentEditor + 16 + 'px' : '0'};
        overflow: ${props => props.showSubCommentEditor ? 'visible' : 'hidden'};
        opacity: ${props => props.showSubCommentEditor ? '1' : '0'};
        transition: all 0.4s ease;
    `

export const ShowAll = styled.span`
        cursor: pointer;
        &:hover{
            color: black;
        }
    `