// Carbon & Icons
import carbon from '../assets/produtsPageWithCart/assets/icon-carbon-neutral.svg';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Button from "@mui/material/Button";
import Divider from '@mui/material/Divider';
import Cart from '../assets/produtsPageWithCart/assets/icon-add-to-cart.svg';

// Waffle Images
import Waffle_desktop from '../assets/produtsPageWithCart/assets/image-waffle-desktop.jpg';
import Waffle_tablet from '../assets/produtsPageWithCart/assets/image-waffle-tablet.jpg';
import Waffle_mobile from '../assets/produtsPageWithCart/assets/image-waffle-mobile.jpg';

// Brownie Images
import Brownie_desktop from '../assets/produtsPageWithCart/assets/image-brownie-desktop.jpg';
import Brownie_tablet from '../assets/produtsPageWithCart/assets/image-brownie-tablet.jpg';
import Brownie_mobile from '../assets/produtsPageWithCart/assets/image-brownie-mobile.jpg';

// Baklava Images
import Baklava_desktop from '../assets/produtsPageWithCart/assets/image-baklava-desktop.jpg';
import Baklava_tablet from '../assets/produtsPageWithCart/assets/image-baklava-tablet.jpg';
import Baklava_mobile from '../assets/produtsPageWithCart/assets/image-baklava-mobile.jpg';

// Cake Images
import Cake_desktop from '../assets/produtsPageWithCart/assets/image-cake-desktop.jpg';
import Cake_tablet from '../assets/produtsPageWithCart/assets/image-cake-tablet.jpg';
import Cake_mobile from '../assets/produtsPageWithCart/assets/image-cake-mobile.jpg';

// Crème Brûlée Images
import CremeBrulee_desktop from '../assets/produtsPageWithCart/assets/image-creme-brulee-desktop.jpg';
import CremeBrulee_tablet from '../assets/produtsPageWithCart/assets/image-creme-brulee-tablet.jpg';
import CremeBrulee_mobile from '../assets/produtsPageWithCart/assets/image-creme-brulee-mobile.jpg';

// Macaron Images
import Macaron_desktop from '../assets/produtsPageWithCart/assets/image-macaron-desktop.jpg';
import Macaron_tablet from '../assets/produtsPageWithCart/assets/image-macaron-tablet.jpg';
import Macaron_mobile from '../assets/produtsPageWithCart/assets/image-macaron-mobile.jpg';

// Meringue Images
import Meringue_desktop from '../assets/produtsPageWithCart/assets/image-meringue-desktop.jpg';
import Meringue_tablet from '../assets/produtsPageWithCart/assets/image-meringue-tablet.jpg';
import Meringue_mobile from '../assets/produtsPageWithCart/assets/image-meringue-mobile.jpg';

// Panna Cotta Images
import PannaCotta_desktop from '../assets/produtsPageWithCart/assets/image-panna-cotta-desktop.jpg';
import PannaCotta_tablet from '../assets/produtsPageWithCart/assets/image-panna-cotta-tablet.jpg';
import PannaCotta_mobile from '../assets/produtsPageWithCart/assets/image-panna-cotta-mobile.jpg';

// Tiramisu Images
import Tiramisu_desktop from '../assets/produtsPageWithCart/assets/image-tiramisu-desktop.jpg';
import Tiramisu_tablet from '../assets/produtsPageWithCart/assets/image-tiramisu-tablet.jpg';
import Tiramisu_mobile from '../assets/produtsPageWithCart/assets/image-tiramisu-mobile.jpg';

import plus from '../assets/produtsPageWithCart/assets/icon-increment-quantity.svg';
import minus from '../assets/produtsPageWithCart/assets/icon-decrement-quantity.svg';

import { useState } from 'react';
const DessertCard = ({ images, price, name, category }) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="rounded p-5">
      <div className="relative">
        <picture className='ounded-2xl aspect-[1] object-cover hover:scale-[1.02] transition-transform duration-200'>
            <source media="(min-width: 1024px)" srcSet={images.desktop} />
            <source media="(min-width: 600px)" srcSet={images.tablet} />
            <img src={images.mobile} alt="Waffle" />
            </picture>

        {/* Conditional Button or Quantity Selector */}
        {quantity === 0 ? (
          <div
            onClick={increment}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white flex items-center gap-2 px-4 py-2 border-2 border-[#C83A0F] rounded-full shadow-md cursor-pointer hover:bg-[#FFF1EC] transition"
          >
            <img src={Cart} alt="Cart" className="w-4 h-4" />
            <span className="text-sm font-medium">Add to Cart</span>
          </div>
        ) : (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#C83B0E] flex items-center gap-2 px-4 py-2 border-2 border-[#C83A0F] rounded-full shadow-md cursor-pointer transition">
            <div
              onClick={decrement}
              className="w-5 h-5 flex items-center justify-center rounded-full border border-white"
            >
              <img src={minus} alt="-" className="w-3 h-3" />
            </div>
            <div className="text-white text-sm font-medium">{quantity}</div>
            <div
              onClick={increment}
              className="w-5 h-5 flex items-center justify-center rounded-full border border-white"
            >
                <div className='text-red-600'>
                    <img src={plus} alt="+" className="w-3 h-3" color='red-400' />
                </div>
              
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 text-gray-400 text-sm">{category}</div>
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-red-800 font-bold">${price}</div>
    </div>
  );
};

const Product = () => {
  return (
    <div className="p-4 m-4 flex flex-col md:flex-row bg-[#FDF8F4] gap-6">
      
      {/* Left Section - Products */}
      <div className="flex-1 mx-10:">
        <div className="text-2xl font-extrabold mb-4">Desserts</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <DessertCard
            images={{
                desktop: Waffle_desktop,
                tablet: Waffle_tablet,
                mobile: Waffle_mobile
            }}
            name={'Waffle with berries'}
            category={'Waffle'}
            price={'6.50'}
            />

            <DessertCard
            images={{
                desktop: CremeBrulee_desktop,
                tablet: CremeBrulee_tablet,
                mobile: CremeBrulee_mobile
            }}
            name={'Vanilla Bean Creme Brulee'}
            category={'Creme Brulee'}
            price={'7.00'}
            />

            <DessertCard
            images={{
                desktop: Macaron_desktop,
                tablet: Macaron_tablet,
                mobile: Macaron_mobile
            }}
            name={'Macron Mix of Five'}
            category={'Macaron'}
            price={'8.00'}
            />

            <DessertCard
            images={{
                desktop: Tiramisu_desktop,
                tablet: Tiramisu_tablet,
                mobile: Tiramisu_mobile
            }}
            name={'Classic Tiramisu'}
            category={'Tiramisu'}
            price={'5.50'}
            />

            <DessertCard
            images={{
                desktop: Baklava_desktop,
                tablet: Baklava_tablet,
                mobile: Baklava_mobile
            }}
            name={'Pistachio Baklava'}
            category={'Baklava'}
            price={'4.00'}
            />

            <DessertCard
            images={{
                desktop: Meringue_desktop,
                tablet: Meringue_tablet,
                mobile: Meringue_mobile
            }}
            name={'Lemon Meringue Pie'}
            category={'Pie'}
            price={'5.00'}
            />

            <DessertCard
            images={{
                desktop: Cake_desktop,
                tablet: Cake_tablet,
                mobile: Cake_mobile
            }}
            name={'Red Velvet Cake'}
            category={'Cake'}
            price={'4.50'}
            />

            <DessertCard
            images={{
                desktop: Brownie_desktop,
                tablet: Brownie_tablet,
                mobile: Brownie_mobile
            }}
            name={'Salted Caramel Brownie'}
            category={'Brownie'}
            price={'5.50'}
            />

            <DessertCard
            images={{
                desktop: PannaCotta_desktop,
                tablet: PannaCotta_tablet,
                mobile: PannaCotta_mobile
            }}
            name={'Vanilla Panna Cotta'}
            category={'Panna Cotta'}
            price={'6.50'}
            />


          {/* Repeat for other desserts */}
        </div>
      </div>

      {/* Right Section - Cart */}
      <div className="bg-white rounded-lg w-full max-h-[60vh] md:w-[350px]">
        <div className="flex flex-col">
          <div className="text-[#C54017] text-xl p-4 font-bold">Your Cart (7)</div>

          {/* Cart Item 1 */}
          <div className="p-4">
            <div className="flex justify-between">
              <div>
                <div>Classic Tiramisu</div>
                <div className="flex gap-3 text-sm mt-1">
                  <span className="text-[#C76C5B]">1x</span>
                  <span className="text-gray-300">@$5.50</span>
                  <span className="text-gray-500">$5.50</span>
                </div>
              </div>
              <CancelOutlinedIcon />
            </div>
            <Divider sx={{ marginTop: 2 }} />
          </div>

          {/* Cart Item 2 */}
          <div className="p-4">
            <div className="flex justify-between">
              <div>
                <div>Vanilla Bean Creme Brulee</div>
                <div className="flex gap-3 text-sm mt-1">
                  <span className="text-[#C76C5B]">4x</span>
                  <span className="text-gray-300">@$7.00</span>
                  <span className="text-gray-500">$28.00</span>
                </div>
              </div>
              <CancelOutlinedIcon />
            </div>
            <Divider sx={{ marginTop: 2 }} />
          </div>

          {/* Cart Item 3 */}
          <div className="p-4">
            <div className="flex justify-between">
              <div>
                <div>Vanilla Panna Cotta</div>
                <div className="flex gap-3 text-sm mt-1">
                  <span className="text-[#C76C5B]">2x</span>
                  <span className="text-gray-300">@$6.50</span>
                  <span className="text-gray-500">$13.00</span>
                </div>
              </div>
              <CancelOutlinedIcon />
            </div>
            <Divider sx={{ marginTop: 2 }} />
          </div>

          {/* Total */}
          <div className="flex justify-between px-4 py-3">
            <span className="text-base">Order Total</span>
            <span className="text-xl font-bold">$46.50</span>
          </div>

          {/* Carbon Message */}
          <div className="bg-[#FDF8F4] rounded-xl m-4 p-3">
            <div className="flex items-center gap-2 text-sm">
              <img src={carbon} alt="Carbon-neutral" className="w-5 h-5" />
              <span>This is a <strong className="mx-1">carbon-neutral</strong> delivery.</span>
            </div>
          </div>

          {/* Confirm Button */}
          <Button
            variant="contained"
            sx={{
              bgcolor: '#952D0D',
              margin: 3,
              borderRadius: 3,
              textTransform: 'none',
              fontWeight: 'bold',
            }}
          >
            Confirm Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
