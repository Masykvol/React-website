import React from 'react'
import { useState } from 'react';

function Cotegories({ openZakaz, setOpenZakaz }) {

    const cotigories = [
        "Малый 2000 л.",
        "Средний 6000 л.",
        "Станрдный 10 000 л.",
        "Оптовой 40 000 л."
    ]

    const cotigoriesImg = [
        'img/maliy.png',
        'img/02 1.png',
        'img/03 1.png',
        'img/04 1.png'

    ]

    const [gazImg, setGazImg] = useState(0)

    const [active, setActive] = useState(0)


    function indexFunc(index) {
        setActive(index)
    }
    return (
        <div>
            <h2>Выберите свой объём Газовоза</h2>


            <div className='section-gruz-button'>
                {
                    cotigories.map((obj, index) => (
                        <div>
                            <button key={index} onClick={() => indexFunc(index)} className={active === index ? 'section-gruz-btn-active' : 'section-gruz-btn'}>
                                {obj}

                            </button>
                        </div>

                    ))

                }
            </div>





            <div className='section-gruz-img'>
                {


                    <img src={cotigoriesImg[active]} alt="" />




                }

            </div>

            <div className='section-gruz-button-zakaz'>
                <a href="#header-logo">
                    <button onClick={() => !setOpenZakaz(!openZakaz)} className='section-gruz-btn-zakaz'>Заказать газ</button>
                </a>

            </div>
        </div >

    )
}

export default Cotegories;