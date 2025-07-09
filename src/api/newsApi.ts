import axios from 'axios';
import type { NewsApiResponse, NewsItem } from '../model/newsData';

const API_KEY = 'a60bcac0279e474bb9ffe96aa2c58883';
const BASE_URL = 'https://newsapi.org/v2/top-headlines';



export const fetchNews = async (): Promise<NewsItem[]> => {
  try {
    const res = await axios.get<NewsApiResponse>(
      `${BASE_URL}?sources=techcrunch&apiKey=${API_KEY}`
    );

    console.log('Axios response:', res.data);

    return res.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
