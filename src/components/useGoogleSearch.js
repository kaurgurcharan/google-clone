import { useState, useEffect} from 'react'
import API_KEY from './keys';


const CONTEXT_KEY = "c52e9e221726b4525";

const useGoogleSearch = (term) =>  {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
      // console.log("Ravjot "+ `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
      .then(response => response.json())
      .then(result => {
        setData(result)
      })
    }
    fetchData();
  }, [term])
 return { data }
};

export default useGoogleSearch;
