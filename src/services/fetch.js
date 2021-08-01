import axios from "axios";
// дублирует катинки id
function getPictures(query, page) {
  return axios({
    method: "GET",
    url: `https://pixabay.com/api/?key=&key=15900106-2c235e732bb321ca7ec900d93&q=${query}&page=${page}&per_page=12`,
  });
}
export default getPictures;
// 2вариант
// const BASE_URL = "https://pixabay.com/api/";
// const API_KEY = "21764210-8d882ab68fe5176a0369b7247";
// //обертка вместо axios,что ошибку 404 обрабатывала
// // работает без .data в App.js => как setImages(images.hits);
// async function fetchWithErrorHandling(url = '', config = {}) {
//   const response = await fetch(url, config);
//   return response.ok
//     ? await response.json()
//     : Promise.reject(new Error('Not found'));
// }
// export function getPictures(query, page) {
//   return fetchWithErrorHandling(
//     `${BASE_URL}?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`,
//   );
// }

//работает без.data.hits в App
// axios.defaults.baseURL = BASE_URL;

// export class Api {
//   static async getPictures(searchQuery, page) {
//     const params = `?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12
//         `;
//     const { data } = await axios.get(params);

//     return data.hits;
//   }
// }
