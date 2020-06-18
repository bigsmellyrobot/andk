export const state = () => ({
  work: [],
  experience: [],
})

export const mutations = {
  setWork(state, list) {
    function float(a, b) {
      return a.float < b.float ? -1 : 1
    }
    state.work = list.sort(float)
  },
  setExperience(state, list) {
    function order(a, b) {
      return a.date < b.date ? 1 : -1
    }
    state.experience = list.sort(order)
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    let wfiles = await require.context('~/assets/content/work/', false, /\.json$/)
    let work = wfiles.keys().map(key => {
      let res = wfiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setWork', work)

    let efiles = await require.context('~/assets/content/experience/', false, /\.json$/)
    let experience = efiles.keys().map(key => {
      let res = efiles(key)
      return res
    })
    await commit('setExperience', experience)
  }
}