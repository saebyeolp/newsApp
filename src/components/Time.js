import React from 'react'
import { Text } from 'native-base'
import { StyleSheet } from 'react-native'
import moment from 'moment'

const Time = props => {
    const { time } = props
    const timeDisplay = moment(time || moment.now()).fromNow()
    return (
      <Text note style={StyleSheet.time}>
        {timeDisplay}
      </Text>
    )
  }
  
  const styles = StyleSheet.create({
    time: {
      marginHorizontal: 10
    }
  })
  
  export default Time

  // code from https://github.com/paulhklam1122/news-app-wmdd-4999-sept-2020