import type { Component } from 'solid-js';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/Footer/Footer';

import boi from '../assets/boi.png';

export const Contact: Component = () => {
    return (
        <div>
            <Navbar />
            <div class="flex flex-col w-full min-h-screen items-center justify-center pt-4">

                <div class='w-11/12 h-full flex flex-col items-center justify-center overflow-hidden'>

                    <div class='w-full h-auto flex flex-col items-center justify-center gap-3 mb-2'>
                        <h1 class='text-3xl font-bold'>We're eager to know about your query.</h1>
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
            </div>
            <Footer />
        </div>
    )
}