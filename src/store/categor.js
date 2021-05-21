import catergorServices from "../services/catergorServices";

export default{
  namespaced: true, // собственное пространство имён для моудля (чтоб его переиспользовать)

  state: { // почти обычные переменные
    categor: []
  },
  mutations: { // мутации записывают в перменные из state данные (payload), которые пришли из actions
    setPosts(state, payload){
      return state.categor = payload
    },
  },
  actions: { // обращения к асинхронным запросам из серивиса,
    // обычно называется одинаково с самими запросами getAll в сервисах - getAll  тут
    async getAll(ctx){  // запрос
      const categor = await catergorServices.getAll() // приняли результат и записали в categor
      ctx.commit('setPosts', categor) // вызвали мутацию setPosts и в качестве payload передали categor
    }
  },
  getters: { // нужны для обращения к хранилищу из комопнентов
    getAllCategor(state) {
      return state.categor // достает переменую categor
    }
  }
}