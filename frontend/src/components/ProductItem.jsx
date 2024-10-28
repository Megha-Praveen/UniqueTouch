import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductItem = ({ id, image, name, price }) => {

    const { currency } = useContext(ShopContext);

    return (
        <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
            <div className="overflow-hidden h-full w-full">
                <img className='h-full w-full object-cover hover:scale-110 transition ease-in-out duration-300' src={image[0]} alt="" />
            </div>
            <p className='pt-1 pb-2 text-sm'>{name} - {currency} {price}</p>
        </Link>
    )
}

export default ProductItem