import React from 'react'
import { Router, Route, Link, Routes } from 'react-router-dom';


function PayPage() {
    return (
        <>
            <header className='header'>
                <div className='header_block-left'>
                    <div className='header_logo'>
                        <img src="img/logo (1).svg" alt="" />
                        <div className='header-sollid'></div>
                        <p>Расправь плечи <br />
                            в теплом доме</p>
                    </div>

                </div>

                <div className='header_block-right'>
                    <div className='header_block-right-contact'>
                        <h3>+7 926 330-68-34</h3>
                        <a href="#">Срочный вопрос</a>
                    </div>

                </div>
            </header>

            <main>
                <div className='wrapper-pay-page'>
                    <div className='title-pay-page'>
                        <h1>Спасибо за обращение</h1>
                        <span> наш специалист свяжется <br />
                            с вами в ближайшее время</span>
                    </div>
                </div>
                <div className='btn-pay-page-block'>
                    <div className='btn-pay-page'>
                        <Link to='/'>
                            <button className='pay-page-btn_button'>
                                Заказать доставку газа <br />
                                в газгольдер
                            </button>
                        </Link>

                    </div>
                </div>


            </main>
        </>
    )

}

export { PayPage };