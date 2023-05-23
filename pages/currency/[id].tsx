import Head from "next/head";
import React from "react";
import { useRouter } from 'next/router';
import useSinglePage from '../../src/hooks/useSinglePage'
import Image from "next/image";

const Single = () => {
  const Router = useRouter();

  const { singleCurrency } = useSinglePage()

  const { name, image, market_data } : any = singleCurrency

  return (
    <>
      <Head>
        <title>CoinGecko Market Pairs (USD)</title>
      </Head>
      <main>
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-pink-100 p-5">
            <button 
              className="mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => Router.back()}
            >
              Back
            </button>
            {image ? <Image
              src={image?.large}
              alt="placeholder"
              width={200}
              height={200}
              className="object-cover object-center"
            /> : null }
            <div className="p-5 bg-white mt-4">
              <h2 className="text-xl font-semibold mb-2">{name}</h2>
              <ul className="list-disc pl-5">
                <li>Current Price: { market_data?.current_price?.usd }</li>
                <li>All time high price: { market_data?.ath?.usd }</li>
                <li>Market Cap: { market_data?.market_cap?.usd }</li>
                <li>Market Cap Rank: { market_data?.market_cap_rank }</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Single;
