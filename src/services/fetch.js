import axios from "axios";

function getPictures(query, page) {
  return axios({
    method: "GET",
    url: `https://pixabay.com/api/?key=&key=15900106-2c235e732bb321ca7ec900d93&q=${query}&page=${page}&per_page=12`,
  });
}

// const BASE_URL = "https://pixabay.com/api/";
// const API_KEY = "21764210-8d882ab68fe5176a0369b7247";

// async function fetchWithErrorHandling(url = "", config = {}) {
//   const response = await fetch(url, config);
//   return response.ok
//     ? await response.json()
//     : Promise.reject(new Error("Not nd"));
// }
// export function getPictures(query, page) {
//   return fetchWithErrorHandling(
//     `${BASE_URL}?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`
//   );
// }

//3
// async function getPictures(query, page)  {
//   const response = await fetch(
//     `${BASE_URL}?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`
//   )
//   const data = await response.json();
//   return data;
// };

// //и
// const getPictures = (query, page) => {
//   return fetch(
//     `${BASE_URL}?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`
//   )
//     // .then((response) => {
//     //   return response.json();
//     // })
//     .then((images) => console.log(images))
//     .catch((error) => console.log(error.message));
// };

export default getPictures;
