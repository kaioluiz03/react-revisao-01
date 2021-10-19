import React from "react";
import './FooterStyle.css'

export default function Footer(){

    return(
        <footer>
            <div className='itens-footer'>
                <p className='title-footer'>Galeria</p>
                <p className='p-footer'>As mais belas Imagens</p>
                <p className='p-footer'>Copyright © Kaio Luiz 2021</p>
            </div>
        </footer>
    );
}