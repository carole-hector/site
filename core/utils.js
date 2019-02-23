export function matches(post, v) {
  const l = v.toLowerCase()
  return (
    post.tags.includes(l) ||
    post.title.toLowerCase().match(l) ||
    post.description.toLowerCase().match(l)
  )
}

export function filterPosts(posts, v) {
  return v ? posts.filter(p => matches(p, v)) : posts
}

export const stringify = obj => JSON.stringify(obj, null, 2)
