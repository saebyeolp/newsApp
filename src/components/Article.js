import React from 'react'
import {
  ListItem,
  Left,
  Right,
  Thumbnail,
  Body,
  View,
  Text,
  Button
} from 'native-base'
import { StyleSheet } from 'react-native'

import Time from './Time'



const Article = (props) => {
    const { article, onPress } = props
    const { description, publishedAt, title, url, urlToImage } = article
    return(
        <ListItem thumbnail key={title}>
            <Left>
            <Thumbnail
                square
                source={{
                    uri:
                    urlToImage ||
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII='
                }}
            />
            </Left>
            <Body>
                <Text numberOfLines={2}>{title}</Text>
                <Text note numberOfLines={2}>{description}</Text>
                <View style={styles.textContainer}>
                    <Text style={{paddingRight: 5, fontSize: 14, color: '#9e9e9e'}} node>{article.source.name}</Text>
                    <Time time={publishedAt}/>
                </View>
            </Body>
            <Right>
                <Button
                    transparent
                    onPress={() => onPress({title,url})}
                >
                    <Text>View</Text>
                </Button>
            </Right>
        </ListItem>
    )
}

const styles = StyleSheet.create({
    textContainer: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 8,
      marginLeft: 0
    }
})

export default Article

// code from https://github.com/paulhklam1122/news-app-wmdd-4999-sept-2020