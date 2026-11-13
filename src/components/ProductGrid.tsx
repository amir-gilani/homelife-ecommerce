import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, ShoppingBag } from 'lucide-react';
import { CATEGORIES, formatToman, HERO_CUTOUT_SRC } from '../data/storeData';
import { CategoryId, Product } from '../types/store';
import { StudioImage } from './StudioImage';

export type SortOption = 'featured' | 'price-asc' | 'price-desc';

interface ProductGridProps {
  products: Product[];
  selectedCategory: CategoryId;
  sortBy: SortOption;
  recentlyAddedId: string | null;
  onSelectCategory: (category: CategoryId) => void;
  onChangeSort: (sort: SortOption) => void;
  onAddToCart: (product: Product, colorLabel?: string) => void;
  onQuickView: (product: Product) => void;
}

const ITEMS_IN_TWO_ROWS = 8; // Always 2 rows × 4 columns

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  selectedCategory,
  recentlyAddedId,
  onSelectCategory,
  onAddToCart,
  onQuickView,
}) => {
  const [startIndex, setStartIndex] = useState(0);

  const total = products.length;

  const visibleProducts =
    total <= ITEMS_IN_TWO_ROWS
      ? products
      : Array.from({ length: ITEMS_IN_TWO_ROWS }, (_, i) => products[(startIndex + i) % total]);

  const handleCategoryClick = (catId: CategoryId) => {
    setStartIndex(0);
    onSelectCategory(catId);
  };

  const handleNext = () => {
    if (total === 0) return;
    setStartIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    if (total === 0) return;
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <section
      id="products"
      className="mx-auto max-w-[1480px] scroll-mt-24 px-4 py-8 sm:px-6 lg:px-8 lg:py-10"
    >
      {/* Outer Plain Soft Sage-Mint Container */}
      <div className="rounded-[34px] bg-[#E2EAD9] p-5 shadow-[0_18px_44px_-18px_rgba(38,50,28,0.1)] sm:rounded-[42px] sm:p-7 lg:p-8">
        {/* Header: Title on Right + "مشاهده بیشتر" on Top Left */}
        <div className="mb-6 flex items-center justify-between gap-4 sm:mb-7">
          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#72865E]" />
            <h2 className="text-xl font-extrabold tracking-tight text-[#1E241B] sm:text-2xl">
              جدیدترین محصولات
            </h2>
          </div>

          <button
            type="button"
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-white/90 bg-white/80 px-4 py-2 text-xs font-bold text-[#334127] shadow-xs backdrop-blur-xs transition-all hover:bg-[#72865E] hover:text-white sm:text-[13px]"
          >
            <span>مشاهده بیشتر</span>
            <ArrowLeft className="h-3.5 w-3.5 stroke-[2.2]" />
          </button>
        </div>

        {/* Strictly 4-Column × 2-Row Clean Product Grid (8 Products) */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {visibleProducts.map((product) => {
            const isAdded = recentlyAddedId === product.id;
            const rating = product.rating ?? '۴.۵';

            return (
              <article
                key={product.id}
                className="group flex flex-col justify-between rounded-[28px] border border-white/80 bg-[#F7F6F1] p-5 shadow-[0_12px_28px_-16px_rgba(32,42,24,0.1)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_36px_-16px_rgba(32,42,24,0.16)]"
              >
                {/* Clean Cutout Product Image */}
                <button
                  type="button"
                  onClick={() => onQuickView(product)}
                  className="my-2 flex h-44 w-full cursor-pointer items-center justify-center p-1 focus:outline-none"
                >
                  <StudioImage
                    src={product.imageSrc || HERO_CUTOUT_SRC}
                    alt={product.title}
                    fallbackLabel={product.title}
                    className="max-h-full max-w-full object-contain drop-shadow-[0_12px_18px_rgba(32,38,24,0.13)] transition-transform duration-300 group-hover:scale-105"
                  />
                </button>

                {/* Minimal Metadata & Action Row */}
                <div className="mt-2 space-y-3.5">
                  {/* Title on Right + Subtle Star Rating on Left */}
                  <div className="flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => onQuickView(product)}
                      className="cursor-pointer truncate text-right text-[14.5px] font-extrabold text-[#1E241B] transition-colors hover:text-[#4A6432] sm:text-[15px]"
                    >
                      {product.title}
                    </button>

                    <div className="flex shrink-0 items-center gap-1 text-xs font-bold text-[#636B5B]">
                      <span>{rating}</span>
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-3.5 w-3.5 text-[#F0A030]"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>

                  {/* Shopping Bag Icon Button on Right + Clean Price on Left */}
                  <div className="flex items-center justify-between pt-0.5">
                    <button
                      type="button"
                      onClick={() => onAddToCart(product, product.colors[0]?.label)}
                      aria-label={`افزودن ${product.title} به سبد خرید`}
                      className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border transition-all duration-150 ${
                        isAdded
                          ? 'border-[#334127] bg-[#334127] text-white'
                          : 'border-[#E2E0D8] bg-white text-[#242B20] hover:border-[#72865E] hover:bg-[#72865E] hover:text-white'
                      }`}
                    >
                      {isAdded ? (
                        <Check className="h-4.5 w-4.5 stroke-[2.3]" />
                      ) : (
                        <ShoppingBag className="h-4.5 w-4.5 stroke-[1.9]" />
                      )}
                    </button>

                    <span className="text-sm font-extrabold text-[#4A6036] sm:text-[15.5px]">
                      {formatToman(product.price)}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Centered Left/Right Navigation Arrows */}
        <div className="mt-7 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="محصولات قبلی"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/80 bg-white text-[#242B20] shadow-xs transition-all duration-150 hover:-translate-y-0.5 hover:border-[#72865E] hover:bg-[#72865E] hover:text-white"
          >
            <ArrowRight className="h-4.5 w-4.5 stroke-[2.2]" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="محصولات بعدی"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/80 bg-white text-[#242B20] shadow-xs transition-all duration-150 hover:-translate-y-0.5 hover:border-[#72865E] hover:bg-[#72865E] hover:text-white"
          >
            <ArrowLeft className="h-4.5 w-4.5 stroke-[2.2]" />
          </button>
        </div>
      </div>
    </section>
  );
};





