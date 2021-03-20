import React, { useState } from 'react';

function ContactText(props) {
    let [input, setInput] = useState('')
    let [input1, setInput1] = useState('')
    let [input2, setInput2] = useState('')

    let changeInput = e =>{
        setInput(e.target.value)
    }
    let changeInput1 = e =>{
        setInput1(e.target.value)
    }
    let changeInput2 = e =>{
        setInput2(e.target.value)
    }
    let reset = e =>{
        setInput1("")
        setInput2("")
        setInput("")
    }
    
    return (

        <section className='contact'>
            <div className='text'>
                <div>
                <h2>Prise de <br/><span>Contact</span></h2>
                <p>Présentez votre projet et laissez-nous vos
                    informations de contact. Nous reviendrons vers
                    vous dans un délai de 24h.
                </p>
                </div>
            </div>
            <div className='input'>
                <div>
                <input type='text' value={input} placeholder='Votre Nom' onChange={changeInput}/>
                <input type='text' value={input1} placeholder='Votre E-mail' onChange={changeInput1}/>
                <textarea type='text' value={input2} placeholder='Votre Demande' onChange={changeInput2}/>
                <h2 onClick={reset}>Envoyer votre demande <i class="fas fa-arrow-circle-right"></i></h2>
                </div>
            </div>
        </section>
    );
}

export default ContactText;