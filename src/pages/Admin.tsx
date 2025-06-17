
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServicesManager from "@/components/admin/ServicesManager";
import StoreManager from "@/components/admin/StoreManager";
import RevenueAnalytics from "@/components/admin/RevenueAnalytics";
import ClientAnalytics from "@/components/admin/ClientAnalytics";
import { Settings, Store, BarChart3, Users } from "lucide-react";

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Admin Header */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Admin Dashboard</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Manage your barber shop services, store inventory, and analyze business performance
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="services" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Services
            </TabsTrigger>
            <TabsTrigger value="store" className="flex items-center gap-2">
              <Store className="w-4 h-4" />
              Store
            </TabsTrigger>
            <TabsTrigger value="revenue" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Revenue
            </TabsTrigger>
            <TabsTrigger value="clients" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Clients
            </TabsTrigger>
          </TabsList>

          <TabsContent value="services">
            <ServicesManager />
          </TabsContent>

          <TabsContent value="store">
            <StoreManager />
          </TabsContent>

          <TabsContent value="revenue">
            <RevenueAnalytics />
          </TabsContent>

          <TabsContent value="clients">
            <ClientAnalytics />
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Admin;
