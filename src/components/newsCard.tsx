import type { NewsItem } from '../model/newsData';
import { formatDate } from '../utils/date';

type NewsCardProps = {
  news: NewsItem;
};

const NewsCard = ({ news }: NewsCardProps) => {
  

  return (
    <a
      href={news?.url}
      target="_blank"
      rel="noopener noreferrer"
      className="grid  grid-cols-[1fr_2fr] lg:grid-cols-1 items-stretch bg-[#1a1a1a] rounded-md overflow-hidden border border-gray-800 hover:border-white transition-all duration-200"
    >
      <img
        src={news?.urlToImage}
        alt={news.title}
        className="w-full h-full object-cover"
      />

      <div className="p-4 h-[140px] flex flex-col justify-between">
        <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
          <span>{news?.source?.name.toUpperCase()}</span>
          <span>{formatDate(news?.publishedAt).toUpperCase()}</span>
        </div>

        <h3 className="mt-3 text-white text-sm font-semibold leading-snug line-clamp-3">
          {news?.title}
        </h3>
      </div>
    </a>
  );
};

export default NewsCard;
