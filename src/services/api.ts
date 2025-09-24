import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Restaurante } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => '/restaurantes'
    }),
    getRestaurante: builder.query<Restaurante, string>({
      query: (id) => `/restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantesQuery, useGetRestauranteQuery } = api
export default api
