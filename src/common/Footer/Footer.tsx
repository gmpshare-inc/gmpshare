import type { Component } from 'solid-js';

import logo from '../../assets/logo/gmp-share.svg';

const Footer: Component = () => {
  return (
    <footer class='flex flex-col gap-4 w-full items-center justify-center bg-[#17303b] text-white py-8'>
            <div class='w-11/12 flex flex-row flex-wrap justify-between gap-6 pt-4'>

                <div class='flex flex-col gap-4 md:w-[30%] w-full'>
                    <img src={logo} alt='' class='w-56 h-auto' />
                    <div class='text-base font-medium'>
                        4-158/9 5th Cross Road, <br />
                        Sainikpuri, <br />
                        Secunderabad - 500094, <br />
                        TS, IND <br />
                    </div>
                    <div class='text-base font-semibold text-[#b0b0b0]'>
                        contact@gmpshare.com
                    </div>
                </div>
                <div class='flex flex-col md:w-[20%] w-full'>
                    <div class='mb-4 font-bold text-lg'>IPO UPDATES</div>
                    <div class='flex flex-col gap-4'>
                        <div>Live GMP</div>
                        <div>IPOs</div>
                        <div>SME IPOs</div>
                        <div>IPO FAQs</div>
                    </div>
                </div>
                <div class='flex flex-col md:w-[20%] w-full'>
                    <div class='mb-4 font-bold text-lg'>Company</div>
                    <div class='flex flex-col gap-4'>
                        <div>About Us</div>
                        <div>Advertise with Us</div>
                        <div>Privacy Policy</div>
                        <div>Term of Use</div>
                    </div>
                </div>
                <div class='flex flex-col md:w-[20%] w-full'>
                    <div class='flex flex-col gap-1 mb-4'>
                        <div class='font-bold text-lg'>Socials</div>
                    </div>
                    <div class='flex flex-col gap-4'>
                        <div>X</div>
                        <div>Instagram</div>
                        <div>Facebook</div>
                    </div>
                </div>
            </div>
            <div class='w-11/12 flex flex-col justify-start text-justify'>

                <div class='font-light py-4 my-4 border-b border-t border-b-white'>
                    Disclaimer: The information on GMPShare.com has been compiled with the utmost care and attention. The information was obtained from a number of trustworthy sources. However, GMPShare.com makes no guarantees regarding the completeness, accuracy, or sufficiency of any information and disclaims all liability for any mistakes, omissions, or results that may arise from using such information. GMPShare.com clearly declares that it does not assume any financial responsibility for users' reliance on the information on its platform.After a customer clicks on an affiliate link, GMPShare.com does not offer them any services or support. It doesn't provide buy/sell calls, stock recommendations, or tips. All information offered is solely intended for educational and knowledge-sharing purposes. Because our stock broker reviews are completely objective, users can choose the broker who best meets their financial requirements. Additionally, GMPShare.com offers current information on rights issues, NCDs, SGBs, buybacks, and IPOs.Please take note that the Grey Market Premium (GMP) data on GMPShare.com is only meant for news and informational purposes. We don't work together or exchange goods with any GMP operators.
                </div>

                <div class='flex flex-row w-full h-auto justify-between font-normal'>
                    <span>Copyright © 2020-2025 GMPShare.com All Right Reserved.</span>
                    <span>Socials</span>
                </div>
            </div>

        </footer>
  );
};

export default Footer;