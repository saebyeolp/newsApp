import React from 'react'
import { Container, List } from 'native-base'
import { StyleSheet } from 'react-native'

import Article from '../Article'
import Loading from '../Loading'

import ArticleModals from '../modals/ArticleModals'

const TabContent = props => {
  const {
    articleData,
    articles,
    isLoading,
    modalVisible,
    onArticlePress,
    onArticleModalClose,
    onArticleShare
  } = props

  const renderLoadingState = () => (
    <Loading isLoading={isLoading} style={styles.loadingState} />
  )

  const renderArticles = () => (
    <List
      dataArray={articles}
      renderRow={article => {
        return <Article article={article} onPress={onArticlePress} />
      }}
      keyExtractor={(article, index) => index.toString()}
    />
  )

  const renderContent = () =>
    isLoading ? renderLoadingState() : renderArticles()
  return (
    <Container>
      {renderContent()}
      <ArticleModals
        articleData={articleData}
        onClose={onArticleModalClose}
        onShare={onArticleShare}
        showModal={modalVisible}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  loadingState: {
    marginTop: 250
  }
})

export default TabContent

// code from https://github.com/paulhklam1122/news-app-wmdd-4999-sept-2020