import React ,{useState}from "react";
import Sinavlar from "./Sinavlar";
import './Admin.css';
import './TestMain.css';

const Admin =(props)=>{
    const { setSayfaState } = useState();

    const [pageHeight, setPageHeight] = useState(Array(2).fill(0));
  
    const switchAdminPage = (el)=>{
      let arr = Array(2).fill(0);
      arr[el] = "100%";
      setPageHeight(arr);
    };
  
    const sinavlarPage=()=>{
        setSayfaState("SinavOlustur")
    }
    const resultPage = ()=>{
        
        setSayfaState("AdminResults")
    }
    const exit = ()=>{
        props.currentUser[1](undefined);
        props.switchPage(0);
    }
    return (
        <div className="">
          <div>
            <button className="sınavOlustur" onClick={()=>switchAdminPage(0)}>Sınav Oluştur</button>
            <button className="sonuclar" onClick={()=>switchAdminPage(1)}>Sonuçlar</button>
            <button className="cıkıs" onClick={exit}>Çıkış Yap</button>
          </div>
          <div style={{width:"100%", height:pageHeight[0], overflow:'hidden', transition:"1s"}}>
    
          </div>
          <div style={{width:"100%", height:pageHeight[1], overflow:'hidden', transition:"1s"}}>
            {
                props.veriler.map((elem)=>{
                    if(elem.isAdmin)
                        return;
                    return(
                    <div style={{color:"#fff", padding:"10%"}}>
                        <p>{elem.kullaniciadi}</p>
                        {elem.sinavlar.map((el)=>(<div>
                            <p>{el.sinavIsmi}</p>
                            <p>{el.puan}</p>
                        </div>))}
                    </div>)
                })
            }
          </div>
        </div>
      );
}
export default Admin;