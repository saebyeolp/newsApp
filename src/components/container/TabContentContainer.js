import React,{ Component } from 'react'
import { Tab, Text } from 'native-base'

import { getArticles } from '../../service/api'
import TabContent from '../tabs/TabContent'
import { Alert } from 'react-native'

class TabContentContainer extends Component {
    state = {
        articles: [],
        isLoading: true,
        source: this.props.source || 'bbc-news'
    }

    componentDidMount(){
        const { source } = this.state
        this.fetchNews()
    }

    //API Call Functions

    fetchNews = async (source) => {
        getArticles(source).then(articles => {
            console.log('articles', articles)
            this.setState({
                articles: articles,
                isLoading: false
            })
        },error => {
            Alert.alert('Error', 'something went wrong')
        })
    }

    render() {
        return (
            <Text>Hello</Text>
        )
    }
}

export default TabContentContainer