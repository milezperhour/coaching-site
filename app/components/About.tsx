import React from 'react'
import Button from './Button'

const About = () => {
  return (
    <div className="bg-gray-900 p-16 mt-16 text-white">
        <h1 className="text-3xl text-center uppercase font-bold pb-8">Why Work With Miles?</h1>

        <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-start justify-center">
                <p className="text-lg mb-4">I started off my investing journey in 2011, not knowing much of anything. It wasn't until I started researshing <span className="font-extrabold text-emerald-500">cutting-edge technology companies</span> though, that I found massive success in my investing strategies.</p>
                <p className="text-lg mb-4">After I took an interest in technology stock investing, I saw my portfolio <span className="font-extrabold text-emerald-500">explode in growth.</span></p>
                <p className="text-lg mb-4">I started a YouTube channel in 2021. And since then, I've been documenting my investing journey and why I choose the stocks I invest in.</p>
            </div>
            <div className="flex items-center justify-center">
                <img
                src="/images/miles-head-shot.jpg"
                alt="Miles"
                className="w-1/2 h-auto object-cover rounded-lg"
                />
            </div>
            </div>
        </section>

        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start justify-center md:order-1 order-2">
                    <img
                    src="/images/stock-market-chart.jpg"
                    alt="Stock Market Chart"
                    className="w-3/4 h-auto object-cover rounded-lg"
                    />
                </div>
                <div className="flex items-start justify-center md:order-2 order-1">
                    <div className="w-full">
                        <p className="text-lg mb-4">I'll offer you specific investing solutions for your needs.</p>
                        <p className="text-lg mb-4">I'll help you navigate the world of <span className="font-extrabold text-emerald-500">tech and AI investing</span> by providing personalized coaching and expert guidance to build a profitable, future-proof portfolio.</p>
                        <p className="text-lg mb-4">Buying and holding stocks you love isn't enough. Investing isn't just about picking winners—it's about knowing how to invest, when to adjust, and how to build a portfolio that doesn't just survive, but <span className="font-extrabold text-emerald-500">thrives</span></p>
                        <p className="text-lg mb-4">What are you wating for? Learn how to build a fulfilling that has an <span className="font-extrabold text-emerald-500">edge</span>.</p>
                    </div>
                </div>
            </div>
            <Button/>
        </section>
    </div>
  )
}

export default About