import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'ceac6a8887mshb814d6e541d099cp13b8ccjsn7092d03d92df',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders})
export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) =>({
        getCryptosNews: builder.query({
            query: ({newsCatagory, count}) => createRequest(`/news/search?q=${newsCatagory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),
    }),
 
});

export const {
    useGetCryptosNewsQuery 
}= cryptoNewsApi;




// const options = {
//     method: 'GET',
//     url: ,
//     params: {
//       safeSearch: 'Off',
//       textFormat: 'Raw'
//     },
//     headers: {
//       'X-BingApis-SDK': 'true',
//       'X-RapidAPI-Key': 'ceac6a8887mshb814d6e541d099cp13b8ccjsn7092d03d92df',
//       'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//     }
//   };