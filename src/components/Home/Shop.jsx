import React from 'react';
import portrait from '../../assets/images/Home/portrait.png';

function Shop() {
    return (
        <div className="shop">
            <div className="shop-box">
                <h2>Boutique</h2>
                <p>Ce dont vous avez eu un aperçu vous intéresse ? N’hésitez pas à venir faire un tour sur ma boutique en ligne !</p>
                <a target="_blank" rel="noreferrer"
                    href="https://gumroad.com/salemdrenay" 
                    className="shopButton">
                        Gumroad
                </a>
            </div>
            <img src={portrait} className="portrait-shop" alt="Salem sur un gros paquet cadeau"></img>
        </div>
    )
}

export default Shop;