import type { Component } from 'solid-js';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/Footer/Footer';

import boi from '../assets/boi.png';

export const Features: Component = () => {
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

                            <hr />

                            <h2 class='text-xl font-bold'>Our Mission</h2>
                            <div class='md:text-lg text-base font-normal leading-loose'>At <strong>GMPSHARE</strong>, our mission is simple: to empower investors by providing accurate, timely,
                                and reliable information about IPOs and stock market trends. Our goal is to make your
                                investment journey smoother by helping you understand market dynamics, track IPO
                                performance, and decode the mysteries behind Grey Market Premium (GMP).
                            </div>

                            <hr />

                            <h2 class='text-xl font-bold'>What We Offer</h2>
                            <div class='md:text-lg text-base font-normal leading-loose'>
                                ● <strong>Real-Time IPO Data:</strong> Get up-to-date details about upcoming IPOs, open IPOs, and closed IPOs, including GMP and subscription status.
                                <br />
                                ● <strong>IPO Performance Analysis: </strong>Track the performance of IPOs in real-time, including
                                positive listings, negative listings, and issue sizes.
                                <br />
                                ● <strong>Broker Comparisons: </strong>We provide comprehensive reviews and comparisons of over 30
                                discount brokers and 20 full-service brokers, helping you choose the best platform for
                                your trading needs.
                                <br />
                                ● <strong>In-Depth IPO Reviews: </strong>Dive deep into detailed IPO analyses, including financial
                                reports, growth potential, and sector insights to guide your investment decisions.
                                <br />
                                ● <strong>Educational Resources: </strong>We offer expert insights on Kostak Rate, Subject to Sauda,
                                and other important concepts in the IPO world to ensure you're fully informed before
                                making any investment.
                            </div>

                            <hr />

                            <h2 class='text-xl font-bold'>Why Choose GMPSHARE?</h2>
                            <div class='md:text-lg text-base font-normal leading-loose'>
                                <strong>1. Comprehensive IPO Information: </strong>We provide everything you need to know about
                                IPOs, including GMP, subscription details, listing estimates, and company
                                fundamentals. Whether you're new to IPO investing or a seasoned investor, our
                                platform equips you with the knowledge to make smarter decisions.
                                <br />
                                <strong>2. Reliable Data: </strong>Our data is sourced from trusted experts and is constantly updated,
                                ensuring you have the most current information to make well-informed choices.
                                <br />
                                <strong>3. Expert Insights: </strong>Our team of financial analysts and IPO experts brings years of
                                experience, providing you with actionable insights and guidance to navigate the stock
                                market and the grey market.
                                <br />
                                <strong>4. User-Friendly Interface: </strong>We believe in making complex financial data accessible. Our
                                website is easy to navigate, making it simple for you to find the IPO information you're
                                looking for.
                                <br />
                                <strong>5. Real-Time Updates: </strong>With live updates on IPO GMP trends and market sentiment, you'll
                                always stay ahead of the curve, especially in the high-stakes world of IPO trading.
                            </div>

                            <hr />

                            <h2 class='text-xl font-bold'>Our Services</h2>
                            <div class='md:text-lg text-base font-normal leading-loose'>
                                ● <strong>IPO GMP Analysis: </strong>Get the latest updates on the Grey Market Premium (GMP) for IPOs. Understand the investor sentiment before the stock hits the exchange and anticipate possible listing gains.
                                <br />
                                ● <strong>Stock Broker Reviews: </strong>We compare discount brokers, full-service brokers, and
                                commodity trading platforms to help you choose the best stockbroker for your trading
                                preferences.
                                <br />
                                ● <strong>IPO Alerts: </strong>Never miss an opportunity. We send alerts on upcoming IPOs, open IPOs,
                                and closed IPOs, along with critical GMP changes.
                                <br />
                                ● <strong>Financial News: </strong>Stay informed with the latest market trends, sector analysis, and
                                investment news relevant to IPO investors.
                            </div>

                            <hr />

                            <h2 class='text-xl font-bold'>Our Expertise</h2>
                            <div class='md:text-lg text-base font-normal leading-loose'>With over a decade of experience in the Indian stock market, GMPSHARE is a leading
                                platform offering trustworthy information and insightful analysis. Our expertise spans across:
                                <br />
                                ● <strong>IPO market trends</strong>
                                <br />
                                ● <strong>Stock market performance</strong>
                                <br />
                                ● <strong>Grey Market trading</strong>
                                <br />
                                ● <strong>Financial analysis and forecasting</strong>
                                <br />
                                ● <strong>Broker comparisons and recommendations</strong>
                                <br />
                                Our mission is to make IPO investing easy, informative, and transparent for both beginner and
                                experienced investors.
                            </div>

                            <hr />

                            <h2 class='text-xl font-bold'>Stay Informed, Stay Ahead with GMPSHARE</h2>
                            <div class='md:text-lg text-base font-normal leading-loose'>Investing in IPOs can be daunting, but with the right information, it becomes an opportunity for
                                growth. At GMPSHARE, we strive to provide you with the tools and knowledge needed to
                                navigate the complex world of IPOs and stock trading. By using real-time IPO data, GMP
                                trends, and expert analysis, we help you make confident investment decisions and unlock the
                                potential of the stock market.
                            </div>
                        </div>

                    </div>

                </main>
            </div>
            <Footer />
        </div>
    )
}