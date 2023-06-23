import { useRouter } from 'expo-router'
import React, {useState} from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native'
import { icons, SIZES } from '../../../constants'

import styles from './welcome.style'

// const jobTypes =['Full Time', 'Part Time', 'Contract', 'Freelance']
const jobTypes= ['Full Time', 'Part Time', 'Contract']
const Welcome = () => {
  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState(jobTypes[0])
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Username</Text>
        <Text style={styles.welcomeMessage}>Find your dream job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder='What are you looking for?'
            placeholderTextColor='#000'
            value=''
            onChange={() => {}}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}
            >
            <Text style={styles.tabText(activeJobType, item)}>{item}
            </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          horizontal
          contentContainerStyle={{columnGap: SIZES.small}}
        />
      </View>
    </View>
  )
}

export default Welcome