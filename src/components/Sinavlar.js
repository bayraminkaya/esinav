import React, { useState } from "react";
import './Sinavlar'

const Sinavlar=(props)=>{
    
    const exit = ()=>{
        props.currentUser[1](undefined);
        props.switchPage(0);
    }


    if( props.currentUser[0] === undefined || props.currentUser[0].isAdmin) {
        return(<div></div>)
    }
    return (
    <div className="sayfaSinav">
        { props.currentUser[0]!== undefined && props.currentUser[0].sinavlar.map((elem)=>(
        <div className="sinavlar"><p>{elem.sinavIsmi}</p> <p>{elem.puan}</p>
        <button className="basla" onClick={()=>props.startSinav(elem.sinavIsmi)}>Sınava Başla</button></div>))
        }
        <button className="cikis" onClick={exit}>Çıkış Yap</button>
    </div>
    )

}

export default Sinavlar;