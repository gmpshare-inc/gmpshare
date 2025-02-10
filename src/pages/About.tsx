import type { Component } from 'solid-js';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/Footer/Footer';

export const About: Component = () => {
    return (
        <div>
            <Navbar />
            <div class="flex flex-col w-full min-h-screen items-center justify-center">

                <main class="flex md:flex-row flex-col w-11/12 min-h-screen items-start justify-start gap-10 my-4">
                    <div class="flex flex-col md:w-10/12 w-full h-full">

                        {/* what is gmp section */}
                        <div class='flex flex-col gap-4 text-md mb-8'>
                            <h1 class='text-xl font-bold'>What is GMP (Grey Market Premium)? A Complete Guide for IPO Investors</h1>

                            <div>GMP (Grey Market Premium) is an important metric for investors looking to gauge the potential
                                success of an Initial Public Offering (IPO) before its official listing. The grey market allows
                                traders to buy and sell IPO shares unofficially, giving an early insight into investor sentiment.</div>

                            <div>Understanding IPO GMP can be beneficial for making informed decisions about potential IPO
                                investments. Higher GMP typically signals strong demand for the IPO, while a lower GMP may
                                indicate weaker market confidence.
                            </div>
                        </div>

                    </div>

                </main>
            </div>
            <Footer />
        </div>
    )
}