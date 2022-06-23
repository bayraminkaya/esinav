import React ,{useState}from "react";

import './Admin.css';
import './TestMain.css';

const Admin =(props)=>{
    

    const [pageHeight, setPageHeight] = useState(Array(2).fill(0));
  
    const switchAdminPage = (el)=>{
      let array = Array(2).fill(0);
      array[el] = "100%";
      setPageHeight(array);
    };
    
    const exit = ()=>{
        props.currentUser[1](undefined);
        props.switchPage(0);
    }
    return (
        <div className="">
          <div>
            <button className="sonuclar" onClick={()=>switchAdminPage(1)}>Sonuçlar</button>
            <button className="cıkıs" onClick={exit}>Çıkış Yap</button>
          </div>
          <div style={{width:"100%", height:pageHeight[1], overflow:'hidden', transition:"1s"}}>
            {
                props.veriler.map((element)=>{
                    if(element.isAdmin)
                        return;
                    return(
                    <div className="sonuc" style={{color:"#fff",}}>
                        <h2>{element.kullaniciadi}</h2>
                        {element.sinavlar.map((el)=>(<div>
                            <h3>{el.sinavIsmi} sınavı</h3>
                            <h3>{el.puan} tane doğru</h3>
                            
                        </div>))}
                    </div>)
                })
            }
          </div>
        </div>
      );
}
export default Admin;