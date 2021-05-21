import {api} from "../api/api"

class catergorServices {
  async getAll() { // асинхронный запрос (достает все)
    try {
      const res = await api.get('/posts/') // Ждем  отвте от сервиса и записываем в переменную res
      return res.data // возвращает результат, data - ЛИЧНАЯ штука axios
    } catch (e) {
      throw e
    }
  }
}
export default new catergorServices()