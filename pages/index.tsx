import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { APP_CONFIG } from '../constants';

const Home: React.FC = () => {
  const handleBookNow = (title: string) => {
    alert(`Booking ${title}`);
  };

  const sampleListings = [
    {
      id: '1',
      title: 'Modern Apartment in Downtown',
      description: 'Beautiful modern apartment with great city views',
      image: 'https://picsum.photos/400/300?random=1',
      price: 120,
      location: 'New York, NY'
    },
    {
      id: '2',
      title: 'Cozy Beach House',
      description: 'Relaxing beach house with ocean access',
      image: 'https://picsum.photos/400/300?random=2',
      price: 200,
      location: 'Miami, FL'
    },
    {
      id: '3',
      title: 'Mountain Cabin Retreat',
      description: 'Peaceful cabin in the mountains with hiking trails',
      image: 'https://picsum.photos/400/300?random=3',
      price: 150,
      location: 'Denver, CO'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">{APP_CONFIG.name}</h1>
          <p className="text-gray-600">{APP_CONFIG.description}</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Featured Listings</h2>
          <Button variant="primary" size="large">
            View All Listings
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleListings.map((listing) => (
            <Card
              key={listing.id}
              title={listing.title}
              description={listing.description}
              image={listing.image}
              price={listing.price}
              location={listing.location}
              onBookNow={() => handleBookNow(listing.title)}
            />
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 {APP_CONFIG.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
