import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { StudioImage } from './StudioImage';

export const HERO_CLEAN_STAGE_SRC = '/images/banners/hero_banner.png';

interface HeroSectionProps {
  onExploreProducts: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreProducts }) => {
  return (
    <section
      aria-label="معرفی هوم‌لایف"
      className="relative w-full overflow-hidden bg-[#FCF9F5] pt-0 pb-0"
    >
      <div className="mx-auto max-w-[1560px] px-4 sm:px-6 lg:px-8">
        {/* Desktop Layered Stage (1024px+): Locked 1672x801 Aspect Ratio Matching IMG_8101 Reference */}
        <div className="relative hidden w-full lg:block lg:aspect-[1672/801]">
          {/* div:nth-of-type(1): Top Ceiling Pendant Cord Anchor */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-[46.89%] z-20 h-[6%] w-[1.5px] bg-gradient-to-b from-transparent to-[#C8C0B3]"
          />

          {/* div:nth-of-type(2): Focused Hero Backdrop & Stage Element with the Exact Tapered/Slanted (مخروطی و کج) IMG_8101 Geometry */}
          <div className="absolute inset-0 z-10 overflow-hidden bg-[#FCF9F5]">
            <StudioImage
              src={HERO_CLEAN_STAGE_SRC}
              alt="چیدمان نشیمن هوم‌لایف با بک‌گراند مخروطی و قوس معماری، مبل راحتی بوکله، میز چوبی گرد، پاف سبز زیتونی و گیاه طبیعی"
              className="pointer-events-none h-full w-full object-contain select-none"
            />

            {/* Right Column Editorial Persian Content (Compact Grouping with Balanced Larger Scale) */}
            <div className="absolute top-[14%] right-[5.6%] bottom-[18%] z-30 flex w-[34%] flex-col items-start justify-center gap-3.5 xl:gap-5">
              {/* Top Kicker Row: Outlined Capsule on Right + Extending Thin Line on Left */}
              <div className="flex w-full items-center justify-start gap-3.5">
                <span className="shrink-0 rounded-full border border-white/75 px-5 py-1.5 text-[13px] font-normal whitespace-nowrap text-white/95 xl:px-6 xl:py-2 xl:text-[15px]">
                  خانه‌ای برای زندگی بهتر
                </span>
                <span aria-hidden="true" className="h-[1px] w-20 bg-white/55 xl:w-28" />
              </div>

              {/* Two-Tone Display Headline */}
              <h1 className="text-right text-[36px] leading-[1.22] font-black tracking-tight xl:text-[50px]">
                <span className="block text-white">زیبایی در</span>
                <span className="block whitespace-nowrap text-[#2C3A21]">جزئیات خانه است.</span>
              </h1>

              {/* Subtitle */}
              <p className="max-w-[340px] text-right text-[14px] leading-[1.8] font-normal text-white/92 xl:text-[16px]">
                با انتخاب اکسسوری و لوازم دکوراتیو،
                <br />
                فضای خانه‌ات رو به سلیقه خودت بساز.
              </p>

              {/* Primary Olive CTA Button */}
              <button
                type="button"
                onClick={onExploreProducts}
                className="group mt-1 inline-flex shrink-0 cursor-pointer items-center gap-2.5 rounded-full bg-[#334127] px-7 py-3 text-[14px] font-semibold whitespace-nowrap text-white transition-all duration-200 hover:bg-[#25311B] xl:px-8 xl:py-3.5 xl:text-[15.5px]"
              >
                <span>مشاهده محصولات</span>
                <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1 xl:h-4.5 xl:w-4.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Tablet & Mobile Responsive Layout (< 1024px): Preserves the Tapered/Slanted Arch Backdrop */}
        <div className="relative lg:hidden">
          <div className="relative overflow-hidden rounded-[32px] bg-[#FCF9F5] pt-4 pb-2">
            {/* Editorial Copy Block on Slanted Sage Card for Mobile */}
            <div
              style={{
                clipPath: 'polygon(0% 6%, 100% 0%, 100% 100%, 0% 100%)',
              }}
              className="relative z-20 mx-2 rounded-[28px] bg-gradient-to-l from-[#9BA082] via-[#A4A98B] to-[#B9BCA4] px-6 pt-10 pb-7 text-right sm:px-9"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full border border-white/75 px-4 py-1.5 text-xs font-normal text-white sm:px-5 sm:text-sm">
                  خانه‌ای برای زندگی بهتر
                </span>
                <span aria-hidden="true" className="h-[1px] w-14 bg-white/55 sm:w-20" />
              </div>

              <h1 className="mb-3 text-3xl leading-[1.28] font-black sm:text-5xl">
                <span className="block text-white">زیبایی در</span>
                <span className="block text-[#2C3A21]">جزئیات خانه است.</span>
              </h1>

              <p className="mb-6 max-w-md text-sm leading-[1.85] text-white/95 sm:text-base">
                با انتخاب اکسسوری و لوازم دکوراتیو، فضای خانه‌ات رو به سلیقه خودت بساز.
              </p>

              <button
                type="button"
                onClick={onExploreProducts}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[#334127] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-[#25311B] sm:text-base"
              >
                <span>مشاهده محصولات</span>
                <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
              </button>
            </div>

            {/* Full Tapered Reference Scene Below Copy on Mobile/Tablet */}
            <div className="relative z-20 -mt-4">
              <StudioImage
                src={HERO_CLEAN_STAGE_SRC}
                alt="چیدمان نشیمن مدرن هوم‌لایف با بک‌گراند مخروطی"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
