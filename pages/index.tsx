import useFetch from "@/src/hooks/useFetch";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { CardBoxProps } from '../src/type'
import { useRouter } from "next/router";

const Home: React.FC = () => {
  const Router = useRouter();

  const { cards } = useFetch()

  return (
    <>
      <Head>
        <title>CoinGecko Market Pairs (USD)</title>
      </Head>
      <main>
        <div className="bg-white pt-8 pb-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-sm">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Market Pairs (USD)
            </h1>
            <p className="text-xl text-center text-gray-600">
              The following is a list of crypto currencies with information
              related to the USD trading pair.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* End hero unit */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cards.slice(0, 45)?.map(({id, image, name, current_price, high_24h, low_24h } : CardBoxProps, card: any ) => (
              <div key={name} className="flex flex-col">
                <Image
                  src={image}
                  alt="placeholder"
                  width={200}
                  height={200}
                  className="object-cover object-center"
                />
                <div className="flex-1 p-4 bg-white my-2">
                  <h2 className="text-xl font-semibold mb-2">{name}</h2>
                  <ul className="list-disc pl-5">
                    <li>Current Price: {current_price}</li>
                    <li>24h High: {high_24h}</li>
                    <li>24h Low: {low_24h}</li>
                  </ul>
                </div>
                <div className="p-4">
                  <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => Router.push(`/currency/${id}`)}
                  >
                    More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
