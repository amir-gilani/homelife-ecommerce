import { Article, CategoryId, CategoryShowcaseItem, Product, Testimonial } from '../types/store';

export const HERO_CUTOUT_SRC = '/images/banners/hero_cutout.png';

const PERSIAN_DIGITS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

export function toPersianDigits(value: number | string): string {
  return String(value).replace(/\d/g, (d) => PERSIAN_DIGITS[Number(d)]);
}

export function formatToman(amount: number): string {
  const formatted = amount.toLocaleString('en-US');
  return `${toPersianDigits(formatted)} تومان`;
}

export const CATEGORY_SHOWCASE_ITEMS: CategoryShowcaseItem[] = [
  {
    id: 'showcase-furniture',
    title: 'مبل و صندلی',
    categoryId: CategoryId.FURNITURE,
    imageSrc: '/images/categories/cat_armchair.png',
  },
  {
    id: 'showcase-lighting',
    title: 'چراغ و آباژور',
    categoryId: CategoryId.LIGHTING,
    imageSrc: '/images/categories/cat_lamp.png',
  },
  {
    id: 'showcase-vases',
    title: 'گلدان و سرامیک',
    categoryId: CategoryId.PLANTS_VASES,
    imageSrc: '/images/categories/cat_vases.png',
  },
  {
    id: 'showcase-plants',
    title: 'گیاهان طبیعی',
    categoryId: CategoryId.PLANTS_VASES,
    imageSrc: '/images/categories/cat_plant.png',
  },
  {
    id: 'showcase-rugs',
    title: 'فرش و منسوجات',
    categoryId: CategoryId.TEXTILES_DECOR,
    imageSrc: '/images/categories/cat_rug.png',
  },
  {
    id: 'showcase-pouf',
    title: 'پاف و نشیمن',
    categoryId: CategoryId.FURNITURE,
    imageSrc: '/images/categories/cat_pouf.png',
  },
  {
    id: 'showcase-flowers',
    title: 'گل‌آرایی رومیزی',
    categoryId: CategoryId.PLANTS_VASES,
    imageSrc: '/images/categories/cat_flowers.png',
  },
];

export const CATEGORIES: { id: CategoryId; label: string; subtitle: string; countLabel: string }[] = [
  {
    id: CategoryId.ALL,
    label: 'همه محصولات',
    subtitle: 'کلکسیون کامل دکوراسیون',
    countLabel: '۱۱ محصول منتخب',
  },
  {
    id: CategoryId.FURNITURE,
    label: 'مبلمان و نشیمن',
    subtitle: 'فرم‌های منحنی و چوب بلوط طبیعی',
    countLabel: '۴ محصول',
  },
  {
    id: CategoryId.LIGHTING,
    label: 'روشنایی و آباژور',
    subtitle: 'نورپردازی گرم و مینیمال',
    countLabel: '۲ محصول',
  },
  {
    id: CategoryId.PLANTS_VASES,
    label: 'گلدان و گیاهان',
    subtitle: 'سرامیک دست‌ساز و گیاهان آپارتمانی',
    countLabel: '۳ محصول',
  },
  {
    id: CategoryId.TEXTILES_DECOR,
    label: 'فرش و منسوجات',
    subtitle: 'فرش بافت‌دار، کوسن و شال مبل',
    countLabel: '۲ محصول',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'arta-boucle-sofa',
    title: 'مبل راحتی بوکله مدل آرتا',
    category: CategoryId.FURNITURE,
    categoryLabel: 'مبلمان و نشیمن',
    materialLabel: 'پارچه بوکله نانو · پایه بلوط',
    price: 14200000,
    originalPrice: 14700000,
    discountPercent: 30,
    rating: '۴.۵',
    dimensions: '۸۸ × ۸۴ × ۷۸ سانتی‌متر',
    stockLabel: 'آماده ارسال',
    shortDescription:
      'مبل راحتی تک‌نفره با خطوط منحنی نرم، کوسن مخمل زیتونی و پایه چوب بلوط طبیعی که حس گرما و آرامش بصری کم‌نظیری به فضای نشیمن می‌بخشد.',
    highlights: [
      'روکش بوکله ضدلک با بافت تنفس‌پذیر و لطیف',
      'همراه با کوسن مخمل سبز زیتونی هماهنگ با چیدمان',
      'کلاف و پایه‌های چوب راش و بلوط با ضمانت ۳۶ ماهه',
    ],
    imageSrc: '/images/products/prod_boucle_armchair.png',
    cropClass: 'w-full',
    studioBgClass: 'bg-[#F4F2EC]',
    colors: [
      { id: 'cream', label: 'کرم استخوانی', swatchClass: 'bg-[#EFE9DF]' },
      { id: 'oat', label: 'شنی گرم', swatchClass: 'bg-[#D7CCB8]' },
      { id: 'sage', label: 'سبز مریم‌گلی', swatchClass: 'bg-[#94A081]' },
    ],
    featuredInHero: true,
  },
  {
    id: 'luna-brass-lamp',
    title: 'آباژور رومیزی برنجی مدل لونا',
    category: CategoryId.LIGHTING,
    categoryLabel: 'روشنایی و آباژور',
    materialLabel: 'فلز برنج مات · شید کتان کرم',
    price: 2080000,
    originalPrice: 2500000,
    discountPercent: 30,
    rating: '۴.۲',
    dimensions: 'قطر ۳۴ × ارتفاع ۵۶ سانتی‌متر',
    stockLabel: 'آماده ارسال',
    shortDescription:
      'آباژور رومیزی مینیمال با بدنه استوانه‌ای برنجی برس‌خورده و شید کتان کرم که نوری گرم و بدون خیرگی در فضای نشیمن و اتاق خواب پخش می‌کند.',
    highlights: [
      'بدنه فلزی با آبکاری برنج مات مقاوم در برابر تغییر رنگ',
      'شید پارچه‌ای کتان با پخش نور ملایم و یکنواخت',
      'مجهز به کلید تایمر و کابل ابریشمی هم‌رنگ بدنه',
    ],
    imageSrc: '/images/products/prod_brass_lamp.png',
    cropClass: 'w-full',
    studioBgClass: 'bg-[#F4F2EC]',
    colors: [
      { id: 'warm-brass', label: 'برنجی مات و کرم', swatchClass: 'bg-[#C59B49]' },
      { id: 'olive-grey', label: 'برنزی و شنی', swatchClass: 'bg-[#9AA18C]' },
    ],
    featuredInHero: true,
  },
  {
    id: 'barg-textured-rug',
    title: 'فرش دست‌بافت برجسته مدل ساحل',
    category: CategoryId.TEXTILES_DECOR,
    categoryLabel: 'فرش و منسوجات',
    materialLabel: 'پشم و پنبه طبیعی · بافت برجسته',
    price: 5000000,
    originalPrice: 6800000,
    discountPercent: 30,
    rating: '۴.۵',
    dimensions: '۱۶۰ × ۲۳۰ سانتی‌متر',
    stockLabel: 'آماده ارسال',
    shortDescription:
      'فرش مینیمال با نقوش هندسی هم‌رنگ و بافت نرم و برجسته که زیر میز جلومبلی و مبلمان نشیمن گرمای فوق‌العاده‌ای ایجاد می‌کند.',
    highlights: [
      'بافت ۱۰۰٪ الیاف طبیعی بدون پرزدهی و ضدحساسیت',
      'پشت‌دار ضدلغزش روی سرامیک و پارکت چوبی',
      'قابل شست‌وشو و مقاوم در برابر پاخوردگی روزمره',
    ],
    imageSrc: '/images/products/prod_woven_rug.png',
    cropClass: 'w-full',
    studioBgClass: 'bg-[#F4F2EC]',
    colors: [
      { id: 'warm-cream', label: 'کرم شنی طبیعی', swatchClass: 'bg-[#DDD0BC]' },
      { id: 'oatmeal', label: 'بژ جو دوسر', swatchClass: 'bg-[#C7B8A1]' },
    ],
    featuredInHero: true,
  },
  {
    id: 'vanilla-ceramic-vase-set',
    title: 'ست گلدان سرامیکی مدل وانیلا',
    category: CategoryId.PLANTS_VASES,
    categoryLabel: 'گلدان و گیاهان',
    materialLabel: 'سرامیک لعاب مات · سه‌تکه',
    price: 2450000,
    originalPrice: 3100000,
    discountPercent: 20,
    rating: '۴.۶',
    dimensions: 'ارتفاع ۳۲، ۲۲ و ۱۴ سانتی‌متر',
    stockLabel: 'آماده ارسال',
    shortDescription:
      'مجموعه سه‌تکه گلدان‌های سرامیکی در ابعاد مکمل با لعاب کرم استخوانی و سبز مریم‌گلی، ایده‌آل برای روی میز جلومبلی، کنسول و شلف دیواری.',
    highlights: [
      'بدنه سرامیکی پخته‌شده در دمای بالا با لعاب ضدآب داخلی',
      'ترکیب سه ارتفاع متفاوت بر اساس قانون سه‌تایی چیدمان',
      'هماهنگی کامل رنگی با صفحات چوبی و سنگ تراورتن',
    ],
    imageSrc: '/images/products/prod_ceramic_vases.png',
    cropClass: 'w-full',
    studioBgClass: 'bg-[#F4F2EC]',
    colors: [
      { id: 'warm-ivory', label: 'ترکیب کرم و مریم‌گلی', swatchClass: 'bg-[#94A386]' },
      { id: 'stone-beige', label: 'سفید عاجی یکدست', swatchClass: 'bg-[#EDE6DA]' },
    ],
    featuredInHero: false,
  },
  {
    id: 'olive-velvet-pouf',
    title: 'پاف نشیمن بافت درشت مدل زیتون',
    category: CategoryId.FURNITURE,
    categoryLabel: 'مبلمان و نشیمن',
    materialLabel: 'نخ پنبه ارگانیک · بافت دست‌ساز',
    price: 4290000,
    originalPrice: 5200000,
    discountPercent: 18,
    rating: '۴.۴',
    dimensions: 'قطر ۵۵ × ارتفاع ۴۰ سانتی‌متر',
    stockLabel: 'تعداد محدود',
    shortDescription:
      'پاف گرد چندمنظوره با بافت برجسته و رنگ سبز زیتونی اصیل، ایده‌آل به عنوان نشیمن مکمل یا زیرپایی کنار مبلمان کرم و چوب طبیعی.',
    highlights: [
      'بافت متراکم از نخ پنبه ضخیم ضدسایش و ضدحساسیت',
      'وزن سبک برای جابه‌جایی آسان در چیدمان مهمانی',
      'پرشده با الیاف فشرده حفظ‌کننده فرم در استفاده طولانی',
    ],
    imageSrc: '/images/products/prod_knit_pouf.png',
    cropClass: 'w-full',
    studioBgClass: 'bg-[#F4F2EC]',
    colors: [
      { id: 'olive', label: 'سبز زیتونی', swatchClass: 'bg-[#647044]' },
      { id: 'linen', label: 'کتانی روشن', swatchClass: 'bg-[#E4DECF]' },
    ],
    featuredInHero: false,
  },
  {
    id: 'strelitzia-planter',
    title: 'گیاه طبیعی پرنده بهشتی با گلدان',
    category: CategoryId.PLANTS_VASES,
    categoryLabel: 'گلدان و گیاهان',
    materialLabel: 'گیاه طبیعی گرمسیری · گلدان سرامیکی',
    price: 3850000,
    originalPrice: 4600000,
    discountPercent: 16,
    rating: '۴.۷',
    dimensions: 'ارتفاع کل ۱۳۵ · قطر گلدان ۳۸ سانتی‌متر',
    stockLabel: 'آماده ارسال',
    shortDescription:
      'گیاه آپارتمانی برگ‌پهن و شاداب کاشته‌شده در گلدان سرامیکی مات کرم شنی با خاک مخصوص و زهکشی استاندارد برای کنار مبل.',
    highlights: [
      'مقاوم در برابر نور غیرمستقیم آپارتمان و نگهداری آسان',
      'گلدان سرامیکی سنگین و مقاوم با زیرگلدانی مخفی',
      'تصفیه‌کننده طبیعی هوا و ایجادکننده نقطه کانونی سبز',
    ],
    imageSrc: '/images/products/prod_strelitzia_plant.png',
    cropClass: 'w-full',
    studioBgClass: 'bg-[#F4F2EC]',
    colors: [
      { id: 'sand-pot', label: 'گلدان کرم شنی', swatchClass: 'bg-[#E2D6C5]' },
      { id: 'grey-pot', label: 'گلدان طوسی گرم', swatchClass: 'bg-[#C4C0B6]' },
    ],
    featuredInHero: false,
  },
  {
    id: 'hydrangea-bouquet-vase',
    title: 'گلدان سرامیکی و دسته‌گل ادریسی',
    category: CategoryId.PLANTS_VASES,
    categoryLabel: 'گلدان و گیاهان',
    materialLabel: 'سرامیک کرم مات · گل ابریشمی لمسی',
    price: 2190000,
    originalPrice: 2750000,
    discountPercent: 20,
    rating: '۴.۵',
    dimensions: 'قطر ۳۵ × ارتفاع ۴۲ سانتی‌متر',
    stockLabel: 'آماده ارسال',
    shortDescription:
      'ترکیب چشم‌نواز شکوفه‌های سفید ادریسی و برگ‌های سبز اکالیپتوس در گلدان کروی کرم، دقیقاً مشابه چیدمان ژورنالی روی میز نشیمن.',
    highlights: [
      'گل‌های لمسی درجه یک با ظاهر و بافت کاملاً طبیعی',
      'گلدان سرامیکی کروی با لعاب قابل شست‌وشو',
      'آماده قرارگیری روی میز جلومبلی یا ناهارخوری',
    ],
    imageSrc: '/images/products/prod_hydrangea_vase.png',
    cropClass: 'w-full',
    studioBgClass: 'bg-[#F4F2EC]',
    colors: [
      { id: 'white-green', label: 'سفید و سبز طبیعی', swatchClass: 'bg-[#EAE5D9]' },
    ],
    featuredInHero: false,
  },
  {
    id: 'nordic-oak-coffee-table',
    title: 'میز جلومبلی گرد بلوط مدل نوردیک',
    category: CategoryId.FURNITURE,
    categoryLabel: 'مبلمان و نشیمن',
    materialLabel: 'چوب بلوط طبیعی · پایه ستونی شیاردار',
    price: 9800000,
    originalPrice: 11200000,
    discountPercent: 15,
    rating: '۴.۸',
    dimensions: 'قطر ۸۵ × ارتفاع ۳۸ سانتی‌متر',
    stockLabel: 'آماده ارسال',
    shortDescription:
      'میز جلومبلی گرد با صفحه یکپارچه و پایه استوانه‌ای شیاردار از چوب بلوط طبیعی که نقطه کانونی گرمی در فضای نشیمن می‌سازد.',
    highlights: [
      'صفحه و پایه استوانه‌ای از چوب بلوط طبیعی با پوشش روغن گیاهی مات',
      'لبه گرد و ایمن با مقاومت بالا در برابر رطوبت و حرارت',
      'طراحی مینیمال اسکاندیناوی هماهنگ با انواع مبلمان بوکله',
    ],
    imageSrc: '/images/products/prod_oak_table.png',
    cropClass: 'w-full',
    studioBgClass: 'bg-[#F4F2EC]',
    colors: [
      { id: 'natural-oak', label: 'بلوط روشن طبیعی', swatchClass: 'bg-[#C89D66]' },
      { id: 'walnut-oak', label: 'بلوط گرم', swatchClass: 'bg-[#A67B48]' },
    ],
    featuredInHero: false,
  },
  {
    id: 'alp-fluted-console',
    title: 'کنسول چوبی شیاردار مدل آلپ',
    category: CategoryId.FURNITURE,
    categoryLabel: 'مبلمان و نشیمن',
    materialLabel: 'چوب بلوط شیاردار · دستگیره برنجی',
    price: 16400000,
    originalPrice: 18900000,
    discountPercent: 20,
    rating: '۴.۷',
    dimensions: '۱۶۰ × ۴۲ × ۷۶ سانتی‌متر',
    stockLabel: 'تعداد محدود',
    shortDescription:
      'کنسول و میز تلویزیون چوبی با درب‌های شیاردار عمودی، لولاهای آرام‌بند و دستگیره‌های ظریف برنجی برای فضای نشیمن و پذیرایی.',
    highlights: [
      'نمای شیاردار دست‌ساز از چوب طبیعی بلوط با رگه‌های گرم',
      'دارای فضای طبقه‌بندی‌شده داخلی برای نظم‌دهی کامل وسایل',
      'هماهنگی بی‌نقص با آباژورهای برنجی و دکوراسیون مینیمال',
    ],
    imageSrc: '/images/products/prod_fluted_console.png',
    cropClass: 'w-full',
    studioBgClass: 'bg-[#F4F2EC]',
    colors: [
      { id: 'warm-oak', label: 'بلوط طلایی روشن', swatchClass: 'bg-[#C48F52]' },
      { id: 'smoked-oak', label: 'بلوط طبیعی مات', swatchClass: 'bg-[#A67B48]' },
    ],
    featuredInHero: false,
  },
  {
    id: 'saga-dome-pendant',
    title: 'آباژور گنبدی چوب بلوط مدل ساگا',
    category: CategoryId.LIGHTING,
    categoryLabel: 'روشنایی و آباژور',
    materialLabel: 'شید فلزی سبز مریم‌گلی · پایه بلوط',
    price: 3450000,
    originalPrice: 4100000,
    discountPercent: 16,
    rating: '۴.۶',
    dimensions: 'قطر ۳۶ × ارتفاع ۴۸ سانتی‌متر',
    stockLabel: 'آماده ارسال',
    shortDescription:
      'آباژور رومیزی مدرن با شید گنبدی فلزی به رنگ سبز مریم‌گلی مات و پایه خراطی‌شده چوب بلوط طبیعی، مناسب روی کنسول و میز عسلی.',
    highlights: [
      'پوشش رنگ الکترواستاتیک مات ضدخش با تناژ سبز گیاهی',
      'پایه یکپارچه از چوب بلوط طبیعی با پوشش روغن گیاهی مات',
      'پخش نور متمرکز و گرم به سمت پایین بدون خیرگی چشم',
    ],
    imageSrc: '/images/products/prod_mushroom_lamp.png',
    cropClass: 'w-full',
    studioBgClass: 'bg-[#F4F2EC]',
    colors: [
      { id: 'sage-green', label: 'سبز مریم‌گلی مات', swatchClass: 'bg-[#7D8C6D]' },
      { id: 'warm-cream', label: 'کرم شنی مات', swatchClass: 'bg-[#E5DFD2]' },
    ],
    featuredInHero: false,
  },
  {
    id: 'nava-cushion-throw-set',
    title: 'ست کوسن بوکله و شال مبل مدل نوا',
    category: CategoryId.TEXTILES_DECOR,
    categoryLabel: 'فرش و منسوجات',
    materialLabel: 'بوکله کرم و کتان زیتونی · سه‌تکه',
    price: 2890000,
    originalPrice: 3400000,
    discountPercent: 15,
    rating: '۴.۷',
    dimensions: 'کوسن‌ها ۴۵×۴۵ · شال مبل ۱۳۰×۱۷۰ سانتی‌متر',
    stockLabel: 'آماده ارسال',
    shortDescription:
      'ست هماهنگ شامل یک کوسن بوکله کرم، یک کوسن کتان سبز زیتونی و شال مبل درشت‌بافت پنبه‌ای برای تکمیل چیدمان روی مبل راحتی.',
    highlights: [
      'روکش‌های زیپ‌دار قابل شست‌وشو با دوخت مخفی ظریف',
      'شال مبل بافته‌شده از نخ پنبه ۱۰۰٪ ارگانیک و ضدحساسیت',
      'ترکیب رنگی آماده و هماهنگ با پالت طبیعی هوم‌لایف',
    ],
    imageSrc: '/images/products/prod_cushion_throw_set.png',
    cropClass: 'w-full',
    studioBgClass: 'bg-[#F4F2EC]',
    colors: [
      { id: 'olive-cream', label: 'ترکیب زیتونی و کرم', swatchClass: 'bg-[#6F7B52]' },
      { id: 'sand-cream', label: 'کرم و بژ شنی', swatchClass: 'bg-[#DFD5C5]' },
    ],
    featuredInHero: false,
  },
];

// Dedicated 3 unique discounted products for DiscountedProductsSection
export const DISCOUNTED_PRODUCTS: Product[] = PRODUCTS.slice(0, 3);

// Dedicated 8 unique newest products for ProductGrid ("جدیدترین محصولات")
export const NEWEST_PRODUCTS: Product[] = PRODUCTS.slice(3, 11);

export const INITIAL_CART_PRODUCT_IDS: { id: string; quantity: number }[] = [
  { id: 'vanilla-ceramic-vase-set', quantity: 1 },
  { id: 'barg-textured-rug', quantity: 1 },
];

export const ARTICLES: Article[] = [
  {
    id: 'olive-cream-harmony',
    title: 'چطور ترکیب سبز زیتونی و کرم، آرامش طبیعت را به نشیمن می‌آورد؟',
    category: 'اصول رنگ و چیدمان',
    readTime: '۴ دقیقه مطالعه',
    date: 'آبان ۱۴۰۵',
    excerpt:
      'بررسی نسبت طلایی رنگ‌های خنثی گرم با تناژهای سبز گیاهی و نقش بافت چوب بلوط در ایجاد تعادل بصری خانه.',
    content: [
      'یکی از ماندگارترین پالت‌های رنگی در طراحی داخلی معاصر، ترکیب کرم استخوانی به عنوان بوم اصلی (حدود ۶۰ درصد فضا)، چوب بلوط روشن و سنگ طبیعی به عنوان سطوح مکمل (۳۰ درصد) و سبز زیتونی در نقش نقاط تأکید (۱۰ درصد) است.',
      'زمانی که مبل اصلی را با پارچه بوکله روشن انتخاب می‌کنید، فضا دلبازتر و پرنورتر دیده می‌شود. سپس افزودن یک شال مبل درشت‌بافت زیتونی، پاف مخمل کانال‌دوزی و گیاهان طبیعی برگ‌پهن، عمق و سرزندگی فضا را بدون شلوغی بصری دوچندان می‌کند.',
      'توصیه طراحان هوم‌لایف این است که حداقل سه بافت متفاوت (چوب شیاردار، سرامیک مات و پارچه بافت‌دار) را در محدوده میز جلومبلی کنار هم قرار دهید تا چشم در جزئیات خانه مکث دلنشینی داشته باشد.',
    ],
    cropClass: 'w-[215%] -translate-x-[42%] -translate-y-[66%]',
    imageSrc: '/images/articles/article_living.jpg',
  },
  {
    id: 'warm-pendant-lighting',
    title: 'راهنمای انتخاب ارتفاع و دمای نور آویز بالای میز جلومبلی',
    category: 'نورپردازی داخلی',
    readTime: '۳ دقیقه مطالعه',
    date: 'مهر ۱۴۰۵',
    excerpt:
      'فاصله استاندارد چراغ آویز از سطح میز و انتخاب کلوین مناسب برای تفکیک بافت پارچه و چوب در شب.',
    content: [
      'چراغ‌های آویز گنبدی با بدنه مات، نور را به جای پخش خیره‌کننده در کل سقف، به شکل متمرکز و نرم به سمت مرکز نشیمن هدایت می‌کنند و حس صمیمیت عصرگاهی را شکل می‌دهند.',
      'برای میز جلومبلی در فضای نشیمن، ارتفاع پایین‌ترین لبه آویز از کف زمین بهتر است بین ۱۷۵ تا ۱۹۰ سانتی‌متر تنظیم شود تا دید افراد نشسته روی مبل را مسدود نکند و هم‌زمان پیوند بصری با گلدان روی میز بسازد.',
      'استفاده از لامپ‌های ۲۷۰۰ تا ۳۰۰۰ کلوین (آفتابی ملایم) با شاخص نمود رنگ بالا باعث می‌شود رنگ سبز گیاهان و گرمای چوب بلوط دقیقاً مشابه نور روز طبیعی جلوه کند.',
    ],
    cropClass: 'w-[310%] -translate-x-[56%] -translate-y-[24%]',
    imageSrc: '/images/articles/article_lamp.jpg',
  },
  {
    id: 'tabletop-styling-rule-of-three',
    title: 'قانون سه‌تایی در چیدمان روی میز جلومبلی گرد',
    category: 'اکسسوری دکوراتیو',
    readTime: '۵ دقیقه مطالعه',
    date: 'مهر ۱۴۰۵',
    excerpt:
      'چگونه با ترکیب یک گلدان بلند، دو کتاب هنری و یک رایحه‌افشان چوبی، نقطه کانونی متوازنی بسازیم؟',
    content: [
      'میزهای گرد چوبی به دلیل نداشتن گوشه‌های تیز، جریان حرکت در نشیمن را روان می‌کنند. بهترین روش دکور کردن آن‌ها، چیدمان مثلثی در مرکز میز با سه ارتفاع متفاوت است.',
      'یک عنصر عمودی شاخص مانند گلدان سرامیکی سفید با شاخه‌های ادریسی یا اکالیپتوس ارتفاع اول را می‌سازد. در کنار آن، دو جلد کتاب با جلد کتان روشن به عنوان سکو قرار می‌گیرند تا خوشبوکننده محیط و مجسمه سرامیکی کوچک روی آن بنشینند.',
      'همیشه حداقل ۴۰ درصد از سطح چوبی میز را خالی نگه دارید تا هم بافت زیبای چوب دیده شود و هم فضای کافی برای پذیرایی روزمره باقی بماند.',
    ],
    cropClass: 'w-[245%] -translate-x-[57%] -translate-y-[61%]',
    imageSrc: '/images/articles/article_table.jpg',
  },
  {
    id: 'natural-textures-and-boucle',
    title: 'اصول هماهنگی بافت بوکله و چوب طبیعی در دکوراسیون مینیمال',
    category: 'متریال و بافت',
    readTime: '۴ دقیقه مطالعه',
    date: 'شهریور ۱۴۰۵',
    excerpt:
      'چگونه تضاد لمسی پارچه‌های حلقه‌ای بوکله در کنار گره‌های گرم چوب بلوط، به خانه عمق و اصالت می‌بخشد.',
    content: [
      'پارچه بوکله با گره‌های ریز و سطح نرم پنبه‌ای خود، نور را جذب کرده و گرمای مطبوعی به فضاهای بزرگ و مدرن می‌بخشد. قرارگیری این بافت در کنار چوب فرآوری‌شده بلوط با روغن‌های گیاهی، پیوندی چشم‌نواز میان نرمی و استحکام خلق می‌کند.',
      'برای حفظ تعادل، بهتر است در کنار سطوح بافت‌دار از اکسسوری‌های مات سرامیکی با خطوط ساده استفاده شود تا توجه بصری میان عناصر کلیدی به درستی تقسیم شود.',
      'در هوم‌لایف، تمامی مبلمان بوکله با لایه محافظ نانو ضدلک پوشش داده شده‌اند تا زیبایی رنگ‌های روشن بدون دغدغه در خانه شما ماندگار باشد.',
    ],
    cropClass: 'w-[230%] -translate-x-[48%] -translate-y-[52%]',
    imageSrc: '/images/articles/article_boucle.jpg',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'نگار شریفی',
    roleAndCity: 'معمار داخلی · تهران',
    purchasedItem: 'مبل راحتی آرتا و ست گلدان وانیلا',
    quote:
      'برای پروژه بازسازی آپارتمان ۱۱۵ متری در نیاوران، مبل بوکله آرتا و ست سرامیکی وانیلا را سفارش دادیم. کیفیت دوخت پارچه و لعاب ظروف دقیقاً هم‌تراز نمونه‌های ژورنالی اروپایی بود و در کمتر از ۴۸ ساعت سالم تحویل گرفتیم.',
  },
  {
    id: 't2',
    author: 'امیرحسین کاظمی',
    roleAndCity: 'طراح محصول · اصفهان',
    purchasedItem: 'آباژور برنجی لونا و گیاه پرنده بهشتی',
    quote:
      'قبل از خرید، نشیمن خانه ما بی‌روح و سرد به نظر می‌رسید. فقط با اضافه کردن آباژور لونا و گیاه طبیعی هوم‌لایف، کل فضای خانه گرم و یکپارچه شد.',
  },
  {
    id: 't3',
    author: 'مهسا رادمنش',
    roleAndCity: 'پزشک · شیراز',
    purchasedItem: 'پاف بافت زیتون و فرش ساحل',
    quote:
      'رنگ سبز زیتونی پاف و بافت برجسته فرش از نزدیک حتی لطیف‌تر و اصیل‌تر از تصاویر سایت است. بسته‌بندی ضدضربه و پیگیری دقیق تیم پشتیبانی تجربه خرید بسیار مطمئنی ساخت.',
  },
];
