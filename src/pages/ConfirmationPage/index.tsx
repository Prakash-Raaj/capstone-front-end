import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const ConfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-10">
      <div className="confirmation-page text-center">
        <div className="flex items-center mb-4 justify-center">
          <BiShoppingBag className="text-4xl" />
        </div>
        <h2 className="font-bold text-2xl">Order booked Successfully</h2>
        <p>Thank you for your purchase! Your payment was successful.</p>
        <p>"Embrace the timeless elegance of traditional attire."</p>
        <button className="cnt-btn mt-4" onClick={() => navigate('/products')}>
          <HiOutlineArrowNarrowLeft className="icon" /> Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
