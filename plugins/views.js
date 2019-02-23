import { SLUGS } from "~/content/posts"

export default async ({ store }) => {
  await store.dispatch("fetchViews")
  SLUGS.forEach(slug => {
    if (!store.state.views[slug]) {
      store.dispatch("registerSlug", slug)
    }
  })
}
