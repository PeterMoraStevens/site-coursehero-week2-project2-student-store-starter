import { react, useState } from "react"
import "./ItemGrid.css"

export default function ItemGrid( { itemData=[] } ) {
    // console.log(itemData.data)
    return(
            <div className="card-containers" id="buy-now">
                {itemData.products?.map(product => (
                <ItemCard key={product.name} product={ product }/>
                ))}
            </div>
    )
}

export function ItemCard( { product = {} } ) {
    return (
        <div className="card-container" id={product?.id}>
            {/* image */}
            <img src={product?.image}/>
            {/* Text container - name, price, quantity */}
            <div className="text-container">
                <h3 className="product-name">{product?.name}</h3>
                <p className="product-price">{product?.price}</p>
            </div>
        </div>
    )
}