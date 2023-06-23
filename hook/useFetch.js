import axios from "axios";
import { useState, useEffect } from "react";
// import {RAPID_API_KEY} from '@env'

// const rapidApiKey = RAPID_API_KEY

const useFetch = (endpoint, query) =>{
    const [data, setData ]= useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


//fetching data
const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  headers: {
    
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  },
  params: {
    ...query
  },
  
};

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

const fetchData = async () =>{
    setLoading(true)
    
    try{
        const response = await axios.request(options)

        setData(response.data.data)
        setLoading(false)
    }catch(error){
        setError(error)
        alert('There is an error')
        console.log(error)
        
    }finally{
        setLoading(false)
    }
}

useEffect(() =>{
    fetchData()
}
,[]);

const refetch = () =>{
    setLoading(true)
    fetchData()
}

return {data, loading, error, refetch};
}
export default useFetch;