import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronsDown } from 'lucide-react';
import { CATEGORY_SHOWCASE_ITEMS } from '../data/storeData';
import { CategoryId } from '../types/store';
import { StudioImage } from './StudioImage';

interface CategoryShowcaseSectionProps {
  onSelectCategory: (category: CategoryId) => void;
}

export const CategoryShowcaseSection: React.FC<CategoryShowcaseSectionProps> = ({
  onSelectCategory,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const total = CATEGORY_SHOWCASE_ITEMS.length;

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  // Pick 4 contiguous items wrapping around the 7 extracted transparent cutouts
  const visibleItems = Array.from({ length: 4 }, (_, i) => {
    return CATEGORY_SHOWCASE_ITEMS[(startIndex + i) % total];
  });

  return (
    <section
      aria-label="دسته بندی محصولات"
      className="relative z-30 mx-auto max-w-[1480px] px-4 pt-2 pb-10 sm:px-6 sm:pt-3 lg:px-8 lg:pt-4 lg:pb-14"
    >
      {/* Top Non-Rectangular V-Sloped Green Topographic Banner + Overlapping 4 Rounded-Square Category Cards */}
      <div className="relative">
        {/* Focused Element (section:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)):
            Sculpted V-Sloped / Tapered Wing Shape Matching image_4964079e.png (NOT a rectangle) */}
        <div className="relative h-[245px] w-full sm:h-[280px] lg:h-[320px]">
          {/* Double-Chevron Floating Inside the Top Center Concave Dip */}
          <div className="pointer-events-none absolute top-[11%] left-1/2 z-20 flex -translate-x-1/2 items-center justify-center sm:top-[12%]">
            <ChevronsDown
              className="h-5 w-5 text-[#72865E] sm:h-6 sm:w-6"
              strokeWidth={2.4}
            />
          </div>

          {/* Sculpted Non-Rectangular SVG Banner (Symmetric V-Sloped Top + Center Concave Notch + Rounded Wing Flanks) */}
          <svg
            viewBox="0 0 1320 310"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute inset-0 h-full w-full drop-shadow-[0_18px_36px_rgba(45,58,34,0.12)]"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <clipPath id="categoryWingClip">
                <path
                  d="
                    M 68,4
                    L 596,50
                    C 618,52 628,82 660,82
                    C 692,82 702,52 724,50
                    L 1252,4
                    C 1292,1 1318,28 1316,68
                    L 1304,244
                    C 1301,280 1272,306 1236,306
                    L 84,306
                    C 48,306 19,280 16,244
                    L 4,68
                    C 2,28 28,1 68,4
                    Z
                  "
                />
              </clipPath>

              <linearGradient
                id="catGreenFill"
                x1="0"
                y1="0"
                x2="1320"
                y2="310"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#6E825A" />
                <stop offset="50%" stopColor="#768A62" />
                <stop offset="100%" stopColor="#6C8058" />
              </linearGradient>
            </defs>

            <g clipPath="url(#categoryWingClip)">
              {/* Base Olive-Green Fill */}
              <rect width="1320" height="310" fill="url(#catGreenFill)" />

              {/* Organic Topographic Contour Waves Matching Reference Pattern */}
              <g opacity="0.34" stroke="#586B45" strokeLinecap="round" fill="none">
                <path
                  d="M -40,38 C 95,105 220,-15 370,62 C 520,138 640,35 790,95 C 940,155 1080,15 1230,78 C 1280,98 1320,65 1360,75"
                  strokeWidth="16"
                />
                <path
                  d="M -60,108 C 85,178 245,48 415,126 C 585,204 715,92 885,158 C 1035,216 1145,82 1295,142"
                  strokeWidth="20"
                />
                <path
                  d="M -30,185 C 125,248 285,118 465,192 C 645,266 785,152 955,218 C 1105,276 1205,155 1350,205"
                  strokeWidth="16"
                />
                <path
                  d="M 10,258 C 175,310 335,195 515,262 C 695,328 845,218 1015,278 C 1155,325 1245,225 1360,268"
                  strokeWidth="15"
                />
              </g>

              {/* Secondary Lighter Organic Contour Highlights */}
              <g opacity="0.22" stroke="#8FA37B" strokeLinecap="round" fill="none">
                <path
                  d="M -20,72 C 110,142 255,18 410,92 C 565,166 695,62 855,125 C 1015,188 1135,48 1310,110"
                  strokeWidth="10"
                />
                <path
                  d="M -40,148 C 105,212 265,88 440,162 C 615,236 755,125 925,188 C 1085,248 1185,118 1340,175"
                  strokeWidth="12"
                />
              </g>
            </g>
          </svg>

          {/* Centered White Title Positioned Below the Center Concave Notch */}
          <div className="relative z-10 flex flex-col items-center pt-[62px] sm:pt-[72px] lg:pt-[78px]">
            <h2 className="text-center text-xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(36,48,24,0.18)] sm:text-2xl lg:text-[27px]">
              دسته بندی محصولات
            </h2>
          </div>
        </div>

        {/* 4 White Rounded-Square Category Cards Overlapping the Bottom of the Sculpted Banner */}
        <div className="relative z-20 -mt-[122px] px-4 sm:-mt-[142px] sm:px-8 lg:-mt-[152px] lg:px-14">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-7">
            {visibleItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectCategory(item.categoryId)}
                className="group flex aspect-[1/1.03] cursor-pointer flex-col items-center justify-between rounded-[26px] border border-white bg-[#F6F5F0] p-4 shadow-[0_14px_32px_-12px_rgba(32,40,24,0.14)] transition-all duration-200 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_22px_40px_-14px_rgba(32,40,24,0.2)] sm:rounded-[32px] sm:p-6"
              >
                {/* Cutout Product Image Container */}
                <div className="flex h-[74%] w-full items-center justify-center p-1 sm:p-2">
                  <StudioImage
                    src={item.imageSrc}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain drop-shadow-[0_10px_16px_rgba(32,38,24,0.14)] transition-transform duration-300 group-hover:scale-108"
                  />
                </div>

                {/* Category Label */}
                <span className="pb-1 text-center text-sm font-bold text-[#242B20] transition-colors group-hover:text-[#3D5528] sm:text-base lg:text-[17px]">
                  {item.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Centered Clean Circular Slider Arrows */}
      <div className="mt-7 mb-5 flex items-center justify-center gap-3">
        {/* Right / Previous Arrow (in RTL) */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="دسته قبلی"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#D8DDD0] bg-white text-[#242B20] shadow-xs transition-all duration-150 hover:-translate-y-0.5 hover:border-[#72865E] hover:bg-[#72865E] hover:text-white"
        >
          <ArrowRight className="h-4.5 w-4.5 stroke-[2.2]" />
        </button>

        {/* Left / Next Arrow (in RTL) */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="دسته بعدی"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#D8DDD0] bg-white text-[#242B20] shadow-xs transition-all duration-150 hover:-translate-y-0.5 hover:border-[#72865E] hover:bg-[#72865E] hover:text-white"
        >
          <ArrowLeft className="h-4.5 w-4.5 stroke-[2.2]" />
        </button>
      </div>

      {/* Centered 3-Line Descriptive Copy Matching Reference Layout */}
      <div className="mx-auto max-w-4xl px-2 text-center text-[13px] leading-[2.15] font-medium text-[#2E3528] sm:text-[14.5px]">
        <p>
          «کیفیت ماندگار، جزئیات الهام‌بخش خانه!» باور داریم که هر گوشه از خانه می‌تونه به فضایی گرم، آرامش‌بخش و منحصربه‌فرد تبدیل بشه.
        </p>
        <p>
          به همین دلیل بهترین و باکیفیت‌ترین مبلمان و لوازم دکوراتیو رو برای شما فراهم کردیم. از مبلمان راحتی و میزهای چوبی تا آباژور، گلدان‌های سرامیکی و گیاهان طبیعی،
        </p>
        <p>
          همه‌چیز آماده است تا شما بدون نگرانی، چیدمان دلخواه خانه‌تون رو به سلیقه خودتون بسازید.
        </p>
      </div>
    </section>
  );
};
