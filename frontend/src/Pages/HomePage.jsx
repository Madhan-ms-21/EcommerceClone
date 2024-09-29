import React from 'react'

import Navigation from '../customer/components/Navigation/Navigation'
import MainCarousel from '../customer/components/Carousel/MainCarousel'
import HomeProductCarousel from '../customer/components/ProductCarousel/HomeProductCarousel'

const HomePage = () => {
    return (
        <div>
            <Navigation />
            <MainCarousel/>
            <div>
                <HomeProductCarousel/>
            </div>

        </div>
    )
}

export default HomePage
