import type { Component } from 'solid-js';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/Footer/Footer';

export const Home: Component = () => {
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

                        {/* what is ipo section */}
                        <div class='flex flex-col gap-4 text-md mb-8'>
                            <div class='text-xl font-bold'>What is an IPO (Initial Public Offering)?</div>

                            <div>An IPO (Initial Public Offering) is the process by which a private company offers its shares to
                                the public for the first time, becoming a publicly traded company. This allows the company to
                                raise capital for expansion and provides an opportunity for investors to acquire shares in a
                                growing business.</div>

                            <div class='text-lg font-bold'>Key Points to Consider Before Investing in IPOs:</div>

                            <div class='flex flex-col gap-1'>
                                <div>
                                    <span class='font-bold'>Company Fundamentals: </span>
                                    <span>Financial health, growth potential, and the business model.</span>
                                </div>
                                <div>
                                    <span class='font-bold'>Industry Outlook: </span>
                                    <span>Understanding the market conditions and sector trends.</span>
                                </div>
                                <div>
                                    <span class='font-bold'>IPO Valuation: </span>
                                    <span>Ensuring the offering price is aligned with the company's valuation.</span>
                                </div>
                            </div>
                        </div>

                        {/* about our company section */}
                        <div class='flex flex-col gap-4 text-md md:text-left text-justify'>
                            <h3 class='text-xl font-bold'>About GMPSHARE</h3>

                            <div>GMPSHARE is dedicated to delivering the most reliable and trustworthy information to its audience. Our platform provides in-depth, accurate, and up-to-date reviews of numerous online stock brokers in India. At GMPSHARE, we empower clients to evaluate brokerage firms across various parameters such as brokerage fees, product and service offerings, trading platforms, NRI trading solutions, commodity trading options, and more. This comprehensive comparison enables users to make well-informed decisions and select the broker that best suits their needs.</div>

                            <div>Through our portal, users can easily discover <strong>the Top Online Brokers</strong>, <strong>Best Brokers for NRI Trading</strong>, <strong>Leading Brokers for Commodity Trading</strong>, <strong>Brokers with the Lowest Brokerage Charges</strong>, and much more. Currently, we feature detailed reviews of over 30 discount brokers and 20 full-service brokers, and our database continues to grow as we strive to enhance the user experience.</div>

                            <div>Beyond broker reviews, GMPSHARE extends its service portfolio to include insights on the latest IPO reviews, Sovereign Gold Bond schemes, instant personal loan providers, and other valuable financial content. Our goal is to keep our readers informed and equipped to make confident financial decisions.</div>
                        </div>

                    </div>

                </main>
            </div>
            <Footer />
        </div>
    )
}