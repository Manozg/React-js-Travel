import React, {useState} from 'react';
import Faq from './Faq';
import './Faq.scss'


export default function Accordion() {
    const [faqs, setFaqs] = useState  ([
        {
            question: "Lorem ipsum dolor sit amet, id mea abhorreant scripserit quaerendum, sed ut decore petentium ?",
            answer:"Lorem ipsum dolor sit amet, id mea abhorreant scripserit quaerendum, sed ut decore petentium. Iudico invidunt vix ad, habeo ludus detracto ex ius. Ea melius audiam officiis vel. Utinam tempor aliquip no vim, eu aeque inermis his. Eu quo ancillae appetere neglegentur. No munere postulant est.",
            open:"true"
        },
        {
            question: "Lorem ipsum dolor sit amet, id mea abhorreant scripserit quaerendum, sed ut decore petentium ?",
            answer:"Lorem ipsum dolor sit amet, id mea abhorreant scripserit quaerendum, sed ut decore petentium. Iudico invidunt vix ad, habeo ludus detracto ex ius. Ea melius audiam officiis vel. Utinam tempor aliquip no vim, eu aeque inermis his. Eu quo ancillae appetere neglegentur. No munere postulant est.",
            open:"false"
        },
        {
            question: "Lorem ipsum dolor sit amet, id mea abhorreant scripserit quaerendum, sed ut decore petentium ?",
            answer:"Lorem ipsum dolor sit amet, id mea abhorreant scripserit quaerendum, sed ut decore petentium. Iudico invidunt vix ad, habeo ludus detracto ex ius. Ea melius audiam officiis vel. Utinam tempor aliquip no vim, eu aeque inermis his. Eu quo ancillae appetere neglegentur. No munere postulant est.",
            open:"false"
        },
        {
            question: "Lorem ipsum dolor sit amet, id mea abhorreant scripserit quaerendum, sed ut decore petentium ?",
            answer:"Lorem ipsum dolor sit amet, id mea abhorreant scripserit quaerendum, sed ut decore petentium. Iudico invidunt vix ad, habeo ludus detracto ex ius. Ea melius audiam officiis vel. Utinam tempor aliquip no vim, eu aeque inermis his. Eu quo ancillae appetere neglegentur. No munere postulant est.",
            open:"false"
        },
    ]);

   const toggleFaq = index => {
       setFaqs (faqs.map ((faq, i) => {
           if(i===index) {
               faq.open= !faq.open      
           } else {
               faq.open = false;
           }
           return faq;
       }))
   }

    return (
        <React.Fragment>
            <div className="title">
                <h5> Frequently Asked Questions</h5>
            </div>
            <div className="faqs">
                {faqs.map((faq, i) => (
                    <Faq faq={faq} index={i} toggleFaq={toggleFaq}/>
                ))}
            </div>
        </React.Fragment>

    );
}
