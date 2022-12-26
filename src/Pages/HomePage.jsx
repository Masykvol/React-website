import Main from "../components/Main";
import Footer from "../components/Footer";
import React from 'react'
import Header from "../components/Header";
import { Router, Route, Link, Routes } from 'react-router-dom';


function HomePage() {
    const [openZakaz, setOpenZakaz] = React.useState(false)
    return (
        <>
            <div className="home">
                {
                    openZakaz ?
                        <div className='zakaz'>
                            <div className="zakaz-block">
                                <div>
                                    <div className='zakaz-block-title'>
                                        <h3>Доставим газ <br />
                                            за 4 часа</h3>
                                        <img onClick={() => !setOpenZakaz(!openZakaz)} src="img/Vector 1.svg" alt="" />
                                    </div>
                                    <div className='wrapper-input'>
                                        <div className='zakaz-input'>
                                            <input className='zakaz-name' placeholder='имя' type="text" />
                                            <input className='zakaz-nomber' placeholder='Телефон' type="text" />
                                        </div>
                                    </div>
                                    <div className='zakaz-btn-block'>
                                        <div className='zakaz-btn'>
                                            <Link to='/PayPage'>   
                                             <button className='zakaz-btn_button'>
                                                Заказать доставку газа
                                            </button></Link>

                                            <p>Нажимая на кнопку, вы даёте согласие на обработку персональных <br />
                                                данных и соглашаетесь с условиями политики <br />
                                                конфиденциальности</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        null
                }



                <Header openZakaz={openZakaz} setOpenZakaz={setOpenZakaz} />

                <Main openZakaz={openZakaz} setOpenZakaz={setOpenZakaz} />
                <Footer />


            </div>
        </>
    );
}

export { HomePage };