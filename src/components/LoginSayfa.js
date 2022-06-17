import React,{useState} from "react";
import './LoginSayfa.css';


const LoginSayfa =(props)=>{
    
  const [errorMessages, setErrorMessages] = useState({});

  
  const hatalar = {
    kullaniciAd: "Yanlış Kullanıcı Adı",
    sifrey: "Yanlış Şifre"
  };
  
  const handleSubmit = (e) => {
    
    e.preventDefault();
  
    var { kullaniciAd, sifrey } = document.forms[0];
  
    const kullaniciVeri = props.veriler.find((user) => user.kullaniciadi === kullaniciAd.value);
    
    
    if (kullaniciVeri) {
      if (kullaniciVeri.sifre !== sifrey.value) {
        
        setErrorMessages({ isim: "sifrey", mesaj: hatalar.sifrey });
      } else {
        props.login(kullaniciVeri);

        props.switchPage(kullaniciVeri.isAdmin?2:1);
      }
    } else {
      
      setErrorMessages({ isim: "kullaniciAd", mesaj: hatalar.kullaniciAd });
    }
  };

  
  const hataMesaj = (isim) =>
  isim === errorMessages.isim && (
    <div className="error">{errorMessages.mesaj}</div>
  );
  
  const loginForm = (
    <div className="form" style={props.style}>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Kullanıcı Adı </label>
          <input type="text" name="kullaniciAd" required />
          {hataMesaj("kullaniciAd")}
        </div>
        <div className="input-container">
          <label>Şifre </label>
          <input type="password" name="sifrey" required />
          {hataMesaj("sifrey")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
    
    return(
        <div className="login-form">
          <div className="title">Hoşgeldiniz</div>
          {props.currentUser !== undefined ? <div>Kullanıcı Başarı ile Oturum açtı</div> : loginForm}
        </div>)
    
}

export default LoginSayfa