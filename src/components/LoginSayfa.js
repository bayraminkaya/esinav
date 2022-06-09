import React,{useState} from "react";
import './LoginSayfa.css';


const LoginSayfa =(props)=>{
    
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  
  const veriler = [
    {
      kullaniciadi: "ogrenci",
      sifre: "ogrenci"
    },
    {
      kullaniciadi: "admin",
      sifre: "admin"
    }
  ];
  
  const hatalar = {
    kullaniciAd: "Yanlış Kullanıcı Adı",
    sifrey: "Yanlış Şifre"
  };
  
  const handleSubmit = (e) => {
    
    e.preventDefault();
  
    var { kullaniciAd, sifrey } = document.forms[0];
  
    const kullaniciVeri = veriler.find((user) => user.kullaniciadi === kullaniciAd.value);
    
    
    if (kullaniciVeri) {
      if (kullaniciVeri.sifre !== sifrey.value) {
        
        setErrorMessages({ isim: "sifrey", mesaj: hatalar.sifrey });
      } else {
        setIsSubmitted(true);
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
    <div className="form">
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
        <div className="title">Giriş Yap</div>
        {isSubmitted ? <div>Kullanıcı Başarı ile Oturum açtı</div> : loginForm}
        </div>)
    
}

export default LoginSayfa