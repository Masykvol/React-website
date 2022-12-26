import React from 'react'

function Header ({openZakaz, setOpenZakaz}) {
    return (
        <>
        <header className='header'>
        <div className='header_block-left'>
            <div id='header-logo' className='header_logo'>
                <img src="img/logo (1).svg" alt="" />
                <div className='header-sollid'></div>
                <p>Расправь плечи <br />
                    в теплом доме</p>
            </div>
            <div className='header-time'>
                <div className='header-time_contents header-time_contents-one '>
                    <div className='header-time_contents-img'>
                        <img src="img/moon.svg" alt="" />
                        <img src="img/strelka (2).svg" alt="" />
                        <img src="img/son.svg" alt="" />
                    </div>
                    <div className='header-time_contents-text'>
                        <p>В любое время дня и ночи</p>
                    </div>
                </div>

                <div className='header-time_contents'>
                    <div className='header-time_contents-img'>
                        <img src="img/pogoda.svg" alt="" />
                        <img src="img/strelka (2).svg" alt="" />
                        <img src="img/snowflake 1.svg" alt="" />
                    </div>
                    <div className='header-time_contents-text'>
                        <p className='p-header-time_contents'>Вне зависимости от погодных условий</p>
                    </div>
                </div>

            </div>
            <div className='header-content-text'>
                <h1>
                    Доставим газ <br />
                    за 4 часа
                </h1>
                <span>
                    в любую точку  Москвы <br />
                    и Московской области
                </span>
            </div> 

            <div className='header-btn'>
                <button onClick={() => !setOpenZakaz(!openZakaz)} className='header-btn_button'>
                    Заказать доставку газа <br />
                    в газгольдер
                </button>
                <p>Доставка газа всегда по актуальным ценам</p>
            </div>
        </div>

        <div className='header_block-right'>
            <div className='header_block-right-contact'>
                <h3>+7 926 330-68-34</h3>
                <a href="#">Срочный вопрос</a>
            </div>
             <div className='header_block-right_big-img'>
                <img src="img/1stscreen 1.svg" alt="" />
            </div>
        </div>
    </header>
    </>
    );
}

export default Header