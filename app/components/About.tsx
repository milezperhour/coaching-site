import React from 'react'
import Button from './Button'

const About = () => {
  return (
    <div className="bg-gray-900 p-16 mt-16 text-white">
        <h1 className="text-3xl text-center uppercase font-bold pb-8">Why Work With Miles?</h1>

        <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-start justify-center">
                <p className="text-lg mb-4">I started off my investing journey in 2011, not knowing much of anything.</p>
                <p className="text-lg mb-4">After I took an interest in technology stock investing though, I saw my portfolio explode in growth.</p>
                <p className="text-lg mb-4">I started a YouTube channel in 2021, documenting my investing journey and why I chose the stocks I did.</p>
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
                        <p className="text-lg mb-4">I offer you specific investing solutions for your needs.</p>
                        <p className="text-lg mb-4">I'll help you navigate the world of tech and AI investing by providing personalized coaching and expert guidance to build profitable, future-proof portfolios.</p>
                        <p className="text-lg mb-4">What are you wating for? Build a fulfilling that has an edge.</p>
                    </div>
                </div>
            </div>
            <Button/>
        </section>
    </div>
  )
}

export default About