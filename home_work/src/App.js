import React, { useState ,useEffect} from 'react';
import Article from "./components/Article";
import './scss/style.scss';
import LangContext from "./components/LangContext";


let EN = {
title:'NVIDIA NEWS',
article__title:'NVIDIA Accelerated AI on Azure',
buttonRead:'Read',
buttonClose:'Close',
description:'Article description:',
preview: 'NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.',
content: 'Microsoft Azure and NVIDIA empower enterprises in the cloud to harness the combined power of NVIDIA accelerated computing and NVIDIA networking on demand to meet the diverse computational requirements of AI, machine learning, data analytics, graphics, virtual desktop, and high-performance computing (HPC) applications. From fractional GPUs and single GPUs to multiple GPUs across multiple nodes for distributed computing, access the right-sized GPU acceleration for your workloads.',
article__name:'Author: Mike',
article__theme:'Theme: Video cards',
article__date:'Published: 06.12.2022',
article__btn_read:'Mark as read',
article__btn_unread:'Mark as unread',
current_lang:'EN'
}

let UA={
title:'НОВИНИ NVIDIA',
article__title:'Прискорений штучний інтелект NVIDIA в Azure',
buttonRead:'Читати',
buttonClose:'Закрити',
description:'Опис статті:',
preview:'NVIDIA на Azure надає підприємствам штучний інтелект, мережі та високопродуктивні обчислення.',
content:'Microsoft Azure та NVIDIA дозволяють підприємствам у хмарі використовувати об\'єднану міць прискорених обчислень NVIDIA та мереж NVIDIA на запит для задоволення різноманітних обчислювальних вимог ІІ, машинного навчання, аналізу даних, графіки, віртуальних робочих столів та високопродуктивних обчислень додатків HPC. Від дрібних графічних процесорів і одиночних графічних процесорів до кількох графічних процесорів на кількох вузлах для розподілених обчислень - отримайте доступ до прискорення графічного процесора потрібного розміру для робочих навантажень.',
article__theme:'Тема: відео карти',
article__date:'Опубліковано: 06.12.2022',
article__name:'Автор: Майк',
article__btn_read:'Прочитано',
article__btn_unread:'Не прочитано',
current_lang:'UA'
}
 function App () {
  
  // const article = {
  //     description: 'Article description:',
  //     preview: 'NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.',
  //     content: 'Microsoft Azure and NVIDIA empower enterprises in the cloud to harness the combined power of NVIDIA accelerated computing and NVIDIA networking on demand to meet the diverse computational requirements of AI, machine learning, data analytics, graphics, virtual desktop, and high-performance computing (HPC) applications. From fractional GPUs and single GPUs to multiple GPUs across multiple nodes for distributed computing, access the right-sized GPU acceleration for your workloads.',
  // }
  
  const [lang, setLang] = useState(UA);
  const setLangEN = () => {
    setLang(EN);
  };

  const setLangUA = () => {
    setLang(UA);
  };


  const [isShow, setIsShow]  = useState(false);
   const buttonText = isShow ? lang.buttonClose : lang.buttonRead;

   const [isRead, setIsRead] = useState(false);
   const handleMarkAsRead=()=>{
    setIsRead(true);
   }
    const handleMarkAsUnRead=()=>{
    setIsRead(false);
   }
   
  const toggleArticle = () => {
    setIsShow(!isShow);
  };
 
  return (
    <div className="wrapper">
      <LangContext.Provider value={lang}>
      <h1 className="title">{lang.title}</h1>
      <div className="article">
          <Article show={isShow} text={lang} isRead={isRead} lang={lang}>
          <div className="article__title" >
            <h2>{lang.article__title}</h2>
          </div>
          </Article>
        <div className="article__actions">
        <button  className="article__btn"  onClick={handleMarkAsRead}
        >{lang.article__btn_read}</button>
          <button onClick={toggleArticle} className="article__btn">{buttonText}</button>
          <button className="article__btn" onClick={handleMarkAsUnRead}>{lang.article__btn_unread}</button>
        </div>
      </div>
      
      <div className="lang">
        <button className="lang-btn" onClick={setLangUA}>UA</button>
        <button className="lang-btn" onClick={setLangEN}>EN</button>
      </div>
      </LangContext.Provider>
    </div> 
    );
  }
export default App;