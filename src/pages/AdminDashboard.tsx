import React, { useState } from 'react';

const AdminDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="admin-dashboard bg-background text-foreground p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${activeSection === 'analytics' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
          onClick={() => handleSectionClick('analytics')}
        >
          Customer Analytics
        </button>
        <button
          className={`px-4 py-2 rounded ${activeSection === 'bookings' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
          onClick={() => handleSectionClick('bookings')}
        >
          Bookings
        </button>
        <button
          className={`px-4 py-2 rounded ${activeSection === 'stock' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
          onClick={() => handleSectionClick('stock')}
        >
          Stock Management
        </button>
        <button
          className={`px-4 py-2 rounded ${activeSection === 'services' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
          onClick={() => handleSectionClick('services')}
        >
          Service and Price Management
        </button>
      </div>
      <section className="mt-4">
        {activeSection === 'analytics' && (
          <div>
            <h2 className="text-xl font-semibold">Customer Analytics</h2>
            <p>Customer analytics content will be displayed here.</p>
          </div>
        )}
        {activeSection === 'bookings' && (
          <div>
            <h2 className="text-xl font-semibold">Bookings</h2>
            <p>Bookings content will be displayed here.</p>
          </div>
        )}
        {activeSection === 'stock' && (
          <div>
            <h2 className="text-xl font-semibold">Stock Management</h2>
            <p>Stock management content will be displayed here.</p>
          </div>
        )}
        {activeSection === 'services' && (
          <div>
            <h2 className="text-xl font-semibold">Service and Price Management</h2>
            <p>Service and price management content will be displayed here.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default AdminDashboard; 