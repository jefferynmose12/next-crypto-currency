import axios from 'axios';
import { useCallback, useEffect, useState } from 'react'

function useFetch() {
  const [cards, setCards] = useState([])

  const fetchCryptoCurrencies = useCallback(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
    .then((res) => {
      setCards(res?.data)
    })
    .catch((e) => {
      console.log(e);
    })
  }, [])

  useEffect(() => {
    fetchCryptoCurrencies()
  }, [])

  return { cards }
}
export default useFetch