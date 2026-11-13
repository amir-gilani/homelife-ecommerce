import { useMemo, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryShowcaseSection } from './components/CategoryShowcaseSection';
import { DiscountedProductsSection } from './components/DiscountedProductsSection';
import { CollectionBannersSection } from './components/CollectionBannersSection';
import { ProductGrid, SortOption } from './components/ProductGrid';
import { JournalAndProofSection } from './components/JournalAndProofSection';
import { Footer } from './components/Footer';
import {
  AccountModal,
  ArticleReaderModal,
  CartDrawer,
  ProductQuickViewModal,
  SearchModal,
} from './components/Overlays';
import { DISCOUNTED_PRODUCTS, INITIAL_CART_PRODUCT_IDS, NEWEST_PRODUCTS, PRODUCTS } from './data/storeData';
import { Article, CartItem, CategoryId, Product } from './types/store';

function buildInitialCart(): CartItem[] {
  const items: CartItem[] = [];
  for (const entry of INITIAL_CART_PRODUCT_IDS) {
    const product = PRODUCTS.find((p) => p.id === entry.id);
    if (product) {
      items.push({
        product,
        quantity: entry.quantity,
        selectedColor: product.colors[0]?.label || '',
      });
    }
  }
  return items;
}

export default function App() {
  const [activeNav, setActiveNav] = useState<string>('top');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>(CategoryId.ALL);
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [cartItems, setCartItems] = useState<CartItem[]>(buildInitialCart);

  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const totalCartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const filteredProducts = useMemo(() => {
    const base =
      selectedCategory === CategoryId.ALL
        ? NEWEST_PRODUCTS
        : PRODUCTS.filter((p) => p.category === selectedCategory);

    if (sortBy === 'price-asc') {
      return [...base].sort((a, b) => a.price - b.price);
    }
    if (sortBy === 'price-desc') {
      return [...base].sort((a, b) => b.price - a.price);
    }
    return base;
  }, [selectedCategory, sortBy]);

  const scrollToSection = (sectionId: string) => {
    setActiveNav(sectionId);
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCategorySelect = (category: CategoryId) => {
    setSelectedCategory(category);
    scrollToSection('products');
  };

  const handleAddToCart = (product: Product, colorLabel?: string, quantity = 1) => {
    const chosenColor = colorLabel || product.colors[0]?.label || '';
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedColor === chosenColor
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      }
      return [...prev, { product, quantity, selectedColor: chosenColor }];
    });

    setRecentlyAddedId(product.id);
    setTimeout(() => {
      setRecentlyAddedId((curr) => (curr === product.id ? null : curr));
    }, 1600);
  };

  const handleUpdateQuantity = (productId: string, selectedColor: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.selectedColor === selectedColor) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (productId: string, selectedColor: string) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.selectedColor === selectedColor)
      )
    );
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#FCF9F5] text-[#242B20]">
      <Navbar
        cartCount={totalCartCount}
        activeNav={activeNav}
        onNavigate={scrollToSection}
        onSelectCategory={handleCategorySelect}
        onOpenCart={() => setCartOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenAccount={() => setAccountOpen(true)}
      />

      <main>
        <HeroSection onExploreProducts={() => scrollToSection('products')} />

        <CategoryShowcaseSection onSelectCategory={handleCategorySelect} />

        <DiscountedProductsSection
          products={DISCOUNTED_PRODUCTS}
          recentlyAddedId={recentlyAddedId}
          onAddToCart={(product) => handleAddToCart(product, product.colors[0]?.label, 1)}
          onQuickView={(product) => setQuickViewProduct(product)}
        />

        <CollectionBannersSection
          onExploreNewCollection={() => handleCategorySelect(CategoryId.ALL)}
          onExploreFeatured={() => handleCategorySelect(CategoryId.FURNITURE)}
        />

        <ProductGrid
          products={filteredProducts}
          selectedCategory={selectedCategory}
          sortBy={sortBy}
          recentlyAddedId={recentlyAddedId}
          onSelectCategory={setSelectedCategory}
          onChangeSort={setSortBy}
          onAddToCart={(product, color) => handleAddToCart(product, color, 1)}
          onQuickView={(product) => setQuickViewProduct(product)}
        />

        <JournalAndProofSection onOpenArticle={(article) => setActiveArticle(article)} />
      </main>

      <Footer onSelectCategory={handleCategorySelect} onNavigate={scrollToSection} />

      {/* Interactive Modals & Drawers */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => setCartItems([])}
      />

      <SearchModal
        isOpen={searchOpen}
        products={PRODUCTS}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={(product) => setQuickViewProduct(product)}
      />

      <AccountModal isOpen={accountOpen} onClose={() => setAccountOpen(false)} />

      <ArticleReaderModal article={activeArticle} onClose={() => setActiveArticle(null)} />
    </div>
  );
}

