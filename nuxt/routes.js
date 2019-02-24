import { SLUGS } from "../content/posts.json"

export const POST_PATHS = SLUGS
export const SEARCH_PATHS = ["sweet", "savoury"]

const POST_ROUTES = POST_PATHS.map(slug => `posts/${slug}`)
const SEARCH_ROUTES = SEARCH_PATHS.map(path => `/search/${path}`)

export const routes = [...SEARCH_ROUTES, ...POST_ROUTES]
