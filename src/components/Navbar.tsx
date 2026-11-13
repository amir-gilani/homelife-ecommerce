import React, { useState, useRef, useEffect } from 'react';
import { User, ShoppingCart, ChevronDown, Menu, X, Truck, ArrowLeft } from 'lucide-react';
import { CATEGORIES, toPersianDigits } from '../data/storeData';
import { CategoryId } from '../types/store';

interface NavbarProps {
  cartCount: number;
  activeNav: string;
  onNavigate: (sectionId: string) => void;
  onSelectCategory: (category: CategoryId) => void;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
}

export const HomeLifeMark: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* House Roof & Chimney */}
    <path
      d="M6 20.5L22 7.5L38 20.5"
      stroke="#4A6432"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30 14V8.8H34.2V17.4"
      stroke="#4A6432"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* House Walls */}
    <path
      d="M10.5 18.5V34.5C10.5 36.1569 11.8431 37.5 13.5 37.5H30.5C32.1569 37.5 33.5 36.1569 33.5 34.5V18.5"
      stroke="#4A6432"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Botanical Leaf Nestled Inside */}
    <path
      d="M16.5 32.5C16.5 25.2 21.8 20.5 28.5 20.5C28.5 27.2 23.8 32.5 16.5 32.5Z"
      fill="#4A6432"
      fillOpacity="0.16"
      stroke="#4A6432"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.5 32.5C19.8 29.2 22.8 26.2 25.2 23.8"
      stroke="#4A6432"
      strokeWidth="2.1"
      strokeLinecap="round"
    />
  </svg>
);

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  activeNav,
  onNavigate,
  onSelectCategory,
  onOpenCart,
  onOpenSearch,
  onOpenAccount,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategoryPick = (catId: CategoryId) => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    onSelectCategory(catId);
  };

  return (
    <header id="top" className="relative z-40 w-full bg-[#FCF9F5]">
      {/* Rich Dark Green Top Announcement Bar */}
      <div className="bg-[#334127] text-[#FCF9F5]">
        <div className="mx-auto flex max-w-[1560px] items-center justify-between gap-4 px-4 py-2.5 text-[11.5px] font-medium sm:px-6 sm:text-xs lg:px-8">
          <div className="flex flex-1 items-center justify-center gap-x-6 lg:justify-start">
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
              <Truck className="h-3.5 w-3.5 text-[#D5E2C4]" strokeWidth={2} />
              <span>ارسال رایگان برای سفارش‌های بالای ۳ میلیون تومان</span>
            </span>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('discounts')}
            className="hidden shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-white/12 px-3 py-1 text-[11px] font-bold text-[#F3F7EC] transition-colors hover:bg-white/22 lg:inline-flex"
          >
            <span>تخفیف‌های شگفت‌انگیز امروز</span>
            <ArrowLeft className="h-3 w-3" />
          </button>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1560px] items-center justify-between gap-8 px-4 pt-5 pb-3 sm:px-6 lg:px-8 lg:pt-6 lg:pb-3.5">
        {/* Zone 1 (Right in RTL): Brand Lockup */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('top');
          }}
          className="group flex shrink-0 items-center gap-2.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4A6432]"
        >
          <HomeLifeMark className="h-10 w-10 transition-transform duration-200 group-hover:scale-105 sm:h-11 sm:w-11" />
          <span className="text-[22px] font-extrabold tracking-tight text-[#1E241B] sm:text-[25px]">
            هوم‌لایف
          </span>
        </a>

          {/* Zone 2 (Center): Soft Capsule Navigation */}
          <nav
            aria-label="منوی اصلی"
            className="hidden items-center gap-1 rounded-full border border-[#E9E4D8] bg-[#F4F1E8]/90 p-1 text-[13.5px] font-medium text-[#2A3125] lg:flex xl:gap-1.5 xl:text-[14px]"
          >
            <button
              type="button"
              onClick={() => onNavigate('top')}
              className={`shrink-0 cursor-pointer rounded-full px-4 py-1.5 whitespace-nowrap transition-all duration-150 ${
                activeNav === 'top'
                  ? 'bg-[#E2EAD9] font-bold text-[#2F3B24] shadow-2xs'
                  : 'hover:bg-white/75 hover:text-[#334127]'
              }`}
            >
              صفحه اصلی
            </button>

            {/* Category Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen((prev) => !prev)}
                aria-expanded={dropdownOpen}
                className={`flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full px-4 py-1.5 whitespace-nowrap transition-all duration-150 ${
                  activeNav === 'products' || dropdownOpen
                    ? 'bg-[#E2EAD9] font-bold text-[#2F3B24] shadow-2xs'
                    : 'hover:bg-white/75 hover:text-[#334127]'
                }`}
              >
                <span>دسته‌بندی محصولات</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    dropdownOpen ? 'rotate-180 text-[#334127]' : 'text-[#5A6353]'
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-3 w-64 rounded-2xl border border-[#E5E1D8] bg-[#FCF9F5] p-2 shadow-xl shadow-[#242B20]/10">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategoryPick(cat.id)}
                      className="flex w-full cursor-pointer items-center justify-between rounded-xl px-3.5 py-2.5 text-right text-sm text-[#242B20] transition-colors hover:bg-[#E2EAD9]/60 hover:text-[#2F3B24]"
                    >
                      <span className="font-medium">{cat.label}</span>
                      <span className="text-xs text-[#6E7568]">{cat.countLabel}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => onNavigate('story')}
              className={`shrink-0 cursor-pointer rounded-full px-4 py-1.5 whitespace-nowrap transition-all duration-150 ${
                activeNav === 'story'
                  ? 'bg-[#E2EAD9] font-bold text-[#2F3B24] shadow-2xs'
                  : 'hover:bg-white/75 hover:text-[#334127]'
              }`}
            >
              درباره ما
            </button>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className={`shrink-0 cursor-pointer rounded-full px-4 py-1.5 whitespace-nowrap transition-all duration-150 ${
                activeNav === 'contact'
                  ? 'bg-[#E2EAD9] font-bold text-[#2F3B24] shadow-2xs'
                  : 'hover:bg-white/75 hover:text-[#334127]'
              }`}
            >
              تماس با ما
            </button>

            <button
              type="button"
              onClick={() => onNavigate('journal')}
              className={`shrink-0 cursor-pointer rounded-full px-4 py-1.5 whitespace-nowrap transition-all duration-150 ${
                activeNav === 'journal'
                  ? 'bg-[#E2EAD9] font-bold text-[#2F3B24] shadow-2xs'
                  : 'hover:bg-white/75 hover:text-[#334127]'
              }`}
            >
              وبلاگ
            </button>
          </nav>

          {/* Zone 3 (Left in RTL): Simple Original Account and Cart Action Cluster */}
          <div className="flex shrink-0 items-center gap-2.5 sm:gap-3.5">
            {/* User Account Button */}
            <button
              type="button"
              onClick={onOpenAccount}
              aria-label="حساب کاربری"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#EFEEE9] text-[#242B20] transition-colors duration-150 hover:bg-[#E4E2DA] focus-visible:outline-2 focus-visible:outline-[#4A6432]"
            >
              <User className="h-[20px] w-[20px]" strokeWidth={1.8} />
            </button>

            {/* Shopping Bag Button with Olive Count Badge */}
            <button
              type="button"
              onClick={onOpenCart}
              aria-label="سبد خرید"
              className="relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#EFEEE9] text-[#242B20] transition-colors duration-150 hover:bg-[#E4E2DA] focus-visible:outline-2 focus-visible:outline-[#4A6432]"
            >
              <ShoppingCart className="h-[20px] w-[20px]" strokeWidth={1.85} />
              {cartCount > 0 && (
                <span className="tabular-nums absolute -top-1 -right-1 flex h-[21px] min-w-[21px] items-center justify-center rounded-full bg-[#4A6432] px-1 text-[11px] font-bold text-white shadow-sm">
                  {toPersianDigits(cartCount)}
                </span>
              )}
            </button>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="منوی موبایل"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-[14px] bg-[#EFEEE9] text-[#242B20] transition-colors hover:bg-[#E4E2DA] lg:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

      {/* Mobile Collapsible Navigation */}
      {mobileMenuOpen && (
        <div className="border-b border-[#E6E2D8] bg-[#FCF9F5] px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('top');
              }}
              className="rounded-xl px-4 py-2.5 text-right text-sm font-bold text-[#3D5528] hover:bg-[#EFECE4]"
            >
              صفحه اصلی
            </button>
            <div className="px-4 py-1.5 text-xs font-semibold text-[#7A8273]">دسته‌بندی محصولات</div>
            <div className="grid grid-cols-2 gap-1.5 px-2 pb-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryPick(cat.id)}
                  className="rounded-xl bg-[#F2EFE8] px-3 py-2 text-right text-xs font-medium text-[#242B20] hover:bg-[#E5E1D6]"
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('story');
              }}
              className="rounded-xl px-4 py-2.5 text-right text-sm font-medium text-[#242B20] hover:bg-[#EFECE4]"
            >
              درباره ما
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('journal');
              }}
              className="rounded-xl px-4 py-2.5 text-right text-sm font-medium text-[#242B20] hover:bg-[#EFECE4]"
            >
              وبلاگ
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('contact');
              }}
              className="rounded-xl px-4 py-2.5 text-right text-sm font-medium text-[#242B20] hover:bg-[#EFECE4]"
            >
              تماس با ما
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
