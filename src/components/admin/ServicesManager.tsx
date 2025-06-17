
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Plus, Save, X } from "lucide-react";

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: string;
}

const ServicesManager = () => {
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      name: "Classic Cut",
      description: "Traditional barbering with modern precision",
      price: 824.50,
      duration: "30 min",
      category: "Haircut"
    },
    {
      id: 2,
      name: "Beard Trim",
      description: "Professional beard shaping and styling",
      price: 549.50,
      duration: "20 min",
      category: "Beard"
    },
    {
      id: 3,
      name: "Premium Package",
      description: "Complete grooming experience",
      price: 1374.50,
      duration: "60 min",
      category: "Package"
    }
  ]);

  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newService, setNewService] = useState<Partial<Service>>({
    name: "",
    description: "",
    price: 0,
    duration: "",
    category: ""
  });

  const handleEdit = (service: Service) => {
    setEditingService({ ...service });
  };

  const handleSave = (service: Service) => {
    setServices(prev => prev.map(s => s.id === service.id ? service : s));
    setEditingService(null);
  };

  const handleDelete = (id: number) => {
    setServices(prev => prev.filter(s => s.id !== id));
  };

  const handleAdd = () => {
    if (newService.name && newService.price) {
      const service: Service = {
        id: Date.now(),
        name: newService.name,
        description: newService.description || "",
        price: newService.price,
        duration: newService.duration || "",
        category: newService.category || ""
      };
      setServices(prev => [...prev, service]);
      setNewService({ name: "", description: "", price: 0, duration: "", category: "" });
      setIsAdding(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Manage Services</h2>
        <Button onClick={() => setIsAdding(true)} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Service
        </Button>
      </div>

      {isAdding && (
        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle>Add New Service</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="new-name">Service Name</Label>
                <Input
                  id="new-name"
                  value={newService.name}
                  onChange={(e) => setNewService(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter service name"
                />
              </div>
              <div>
                <Label htmlFor="new-category">Category</Label>
                <Input
                  id="new-category"
                  value={newService.category}
                  onChange={(e) => setNewService(prev => ({ ...prev, category: e.target.value }))}
                  placeholder="e.g., Haircut, Beard, Package"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="new-description">Description</Label>
              <Textarea
                id="new-description"
                value={newService.description}
                onChange={(e) => setNewService(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Service description"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="new-price">Price (ETB)</Label>
                <Input
                  id="new-price"
                  type="number"
                  step="0.01"
                  value={newService.price}
                  onChange={(e) => setNewService(prev => ({ ...prev, price: parseFloat(e.target.value) }))}
                  placeholder="0.00"
                />
              </div>
              <div>
                <Label htmlFor="new-duration">Duration</Label>
                <Input
                  id="new-duration"
                  value={newService.duration}
                  onChange={(e) => setNewService(prev => ({ ...prev, duration: e.target.value }))}
                  placeholder="e.g., 30 min"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <Button onClick={handleAdd} className="bg-green-600 hover:bg-green-700">
                <Save className="w-4 h-4 mr-2" />
                Save Service
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
        {services.map((service) => (
          <Card key={service.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              {editingService?.id === service.id ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Service Name</Label>
                      <Input
                        value={editingService.name}
                        onChange={(e) => setEditingService(prev => prev ? { ...prev, name: e.target.value } : null)}
                      />
                    </div>
                    <div>
                      <Label>Category</Label>
                      <Input
                        value={editingService.category}
                        onChange={(e) => setEditingService(prev => prev ? { ...prev, category: e.target.value } : null)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      value={editingService.description}
                      onChange={(e) => setEditingService(prev => prev ? { ...prev, description: e.target.value } : null)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Price (ETB)</Label>
                      <Input
                        type="number"
                        step="0.01"
                        value={editingService.price}
                        onChange={(e) => setEditingService(prev => prev ? { ...prev, price: parseFloat(e.target.value) } : null)}
                      />
                    </div>
                    <div>
                      <Label>Duration</Label>
                      <Input
                        value={editingService.duration}
                        onChange={(e) => setEditingService(prev => prev ? { ...prev, duration: e.target.value } : null)}
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={() => handleSave(editingService)} className="bg-green-600 hover:bg-green-700">
                      <Save className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" onClick={() => setEditingService(null)}>
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold">{service.name}</h3>
                      <Badge variant="secondary">{service.category}</Badge>
                    </div>
                    <p className="text-gray-600 mb-3">{service.description}</p>
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span className="font-semibold text-blue-600">{service.price.toFixed(2)} ETB</span>
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(service)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleDelete(service.id)} className="text-red-600 hover:text-red-700">
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

export default ServicesManager;
