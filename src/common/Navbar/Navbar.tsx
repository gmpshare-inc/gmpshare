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
          <a href="/about">
            <div class='cursor-pointer'>About</div>
          </a>
          <a href="/ipos">
            <div class='cursor-pointer'>IPOs</div>
          </a>
          <a href="/features">
            <div class='cursor-pointer'>Features</div>
          </a>
          <div class='transition-all cursor-pointer px-4 py-1 rounded bg-[#1967d2] hover:bg-[#fff] text-white hover:text-[#1967d2] border border-[#1967d2] font-normal'>Reach Us</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// <React.Fragment>
//   <div className={`fixed top-0 z-40 w-full h-auto flex items-center justify-center duration-500 text-black bg-white ${isScrolled ? 'shadowNormal' : ''}`}>
//     <div className='w-11/12 flex flex-row justify-between items-center md:py-2 py-4'>
//       <Link href={'/'} aria-label='Logo of GmpShare' onClick={() => setActiveTab('home')}>
//         <Image src={'/logo/gmp-share.svg'} alt='' width={100} height={50} className='w-32 h-auto' />
//       </Link>
//       <div className='md:flex hidden flex-row justify-start gap-1 py-2'>
//         <Link href={'/ipo-gmp-live'} onClick={() => setActiveTab('gmplive')}>
//           <Button variant={activeTab === "gmplive" ? 'activePrime' : 'primary'} className='h-8 font-medium'>
//             live GMP
//           </Button>
//         </Link>
//         <Link href={'/live-ipo-report'} onClick={() => setActiveTab('ipolive')}>
//           <Button variant={activeTab === "ipolive" ? 'activePrime' : 'primary'} className='h-8 font-medium'>
//             IPOs
//           </Button>
//         </Link>
//         <Link href={'/sme-ipo-report'} onClick={() => setActiveTab('smeipo')}>
//           <Button variant={activeTab === "smeipo" ? 'activePrime' : 'primary'} className='h-8 font-medium'>
//             SME IPOs
//           </Button>
//         </Link>
//         <Link href={'/about-us'} onClick={() => setActiveTab('about')}>
//           <Button variant={activeTab === "about" ? 'activePrime' : 'primary'} className='h-8 font-medium'>
//             About Us
//           </Button>
//         </Link>
//         <Link href={'/articles'} onClick={() => setActiveTab('article')}>
//           <Button variant={activeTab === "article" ? 'activePrime' : 'primary'} className='h-8 font-medium'>
//             Articles
//           </Button>
//         </Link>
//         <Button variant={'blueish'} className='md:flex hidden h-9 ml-6' onClick={() => setActiveTab('/')}>Reach Us</Button>
//         <Button variant={'default'} className='md:hidden flex h-8' onClick={toggleNavbar}>
//           <HamburgerMenuIcon />
//         </Button>
//       </div>
//     </div>
//     <div className={`bg-white ${isActive ? 'flex' : 'hidden'} flex-col absolute w-full h-auto left-0 top-0`}>
//       <div className='w-full flex flex-row justify-between items-center top-10 px-4 h-16'>
//         <Link href={'/'} aria-label='Logo of GmpShare' onClick={() => setActiveTab('home')}>
//           <Image src={'/logo/gmp-share.svg'} alt='' width={100} height={50} className='w-32 h-auto' />
//         </Link>
//         <Button variant={'default'} className='flex h-8' onClick={toggleNavbar}>
//           <Cross1Icon />
//         </Button>
//       </div>
//       <div className='md:hidden flex flex-col w-full h-full justify-center items-center gap-1 py-6 shadow-md'>
//         <Link href={'/'} onClick={() => { setActiveTab('home'); toggleNavbar }}>
//           <Button variant={activeTab === "home" ? 'activePrime' : 'primary'} className='h-8 font-medium'>
//             Home
//           </Button>
//         </Link>
//         <Link href={'/ipo-gmp-live'} onClick={() => { setActiveTab('gmplive'); toggleNavbar }}>
//           <Button variant={activeTab === "gmplive" ? 'activePrime' : 'primary'} className='h-8 font-medium'>
//             Live GMP
//           </Button>
//         </Link>
//         <Link href={'/live-ipo-report'} onClick={() => { setActiveTab('ipolive'); toggleNavbar }}>
//           <Button variant={activeTab === "ipolive" ? 'activePrime' : 'primary'} className='h-8 font-medium'>
//             IPOs
//           </Button>
//         </Link>
//         <Link href={'/sme-ipo-report'} onClick={() => { setActiveTab('smeipo'); toggleNavbar }}>
//           <Button variant={activeTab === "smeipo" ? 'activePrime' : 'primary'} className='h-8 font-medium'>
//             SME IPOs
//           </Button>
//         </Link>
//         <Link href={'/about-us'} onClick={() => { setActiveTab('about'); toggleNavbar }}>
//           <Button variant={activeTab === "about" ? 'activePrime' : 'primary'} className='h-8 font-medium'>
//             About Us
//           </Button>
//         </Link>
//         <Link href={'/articles'} onClick={() => { setActiveTab('article'); toggleNavbar }}>
//           <Button variant={activeTab === "article" ? 'activePrime' : 'primary'} className='h-8 font-medium'>
//             Articles
//           </Button>
//         </Link>
//       </div>
//     </div>
//   </div>
// </React.Fragment>