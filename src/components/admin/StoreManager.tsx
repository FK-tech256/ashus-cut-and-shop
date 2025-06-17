
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Edit, Trash2, Plus, Save, X, Package } from "lucide-react";

interface StoreItem {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: "hair" | "beauty" | "fashion";
  brand: string;
  stock: number;
  inStock: boolean;
}

const StoreManager = () => {
  const [items, setItems] = useState<StoreItem[]>([
    {
      id: 1,
      name: "Premium Hair Pomade",
      description: "Professional-grade pomade for strong hold and natural shine",
      price: 1374.45,
      originalPrice: 1649.34,
      category: "hair",
      brand: "Ashu's Collection",
      stock: 25,
      inStock: true
    },
    {
      id: 2,
      name: "Beard Oil - Sandalwood",
      description: "Nourishing beard oil with premium sandalwood scent",
      price: 1044.45,
      category: "beauty",
      brand: "Gentleman's Choice",
      stock: 15,
      inStock: true
    },
    {
      id: 3,
      name: "Classic Barber Comb",
      description: "Handcrafted wooden comb for professional styling",
      price: 714.45,
      category: "fashion",
      brand: "Vintage Tools",
      stock: 0,
      inStock: false
    }
  ]);

  const [editingItem, setEditingItem] = useState<StoreItem | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newItem, setNewItem] = useState<Partial<StoreItem>>({
    name: "",
    description: "",
    price: 0,
    category: "hair",
    brand: "",
    stock: 0,
    inStock: true
  });

  const handleEdit = (item: StoreItem) => {
    setEditingItem({ ...item });
  };

  const handleSave = (item: StoreItem) => {
    const updatedItem = { ...item, inStock: item.stock > 0 };
    setItems(prev => prev.map(i => i.id === item.id ? updatedItem : i));
    setEditingItem(null);
  };

  const handleDelete = (id: number) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const handleAdd = () => {
    if (newItem.name && newItem.price) {
      const item: StoreItem = {
        id: Date.now(),
        name: newItem.name,
        description: newItem.description || "",
        price: newItem.price,
        originalPrice: newItem.originalPrice,
        category: newItem.category as "hair" | "beauty" | "fashion",
        brand: newItem.brand || "",
        stock: newItem.stock || 0,
        inStock: (newItem.stock || 0) > 0
      };
      setItems(prev => [...prev, item]);
      setNewItem({ name: "", description: "", price: 0, category: "hair", brand: "", stock: 0, inStock: true });
      setIsAdding(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Manage Store Inventory</h2>
        <Button onClick={() => setIsAdding(true)} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Inventory Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5" />
              Total Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-blue-600">{items.length}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>In Stock</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">{items.filter(i => i.inStock).length}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Out of Stock</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-red-600">{items.filter(i => !i.inStock).length}</p>
          </CardContent>
        </Card>
      </div>

      {isAdding && (
        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle>Add New Product</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="new-name">Product Name</Label>
                <Input
                  id="new-name"
                  value={newItem.name}
                  onChange={(e) => setNewItem(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter product name"
                />
              </div>
              <div>
                <Label htmlFor="new-brand">Brand</Label>
                <Input
                  id="new-brand"
                  value={newItem.brand}
                  onChange={(e) => setNewItem(prev => ({ ...prev, brand: e.target.value }))}
                  placeholder="Enter brand name"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="new-description">Description</Label>
              <Textarea
                id="new-description"
                value={newItem.description}
                onChange={(e) => setNewItem(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Product description"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="new-category">Category</Label>
                <Select value={newItem.category} onValueChange={(value) => setNewItem(prev => ({ ...prev, category: value as "hair" | "beauty" | "fashion" }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hair">Hair</SelectItem>
                    <SelectItem value="beauty">Beauty</SelectItem>
                    <SelectItem value="fashion">Fashion</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="new-price">Price (ETB)</Label>
                <Input
                  id="new-price"
                  type="number"
                  step="0.01"
                  value={newItem.price}
                  onChange={(e) => setNewItem(prev => ({ ...prev, price: parseFloat(e.target.value) }))}
                  placeholder="0.00"
                />
              </div>
              <div>
                <Label htmlFor="new-stock">Stock Quantity</Label>
                <Input
                  id="new-stock"
                  type="number"
                  value={newItem.stock}
                  onChange={(e) => setNewItem(prev => ({ ...prev, stock: parseInt(e.target.value) }))}
                  placeholder="0"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <Button onClick={handleAdd} className="bg-green-600 hover:bg-green-700">
                <Save className="w-4 h-4 mr-2" />
                Save Product
              </Button>
              <Button variant="outline" onClick={() => setIsAdding(false)}>
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {items.map((item) => (
          <Card key={item.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              {editingItem?.id === item.id ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Product Name</Label>
                      <Input
                        value={editingItem.name}
                        onChange={(e) => setEditingItem(prev => prev ? { ...prev, name: e.target.value } : null)}
                      />
                    </div>
                    <div>
                      <Label>Brand</Label>
                      <Input
                        value={editingItem.brand}
                        onChange={(e) => setEditingItem(prev => prev ? { ...prev, brand: e.target.value } : null)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      value={editingItem.description}
                      onChange={(e) => setEditingItem(prev => prev ? { ...prev, description: e.target.value } : null)}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label>Category</Label>
                      <Select value={editingItem.category} onValueChange={(value) => setEditingItem(prev => prev ? { ...prev, category: value as "hair" | "beauty" | "fashion" } : null)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hair">Hair</SelectItem>
                          <SelectItem value="beauty">Beauty</SelectItem>
                          <SelectItem value="fashion">Fashion</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Price (ETB)</Label>
                      <Input
                        type="number"
                        step="0.01"
                        value={editingItem.price}
                        onChange={(e) => setEditingItem(prev => prev ? { ...prev, price: parseFloat(e.target.value) } : null)}
                      />
                    </div>
                    <div>
                      <Label>Stock</Label>
                      <Input
                        type="number"
                        value={editingItem.stock}
                        onChange={(e) => setEditingItem(prev => prev ? { ...prev, stock: parseInt(e.target.value) } : null)}
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={() => handleSave(editingItem)} className="bg-green-600 hover:bg-green-700">
                      <Save className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" onClick={() => setEditingItem(null)}>
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <Badge variant="secondary">{item.category}</Badge>
                      <Badge variant={item.inStock ? "default" : "destructive"}>
                        {item.inStock ? "In Stock" : "Out of Stock"}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <p className="text-sm text-gray-500 mb-3">Brand: {item.brand}</p>
                    <div className="flex gap-4 text-sm">
                      <span className="font-semibold text-blue-600">{item.price.toFixed(2)} ETB</span>
                      {item.originalPrice && (
                        <span className="text-gray-500 line-through">{item.originalPrice.toFixed(2)} ETB</span>
                      )}
                      <span className="text-gray-600">Stock: {item.stock} units</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(item)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleDelete(item.id)} className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StoreManager;
