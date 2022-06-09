import React,{Component} from 'react';
import Soru from './soru/Soru';
import Cevap from './cevap/Cevap';
import './TestMain.css';

export default class Test extends Component {
    
    state={
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
        dogruCevap:0,
        tiklananCevap:0,
        adim:1,
        puan:0
    }
    kontrolCevap= cevap=>{
        const {dogruCevaplar,adim,puan} = this.state;
        if(cevap===dogruCevaplar[adim]){
            this.setState({
                puan:puan+1,
                dogruCevap:dogruCevaplar[adim],
                tiklananCevap:cevap
                
            });
        }else{
            this.setState({
                dogruCevap:0,
                tiklananCevap:cevap
            })

        }
    }
    ileriAdim=adim=>{
        this.setState({
            adim:adim+1,
            dogruCevap:0,
            tiklananCevap:0
        });
    }

    render(){
        let {sorular,cevaplar,dogruCevap,tiklananCevap,puan,adim} = this.state
        return(
          <div className='Content'>
            {adim <= Object.keys(sorular).length ? 
              (<div>
              <Soru
                soru ={sorular[adim]}/>
              <Cevap 
                cevap ={cevaplar[adim]}
                adim={adim}
                kontrolCevap={this.kontrolCevap}
                dogruCevap={dogruCevap}
                tiklananCevap={tiklananCevap}
              />
              <button className='İleriAdim'
                disabled={
                    tiklananCevap && Object.keys(sorular).length>=adim ? false:true 
                }
                onClick={()=>this.ileriAdim(adim)}
              >İleri</button>
              </div>) : (
                  <div className='sonSayfa'>
                      <h1>Testi bitirdiniz</h1>
                      <p>{Object.keys(sorular).length} sorudan {puan} tanesini bildiniz </p>
                      <p>Teşekkürler</p>
                  </div>
                      
              )
            }
          </div> 
        );
    }
}