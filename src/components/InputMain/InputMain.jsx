import React from 'react'


function InputMain() {
    const [valueName, setValueName] = React.useState('')
    const [valueNomber, setValueNomber] = React.useState('')
    const [valueQuetions, setValueQuetions] = React.useState('')
    function saveValueName() {
        setValueName('')
        setValueNomber('')
        setValueQuetions('')

    }
    return (
        <>
            <div className='section-partners-your-question-input'>
                <input className='section-partners-name' placeholder='имя' type="text" value={valueName} onChange={(e) => setValueName(e.target.value)} />
                <input className='section-partners-nomber' placeholder='Телефон' type="text" value={valueNomber} onChange={(e) => setValueNomber(e.target.value)} />

                <textarea className='section-partners-question' placeholder='ваш вопрос' name="comment" cols="40" rows="3" value={valueQuetions} onChange={(e) => setValueQuetions(e.target.value)}></textarea>
            </div>
            <div>
                <button onClick={() => saveValueName()}>Задать вопрос</button>
            </div>
        </>
    )
}

export default InputMain;