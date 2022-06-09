import React from "react";
import './Cevap.css';

const Cevap = (props)=>{
    
    let cevap = Object.keys(props.cevap)
        .map((sCevap,i)=>(
            <li
            
            className=
            {
                props.dogruCevap===sCevap?'dogru':
                props.tiklananCevap===sCevap?'yanlis':''

            }
            onClick={()=>props.kontrolCevap(sCevap)}
            
            key={sCevap}>
                {props.cevap[sCevap]}
            </li>
        ));

    return(
        <div>
            <ul disabled={props.tiklananCevap?true:false} className="Cevaplar">
                {cevap}
            </ul>
            <div>
                {
                    props.dogruCevap ? 'Doğru Cevap':
                    props.tiklananCevap ? 'Yanlış Cevap':''
                }
            </div>

        </div>
       
    )
}

export default Cevap;