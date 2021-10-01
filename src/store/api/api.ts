import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { PicsumMeta } from "../state"
import { fetchSettings } from "./configure-base-query"
import { xformToCamelCase } from "./xform-camel"

export const api = createApi({
  baseQuery: fetchBaseQuery(fetchSettings),
  endpoints: (build) => ({
    picsum: build.query<PicsumMeta, string>({
      query: (id) => ({ url: `${id}/info` }),
      transformResponse: xformToCamelCase,
    }),
  }),
})

export const { reducer, reducerPath, usePicsumQuery } = api;