import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                <div>
                    <h1 className='sofia-regular text-red mb-5 w-30'>Unique Touch</h1>
                    <p className="w-full md:w-2/3 text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero alias harum reiciendis atque eveniet. Laborum maiores repellendus inventore aperiam nam assumenda voluptatem magni numquam veritatis odit, dolore dolorum necessitatibus eaque?</p>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">Company</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">Get In Touch</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>04829-236677</li>
                        <li>admin@uniquetouch.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@ uniquetouch.com - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer