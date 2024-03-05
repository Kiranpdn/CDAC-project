import React from 'react'
import MainCarousel from '../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../components/HomeSectionCarousel/HomeSectionCarousel';
import BlogSection from '../components/BolgSection/BlogSection';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/footer/Footer';
import { solar_panels } from '../../Data/solar_panels'
import { solar_inverters} from '../../Data/solar_inverters'
import { lithium_batteries } from '../../Data/lithium_batteries';

const HomePage = () => {
    return (
        <div>
            <MainCarousel/>

            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarousel data={solar_panels} sectionName={"Solar Panel's"}/>
                <HomeSectionCarousel data={solar_inverters} sectionName={"Solar Inverter's"}/>
                <HomeSectionCarousel data={lithium_batteries} sectionName={"Lithium Batteries"}/>
                <BlogSection/>
                <Testimonials/>
            </div>
        </div>
    )
}

export default HomePage;