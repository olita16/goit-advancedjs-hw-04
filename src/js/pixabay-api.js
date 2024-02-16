import axios from 'axios';

const apiKey = '36656035-48a6982af67e259d89e542d44';

export async function performSearch(query, page = 1, perPage = 40) {
  const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

  const { data } = await axios.get(apiUrl);
  return data;
}