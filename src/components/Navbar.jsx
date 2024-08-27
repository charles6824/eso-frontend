import React, { useState } from 'react'
import { navbar } from '../utils/navbar';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

const Navbar = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const Icons = () => {
    return <>{isSubMenuOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</>;
  };

  return (
    <>
      <nav className="py-4 flex justify-between items-center">
      <ul className="flex justify-between items-center tracking-wider gap-[4rem]">
        {navbar.map((item, index) => (
          <li key={index} onClick={toggleSubMenu} className="flex">
            <span className="flex items-center gap-3 text-textColor font-semibold  px-4">
              {item?.separator ? (
                <span className="w-[2px] h-[20px] bg-textColor"></span>
              ) : (
                <div className='flex justify-center items-center gap-3'>
                  <span> {item.text}</span>
                  <span></span>

                </div>
              )}
            </span>
          </li>
        ))}
      </ul>

      {/* <Button text="SIGN IN" /> */}
    </nav>
    </>
  )
}

export default Navbar
