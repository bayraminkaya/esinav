import React from "react";
import './Sinavlar.css';

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
        { props.currentUser[0]!== undefined && props.currentUser[0].sinavlar.map((element)=>(
        <div className="sinavlar">    
            <h2>{element.sinavIsmi}</h2>
            <button className="basla" onClick={()=>props.startSinav(element.sinavIsmi)}>Sınava Başla</button>
        </div>
        ))
        }
        
        <button className="cikis" onClick={exit}>Çıkış Yap</button>
    </div>
    )

}

export default Sinavlar;