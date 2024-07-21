import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsApiHeaders = {
    'x-rapidapi-key': '18b2eb069cmsh9500008435bd7fdp14745fjsnd8b847bfc311',
    'x-rapidapi-host': 'seeking-alpha.p.rapidapi.com'
};

const baseUrl = 'https://seeking-alpha.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: newsApiHeaders });

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/v2/list?size=${count}&category=market-news::crypto&number=1`),
        })
    })
});

export const { useGetNewsQuery } = newsApi;