import { SLUGS } from "../content/posts.json"

const POST_ROUTES = SLUGS.map(slug => `posts/${slug}`)
const SEARCH_ROUTES = ["search/sweet", "search/savoury"]
export const routes = [...SEARCH_ROUTES, ...POST_ROUTES]
