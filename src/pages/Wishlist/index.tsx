import React from 'react';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import Wishlist from '../../Components/WishlistSection';


const Home = () => {
  return (
    <div className="w-full">
      <NavBar />
      <div className="mt-2">
        <p></p>
      </div>



      <Wishlist />
      <Footer />
    </div>
  );
};

export default Home;
