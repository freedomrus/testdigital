import axios from "axios"; // импортирем сам модуль

export const api = axios.create({ // настройки для запросов
  headers: {
    'Content-type': 'application/json' // типа кодировки
  },
  baseURL: 'https://jsonplaceholder.typicode.com/', // базовый адерс для запросов
  responseType: 'json' // формат для запросов
})