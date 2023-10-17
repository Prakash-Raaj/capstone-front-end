import React from 'react';
import categoryimg from '../assets/images/category-men.png';
import { FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export interface ProductCardProps {
    ProductName: string;
    ProductImg: string;
    ProductPrice: number;
}

const ProductCard = (props: ProductCardProps) => {
  return (
    <div className="w-72 h-fit mt-10  px-1 rounded-lg bg-[#f4f6f4] flex flex-col items-center gap-2 cursor-pointer">
      {/* <p className="text-white">{props.ProductName}</p> */}
      <img
        src={props.ProductImg}
        alt="product"
        className="object-cover w-11/12 h-[200px] rounded-lg mt-4"
      />
      <div className="mt-4 flex items-center gap-2">
        {props.ProductName}<span className="px:5px;"></span>{props.ProductPrice}$
      </div>
      <button className="bg-[#FFFFFF] mb-2 text-black font-bold rounded-full w-40">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
