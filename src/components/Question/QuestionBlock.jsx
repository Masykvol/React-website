import React from 'react'




function Quetions() {

    const [open, setOpen] = React.useState(false)
    const [openTwo, setOpenTwo] = React.useState(false)
    const [openThree, setOpenThree] = React.useState(false)
    const [openFour, setOpenFour] = React.useState(false)
    const [openFive, setOpenFive] = React.useState(false)
    return (
        <>
            <div className='wrapper-section-often-question'>
                <div className='section-question-solid'></div>
                <div className='section-question'>

                    {
                        open ?
                            <div onClick={() => !setOpen(!open)} className='section-question-span-active'>
                                <img src="img/Vector (6).svg" alt="" />
                                <span className='section-question-span'>

                                    Есть ли у вас инженеры в компании?
                                </span>

                                <p>За счёт длинны в 50 м. делаем заправку не заезжая и не портим газон, а так же не мешаем соседям</p>
                            </div>
                            :

                            <span onClick={() => !setOpen(!open)}>
                                <img src="img/Vector (5).svg" alt="" />
                                Есть ли у вас инженеры в компании?
                            </span>

                    }


                </div>

                <div className='section-question-solid'></div>
                <div className='section-question'>
                    {
                        openTwo ?
                            <div className='section-question-span-active'>
                                <img src="img/Vector (6).svg" alt="" />
                                <span onClick={() => !setOpenTwo(!openTwo)} className='section-question-span'>

                                    Делаете ли вы отчистку газгольдера?
                                </span>

                                <p>За счёт длинны в 50 м. делаем заправку не заезжая и не портим газон, а так же не мешаем соседям</p>
                            </div>
                            :

                            <span onClick={() => !setOpenTwo(!openTwo)}>
                                <img src="img/Vector (5).svg" alt="" />
                                Делаете ли вы отчистку газгольдера?
                            </span>

                    }
                </div>

                <div className='section-question-solid'></div>
                <div className='section-question'>
                    {
                        openThree ?
                            <div className='section-question-span-active'>
                                <img src="img/Vector (6).svg" alt="" />
                                <span onClick={() => !setOpenThree(!openThree)} className='section-question-span'>

                                    А вы не испортите газон у меня и соседей?
                                </span>

                                <p>За счёт длинны в 50 м. делаем заправку не заезжая и не портим газон, а так же не мешаем соседям</p>
                            </div>
                            :

                            <span onClick={() => !setOpenThree(!openThree)}>
                                <img src="img/Vector (5).svg" alt="" />
                                А вы не испортите газон у меня и соседей?
                            </span>

                    }
                </div>

                <div className='section-question-solid'></div>

                <div className='section-question'>
                    {
                        openFour ?
                            <div className='section-question-span-active'>
                                <img src="img/Vector (6).svg" alt="" />
                                <span onClick={() => !setOpenFour(!openFour)} className='section-question-span'>

                                    Вы предоставляете документы для субсидий?
                                </span>

                                <p>За счёт длинны в 50 м. делаем заправку не заезжая и не портим газон, а так же не мешаем соседям</p>
                            </div>
                            :

                            <span onClick={() => !setOpenFour(!openFour)}>
                                <img src="img/Vector (5).svg" alt="" />
                                Вы предоставляете документы для субсидий?
                            </span>

                    }
                </div>

                <div className='section-question-solid'></div>
                <div className='section-question'>
                    {
                        openFive ?
                            <div className='section-question-span-active'>
                                <img src="img/Vector (6).svg" alt="" />
                                <span onClick={() => !setOpenFive(!openFive)} className='section-question-span'>

                                    Смогу ли я заказать во время праздников?
                                </span>

                                <p>За счёт длинны в 50 м. делаем заправку не заезжая и не портим газон, а так же не мешаем соседям</p>
                            </div>
                            :

                            <span onClick={() => !setOpenFive(!openFive)}>
                                <img src="img/Vector (5).svg" alt="" />
                                Смогу ли я заказать во время праздников?
                            </span>

                    }
                </div>
                <div className='section-question-solid'></div>
            </div>

        </>
    )
}

export default Quetions;