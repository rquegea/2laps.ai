'use client';

interface NewsCard {
  image: string;
  title: string;
  sourceCount: number;
  sources: Array<{
    name: string;
    favicon: string;
  }>;
  sentiment: 'positive' | 'negative' | 'neutral';
}

const newsData: NewsCard[] = [
  {
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=200&fit=crop',
    title: 'Solar Panel efficiency hits 30%: A new standard for residential installations',
    sourceCount: 12,
    sources: [
      { name: 'Bloomberg', favicon: '📰' },
      { name: 'Reuters', favicon: '📡' },
    ],
    sentiment: 'positive',
  },
  {
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=200&fit=crop',
    title: 'Carbon Credit Markets: The new volatility index for heavy industry',
    sourceCount: 9,
    sources: [
      { name: 'Financial Times', favicon: '💼' },
      { name: 'WSJ', favicon: '📈' },
    ],
    sentiment: 'negative',
  },
  {
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=200&fit=crop',
    title: 'Circular Economy in Tech: Why big players are pivoting to recycled materials',
    sourceCount: 15,
    sources: [
      { name: 'TechCrunch', favicon: '💻' },
      { name: 'Wired', favicon: '🔌' },
    ],
    sentiment: 'neutral',
  },
];

const sentimentEmoji = {
  positive: '🟢',
  negative: '🔴',
  neutral: '🟡',
};

export function NewsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {newsData.map((news, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-[1.02]"
        >
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-32 md:h-40 object-cover"
          />
          <div className="p-3 md:p-4">
            <h3
              className="font-normal text-sm md:text-base mb-3 leading-tight"
              style={{ fontFamily: "'Switzer', sans-serif" }}
            >
              {news.title}
            </h3>
            <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-500">
              <span>{sentimentEmoji[news.sentiment]}</span>
              <span className="font-['Switzer']">{news.sourceCount} fuentes</span>
            </div>
            <div className="flex items-center gap-2 mt-2 text-[10px] text-gray-400">
              {news.sources.map((source, idx) => (
                <div key={idx} className="flex items-center gap-1">
                  <span>{source.favicon}</span>
                  <span className="font-['Switzer']">{source.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
