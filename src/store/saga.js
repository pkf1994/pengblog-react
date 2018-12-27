import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { GET_HOME_ARTICLE_LIST_DATA } from './actionTypesWithSaga'

import { ArticleRequest } from './request'


function* ajaxHomeArticleListData(action) {
    try{
        const res = yield ArticleRequest.RequestArticleListData(action.value.startIndex, action.value.pageScale)
        console.log(res)
    }catch (err) {
        console.log('ERR IN ACTION: GET_HOME_ARTICLE_LIST_DATA  ERR: ' + err)
    }


}

function* mySaga() {
    yield takeEvery(GET_HOME_ARTICLE_LIST_DATA, ajaxHomeArticleListData);
}

export default mySaga;