import React from 'react';


const Product = ({post:{image,name,price,list}}) => {
    return(

        <div className="item">
            <img src ={image} alt="Phone" />
            <div className="details">
                <p className="title">{name}</p>
                <p className="price">{price}</p>
            </div>
            <ul>
                {list.map((info,i) => <li key={i}><i className="fa fa-check"></i>{info}</li>)}
            </ul>
            <button>ADD TO CART</button>
        </div>
    );
}


export default Product;