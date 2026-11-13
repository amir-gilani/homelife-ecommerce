import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, ShoppingBag } from 'lucide-react';
import { formatToman, toPersianDigits } from '../data/storeData';
import { Product } from '../types/store';
import { StudioImage } from './StudioImage';

interface DiscountedProductsSectionProps {
  products: Product[];
  recentlyAddedId: string | null;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const DiscountedProductsSection: React.FC<DiscountedProductsSectionProps> = ({
  products,
  recentlyAddedId,
  onAddToCart,
  onQuickView,
}) => {
  const [startIndex, setStartIndex] = useState(0);

  // Initial countdown: 23 hours, 15 minutes, 04 seconds (matching reference image_89f148a0.png)
  const [secondsRemaining, setSecondsRemaining] = useState(23 * 3600 + 15 * 60 + 4);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 23 * 3600 + 15 * 60 + 4));
    }, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const hours = Math.floor(secondsRemaining / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;

  const padTwoDigits = (val: number) => toPersianDigits(String(val).padStart(2, '0'));

  const total = products.length;
  const visibleProducts = Array.from({ length: 3 }, (_, i) => products[(startIndex + i) % total]);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <section
      id="discounts"
      aria-label="محصولات تخفیف دار"
      className="relative z-20 mx-auto max-w-[1480px] scroll-mt-24 px-4 pt-2 pb-12 sm:px-6 lg:px-8 lg:pb-16"
    >
      {/* Outer Soft Sage-Mint Container Matching image_89f148a0.png */}
      <div className="rounded-[34px] bg-[#E2EAD9] p-4 shadow-[0_18px_44px_-18px_rgba(38,50,28,0.1)] sm:rounded-[42px] sm:p-6 lg:p-7">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Column 1 (Rightmost in RTL): Green Topographic Promo & Countdown Card */}
          <div className="relative flex min-h-[340px] flex-col items-center justify-between overflow-hidden rounded-[28px] bg-[#72865E] px-5 py-7 text-white shadow-[0_14px_30px_-12px_rgba(35,48,24,0.28)] sm:rounded-[30px] lg:py-8">
            {/* Subtle Organic Topographic Contour Waves in Background */}
            <svg
              viewBox="0 0 360 440"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <g opacity="0.32" stroke="#586B45" strokeLinecap="round" fill="none">
                <path
                  d="M -40,45 C 55,115 150,-10 255,68 C 335,128 380,45 420,80"
                  strokeWidth="18"
                />
                <path
                  d="M -50,145 C 45,215 165,85 275,165 C 355,225 390,140 430,175"
                  strokeWidth="20"
                />
                <path
                  d="M -35,255 C 70,320 185,190 295,268 C 365,318 400,245 435,275"
                  strokeWidth="18"
                />
                <path
                  d="M -25,360 C 85,425 200,305 310,375 C 375,418 405,355 440,385"
                  strokeWidth="16"
                />
              </g>
              <g opacity="0.2" stroke="#8FA37B" strokeLinecap="round" fill="none">
                <path
                  d="M -30,95 C 65,165 170,35 275,112 C 350,168 385,95 425,125"
                  strokeWidth="11"
                />
                <path
                  d="M -40,200 C 60,268 175,140 285,215 C 360,268 395,195 430,225"
                  strokeWidth="12"
                />
                <path
                  d="M -20,310 C 80,375 190,250 300,322 C 370,368 400,300 435,330"
                  strokeWidth="11"
                />
              </g>
            </svg>

            {/* Two-Line Centered White Heading */}
            <div className="relative z-10 text-center">
              <h2 className="text-2xl leading-[1.35] font-extrabold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(28,38,18,0.18)] sm:text-[28px]">
                محصولات
                <span className="mt-1 block">تخفیف دار</span>
              </h2>
            </div>

            {/* White Rounded Countdown Pill Box (Hours : Minutes : Seconds) */}
            <div
              dir="ltr"
              className="relative z-10 my-4 flex w-full max-w-[235px] items-center justify-between rounded-[22px] bg-[#F7F6F1] px-4 py-3.5 shadow-[0_10px_24px_-10px_rgba(24,34,16,0.24)]"
            >
              {/* Hours (First: ساعت) */}
              <div className="flex flex-1 flex-col items-center">
                <span className="text-xl leading-none font-extrabold text-[#E59838] sm:text-[22px]">
                  {padTwoDigits(hours)}
                </span>
                <span className="mt-1.5 text-[11px] font-bold text-[#5A6055]">ساعت</span>
              </div>

              <span className="-mt-3 text-lg font-extrabold text-[#E59838]">:</span>

              {/* Minutes (Second: دقیقه) */}
              <div className="flex flex-1 flex-col items-center">
                <span className="text-xl leading-none font-extrabold text-[#E59838] sm:text-[22px]">
                  {padTwoDigits(minutes)}
                </span>
                <span className="mt-1.5 text-[11px] font-bold text-[#5A6055]">دقیقه</span>
              </div>

              <span className="-mt-3 text-lg font-extrabold text-[#E59838]">:</span>

              {/* Seconds (Third: ثانیه) */}
              <div className="flex flex-1 flex-col items-center">
                <span className="text-xl leading-none font-extrabold text-[#E59838] sm:text-[22px]">
                  {padTwoDigits(seconds)}
                </span>
                <span className="mt-1.5 text-[11px] font-bold text-[#5A6055]">ثانیه</span>
              </div>
            </div>

            {/* Bottom Clean Circular Slider Navigation Arrows */}
            <div className="relative z-10 flex items-center justify-center gap-3 pt-1">
              {/* Right / Previous Arrow (in RTL) */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="محصولات تخفیف‌دار قبلی"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/35 bg-white/15 text-white transition-all duration-150 hover:scale-105 hover:bg-white hover:text-[#334127]"
              >
                <ArrowRight className="h-4 w-4 stroke-[2.3]" />
              </button>

              {/* Left / Next Arrow (in RTL) */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="محصولات تخفیف‌دار بعدی"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/35 bg-white/15 text-white transition-all duration-150 hover:scale-105 hover:bg-white hover:text-[#334127]"
              >
                <ArrowLeft className="h-4 w-4 stroke-[2.3]" />
              </button>
            </div>
          </div>

          {/* Columns 2, 3, 4 (3 White Discounted Product Cards to the Left in RTL) */}
          {visibleProducts.map((product) => {
            const isAdded = recentlyAddedId === product.id;
            const discountPercent = product.discountPercent ?? 30;
            const oldPrice = product.originalPrice ?? Math.round(product.price * 1.25);
            const rating = product.rating ?? '۴.۵';

            return (
              <article
                key={product.id}
                className="group flex min-h-[340px] flex-col justify-between rounded-[28px] border border-white/70 bg-[#F7F6F1] p-5 shadow-[0_12px_28px_-14px_rgba(32,42,24,0.1)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_36px_-14px_rgba(32,42,24,0.16)] sm:rounded-[30px]"
              >
                {/* Top Row: Circular Green Discount Badge in Top-Left Corner (justify-end in RTL) */}
                <div className="flex items-center justify-end">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#72865E] text-xs font-extrabold text-white shadow-xs">
                    {toPersianDigits(discountPercent)}٪
                  </span>
                </div>

                {/* Center Product Cutout Image */}
                <button
                  type="button"
                  onClick={() => onQuickView(product)}
                  className="my-2 flex h-44 w-full cursor-pointer items-center justify-center p-1 focus:outline-none"
                >
                  <StudioImage
                    src={product.imageSrc}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain drop-shadow-[0_12px_18px_rgba(32,38,24,0.15)] transition-transform duration-300 group-hover:scale-105"
                  />
                </button>

                {/* Bottom Product Info Block */}
                <div className="mt-1 space-y-3.5">
                  {/* Title on Right + Rating with Golden Star on Left */}
                  <div className="flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => onQuickView(product)}
                      className="cursor-pointer truncate text-right text-[14.5px] font-extrabold text-[#1E241B] transition-colors hover:text-[#4A6432] sm:text-[15px]"
                    >
                      {product.title}
                    </button>

                    <div className="flex shrink-0 items-center gap-1 text-xs font-bold text-[#5A6055]">
                      <span>{rating}</span>
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4 text-[#F0A030]"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>

                  {/* Shopping Bag Button on Right + Old/New Stacked Prices on Left */}
                  <div className="flex items-end justify-between pt-0.5">
                    <button
                      type="button"
                      onClick={() => onAddToCart(product)}
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

                    <div className="flex flex-col items-end text-left">
                      <span className="text-[11.5px] font-medium text-[#9BA194] line-through">
                        {formatToman(oldPrice)}
                      </span>
                      <span className="mt-0.5 text-sm font-extrabold text-[#647A50] sm:text-[15.5px]">
                        {formatToman(product.price)}
                      </span>
                    </div>
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
