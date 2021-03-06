import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {ArticleEditor,TitleImage} from './components'
import {ArticleEditorPageWrapper,ArticleEditorPageMainArea,
        ArticleEditorWrapper,
        TitleImageWrapper,
        ArticleTitleTextArea,
        TitleLengthWarn,
        ArticleMetaWrapper,Cover,
        Gap} from "./style";
import {CommonClassNameConstants} from "../../commonStyle";
import {Input, ScrollToThePositionOnMount} from '../../common'
import {AutoInput, AutoTextarea} from "../../exJs";
import {createAppointArticleEditInfoAction,
        createGetDraftDataAction,
        createSaveArticleAction,
        createTriggerArticleSubmitableAction,
        createTriggerShowSaveTagAction,
        createTriggerIsSavingDraftAction,
        createUpdateDraftCacheAction} from './store'
import { TITLE,LABEL,AUTHOR} from './constant'
import store from '../../store'
import {createPushPrograssToEndAction} from "../articlePage/store";


class ArticleEditPage extends PureComponent {

    constructor(props){
        super(props)

        this.state = {
            showCover: false
        }
    }

    render() {

        const { title,
                appointArticleEditInfo,
                maxTitleLength,
                label,
                author,
                isSaving,
                isSavingArticle,
                isMobile} = this.props

        const {showCover} = this.state

        let remnantTitleLength = maxTitleLength - (title ? title.length : 0)


        return (
            <ArticleEditorPageWrapper  className={CommonClassNameConstants.FLEX_ROW_COLUMN_CENTER}>



                <ArticleEditorPageMainArea>
                    {
                        !isMobile &&
                        <TitleImageWrapper>
                            <TitleImage/>
                        </TitleImageWrapper>
                    }


                    <ArticleTitleTextArea rows="1"
                                          onKeyDown={keydownHandler}
                                          placeholder="请输入标题"
                                          id="titleTextarea"
                                          value={title}
                                          onChange={(event) => {appointArticleEditInfo(isSaving,isSavingArticle,event, TITLE)}}/>

                    {
                        remnantTitleLength < 20 &&
                        <TitleLengthWarn className={CommonClassNameConstants.FONT_DARK}>
                            {
                                remnantTitleLength  > 0 ?
                                    <span>还可以输入{remnantTitleLength}个字</span>
                                    :
                                    <span style={{color:'red'}}>已超过{-remnantTitleLength}个字</span>
                            }

                        </TitleLengthWarn>
                    }

                    <ArticleMetaWrapper>
                        {/*<ArticleMetaInput id='labelInput'
                                          value={label}
                                          onChange={(event) => {appointArticleEditInfo(event, LABEL)}}
                                          placeholder="标签"
                                          type="text"
                                          maxLength={11}
                                          backgroundColor="rgba(0, 132, 255, 0.1)"/>*/}
                        <Input id='labelInput'
                               value={label}
                               onChange={(event) => {appointArticleEditInfo(isSaving,isSavingArticle,event, LABEL)}}
                               placeholder="标签"
                               type="text"
                               fontSize={22}
                               padding="0.6rem 0.6rem"
                               maxLength={11}
                               backgroundColor="rgba(0, 132, 255, 0.1)"
                               disableFocusStyle={true}
                               iconClassName="fa fa-tag"
                               iconColor="rgba(0, 132, 255, 1)"
                               fontColor="rgba(0, 132, 255, 1)"/>

                        <Gap>&nbsp;&nbsp;</Gap>

                        {/*<ArticleMetaInput id='authorInput'
                                          value={author}
                                          onChange={(event) => {appointArticleEditInfo(event, AUTHOR)}}
                                          placeholder="署名"
                                          type="text"
                                          maxLength={20}
                                          backgroundColor="rgba(0, 255, 132, 0.1)"/>*/}
                        <Input id='authorInput'
                               value={author}
                               onChange={(event) => {appointArticleEditInfo(isSaving,isSavingArticle,event, AUTHOR)}}
                               placeholder="署名"
                               type="text"
                               fontSize={22}
                               padding="0.6rem 0.6rem"
                               maxLength={11}
                               backgroundColor="rgba(0, 255, 132, 0.1)"
                               disableFocusStyle={true}
                               iconClassName="fa fa-pencil"
                               iconColor="#44BB44"
                               fontColor="#44BB44"/>
                    </ArticleMetaWrapper>

                    <ArticleEditorWrapper>
                        <ArticleEditor/>
                    </ArticleEditorWrapper>

                </ArticleEditorPageMainArea>

                <ScrollToThePositionOnMount/>

                {
                    showCover &&
                    <Cover/>
                }

            </ArticleEditorPageWrapper>
        )
    }

    componentDidMount(){
        initTitleTextarea()
        initMetaInput()
        this.props.initDraftData()
        if(this.props.draftCache !== undefined && this.props.articleEditor !== undefined){
            this.props.pushPrograssBarToEnd()
        }
    }

    componentDidUpdate(preProps,prevState){
        if((preProps.draftCache === undefined && this.props.draftCache !== undefined && this.props.articleEditor !== undefined)
            ||
            (this.props.draftCache !== undefined && preProps.articleEditor === undefined && this.props.articleEditor !== undefined)){
            this.props.pushPrograssBarToEnd()
        }

        if(!preProps.isSavingArticle && this.props.isSavingArticle){
            this.setState({
                showCover: true
            })
        }
    }
}

const mapState = (state) => ({
    title: state.get('articleEditPage').get('title'),
    maxTitleLength: state.get('articleEditPage').get('maxTitleLength'),
    label: state.get('articleEditPage').get('label'),
    author: state.get('articleEditPage').get('author'),
    id: state.get('articleEditPage').get('id'),
    isMobile: state.get('rootState').get('isMobile'),
    articleEditor: state.get('articleEditor').get('editor'),
    draftCache: state.get('articleEditPage').get('draftCache'),
    isSaving: state.get('articleEditPage').get('isSaving'),
    isSavingArticle: state.get('articleEditPage').get('articleEditPageHeader').get('isSavingArticle'),
})

const mapActions = (dispatch) => ({
    appointArticleEditInfo(isSaving, isSavingArticle, event, infoType) {
        const appointArticleEditInfoActionValue = {
            infoType: infoType,
            infoValue: event.target.value
        }
        const appointArticleEditInfoAction = createAppointArticleEditInfoAction(appointArticleEditInfoActionValue)
        dispatch(appointArticleEditInfoAction)

        if(isSaving || isSavingArticle){
            return
        }

        window.throttleByDelay(() => {

            saveArticle(dispatch, 'draft')

        },1000,{page:'articleEditPage'})

        window.throttleByDelay(() => {

            checkIfSubmitable(dispatch)

        },1000,{page:'articleEditPage',method: 'checkIfSubmitable'})
    },
    initDraftData() {
        const getDraftDataAction = createGetDraftDataAction()
        dispatch(getDraftDataAction)
    },
    test(){
        console.log('test')
    },
    pushPrograssBarToEnd() {
        const pushPrograssBarToEndAction = createPushPrograssToEndAction({page: 'articleEditPage'})
        dispatch(pushPrograssBarToEndAction)
    }
})

export default connect(mapState,mapActions)(withRouter(ArticleEditPage))

const keydownHandler = (event) => {
    if(event.keyCode === 13){
        if (window.event) {
            window.event.returnValue = false;
        } else {
            event.preventDefault(); //for firefox
        }
    }
}

const initTitleTextarea = () => {
    let titleTextarea = document.getElementById("titleTextarea")
    AutoTextarea(titleTextarea)
}

const initMetaInput = () => {
    let labelInput = document.getElementById('labelInput')
    let authorInput = document.getElementById('authorInput')
    AutoInput(labelInput,22)
    AutoInput(authorInput,22)
}

export const saveArticle = (dispatch, articleType, clickToSave) => {

    const draftCache = store.getState().get('articleEditPage').get('draftCache')
    //判断系由点击发布按钮触发还是由input的change事件触发，如果是后者,则需要判断是否与获取的草稿数据是否一致，如果一致，则无需上传新的文章数据
    if(!clickToSave && draftCache){

        if(draftCache.get('article_title') === store.getState().get('articleEditPage').get('title')
        &&
        draftCache.get('article_author') === store.getState().get('articleEditPage').get('author')
        &&
        draftCache.get('article_label') === store.getState().get('articleEditPage').get('label')
        &&
        draftCache.get('article_content') === store.getState().get('articleEditor').get('content') ? store.getState().get('articleEditor').get('content') : ''
        &&
        draftCache.get('article_titleImageUrl') === store.getState().get('articleEditPage').get('article_titleImageUrl')
        ){
            return
        }
    }

    //判断所有元素是否都为‘’，如果是，无需上传新的文章
    if(store.getState().get('articleEditPage').get('title') === ''
    &&
    store.getState().get('articleEditPage').get('author') === ''
    &&
    store.getState().get('articleEditPage').get('label') === ''
    &&
    (store.getState().get('articleEditor').get('content') ? store.getState().get('articleEditor').get('content') : '' )=== ''
    ){
        return
    }


    let articleData = {
        article_id: store.getState().get('articleEditPage').get('id'),
        article_title: store.getState().get('articleEditPage').get('title'),
        article_author: store.getState().get('articleEditPage').get('author'),
        article_label: store.getState().get('articleEditPage').get('label'),
        article_content: store.getState().get('articleEditor').get('content') ? store.getState().get('articleEditor').get('content') : '',
        article_type: articleType,
        article_titleImageUrl: store.getState().get('titleImage').get('imageUrl'),
        goTo: store.getState().get('router').get('goTo')
    }

    const updataDraftCacheAction = createUpdateDraftCacheAction(articleData)
    dispatch(updataDraftCacheAction)

    setTimeout(() => {
        const saveArticleAction = createSaveArticleAction(articleData)
        dispatch(saveArticleAction)
    },300)

    if(articleType === 'draft'){

        const triggerIsSavingDraftAction = createTriggerIsSavingDraftAction(true)
        dispatch(triggerIsSavingDraftAction)

        const triggerShowSaveTagAction = createTriggerShowSaveTagAction(true)
        dispatch(triggerShowSaveTagAction)
    }
}

export const checkIfSubmitable = (dispatch) => {

        let article_title = store.getState().get('articleEditPage').get('title')
        let article_author = store.getState().get('articleEditPage').get('author')
        let article_label = store.getState().get('articleEditPage').get('label')
        let article_content = store.getState().get('articleEditor').get('content') ? store.getState().get('articleEditor').get('content') : ''

        if(checkItemLength(article_title, 0, 50) 
            && checkItemLength(article_author, 1, 15)
            && checkItemLength(article_label, 1, 10)
            && checkItemLength(article_content, 20, 20000)){
            const triggerArticleSubmitableAction = createTriggerArticleSubmitableAction(true)
            dispatch(triggerArticleSubmitableAction)
        }else{
            const triggerArticleSubmitableAction = createTriggerArticleSubmitableAction(false)
            dispatch(triggerArticleSubmitableAction)
        }
}

const checkItemLength = (item, leftPoint, rightPoint) => {
    if(!item){
        return false
    }
    return item.length > leftPoint && item.length <= rightPoint
}

