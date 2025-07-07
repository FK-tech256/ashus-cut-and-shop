
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

const ProductFilters = ({ selectedCategory, onCategoryChange, sortBy, onSortChange }: ProductFiltersProps) => {
  const categories = [
    { id: "all", name: "All Products", count: 42 },
    { id: "hair", name: "Hair Care", count: 18 },
    { id: "beauty", name: "Beauty", count: 15 },
    { id: "fashion", name: "Fashion", count: 9 }
  ];

  const sortOptions = [
    { id: "featured", name: "Featured" },
    { id: "price-low", name: "Price: Low to High" },
    { id: "price-high", name: "Price: High to Low" },
    { id: "rating", name: "Highest Rated" },
    { id: "name", name: "Name A-Z" }
  ];

  return (
    <div className="space-y-6">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`w-full flex items-center justify-between p-2 rounded-md text-left transition-colors ${
                selectedCategory === category.id
                  ? "bg-blue-100 text-blue-800"
                  : "hover:bg-gray-100"
              }`}
            >
              <span>{category.name}</span>
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Sort Options */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Sort By</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {sortOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onSortChange(option.id)}
              className={`w-full p-2 rounded-md text-left transition-colors ${
                sortBy === option.id
                  ? "bg-blue-100 text-blue-800"
                  : "hover:bg-gray-100"
              }`}
            >
              {option.name}
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Featured Brands */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Featured Brands</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Ashu's Collection</Badge>
            <Badge variant="outline">Gentleman's Choice</Badge>
            <Badge variant="outline">Style Master</Badge>
            <Badge variant="outline">Heritage Craft</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductFilters;
