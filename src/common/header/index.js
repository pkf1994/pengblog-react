import React, { PureComponent, Fragment } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import CommonHeader from './commonHeader'
import ArticleEditPageHeader from './articleEditPageHeader'

class Header extends PureComponent {


    render() {

        const {isMobile,currentPath} = this.props

        return (
            <Fragment>
                {
                    currentPath === '/edit' ?
                        <ArticleEditPageHeader/>
                        :
                        (
                            isMobile ?
                                <CommonHeader/>
                                :
                                <CommonHeader/>
                        )
                }
            </Fragment>
        );
    }

}


const mapState = (state) => {
    return  {
        isMobile: state.get('rootState').get('isMobile'),
        currentPath: state.get('router').get('currentPath')
    }
}


export default connect(mapState)(withRouter(Header))