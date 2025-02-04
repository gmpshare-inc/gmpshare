import type { Component } from 'solid-js';

import logo from '../../assets/logo/gmp-share.svg';

const Navbar: Component = () => {
  return (
    <div class="flex flex-col w-full h-auto py-4 border border-[#acacac] items-center justify-center">
      <div class='w-11/12 h-full flex flex-row items-center justify-between'>
        <a href="/">
          <img src={logo} alt="gmpshare logo" class='w-28 h-auto' />
        </a>
        <div class='flex flex-row gap-6 items-center'>
          <div>About</div>
          <div>IPOs</div>
          <div>Features</div>
          <div>Reach Us</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;