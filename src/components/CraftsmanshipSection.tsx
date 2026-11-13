import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { formatToman, HERO_CUTOUT_SRC, PRODUCTS } from '../data/storeData';
import { Product } from '../types/store';
import { StudioImage } from './StudioImage';

interface CraftsmanshipSectionProps {
  onSelectProduct: (product: Product) => void;
  onAddBundleToCart: () => void;
  bundleAdded: boolean;
}

export const CraftsmanshipSection: React.FC<CraftsmanshipSectionProps> = ({
  onSelectProduct,
  onAddBundleToCart,
  bundleAdded,
}) => {
  const spotlightPieces = PRODUCTS.slice(0, 4);
  const [activePieceId, setActivePieceId] = useState<string>(spotlightPieces[0].id);

  const activePiece =
    spotlightPieces.find((item) => item.id === activePieceId) || spotlightPieces[0];

  return (
    <section id="story" className="w-full bg-[#F2EFE8] py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        {/* 2-Column Balanced Split: Philosophy & Interactive Room Breakdown */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Right Column in RTL: Craftsmanship Narrative & Piece Explorer */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <p className="mb-2 text-xs font-semibold text-[#4A6432]">
                اصالت متریال و هماهنگی چیدمان
              </p>
              <h2 className="mb-4 text-2xl leading-[1.35] font-extrabold text-[#1E241B] sm:text-4xl">
                طراحی‌شده برای خانه‌هایی که جزئیات در آن‌ها زندگی می‌کنند
              </h2>
              <p className="mb-8 max-w-xl text-[15px] leading-[1.9] text-[#4A5243]">
                در استودیو طراحی هوم‌لایف، هر قطعه با تکیه بر چوب‌های طبیعی خشک‌شده، پارچه‌های بوکله
                ضدلک و لعاب‌های معدنی مات ساخته می‌شود تا در کنار هم بدون شلوغی بصری، فضایی آرام و
                ماندگار خلق کنند.
              </p>

              {/* Interactive Piece Selector */}
              <div className="mb-5">
                <p className="mb-3 text-xs font-semibold text-[#5E6656]">
                  بررسی اجزای چیدمان نمونه (انتخاب کنید):
                </p>
                <div className="flex flex-wrap gap-2">
                  {spotlightPieces.map((piece, idx) => {
                    const isSelected = piece.id === activePiece.id;
                    return (
                      <button
                        key={piece.id}
                        type="button"
                        onClick={() => setActivePieceId(piece.id)}
                        className={`shrink-0 cursor-pointer rounded-xl px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
                          isSelected
                            ? 'bg-[#334226] text-white shadow-sm'
                            : 'bg-[#FCF9F5] text-[#353D2F] hover:bg-[#E5E1D6]'
                        }`}
                      >
                        ۰{idx + 1}. {piece.title.split(' مدل ')[0]}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected Piece Details Panel (Clean Hairline Surface) */}
              <div className="rounded-[24px] border border-[#DFDBD0] bg-[#FCF9F5] p-6">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2 text-xs text-[#687060]">
                  <span>{activePiece.materialLabel}</span>
                  <span>ابعاد: {activePiece.dimensions}</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#1E241B]">{activePiece.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-[#4C5445]">
                  {activePiece.shortDescription}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#ECE8DF] pt-4">
                  <span className="tabular-nums text-base font-extrabold text-[#242B20]">
                    {formatToman(activePiece.price)}
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectProduct(activePiece)}
                    className="inline-flex shrink-0 cursor-pointer items-center gap-2 text-xs font-bold whitespace-nowrap text-[#3D5528] transition-colors hover:text-[#243317]"
                  >
                    <span>مشاهده مشخصات و رنگ‌بندی</span>
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bundle Action */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="text-xs text-[#596152]">
                امکان سفارش تکی یا پکیج کامل دکوراتیو رومیزی و بافت نشیمن
              </div>
              <button
                type="button"
                onClick={onAddBundleToCart}
                className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-[#334226] px-6 py-3 text-xs font-semibold whitespace-nowrap text-white transition-colors hover:bg-[#26331B]"
              >
                {bundleAdded ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    <span>ست دکوراتیو به سبد افزوده شد</span>
                  </>
                ) : (
                  <>
                    <span>افزودن ست اکسسوری نشیمن به سبد</span>
                    <ArrowLeft className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Left Column in RTL: Full Studio Room Composition Preview */}
          <div className="flex flex-col justify-between rounded-[36px] bg-gradient-to-br from-[#A6B094] via-[#B8C0A8] to-[#D4D8CA] p-6 sm:p-10 lg:col-span-6">
            <div className="flex items-center justify-between text-xs font-medium text-white/90">
              <span>چیدمان هماهنگ فصل · پالت کرم و زیتونی</span>
              <span className="tabular-nums">کد چیدمان HL-104</span>
            </div>

            <div className="my-6 flex flex-1 items-center justify-center">
              <StudioImage
                src={HERO_CUTOUT_SRC}
                alt="نمای کامل چیدمان مبلمان و اکسسوری هوم‌لایف"
                className="h-auto w-full drop-shadow-[0_20px_28px_rgba(32,40,24,0.18)]"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/30 pt-4 text-xs text-[#26331B]">
              <span className="font-semibold">هماهنگی تضمین‌شده رنگ چوب بلوط، بوکله کرم و مخمل زیتونی</span>
              <span>طراحی استودیو هوم‌لایف</span>
            </div>
          </div>
        </div>

        {/* Full-Width 3-Pillar Quantitative Guarantees Row Below Split */}
        <div className="mt-12 grid grid-cols-1 gap-6 border-t border-[#DFDBD0] pt-10 sm:grid-cols-3">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E4E7DC] text-[#3A5126]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="mb-1 text-sm font-bold text-[#1E241B]">
                ۳۶ ماه ضمانت مکتوب اصالت و کلاف
              </h3>
              <p className="text-xs leading-relaxed text-[#586051]">
                تمامی مبلمان و سازه‌های چوبی با کارت گارانتی سه‌ساله کلاف و نشیمن عرضه می‌شوند.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E4E7DC] text-[#3A5126]">
              <Truck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="mb-1 text-sm font-bold text-[#1E241B]">
                ارسال ایمن ۴۸ ساعته با بسته‌بندی ضدضربه
              </h3>
              <p className="text-xs leading-relaxed text-[#586051]">
                ارسال رایگان سفارش‌های بالای ۵ میلیون تومان در تهران و بسته‌بندی چندلایه سراسری.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E4E7DC] text-[#3A5126]">
              <RefreshCw className="h-5 w-5" />
            </div>
            <div>
              <h3 className="mb-1 text-sm font-bold text-[#1E241B]">
                ۷ روز امکان تعویض یا بازگشت آسان
              </h3>
              <p className="text-xs leading-relaxed text-[#586051]">
                در صورت عدم هماهنگی رنگی اکسسوری با فضای منزل، تا ۷ روز امکان تعویض فراهم است.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
