import {GET_MANAGE_PAGE_ARTICLE_LIST_DATA,
        TRIGGER_ISLOADING_MANAGE_PAGE_ARTICLE_LIST_DATA,
        GET_MANAGE_PAGE_ARTICLE_FILING_DATA,
        GET_MANAGE_PAGE_ARTICLE_LABEL_DATA,
        GET_MANAGE_PAGE_ARTICLE_LIST_DATA_BY_KEY_WORD} from './actionType'

export const createGetManagePageArticleListDataAction = (value) => ({
    type: GET_MANAGE_PAGE_ARTICLE_LIST_DATA,
    value
})

export const createTriggerIsLoadingManagePageArticleListDataAction = (value) => ({
    type: TRIGGER_ISLOADING_MANAGE_PAGE_ARTICLE_LIST_DATA,
    value
})

export const createGetManagePageArticleFilingDataAction = () => ({
    type: GET_MANAGE_PAGE_ARTICLE_FILING_DATA
})

export const createGetManagePageArticleLabelDataAction = () => ({
    type: GET_MANAGE_PAGE_ARTICLE_LABEL_DATA
})

export const createGetManagePageArticleListDataByKeyWordAction = (value) => ({
    type: GET_MANAGE_PAGE_ARTICLE_LIST_DATA_BY_KEY_WORD,
    value
})