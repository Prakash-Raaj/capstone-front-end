import React from 'react';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import heroPoster from '../../assets/images/hero-img2.png';
import categoryMen from '../../assets/images/category-men.png'
import categoryWomen from '../../assets/images/category-women.png'
import categoryKid from '../../assets/images/category-kid.jpeg'
import CategoryCard from '../../Components/CategoryCard';
import ProductCard from '../../Components/ProductCard';
import PDothiPancha from '../../assets/images/Dothi&Pancha.jpeg'
import PMekhelaphanek from '../../assets/images/Mekhela & phanek.jpeg'
import PMundu from '../../assets/images/Mundu.jpeg'
import PPagriKurtaPajamas from '../../assets/images/Pagri& Kurta Pajamas.jpeg'
import PPherans from '../../assets/images/Pherans.jpeg'
import PSALWARKAMEEZ from '../../assets/images/SALWAR KAMEEZ.jpeg'
import PSaree from '../../assets/images/Saree.jpeg'
import PSherwani from '../../assets/images/Sherwani.jpeg'
import PTribal from '../../assets/images/Tribal.jpeg'


const Home = () => {
  return (
    <div className="w-full">
      <NavBar />
      <div className="mt-2 p-4 hero-img h-96 flex justify-end">
        {/* <img src={heroPoster} alt="Hero poster" /> */}
        <div className="pt-12 pr-10">
          <p className=" text-4xl  text-[#245114] pb-6">
            Wear your favourite dress <br /> for your favourite
            Occasion{' '}
          </p>
          <button className="bg-[#245114] hover:bg-[#228706] text-white font-bold py-2 px-4 rounded-full w-40">
            Buy Now
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <select name="select1" className="bg-[#808080] text-black font-bold rounded-full w-13">
            <option value="option1">Price</option>
            <option value="option2">Low to High</option>
            <option value="option3">High to Low</option>
        </select>
        
        <select name="select2" className="bg-[#808080] text-black font-bold rounded-full w-13">
            <option value="optionA">Rating</option>
            <option value="optionB">Highest</option>
            <option value="optionC">Lowest</option>
        </select>

        <select name="select3" className="bg-[#808080] text-black font-bold rounded-full w-13">
            <option value="choiceX">Material</option>
            <option value="choiceY">Silk</option>
            <option value="choiceZ">Cotton</option>
        </select>
      
        <select name="select4" className="bg-[#808080] text-black font-bold rounded-full w-13">
            <option value="rightOption">Sort By</option>
            <option value="anotherRightOption">Price</option>
        </select>
      </div>

      <section className="px-5 py-5">
        <h2 className="text-3xl">Products for you!</h2>
        <div className="flex gap-5">
          <ProductCard
          ProductName= "Dothi&Pancha"
          ProductImg= {PDothiPancha}
          ProductPrice= {20}
          />
          <ProductCard
          ProductName= "Mekhela & phanek"
          ProductImg= {PMekhelaphanek}
          ProductPrice= {20}
          />
          <ProductCard
          ProductName= "Mundu"
          ProductImg= {PMundu}
          ProductPrice= {20}
          />
          <ProductCard
          ProductName= "Pagri& Kurta Pajamas"
          ProductImg= {PPagriKurtaPajamas}
          ProductPrice= {20}
          />
          <ProductCard
          ProductName= "Pherans"
          ProductImg= {PPherans}
          ProductPrice= {20}
          />
          <ProductCard
          ProductName= "SALWAR KAMEEZ"
          ProductImg= {PSALWARKAMEEZ}
          ProductPrice= {20}
          />
          <ProductCard
          ProductName= "Saree"
          ProductImg= {PSaree}
          ProductPrice= {20}
          />
         {/*<ProductCard
          ProductName= "Sherwani"
          ProductImg= {PSherwani}
          ProductPrice= {20}
          />
          <ProductCard
          ProductName= "Tribal"
          ProductImg= {PTribal}
          ProductPrice= {20}
        />*/}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
