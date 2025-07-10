import { useQuery } from '@tanstack/react-query';
import { fetchNews } from '../api/newsApi';
import NewsCard from '../components/newsCard';

import type { NewsItem } from '../model/newsData';



const Home = () => {
  const { data, isLoading, error } = useQuery<NewsItem[]>({
    queryKey: ['news'],
    queryFn: fetchNews,
  });
  

  if (isLoading) return <div className="text-center ">Loading...</div>;

  if (error)
    return (
      <div className="text-start md:text-center">
        something went wrong.Please Try again Later
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {data?.map((item) => (
        <NewsCard key={item?.url} news={item} />
      ))}
    </div>
  );
};

export default Home;
