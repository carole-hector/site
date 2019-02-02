export default ({ store }) => {
  if (!store.state.likes) {
    store.dispatch("fetchLikes")
  }
}
