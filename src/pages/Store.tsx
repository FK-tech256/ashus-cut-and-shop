
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/store/ProductGrid";
import ProductFilters from "@/components/store/ProductFilters";
import ShoppingCart from "@/components/store/ShoppingCart";
import { ShoppingCart as CartIcon, Search } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: "hair" | "beauty" | "fashion";
  brand: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  description: string;
  featured?: boolean;
}

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [cartItems, setCartItems] = useState<Array<{product: Product, quantity: number}>>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "Premium Hair Pomade",
      price: 1374.45,
      originalPrice: 1649.34,
      image: "/api/placeholder/300/300",
      category: "hair",
      brand: "Ashu's Collection",
      rating: 4.8,
      reviewCount: 156,
      inStock: true,
      description: "Professional-grade pomade for strong hold and natural shine",
      featured: true
    },
    {
      id: 2,
      name: "Beard Oil - Sandalwood",
      price: 1044.45,
      image: "/api/placeholder/300/300",
      category: "beauty",
      brand: "Gentleman's Choice",
      rating: 4.9,
      reviewCount: 203,
      inStock: true,
      description: "Nourishing beard oil with premium sandalwood scent"
    },
    {
      id: 3,
      name: "Classic Barber Comb",
      price: 714.45,
      image: "/api/placeholder/300/300",
      category: "fashion",
      brand: "Vintage Tools",
      rating: 4.7,
      reviewCount: 89,
      inStock: true,
      description: "Handcrafted wooden comb for professional styling"
    },
    {
      id: 4,
      name: "Hair Wax - Strong Hold",
      price: 1099.45,
      originalPrice: 1374.45,
      image: "/api/placeholder/300/300",
      category: "hair",
      brand: "Style Master",
      rating: 4.6,
      reviewCount: 124,
      inStock: true,
      description: "Long-lasting hair wax for all-day hold"
    },
    {
      id: 5,
      name: "Aftershave Balm",
      price: 934.45,
      image: "/api/placeholder/300/300",
      category: "beauty",
      brand: "Smooth Skin",
      rating: 4.8,
      reviewCount: 178,
      inStock: false,
      description: "Soothing aftershave balm with natural ingredients"
    },
    {
      id: 6,
      name: "Vintage Leather Toiletry Bag",
      price: 2529.45,
      image: "/api/placeholder/300/300",
      category: "fashion",
      brand: "Heritage Craft",
      rating: 4.9,
      reviewCount: 67,
      inStock: true,
      description: "Handcrafted leather bag for grooming essentials",
      featured: true
    }
  ];

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Beauty & Style Store</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Premium hair care, beauty products, and fashion accessories curated by professionals
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <ProductFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === "all" ? "All Products" : `${selectedCategory} Products`}
              </h2>
              <Button
                onClick={() => setIsCartOpen(true)}
                className="bg-orange-600 hover:bg-orange-700 relative"
              >
                <CartIcon className="w-5 h-5 mr-2" />
                Cart
                {cartItemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
            </div>
            
            <ProductGrid
              products={products}
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              sortBy={sortBy}
              onAddToCart={addToCart}
            />
          </div>
        </div>
      </div>

      {/* Shopping Cart Sidebar */}
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={(productId, quantity) => {
          setCartItems(prev =>
            prev.map(item =>
              item.product.id === productId
                ? { ...item, quantity }
                : item
            ).filter(item => item.quantity > 0)
          );
        }}
      />

      <Footer />
    </div>
  );
};

export default Store;
