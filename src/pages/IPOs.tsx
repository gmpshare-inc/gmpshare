import type { Component } from 'solid-js';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/Footer/Footer';

import boi from '../assets/boi.png';

export const IPOs: Component = () => {
    return (
        <div>
            <Navbar />
            <div class="flex flex-col w-full min-h-screen items-center justify-center pt-4">

                <div class='w-11/12 h-full flex flex-col items-center justify-center overflow-hidden'>

                    <div class='w-full h-auto flex flex-col items-center justify-center gap-3 mb-6'>
                        <h1 class='text-3xl font-bold'>Gmpshare: For latest GMP data, IPO details and insights.</h1>
                        <hr class='h-[0.5px]' />
                    </div>

                    <div class='w-full h-auto flex flex-col items-center justify-center gap-2 mb-4'>
                        <img src={boi} alt='boy' class='w-[42rem]' />
                        <p>Do what you do the best!</p>
                    </div>

                    <div class='w-full px-8 border-l-4 border-l-[#232472]'>
                        <div class='flex flex-row gap-2 items-center text-[#232472]'>
                            <span>Note</span>
                        </div>
                        <div>&#x2022; Here you can access all the features of gmpshare admin portal, after login.</div>
                    </div>

                </div>

                <main class="flex md:flex-row flex-col w-11/12 min-h-screen items-start justify-start gap-10 my-4">
                    <div class="flex flex-col md:w-10/12 w-full h-full">

                        {/* what is gmp section */}
                        <div class='flex flex-col gap-4 text-md mb-8'>

                            <h1 class='text-xl font-bold'>About Us - GMPSHARE: Your Trusted Source for IPO Insights</h1>
                            <div class='md:text-lg text-base font-normal leading-loose'>Welcome to <strong>GMPSHARE</strong>, your go-to platform for real-time IPO data, expert analysis, and
                                in-depth information about the Grey Market Premium (GMP) and stock brokers. Whether
                                you're a retail investor or an institutional investor, we provide the tools and knowledge you need
                                to make informed decisions in the ever-evolving world of Initial Public Offerings (IPOs) and
                                stock trading.
                            </div>

                            <div class='flex border border-gray-100 shadow p-4'>
                                here card data
                            </div>

                        </div>

                    </div>

                </main>
            </div>
            <Footer />
        </div>
    )
}

// sort any random set of elements using quick sort method. and determine the time required to sort the number of elements and plot a graph of time taken vs number of elements.