import type { Component } from 'solid-js';

import logo from '../../assets/logo/gmp-share.svg';

const Navbar: Component = () => {
  return (
    <div class="fixed bg-white flex flex-col w-full h-auto py-4 shadow items-center justify-center font-medium text-[#1b1b1b]">
      <div class='w-11/12 h-full flex flex-row items-center justify-between'>
        <a href="/">
          <img src={logo} alt="gmpshare logo" class='w-28 h-auto' />
        </a>
        <a href="/contact">
          <div class='transition-all cursor-pointer px-4 py-1 rounded bg-[#1967d2] hover:bg-[#fff] text-white hover:text-[#1967d2] border border-[#1967d2] font-normal'>Reach Us</div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;