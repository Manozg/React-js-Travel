import React from 'react';
import './Faq.scss'

function Faq({faq, index, toggleFaq}) {
    return (
        <div 
            className={"faq " + (faq.open ? 'open' : '')}
            key={index}
            onClick={() => toggleFaq(index)}
        >
            <div className="faq-questions">
                {faq.question}
            </div>  
            <div className="faq-answers">
                {faq.answer}
            </div>
            
        </div>
    )
}

export default Faq;
