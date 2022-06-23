import React, { useState } from 'react';
import Test from './components/TestMain';
import Admin from './components/Admin';
import Sinavlar from './components/Sinavlar';
import './App.css';
import LoginPage from './components/LoginSayfa';

function App() {
  let array = Array(4).fill("0%");
  array[0] = "100%";
  const [pageHeight, setPageHeight] = useState(array);

  const switchPage = (el)=>{
    let array = Array(4).fill("0%");
    array[el] = "100%";
    setPageHeight(array);
  };

  const [currentUser, setCurrentUser] = useState(undefined);

  const sinavlar = [
    {
      sinavIsmi: "Vize",
      sorular:{
        1:'Türkiyenin Başkenti',
        2:'Türkiyenin En Uzun Dağı',
        3:'Türkiyenin En Büyük Gölü',
        4:'Osmanlının İlk Padişahı',
        5:'Hangisi Yazılım Dili Değildir'
      },
      cevaplar:{
          1:{
              1:'İstanbul',
              2:'Ankara',
              3:'İzmir',
              4:'Bursa'
          },
          2:{
              1:'Ağrı Dağı',
              2:'Uludağ',
              3:'Erciyes Dağı',
              4:'Kaz Dağı'
          },
          3:{
              1:'Tuz Gölü',
              2:'Eğirdir Gölü',
              3:'Van Gölü',
              4:'Beyşehir Gölü'
          },
          4:{
              1:'Fatih Sultan Mehmet',
              2:'Orhan Gazi',
              3:'Osman Gazi',
              4:'Yavuz Sultan Selim'

          },
          5:{
              1:'Python',
              2:'React',
              3:'Java',
              4:'Coğrafya'
          },
      },
      dogruCevaplar:{
          1:'2',
          2:'1',
          3:'3',
          4:'3',
          5:'4'
      },
    }

  ]

  const [veriler, setVeri] = useState([
    {
      kullaniciadi: "ogrenci",
      sifre: "ogrenci",
      isAdmin: false,
      sinavlar:[
        {
          sinavIsmi:"Vize",
          puan:-1
          
        },
        
      ]
    },
    {
      kullaniciadi: "admin",
      sifre: "admin",
      isAdmin: true,
    }
  ]);

  const [currentSinav, setCurrentSinav] = useState(undefined)
  
  const startSinav = (sinavAdi)=>{
    setCurrentSinav( sinavlar.find((element)=>element.sinavIsmi === sinavAdi))
    switchPage(3);
  }
  

  
  
  


  
  return (
    <div className="App">
      <div style={{height:pageHeight[0], width: "100%", overflow:'hidden', transition:"1s"}}>
        <LoginPage currentUser={currentUser} veriler={veriler} login={setCurrentUser} switchPage={switchPage}></LoginPage>
      </div>
      <div style={{height:pageHeight[1], width: "100%", overflow:'hidden', transition:"1s"}}>
        <Sinavlar switchPage={switchPage} startSinav={startSinav} currentUser={[currentUser, setCurrentUser]}></Sinavlar>  
      </div>
      <div style={{height:pageHeight[2], width: "100%", overflow:'hidden', transition:"1s"}}>
        <Admin veriler={veriler} currentUser={[currentUser, setCurrentUser]} switchPage={switchPage}></Admin>
      </div>
      <div style={{height: pageHeight[3], width: "100%", overflow:'hidden', transition:"1s"}}>
        <Test switchPage={switchPage} currentUser={currentUser} veriler={veriler} setVeri={setVeri} sinav={currentSinav} style={{height: pageHeight === "0%" ? "100%": "0%"}}></Test>
      </div>
    </div>
  );
}

export default App;

