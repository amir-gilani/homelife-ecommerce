import React from 'react';
import { ChevronRight } from 'lucide-react';
import { StudioImage } from './StudioImage';

interface CollectionBannersSectionProps {
  onExploreNewCollection: () => void;
  onExploreFeatured: () => void;
}

export const CollectionBannersSection: React.FC<CollectionBannersSectionProps> = ({
  onExploreNewCollection,
  onExploreFeatured,
}) => {
  return (
    <section
      id="banners"
      aria-label="کالکشن جدید و منتخب محصولات"
      className="relative z-20 mx-auto max-w-[1480px] scroll-mt-8 px-4 pt-4 pb-12 sm:px-6 lg:px-8 lg:pt-6 lg:pb-16"
    >
      {/* Side-by-side dual banners in LTR grid order to match IMG_8142_3d2b9cce.PNG */}
      <div dir="ltr" className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-6">
        {/* LEFT BANNER: کالکشن جدید + IMG_8136_9c3accc2.PNG on Left */}
        <div className="group relative flex min-h-[240px] items-end sm:min-h-[295px] lg:min-h-[325px]">
          {/* Sloped Uniform Solid Sage-Green Background SVG (Tall on Outer Left, Sloping Down to Inner Right) */}
          <div className="pointer-events-none absolute inset-x-0 bottom-[3%] h-[78%] w-full drop-shadow-[0_18px_36px_rgba(35,48,24,0.16)]">
            <svg
              viewBox="0 0 1048 336"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full rounded-[22px]"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* Uniform Solid Sage-Olive Trapezoid */}
              <polygon
                points="0,0 1048,70 1048,336 0,336"
                fill="#72865E"
              />
            </svg>
          </div>

          {/* Transparent Cutout Furniture Scene on Left (Overflowing Top & Bottom Slightly) */}
          <div className="pointer-events-none relative z-10 w-[64%] shrink-0 self-end sm:w-[63%]">
            <StudioImage
              src="/images/banners/banner_new_collection.png"
              alt="کالکشن جدید مبلمان و دکوراسیون هوم‌لایف"
              className="h-auto w-[148%] max-w-none -translate-x-[1%] translate-y-[2%] object-contain drop-shadow-[0_16px_26px_rgba(20,30,12,0.26)]"
            />
          </div>

          {/* Text & CTA Block on Right Side of Left Banner */}
          <div
            dir="rtl"
            className="relative z-20 flex w-[44%] shrink-0 -ml-[8%] flex-col items-center justify-center pb-[9%] pr-2 pl-1 text-center sm:pb-[10%] sm:pr-4"
          >
            <h2 className="text-xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(24,34,14,0.2)] sm:text-2xl lg:text-[28px] xl:text-[31px]">
              کالکشن جدید
            </h2>
            <p className="mt-1.5 text-xs font-medium text-[#F3F1E8] sm:mt-2 sm:text-sm lg:text-[15.5px]">
              زیبایی در جزئیات خانه
            </p>
            <button
              type="button"
              onClick={onExploreNewCollection}
              className="mt-3.5 inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#334127] px-4 py-2 text-xs font-bold text-white shadow-[0_10px_20px_-6px_rgba(22,32,12,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#26321C] sm:mt-4 sm:px-5 sm:py-2.5 sm:text-[13px]"
            >
              <ChevronRight className="h-3.5 w-3.5 stroke-[2.5]" />
              <span>مشاهده محصولات</span>
            </button>
          </div>
        </div>

        {/* RIGHT BANNER: منتخب محصولات on Left + IMG_8137_5a64b243.PNG on Right */}
        <div className="group relative flex min-h-[240px] items-end sm:min-h-[295px] lg:min-h-[325px]">
          {/* Sloped Uniform Solid Sage-Green Background SVG (Lower on Inner Left, Sloping Up to Tall Outer Right) */}
          <div className="pointer-events-none absolute inset-x-0 bottom-[3%] h-[78%] w-full drop-shadow-[0_18px_36px_rgba(35,48,24,0.16)]">
            <svg
              viewBox="0 0 1050 336"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full rounded-[22px]"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* Uniform Solid Sage-Olive Trapezoid */}
              <polygon
                points="0,72 1050,0 1050,336 0,336"
                fill="#72865E"
              />
            </svg>
          </div>

          {/* Text & CTA Block on Left Side of Right Banner */}
          <div
            dir="rtl"
            className="relative z-20 flex w-[45%] shrink-0 -mr-[9%] flex-col items-center justify-center pb-[9%] pr-1 pl-2 text-center sm:pb-[10%] sm:pl-4"
          >
            <h2 className="text-xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(24,34,14,0.2)] sm:text-2xl lg:text-[28px] xl:text-[31px]">
              منتخب محصولات
            </h2>
            <p className="mt-1.5 text-xs font-medium text-[#F3F1E8] sm:mt-2 sm:text-sm lg:text-[15.5px]">
              انتخابی برای خانه‌ای زیباتر
            </p>
            <button
              type="button"
              onClick={onExploreFeatured}
              className="mt-3.5 inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#334127] px-4 py-2 text-xs font-bold text-white shadow-[0_10px_20px_-6px_rgba(22,32,12,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#26321C] sm:mt-4 sm:px-5 sm:py-2.5 sm:text-[13px]"
            >
              <ChevronRight className="h-3.5 w-3.5 stroke-[2.5]" />
              <span>مشاهده محصولات</span>
            </button>
          </div>

          {/* Transparent Cutout Sideboard, Lamp, Frame & Pouf Scene on Right */}
          <div className="pointer-events-none relative z-10 w-[64%] shrink-0 self-end">
            <StudioImage
              src="/images/banners/banner_featured_products.png"
              alt="منتخب محصولات دکوراتیو و کنسول چوبی هوم‌لایف"
              className="h-auto w-[114%] max-w-none -translate-x-[4%] translate-y-[1.5%] object-contain drop-shadow-[0_16px_26px_rgba(20,30,12,0.26)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
