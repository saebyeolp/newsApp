import React from 'react'
import { Container, List } from 'native-base'
import { StyleSheet } from 'react-native'


const TabContent = (props) => {

    const { articles, articleData, isLoading } = props

    const renderArticle = () => (
        <List
            dataArray={articles}
            renderRow={(article) => {
                return (
                    <Article />
                )
            }}
        >
        </List>
    )

    return(
        <Container></Container>
    )
}

export default TabContent