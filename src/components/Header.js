import React, { useContext } from 'react';
//sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
//cart context
import { CartContext } from '../contexts/CartContext';
//import icons
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
//import logo
import Logo from '../img/logo2.webp'

const Header = () => {
  //header state

  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext);

  return (
    <header className="bg-black p-4 flex justify-between items-center shadow-md">
      <div className='container mx-auto flex items-center h-full justify-between'>
        <Link to={'/'}>
          <div>
            <img className='w-[40px] md:w-[100px]' src={Logo} />
          </div>
        </Link>
        <h1 className="text-white text-5xl font-extrabold absolute left-1/2 transform -translate-x-1/2">
          Fashion Club
        </h1>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative text-white"
        >
          <BsBag className="text-2xl" />
          <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
