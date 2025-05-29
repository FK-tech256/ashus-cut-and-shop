
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import { Product } from "@/pages/Store";

interface ProductGridProps {
  products: Product[];
  searchQuery: string;
  selectedCategory: string;
  sortBy: string;
  onAddToCart: (product: Product) => void;
}

const ProductGrid = ({ products, searchQuery, selectedCategory, sortBy, onAddToCart }: ProductGridProps) => {
  // Filter products
  let filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Sort products
  filteredProducts = filteredProducts.sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "name":
        return a.name.localeCompare(b.name);
      case "featured":
      default:
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.rating - a.rating;
    }
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <Card key={product.id} className="group hover:shadow-lg transition-shadow overflow-hidden">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {product.featured && (
              <Badge className="absolute top-3 left-3 bg-orange-600 text-white">
                Featured
              </Badge>
            )}
            {product.originalPrice && (
              <Badge className="absolute top-3 right-3 bg-red-500 text-white">
                Sale
              </Badge>
            )}
            {!product.inStock && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <Badge variant="destructive" className="text-lg px-4 py-2">
                  Out of Stock
                </Badge>
              </div>
            )}
          </div>
          
          <CardContent className="p-4">
            <div className="mb-2">
              <p className="text-sm text-gray-500">{product.brand}</p>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                {product.name}
              </h3>
            </div>
            
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {product.description}
            </p>
            
            <div className="flex items-center mb-3">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-gray-600">
                  {product.rating} ({product.reviewCount})
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-gray-900">
                  {product.price.toFixed(2)} ETB
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    {product.originalPrice.toFixed(2)} ETB
                  </span>
                )}
              </div>
              
              <Button
                onClick={() => onAddToCart(product)}
                disabled={!product.inStock}
                size="sm"
                className="bg-blue-700 hover:bg-blue-800"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductGrid;
