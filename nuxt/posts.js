import { SLUGS } from "../content/posts.json"

export const posts = SLUGS.map(slug => require(`../content/${slug}.json`))
