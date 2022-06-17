import React,{useState} from "react";

import Select from "react-select";



export default function SinavOlustur() {
  const {} = useState();

  let vizeBool = true;
  let finalBool = true;

  const turler = [
    { value: "Vize", label: "Vize" },
    { value: "Final", label: "Final" },
  ];

  

  return (
    <div className="sinavOlustur">
      <div className="soDers">
        <label>Ders Giriniz</label>
        <Select
          options={Dersler}
          onChange={(e) => {
            setDersAdi(e.value);
          }}
        ></Select>
      </div>
      <div className="soTur">
        <label>Sınavın Türünü Seçiniz</label>
        <div>
          <Select
            options={turler}
            onChange={(e) => {
              setsinavTuru(e.value);
            }}
          ></Select>
        </div>
      </div>
      <div className="sinavButton">
        <button onClick={Devam}>Devam</button>
      </div>
    </div>
  );
}
