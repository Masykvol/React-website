import React from 'react'
import Cotegories from './Cotegories/Cotegories';
import InputMain from './InputMain/InputMain';
import Quetions from './Question/QuestionBlock';

function Main({ openZakaz, setOpenZakaz }) {
    return (
        <>
            <main>
                <section className='main-price-section'>
                    <h2 className='main-price-block-h2'>Стоимость газа в ваш газгольдер сегодня</h2>
                    <div className='main-price-block'>
                        <div className='main-price-section-content'>
                            <h3>Пропан</h3>
                            <span>от 25 рублей за литр</span>
                            <p>Физически испарение <br />
                                происходит до -40 градусов, что <br />
                                позволяет использовать его в <br />
                                наших с вами погодных <br />
                                условиях
                            </p>
                            <a href="#header-logo"><button onClick={() => !setOpenZakaz(!openZakaz)} >Заказать</button></a>
                            
                        </div>
                        <div className='main-price-section-car'>
                            <span className='main-price-section-span-ideal'>Идеальное соотношение</span>

                            <div className='main-price-section-percent'>
                                <div className='main-price-section-span'>
                                    <span className='main-price-section-percent-span'>
                                        80%
                                    </span>
                                    <span className='main-price-section-gaz-span'>
                                        пропана
                                    </span>
                                </div>

                                <div className='main-price-section-sollit'></div>

                                <div className='main-price-section-span'>
                                    <span className='main-price-section-percent-span'>
                                        20%
                                    </span>
                                    <span className='main-price-section-gaz-span'>
                                        Бутана
                                    </span>
                                </div>
                            </div>

                            <div>
                                <img src="img/proportions 1.png" alt="" />
                            </div>


                        </div>
                        <div className='main-price-section-content'>
                            <h3>Бутан</h3>
                            <span>от 16 рублей за литр</span>
                            <p>Испарение Бутана происходит <br />
                                только до 0 градусов и годится <br />
                                для использования в тёплое <br />
                                время года
                            </p>
                            <a href="#header-logo"><button onClick={() => !setOpenZakaz(!openZakaz)} >Заказать</button></a>
                            
                        </div>
                    </div>
                </section>
                <section className='main-section-compani'>
                    <div className='main-section-compani-wrapper'>
                        <h2>Преимущества работы с нашей компанией</h2>
                        <div className='main-section-compani-content-block'>
                            <div className='main-section-compani-content-left'>


                                <div className='main-section-compani-content'>
                                    <div>
                                        <div><img src="img/04 2.png" alt="" /></div>

                                        <span>Экономия на хранилище </span>
                                        <p>за счёт собственных цистерн <br />
                                            на нашей базе</p>
                                    </div>
                                </div>

                                <div className='main-section-compani-content'>
                                    <div>
                                        <div><img src="img/baloon 1.png" alt="" /></div>

                                        <span>Любые объёмы поставки <br />
                                            качественного газа
                                        </span>
                                        <p>вы получаете объем от 1 тонны до 20 <br />
                                            тонн, с сертификатом качества газа
                                        </p>
                                    </div>
                                </div>

                                <div className='main-section-compani-content'>
                                    <div>
                                        <div><img src="img/50m 1.png" alt="" /></div>

                                        <span>Длина заправочных <br />
                                            рукавов — 50 метров
                                        </span>
                                        <p>не требуется подъезд автомобиля <br />
                                            вплотную к резервуару
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='main-section-compani-content-center'>
                                <div className='main-section-compani-content'>
                                    <div>
                                        <div><img src="img/track 1.png" alt="" /></div>

                                        <span>Экономия <br />
                                            на транспорте</span>
                                        <p>более 10 собственный газовозов</p>
                                    </div>
                                </div>

                                <div className='main-section-compani-content'>
                                    <div>
                                        <div><img src="img/Card.png" alt="" /></div>

                                        <span>Оплата удобным <br />
                                            для вас способом
                                        </span>
                                        <p>все газовозы оснащены терминалами для <br />
                                            оплаты вашего заказа
                                        </p>
                                    </div>
                                </div>

                                <div className='main-section-compani-content'>
                                    <div>
                                        <div><img src="img/timer 1.png" alt="" /></div>

                                        <span>Доставка сжиженного газа <br />
                                            в формате 24/7
                                        </span>
                                        <p>привезем газ в удобное для вас время <br />
                                            или же  по графику
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='main-section-compani-content-right'>
                                <div className='main-section-compani-content'>
                                    <div>
                                        <div><img src="img/calc 1.png" alt="" /></div>

                                        <span>Поставки напрямую <br />
                                            от производителей</span>
                                        <p>нет наценки на стоимость газа как у <br />
                                            перекупщиков и небольших частных <br />
                                            компаний</p>
                                    </div>
                                </div>

                                <div className='main-section-compani-content'>
                                    <div>
                                        <div><img src="img/oil.png" alt="" /></div>

                                        <span>Чистый газ <br />
                                            без примесей
                                        </span>
                                        <p>нет наценки на стоимость газа как у <br />
                                            перекупщиков и небольших частных <br />
                                            компаний
                                        </p>
                                    </div>
                                </div>

                                <div className='main-section-compani-content'>
                                    <div>
                                        <div><img src="img/sert 1.png" alt="" /></div>

                                        <span>
                                            Аттестованный <br />
                                            персонал
                                        </span>
                                        <p>
                                            квалифицированные сотрудники <br />
                                            проведут полную консультацию и дадут <br />
                                            рекомендации, если такие нужны будут
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='main-section-compani-content-transport'>
                            <div> <img src="img/transp 1.png" alt="" /></div>
                            <div>
                                <h2>
                                    Благодаря нашему <br />
                                    собственному автопарку мы <br />
                                    можем давать гарантию, что <br />
                                    доставим <span className='main-section-compani-content-transport-h2'>за 4 часа</span>
                                </h2>
                                <div className='main-section-compani-content-transport-span'>
                                    <span>Это сильное конкурентное преимущество, которым мы дорожим</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>

                <section className='main-section-gruz'>
                    <Cotegories openZakaz={openZakaz} setOpenZakaz={setOpenZakaz} />
                </section>

                <section className='section-comment'>
                    <h2>Отзывы наших клиентов</h2>
                    <div className='section-wrapper-comment'>
                        <div className='section-wrapper-comment-slider-block'>
                            <img src="img/Group 3.svg" alt="" />
                            <div className='section-wrapper-comment-slider'>
                                <img src="img/Group 9.jpg" alt="" />
                                <div>
                                    <span className='section-wrapper-comment-span-name'>Ольга И.</span>
                                    <span className='section-wrapper-comment-span-city'>Красногорск</span>
                                    <p className='section-wrapper-comment-comment'>Я  всегда боюсь газа , а особенно боюсь что он может <br />
                                        взорваться, как же мне помог Андрей водитель- <br />
                                        экспедитор показал что бояться тут нечего и самое <br />
                                        главное моего присутствие даже не понадобится. <br />
                                        Спасибо  компании за то что они все закрыли  этот <br />
                                        вопрос под ключ.</p>
                                </div>

                            </div>
                            <img src="img/Group 2.svg" alt="" />
                        </div>
                        <div className='section-wrapper-comment-point-wrapper'>
                            <div className='section-wrapper-comment-point-block'>
                                <div className='section-wrapper-comment-point-active'></div>
                                <div className='section-wrapper-comment-point'></div>
                                <div className='section-wrapper-comment-point'></div>
                                <div className='section-wrapper-comment-point'></div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className='main-section-often-question'>
                    <h2>Ответы на часто задаваемые вопросы</h2>
                    <div className='section-often-question-block'>
                        <Quetions />
                    </div>

                </section>

                <section className='section-partners'>
                    <div className='section-partners-your-question'>
                        <div className='section-partners-your-question-block-left'>
                            <h2>Не нашли ответа на свой <br />
                                вопрос задайте их нашему <br />
                                специалисту </h2>

                            <InputMain />

                        </div>
                        <div className='section-partners-your-question-block-right'>
                            <img src="img/image 1.png" alt="" />
                            <div className='section-partners-your-question-block-right-name'>
                                <div>                            <span>Роман Ш.</span>
                                    <p>Старший менеджер</p></div>

                            </div>
                        </div>
                    </div>

                    <div className='section-partners-img-block'>
                        <div className='section-partners-partners'>
                            <div className='partners-img'><img className='img-one' src="img/роснефть 1.png" alt="" /></div>
                            <div className='partners-img'><img className='img-two' src="img/image 3.png" alt="" /></div>
                            <div className='partners-img'><img className='img-three' src="img/транснефть 1.png" alt="" /></div>
                            <div className='partners-img'><img className='img-four' src="img/Frame.png" alt="" /></div>
                            <div className='partners-img'><img className='img-five' src="img/Frame (1).png" alt="" /></div>
                            <div className='partners-img'><img className='img-six' src="img/image 4 (1).png" alt="" /></div>
                        </div>
                    </div>

                    <h2 className='section-partners-h2'>Закажи прямо сейчас и получи <br />
                        бесплатную установку телеметрии﻿</h2>
                    <div className='section-partners-button'>
                        <a href="#header-logo">
                            <button onClick={() => !setOpenZakaz(!openZakaz)} className='section-partners-btn-zakaz'>Заказать газ</button>
                        </a>

                    </div>

                    <div className='section-partners-map'>
                        <div className='section-partners-map-right'>
                            <h3>Посетите наш <br />
                                уютный офис</h3>

                            <p className='p-section-partners-map-right'>где мы сможем вас полностью <br />
                                проконсультировать по всем  вопросам
                            </p>

                            <div className='section-partners-map-sollid'></div>

                            <span>Офис</span>
                            <p>Видное , Белокаменное шоссе, 20</p>

                            <span>Телефон:</span>
                            <p>+7 926 330-68-34</p>

                        </div>
                        <div className='section-partners-map-left'>
                            <img src="img/image 1 (1).png" alt="" />
                        </div>
                    </div>


                </section>
            </main>
        </>
    )
}

export default Main;