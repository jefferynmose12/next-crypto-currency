export type CardBoxProps = {
    id : string,
    image : string,
    name : string,
    current_price : number,
    high_24h : number,
    low_24h : number
}

export type SinglePageProps = {
    name : string,
    image : {
        large : string
    },
    market_data : {
        current_price : {
            usd : number
        }, 
        ath : {
            usd : number
        },
        market_cap  : {
            usd : number
        }, 
        market_cap_rank : number
    },
    
}