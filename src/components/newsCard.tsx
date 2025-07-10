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
      className="grid grid-cols-[1fr_2fr] md:grid-cols-1 gap-4 md:gap-0 items-stretch bg-[#1a1a1a] rounded-md overflow-hidden border border-gray-800  transition-all duration-200 hover:p-4 hover:bg-[#2A283E]"
    >
      <img
        src={news?.urlToImage}
        alt={news.title}
        className="w-full h-full md:h-48 object-cover"
      />

      <div className="  flex flex-col ">
        <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
          <span>{news?.source?.name.toUpperCase()}</span>
          <span>{formatDate(news?.publishedAt).toUpperCase()}</span>
        </div>

        <h3 className="mt-0  text-white text-sm font-semibold line-clamp-3">
          {news?.title}
        </h3>
      </div>
    </a>
  );
};

export default NewsCard;
