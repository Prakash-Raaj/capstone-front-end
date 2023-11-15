import React from 'react';
import WishlistCard from '../../Components/WishlistCard';
import Mundu from '../../assets/images/products/Mundu.jpeg';
import Saree from '../../assets/images/products/Saree.jpeg';
import Sherwani from '../../assets/images/products/Sherwani.jpeg';

const WishList = () => {
  const wishlistItems = [
    {
      id: 1,
      name: 'Mundu',
      description: 'Lorem ipsum dolor sit amet.',
      price: 19.99,
      image: Mundu,
    },
    {
      id: 2,
      name: 'Saree',
      description: 'Consectetur adipiscing elit.',
      price: 29.99,
      image: Saree,
    },
    {
      id: 3,
      name: 'Sherwani',
      description: 'Sed do eiusmod tempor.',
      price: 39.99,
      image: Sherwani,
    },
  ];
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4 text-center">
        My Wishlist
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {wishlistItems.map((item) => (
          <WishlistCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WishList;
