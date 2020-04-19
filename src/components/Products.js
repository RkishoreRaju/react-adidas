import React from 'react';

import Product from './Product';

const Products = () => {

    const detail = [
        {
        id:'1',    
        image:'/images/image1.jpg',
        name: " MEN'S ADIDAS SPORT INSPIRED LITE ", 
        price:'Price : ₹4,999.00',
        list:[' Available in Active Maroon, Footwear White and Maroon ',' Mesh upper ',' Textile lining ',' Combined Cloudfoam midsole and outsole ',' Country of Origin: Myanmar ', ' Net Quantity: 2 N ']
        },
        {
        id:'2', 
        image:'/images/image2.jpg',
        name: " MEN'S ADIDAS SPORT INSPIRED LITE ", 
        price:'Price : ₹4,999.00',
        list:[' Available in Active Maroon, Footwear White and Maroon ',' Mesh upper ',' Textile lining ',' Combined Cloudfoam midsole and outsole ',' Country of Origin: Myanmar ', ' Net Quantity: 2 N ']
        },
        {
        id:'3', 
        image:'/images/image3.jpg',
        name: " MEN'S ADIDAS SPORT INSPIRED LITE ", 
        price:'Price : ₹4,999.00',
        list:[' Available in Active Maroon, Footwear White and Maroon ',' Mesh upper ',' Textile lining ',' Combined Cloudfoam midsole and outsole ',' Country of Origin: Myanmar ', ' Net Quantity: 2 N ']
        },
        {
        id:'4', 
        image:'/images/image4.jpg',
        name: " MEN'S ADIDAS SPORT INSPIRED LITE ", 
        price:'Price : ₹4,999.00',
        list:[' Available in Active Maroon, Footwear White and Maroon ',' Mesh upper ',' Textile lining ',' Combined Cloudfoam midsole and outsole ',' Country of Origin: Myanmar ', ' Net Quantity: 2 N ']
        },
        {
        id:'5', 
        image:'/images/image1.jpg',
        name: " MEN'S ADIDAS SPORT INSPIRED LITE ", 
        price:'Price : ₹4,999.00',
        list:[' Available in Active Maroon, Footwear White and Maroon ',' Mesh upper ',' Textile lining ',' Combined Cloudfoam midsole and outsole ',' Country of Origin: Myanmar ', ' Net Quantity: 2 N ']
        },
        {
        id:'6', 
        image:'/images/image2.jpg',
        name: " MEN'S ADIDAS SPORT INSPIRED LITE ", 
        price:'Price : ₹4,999.00',
        list:[' Available in Active Maroon, Footwear White and Maroon ',' Mesh upper ',' Textile lining ',' Combined Cloudfoam midsole and outsole ',' Country of Origin: Myanmar ', ' Net Quantity: 2 N ']
        }
       
];


    return(

        <section className="products">
            {detail.map((post, i) => <Product key={post.id} post={post} />)}
        </section>
    
    );
}


export default Products;