import React from 'react';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';
import Title from '../components/Title';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'Us'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Unique Touch, your go-to store for customized handmade gifts. We believe that every gift should be as unique as the person receiving it. That's why we offer a variety of personalized items that add a special touch to your celebrations.</p>
          <p>Each product is crafted with care and attention to detail. From birthdays to weddings, our handmade gifts are perfect for any occasion. You can customize your selections with names, dates, and special messages to make them truly one-of-a-kind.</p>
          <p>Thank you for choosing Unique Touch. Let us help you find the perfect gift that will be cherished for years to come!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to create meaningful, customized handmade gifts that celebrate life's special moments. We strive to provide personalized products that bring joy and connection to every occasion, ensuring that each item is crafted with love and attention to detail.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'Why'} text2={'Choose Us'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>We prioritize quality in every handmade gift we create. We use high-quality materials to ensure durability, and each item is crafted with care by skilled artisans. Before reaching you, every product undergoes a thorough inspection to meet our quality standards. Your satisfaction is important to us, and we are dedicated to making sure you love your gift. We strive to create beautiful, long-lasting items that you can cherish.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>We make shopping easy for you. Our website is simple to use, letting you browse and customize your handmade gifts quickly. You can personalize your items and place your order in just a few clicks. We offer secure payment options and reliable shipping to get your gifts to you on time. If you have any questions, our friendly customer support team is here to help. We want your experience to be smooth and enjoyable!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>We are committed to providing great customer service. Our team is here to help you with any questions about our products, orders, or customization options. We listen to your needs and work to resolve any issues quickly. Your satisfaction is our top priority, and we want to ensure you have a positive shopping experience with us.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About