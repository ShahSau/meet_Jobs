import { useRouter } from 'expo-router'
import React, {useState} from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator,FlatList } from 'react-native'
import { COLORS, SIZES } from '../../../constants'
import styles from './popularjobs.style'
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch'

const Popularjobs = () => {
  const router = useRouter()
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(false)

  const {data, loading, error} = useFetch('search',{
    query: 'React Developer',
    num_pages:1,
  })

  console.warn(data)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ):error ? (
          <Text>Something went wrong!</Text>
        ):(
          <FlatList
            data={[1,2,3,4,5,6,7,8,9,10]}
            keyExtractor={(item) => item ?.job_id}
            horizontal
            renderItem={({item}) => (
              <PopularJobCard 
                item={item}
              />
            )}
            contentContainerStyle={{columnGap: SIZES.medium}}
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs