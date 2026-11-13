import React, { useState, useEffect } from 'react';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  Search,
  CheckCircle2,
  ArrowLeft,
  PackageCheck,
  User,
  MapPin,
} from 'lucide-react';
import { formatToman, HERO_CUTOUT_SRC, toPersianDigits } from '../data/storeData';
import { Article, CartItem, Product } from '../types/store';
import { StudioImage } from './StudioImage';

const FREE_SHIPPING_THRESHOLD = 5000000;

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, colorLabel: string, quantity: number) => void;
}

export const ProductQuickViewModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]?.label || '');
      setQuantity(1);
    }
  }, [product]);

  if (!product) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={product.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A2116]/50 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative grid max-h-[90vh] w-full max-w-4xl grid-cols-1 overflow-y-auto rounded-[32px] bg-[#FCF9F5] p-6 shadow-2xl md:grid-cols-12 md:gap-8 md:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="بستن پنجره محصول"
          className="absolute top-5 left-5 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#EFECE5] text-[#242B20] transition-colors hover:bg-[#334226] hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Gallery Frame */}
        <div
          className={`relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-[24px] p-6 md:col-span-6 md:aspect-auto md:min-h-[360px] ${product.studioBgClass}`}
        >
          <StudioImage
            src={product.imageSrc || HERO_CUTOUT_SRC}
            alt={product.title}
            className="pointer-events-none max-h-full max-w-full object-contain drop-shadow-[0_16px_22px_rgba(34,42,26,0.16)] select-none"
          />
        </div>

        {/* Contiguous Purchase Module */}
        <div className="mt-6 flex flex-col justify-between md:col-span-6 md:mt-0">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs text-[#6B7363]">
              <span>{product.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{product.stockLabel}</span>
            </div>

            <h2 className="mb-3 text-xl leading-snug font-extrabold text-[#1E241B] sm:text-2xl">
              {product.title}
            </h2>

            <div className="tabular-nums mb-4 text-xl font-black text-[#334226]">
              {formatToman(product.price)}
            </div>

            <p className="mb-5 text-sm leading-relaxed text-[#4C5445]">{product.shortDescription}</p>

            {/* Dimensions */}
            <div className="mb-5 border-y border-[#E9E5DC] py-3 text-xs text-[#545C4D]">
              <span className="font-bold text-[#242B20]">ابعاد محصول: </span>
              <span>{product.dimensions}</span>
            </div>

            {/* Color / Finish Selector */}
            <div className="mb-5">
              <div className="mb-2.5 text-xs font-semibold text-[#242B20]">
                رنگ و پوشش انتخاب‌شده: <span className="text-[#4A6432]">{selectedColor}</span>
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                {product.colors.map((c) => {
                  const active = selectedColor === c.label;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedColor(c.label)}
                      className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-medium transition-all ${
                        active
                          ? 'border-[#334226] bg-[#EFECE4] text-[#1E241B]'
                          : 'border-[#E2DDD2] bg-white text-[#575F50] hover:border-[#B6BEA7]'
                      }`}
                    >
                      <span
                        className={`h-4 w-4 rounded-full border border-black/15 ${c.swatchClass}`}
                      />
                      <span>{c.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Highlights */}
            <ul className="mb-6 space-y-1.5 text-xs text-[#4C5445]">
              {product.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4A6432]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quantity + Primary Buy Action */}
          <div className="flex items-center gap-3 pt-2">
            <div className="flex items-center rounded-full border border-[#DFDBD0] bg-white px-2 py-1.5">
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="افزایش تعداد"
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-[#242B20] hover:bg-[#EFECE4]"
              >
                <Plus className="h-4 w-4" />
              </button>
              <span className="tabular-nums w-8 text-center text-sm font-bold text-[#1E241B]">
                {toPersianDigits(quantity)}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="کاهش تعداد"
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-[#242B20] hover:bg-[#EFECE4]"
              >
                <Minus className="h-4 w-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                onAddToCart(product, selectedColor, quantity);
                onClose();
              }}
              className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#334226] px-6 py-3.5 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-[#26331B]"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>افزودن به سبد خرید</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CartDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (productId: string, selectedColor: string, delta: number) => void;
  onRemoveItem: (productId: string, selectedColor: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [step, setStep] = useState<'cart' | 'checkout' | 'confirmed'>('cart');
  const [paymentMethod, setPaymentMethod] = useState<'online' | 'cod'>('online');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerPostal, setCustomerPostal] = useState('');
  const [confirmedTotal, setConfirmedTotal] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setStep('cart'), 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shippingCost = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 185000;
  const finalTotal = subtotal + shippingCost;
  const remainingForFree = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmedTotal(finalTotal);
    onClearCart();
    setStep('confirmed');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="سبد خرید هوم‌لایف"
      className="fixed inset-0 z-50 flex justify-end bg-[#1A2116]/45 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex h-full w-full max-w-md flex-col bg-[#FCF9F5] shadow-2xl"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-[#E7E3DA] px-6 py-5">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="h-5 w-5 text-[#4A6432]" />
            <h2 className="text-lg font-extrabold text-[#1E241B]">
              {step === 'cart' && 'سبد خرید شما'}
              {step === 'checkout' && 'تکمیل اطلاعات ارسال'}
              {step === 'confirmed' && 'رسید ثبت سفارش'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="بستن سبد خرید"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#EFECE5] text-[#242B20] hover:bg-[#E2DFD6]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {step === 'cart' && (
          <>
            {/* Free Shipping Indicator */}
            {items.length > 0 && (
              <div className="border-b border-[#ECE8DF] bg-[#F4F1EA] px-6 py-3 text-xs text-[#3D4635]">
                {remainingForFree === 0 ? (
                  <span className="font-semibold text-[#3A5524]">
                    ارسال سفارش شما به سراسر کشور رایگان است.
                  </span>
                ) : (
                  <span>
                    تا ارسال رایگان تنها{' '}
                    <strong className="tabular-nums font-bold text-[#334226]">
                      {formatToman(remainingForFree)}
                    </strong>{' '}
                    باقی مانده است.
                  </span>
                )}
              </div>
            )}

            {/* Itemized List */}
            <div className="flex-1 space-y-4 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#EFECE5] text-[#6B7363]">
                    <ShoppingBag className="h-7 w-7" />
                  </div>
                  <p className="mb-2 text-base font-bold text-[#1E241B]">سبد خرید شما خالی است</p>
                  <p className="mb-6 max-w-xs text-xs leading-relaxed text-[#6B7363]">
                    اکسسوری‌ها و مبلمان دلخواه خود را از کلکسیون هوم‌لایف انتخاب کنید.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="cursor-pointer rounded-full bg-[#334226] px-6 py-2.5 text-xs font-semibold text-white hover:bg-[#26331B]"
                  >
                    بازگشت به فروشگاه
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedColor}`}
                    className="flex gap-4 rounded-2xl border border-[#E8E4DB] bg-white p-3.5"
                  >
                    <div
                      className={`relative flex h-20 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl p-1.5 ${item.product.studioBgClass}`}
                    >
                      <StudioImage
                        src={item.product.imageSrc || HERO_CUTOUT_SRC}
                        alt={item.product.title}
                        className="pointer-events-none max-h-full max-w-full object-contain"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-xs leading-snug font-bold text-[#1E241B]">
                            {item.product.title}
                          </h3>
                          <p className="mt-0.5 text-[11px] text-[#6E7666]">{item.selectedColor}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.product.id, item.selectedColor)}
                          aria-label="حذف از سبد"
                          className="cursor-pointer text-[#8B9284] transition-colors hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center rounded-lg border border-[#E5E1D8] bg-[#FAF8F4]">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.product.id, item.selectedColor, 1)}
                            aria-label="افزایش"
                            className="cursor-pointer px-2 py-1 text-xs text-[#242B20] hover:bg-[#ECE8DF]"
                          >
                            +
                          </button>
                          <span className="tabular-nums px-2 text-xs font-bold">
                            {toPersianDigits(item.quantity)}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              onUpdateQuantity(item.product.id, item.selectedColor, -1)
                            }
                            aria-label="کاهش"
                            className="cursor-pointer px-2 py-1 text-xs text-[#242B20] hover:bg-[#ECE8DF]"
                          >
                            −
                          </button>
                        </div>

                        <span className="tabular-nums text-xs font-extrabold text-[#242B20]">
                          {formatToman(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer */}
            {items.length > 0 && (
              <div className="border-t border-[#E7E3DA] bg-[#FAF7F2] p-6">
                <div className="mb-2 flex items-center justify-between text-xs text-[#5E6656]">
                  <span>هزینه ارسال</span>
                  <span className="tabular-nums font-semibold">
                    {shippingCost === 0 ? 'رایگان' : formatToman(shippingCost)}
                  </span>
                </div>
                <div className="mb-5 flex items-center justify-between text-base font-extrabold text-[#1E241B]">
                  <span>مبلغ قابل پرداخت</span>
                  <span className="tabular-nums text-[#334226]">{formatToman(finalTotal)}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setStep('checkout')}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#334226] py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#26331B]"
                >
                  <span>ادامه جهت ثبت سفارش</span>
                  <ArrowLeft className="h-4 w-4" />
                </button>
              </div>
            )}
          </>
        )}

        {step === 'checkout' && (
          <form onSubmit={handleCheckoutSubmit} className="flex flex-1 flex-col justify-between overflow-y-auto p-6">
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-[#242B20]">
                  نام و نام خانوادگی تحویل‌گیرنده
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="مثلاً: سارا محمدی"
                  className="w-full rounded-xl border border-[#DFDBD0] bg-white px-4 py-2.5 text-sm text-[#1E241B] focus:border-[#4A6432] focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-[#242B20]">
                  شماره موبایل جهت هماهنگی ارسال
                </label>
                <input
                  type="tel"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="۰۹۱۲۰۰۰۰۰۰۰"
                  className="w-full rounded-xl border border-[#DFDBD0] bg-white px-4 py-2.5 text-sm text-[#1E241B] focus:border-[#4A6432] focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-[#242B20]">
                  نشانی دقیق پستی
                </label>
                <textarea
                  rows={2}
                  required
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder="استان، شهر، خیابان، پلاک، واحد"
                  className="w-full rounded-xl border border-[#DFDBD0] bg-white px-4 py-2.5 text-sm text-[#1E241B] focus:border-[#4A6432] focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-[#242B20]">
                  کد پستی ۱۰ رقمی
                </label>
                <input
                  type="text"
                  required
                  value={customerPostal}
                  onChange={(e) => setCustomerPostal(e.target.value)}
                  placeholder="۱۹۶۵۸۴۳۲۱۰"
                  className="w-full rounded-xl border border-[#DFDBD0] bg-white px-4 py-2.5 text-sm text-[#1E241B] focus:border-[#4A6432] focus:outline-none"
                />
              </div>

              {/* Payment Method */}
              <div className="pt-2">
                <span className="mb-2 block text-xs font-semibold text-[#242B20]">روش پرداخت</span>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('online')}
                    className={`cursor-pointer rounded-xl border px-3 py-2.5 text-xs font-semibold transition-colors ${
                      paymentMethod === 'online'
                        ? 'border-[#334226] bg-[#ECEFE6] text-[#243317]'
                        : 'border-[#DFDBD0] bg-white text-[#575F50]'
                    }`}
                  >
                    پرداخت اینترنتی
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`cursor-pointer rounded-xl border px-3 py-2.5 text-xs font-semibold transition-colors ${
                      paymentMethod === 'cod'
                        ? 'border-[#334226] bg-[#ECEFE6] text-[#243317]'
                        : 'border-[#DFDBD0] bg-white text-[#575F50]'
                    }`}
                  >
                    پرداخت در محل (تهران)
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-[#E7E3DA] pt-5">
              <div className="mb-4 flex items-center justify-between text-sm font-extrabold text-[#1E241B]">
                <span>جمع کل سفارش</span>
                <span className="tabular-nums text-[#334226]">{formatToman(finalTotal)}</span>
              </div>
              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={() => setStep('cart')}
                  className="cursor-pointer rounded-full border border-[#D8D3C7] px-5 py-3 text-xs font-semibold text-[#454D3E] hover:bg-[#EFECE4]"
                >
                  بازگشت
                </button>
                <button
                  type="submit"
                  className="flex-1 cursor-pointer rounded-full bg-[#334226] py-3 text-sm font-semibold text-white hover:bg-[#26331B]"
                >
                  ثبت نهایی سفارش
                </button>
              </div>
            </div>
          </form>
        )}

        {step === 'confirmed' && (
          <div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#E5ECDD] text-[#3B5624]">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="mb-2 text-lg font-extrabold text-[#1E241B]">
              سفارش #۱۰۴۸ با موفقیت ثبت شد
            </h3>
            <p className="mb-6 text-xs leading-relaxed text-[#575F50]">
              {customerName ? `${customerName} عزیز، ` : ''}سفارش شما در واحد آماده‌سازی استودیو
              هوم‌لایف ثبت گردید و هماهنگی ارسال به شماره {customerPhone || 'شما'} پیامک می‌شود.
            </p>
            <div className="mb-6 w-full rounded-2xl border border-[#E5E1D8] bg-white p-4 text-right text-xs">
              <div className="mb-2 flex justify-between text-[#5C6455]">
                <span>وضعیت فعلی:</span>
                <span className="font-bold text-[#3B5624]">در حال بسته‌بندی ایمن</span>
              </div>
              <div className="mb-2 flex justify-between text-[#5C6455]">
                <span>شیوه پرداخت:</span>
                <span>{paymentMethod === 'online' ? 'پرداخت اینترنتی' : 'پرداخت در محل'}</span>
              </div>
              <div className="flex justify-between border-t border-[#EFECE4] pt-2 font-bold text-[#1E241B]">
                <span>مبلغ کل:</span>
                <span className="tabular-nums">{formatToman(confirmedTotal)}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-full cursor-pointer rounded-full bg-[#334226] py-3 text-sm font-semibold text-white hover:bg-[#26331B]"
            >
              بازگشت به صفحه اصلی
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

interface SearchModalProps {
  isOpen: boolean;
  products: Product[];
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  products,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const trimmed = query.trim();
  const filtered = trimmed
    ? products.filter(
        (p) =>
          p.title.includes(trimmed) ||
          p.categoryLabel.includes(trimmed) ||
          p.materialLabel.includes(trimmed)
      )
    : products;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="جستجوی محصولات هوم‌لایف"
      className="fixed inset-0 z-50 flex items-start justify-center bg-[#1A2116]/45 px-4 pt-20 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl overflow-hidden rounded-[28px] border border-[#E5E1D8] bg-[#FCF9F5] p-6 shadow-2xl"
      >
        <div className="relative mb-5 flex items-center">
          <Search className="pointer-events-none absolute right-4 h-5 w-5 text-[#5D6655]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="جستجوی نام محصول یا متریال (مثلاً: مبل بوکله، بلوط، پاف، گلدان...)"
            className="w-full rounded-2xl border border-[#DDD8CC] bg-white py-3.5 pr-12 pl-12 text-sm text-[#1E241B] focus:border-[#4A6432] focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="بستن جستجو"
            className="absolute left-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#EFECE5] text-[#242B20] hover:bg-[#E2DFD6]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-80 space-y-2.5 overflow-y-auto">
          {filtered.length === 0 ? (
            <p className="py-8 text-center text-sm text-[#6B7363]">
              محصولی با عبارت «{query}» یافت نشد.
            </p>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onSelectProduct(item);
                  onClose();
                }}
                className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-2xl border border-transparent bg-white p-3 text-right transition-all hover:border-[#CFD5C4] hover:bg-[#F5F3EC]"
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`relative flex h-14 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl p-1 ${item.studioBgClass}`}
                  >
                    <StudioImage
                      src={item.imageSrc || HERO_CUTOUT_SRC}
                      alt={item.title}
                      className="pointer-events-none max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1E241B]">{item.title}</div>
                    <div className="mt-0.5 text-xs text-[#6B7363]">{item.materialLabel}</div>
                  </div>
                </div>
                <span className="tabular-nums shrink-0 text-xs font-extrabold text-[#334226]">
                  {formatToman(item.price)}
                </span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  const [trackingCode, setTrackingCode] = useState('۱۰۴۲');
  const [showStatus, setShowStatus] = useState(true);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="حساب کاربری و پیگیری سفارش"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A2116]/45 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-[28px] bg-[#FCF9F5] p-6 shadow-2xl sm:p-7"
      >
        <div className="mb-5 flex items-center justify-between border-b border-[#E7E3DA] pb-4">
          <div className="flex items-center gap-2.5">
            <User className="h-5 w-5 text-[#4A6432]" />
            <h2 className="text-base font-extrabold text-[#1E241B]">حساب کاربری و پیگیری سفارش</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="بستن"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#EFECE5] text-[#242B20]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setShowStatus(true);
          }}
          className="mb-5"
        >
          <label className="mb-2 block text-xs font-semibold text-[#242B20]">
            شماره سفارش خود را جهت استعلام وضعیت وارد کنید:
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={trackingCode}
              onChange={(e) => setTrackingCode(e.target.value)}
              className="flex-1 rounded-xl border border-[#DFDBD0] bg-white px-3.5 py-2.5 text-sm text-[#1E241B] focus:border-[#4A6432] focus:outline-none"
            />
            <button
              type="submit"
              className="cursor-pointer rounded-xl bg-[#334226] px-4 py-2.5 text-xs font-semibold whitespace-nowrap text-white hover:bg-[#26331B]"
            >
              بررسی وضعیت
            </button>
          </div>
        </form>

        {showStatus && (
          <div className="rounded-2xl border border-[#E2DDD2] bg-white p-4 text-xs">
            <div className="mb-3 flex items-center gap-2 font-bold text-[#3B5624]">
              <PackageCheck className="h-4 w-4" />
              <span>سفارش #{trackingCode || '۱۰۴۲'} — تحویل به واحد ارسال ویژه</span>
            </div>
            <p className="mb-3 leading-relaxed text-[#575F50]">
              بسته‌بندی ضدضربه کنترل کیفیت شده و طبق زمان‌بندی انتخابی به نشانی ثبت‌شده ارسال می‌گردد.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-[#6B7363]">
              <MapPin className="h-3.5 w-3.5 text-[#4A6432]" />
              <span>مرکز پردازش و شوروم مرکزی هوم‌لایف · تهران</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleReaderModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={article.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A2116]/50 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-[30px] bg-[#FCF9F5] p-6 shadow-2xl sm:p-9"
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-[#6B7363]">
            <span>{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.date}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="بستن مقاله"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#EFECE5] text-[#242B20] hover:bg-[#E2DFD6]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <h2 className="mb-6 text-xl leading-snug font-extrabold text-[#1E241B] sm:text-2xl">
          {article.title}
        </h2>

        <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-[22px] bg-[#EAE7DF]">
          {article.imageSrc ? (
            <StudioImage
              src={article.imageSrc}
              alt={article.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <StudioImage
              src={HERO_CUTOUT_SRC}
              alt={article.title}
              className={`pointer-events-none absolute top-1/2 left-1/2 h-auto max-w-none ${article.cropClass}`}
            />
          )}
        </div>

        <div className="space-y-4 text-sm leading-[2] text-[#3B4334]">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
