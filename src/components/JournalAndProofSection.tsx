import React from 'react';
import { ArrowLeft, Clock } from 'lucide-react';
import { ARTICLES } from '../data/storeData';
import { Article } from '../types/store';
import { StudioImage } from './StudioImage';

interface JournalAndProofSectionProps {
  onOpenArticle: (article: Article) => void;
}

const ARTICLE_IMAGES = [
  '/images/articles/article_living.jpg',
  '/images/articles/article_lamp.jpg',
  '/images/articles/article_table.jpg',
  '/images/articles/article_boucle.jpg',
];

export const JournalAndProofSection: React.FC<JournalAndProofSectionProps> = ({
  onOpenArticle,
}) => {
  const rightArticles = ARTICLES.slice(0, 2);
  const leftArticles = ARTICLES.slice(2, 4);

  return (
    <section
      id="journal"
      aria-label="مقالات و راهنمای دکوراسیون"
      className="mx-auto max-w-[1480px] scroll-mt-24 px-4 pt-6 pb-16 sm:px-6 lg:px-8 lg:pt-8 lg:pb-20"
    >
      {/* Clean & Chic Section Header */}
      <div className="mb-8 flex flex-col items-center justify-between gap-3 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#72865E]" />
          <h2 className="text-xl font-extrabold tracking-tight text-[#1E241B] sm:text-2xl">
            مقالات و راهنمای چیدمان
          </h2>
        </div>

        <button
          type="button"
          onClick={() => onOpenArticle(ARTICLES[0])}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-[#F2F0E8] px-4 py-2 text-xs font-bold text-[#334127] transition-colors hover:bg-[#72865E] hover:text-white sm:text-[13px]"
        >
          <span>مشاهده همه مقالات</span>
          <ArrowLeft className="h-3.5 w-3.5 stroke-[2.2]" />
        </button>
      </div>

      {/* Grid: 2 Articles on the Right, 2 Stacked Top & Bottom on the Left */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Right Section: 2 Articles Side by Side (lg:col-span-7) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
          {rightArticles.map((article, idx) => {
            const coverSrc = article.imageSrc || ARTICLE_IMAGES[idx % ARTICLE_IMAGES.length];
            return (
              <article
                key={article.id}
                onClick={() => onOpenArticle(article)}
                className="group flex cursor-pointer flex-col justify-between rounded-[28px] border border-white bg-[#F6F5F0] p-4 shadow-[0_12px_28px_-16px_rgba(32,42,24,0.1)] transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_36px_-16px_rgba(32,42,24,0.16)] sm:p-5"
              >
                <div>
                  {/* Article Cover Container */}
                  <div className="relative mb-4 flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-[22px] bg-[#E2EAD9]">
                    <StudioImage
                      src={coverSrc}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Meta Row */}
                  <div className="mb-2 flex items-center justify-between text-xs font-medium text-[#6B7363]">
                    <span>{article.date}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-[#72865E]" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-[15.5px] leading-relaxed font-extrabold text-[#1E241B] transition-colors group-hover:text-[#4A6036]">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="line-clamp-2 text-xs leading-[1.9] text-[#586050] sm:text-[13px]">
                    {article.excerpt}
                  </p>
                </div>

                {/* Read More Footer */}
                <div className="mt-4 flex items-center justify-between border-t border-[#E8E5DC] pt-3.5">
                  <span className="text-xs font-bold text-[#334127] transition-colors group-hover:text-[#72865E]">
                    ادامه مطلب
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#334127] shadow-2xs transition-colors group-hover:bg-[#72865E] group-hover:text-white">
                    <ArrowLeft className="h-3.5 w-3.5 stroke-[2.2]" />
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Left Section: 2 Articles Stacked Top & Bottom (lg:col-span-5) */}
        <div className="flex flex-col gap-5 lg:col-span-5">
          {leftArticles.map((article, idx) => {
            const coverSrc = article.imageSrc || ARTICLE_IMAGES[(idx + 2) % ARTICLE_IMAGES.length];
            return (
              <article
                key={article.id}
                onClick={() => onOpenArticle(article)}
                className="group flex flex-1 cursor-pointer flex-col justify-between rounded-[28px] border border-white bg-[#F6F5F0] p-4 shadow-[0_12px_28px_-16px_rgba(32,42,24,0.1)] transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_36px_-16px_rgba(32,42,24,0.16)] sm:flex-row sm:items-center sm:gap-4 sm:p-5"
              >
                {/* Horizontal / Compact Cover Image */}
                <div className="relative mb-3 flex aspect-[16/10] w-full shrink-0 items-center justify-center overflow-hidden rounded-[20px] bg-[#E2EAD9] sm:mb-0 sm:h-32 sm:w-36 lg:h-36 lg:w-36">
                  <StudioImage
                    src={coverSrc}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content & Action */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    {/* Meta Row */}
                    <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-[#6B7363]">
                      <span>{article.date}</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-[#72865E]" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mb-1.5 text-[14.5px] leading-snug font-extrabold text-[#1E241B] transition-colors group-hover:text-[#4A6036] line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="line-clamp-2 text-xs leading-[1.8] text-[#586050]">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Read More Footer */}
                  <div className="mt-3 flex items-center justify-between border-t border-[#E8E5DC] pt-2.5">
                    <span className="text-xs font-bold text-[#334127] transition-colors group-hover:text-[#72865E]">
                      ادامه مطلب
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#334127] shadow-2xs transition-colors group-hover:bg-[#72865E] group-hover:text-white">
                      <ArrowLeft className="h-3 w-3 stroke-[2.2]" />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

