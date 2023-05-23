import axios from 'axios';
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router';

function useSinglePage() {

  const router = useRouter();

  const id = router.query.id

  const [ singleCurrency, setSingleCurrency ] = useState({})

  const fetchDetails = useCallback(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((res) => {
      setSingleCurrency(res?.data)
    })
    .catch((e) => {
      console.log(e);
    })
  }, [id])

  useEffect(() => {
    fetchDetails()
  }, [])

  return { singleCurrency }
}

export default useSinglePage