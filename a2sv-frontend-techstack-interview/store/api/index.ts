import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const hospitalApi = createApi({
  reducerPath: "hospitalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hakimhub-api-dev-wtupbmwpnq-uc.a.run.app/api/v1/",
  }),
  endpoints: (builder) => ({
    getInfo: builder.mutation({
      query: () => ({
        url: "search?institutions=true&articles=false&doctors=false",
        method: "POST",
      }),
    }),

    searchInfo: builder.mutation({
      query: (initialstate) => ({
        url: `search?keyword=${initialstate}&institutions=true&articles=false&doctors=false`,
        method: "POST",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetInfoMutation, useSearchInfoMutation } = hospitalApi;
