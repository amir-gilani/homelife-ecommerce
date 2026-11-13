import React, { useState } from 'react';
import { Phone, MapPin, Clock, CheckCircle2, ArrowUp } from 'lucide-react';
import { CategoryId } from '../types/store';

interface FooterProps {
  onSelectCategory: (cat: CategoryId) => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onNavigate }) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailOrPhone.trim()) return;
    setSubscribed(true);
    setEmailOrPhone('');
  };

  return (
    <footer
      id="contact"
      className="mx-auto max-w-[1480px] scroll-mt-24 px-4 pt-4 pb-8 sm:px-6 lg:px-8 lg:pb-12"
    >
      {/* Simple, Chic, Uncluttered Centered Footer in Brand Green */}
      <div className="rounded-[34px] bg-[#334127] px-6 py-10 shadow-[0_22px_50px_-18px_rgba(33,45,23,0.38)] sm:rounded-[42px] sm:px-10 sm:py-12">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          {/* Centered Brand Mark */}
          <div className="mb-4 flex items-center gap-2.5">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F7F6F1] shadow-2xs">
              <svg
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <path
                  d="M6 20.5L22 7.5L38 20.5"
                  stroke="#334127"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30 14V8.8H34.2V17.4"
                  stroke="#334127"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5 18.5V34.5C10.5 36.1569 11.8431 37.5 13.5 37.5H30.5C32.1569 37.5 33.5 36.1569 33.5 34.5V18.5"
                  stroke="#334127"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 32.5C16.5 25.2 21.8 20.5 28.5 20.5C28.5 27.2 23.8 32.5 16.5 32.5Z"
                  fill="#72865E"
                  fillOpacity="0.28"
                  stroke="#334127"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-2xl font-extrabold tracking-tight text-[#FCF9F5]">هوم‌لایف</span>
          </div>

          {/* Short Brand Tagline */}
          <p className="mb-6 max-w-lg text-xs leading-[1.95] font-medium text-[#DCE5D0] sm:text-[13.5px]">
            خانه‌ای برای زندگی بهتر؛ طراحی و عرضه مبلمان راحتی، روشنایی و اکسسوری‌های دکوراتیو با
            الهام از آرامش طبیعت.
          </p>

          {/* Centered Horizontal Navigation Links */}
          <nav
            aria-label="لینک‌های فوتر"
            className="mb-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs font-bold text-[#F5F7F1] sm:gap-x-8 sm:text-[13.5px]"
          >
            <button
              type="button"
              onClick={() => onNavigate('top')}
              className="cursor-pointer transition-colors hover:text-[#C5D8AF]"
            >
              صفحه اصلی
            </button>
            <button
              type="button"
              onClick={() => onSelectCategory(CategoryId.FURNITURE)}
              className="cursor-pointer transition-colors hover:text-[#C5D8AF]"
            >
              مبلمان و نشیمن
            </button>
            <button
              type="button"
              onClick={() => onSelectCategory(CategoryId.LIGHTING)}
              className="cursor-pointer transition-colors hover:text-[#C5D8AF]"
            >
              روشنایی و آباژور
            </button>
            <button
              type="button"
              onClick={() => onSelectCategory(CategoryId.PLANTS_VASES)}
              className="cursor-pointer transition-colors hover:text-[#C5D8AF]"
            >
              گلدان و گیاهان
            </button>
            <button
              type="button"
              onClick={() => onNavigate('products')}
              className="cursor-pointer transition-colors hover:text-[#C5D8AF]"
            >
              جدیدترین محصولات
            </button>
            <button
              type="button"
              onClick={() => onNavigate('journal')}
              className="cursor-pointer transition-colors hover:text-[#C5D8AF]"
            >
              مقالات
            </button>
          </nav>

          {/* Slim Symmetrical Centered Newsletter Pill */}
          <div className="mb-7 w-full max-w-md">
            {subscribed ? (
              <div className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F7F6F1] px-5 py-2.5 text-xs font-bold text-[#334127] shadow-2xs">
                <CheckCircle2 className="h-4 w-4 text-[#4A6036]" />
                <span>عضویت شما در خبرنامه هوم‌لایف ثبت شد.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex items-center rounded-full border border-white/15 bg-[#F7F6F1] p-1.5 shadow-sm"
              >
                <input
                  type="text"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  placeholder="عضویت در خبرنامه (شماره موبایل یا ایمیل)"
                  className="flex-1 bg-transparent px-4 py-1.5 text-xs font-medium text-[#1E241B] placeholder:text-[#7F8776] focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 cursor-pointer rounded-full bg-[#4A6432] px-5 py-2 text-xs font-bold text-white transition-colors hover:bg-[#334127]"
                >
                  عضویت
                </button>
              </form>
            )}
          </div>

          {/* Centered Contact Info Row */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs font-medium text-[#DCE5D0]">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[#C5D8AF]" />
              <span>تهران، الهیه، خیابان فرشته، پلاک ۴۲</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-[#C5D8AF]" />
              <span className="tabular-nums">۰۲۱-۲۲۶۵۴۸۹۰</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[#C5D8AF]" />
              <span>همه‌روزه ۱۰ الی ۲۱</span>
            </div>
          </div>
        </div>

        {/* Clean Bottom Divider & Copyright Bar */}
        <div className="mt-9 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 text-xs font-medium text-[#CDD9BE] sm:flex-row">
          <p>© ۱۴۰۵ فروشگاه دکوراسیون و اکسسوری هوم‌لایف. تمامی حقوق محفوظ است.</p>

          <button
            type="button"
            onClick={() => onNavigate('top')}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-[#F7F6F1] px-4 py-2 text-xs font-bold text-[#334127] shadow-2xs transition-colors hover:bg-[#E2EAD9]"
          >
            <span>بازگشت به بالا</span>
            <ArrowUp className="h-3.5 w-3.5 stroke-[2.2]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

