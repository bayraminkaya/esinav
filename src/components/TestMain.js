import React,{Component} from 'react';
import Soru from './soru/Soru';
import Cevap from './cevap/Cevap';
import './TestMain.css';

export default class Test extends Component {
    constructor(props){
        super(props);

        this.state = {
            dogruCevap:0,
            tiklananCevap:0,
            adim:1,
            puan:0
        }

        this.props = props;
    }
    
    kontrolCevap= cevap=>{
        const {adim,puan} = this.state;
        let dogruCevaplar = this.props.sinav.dogruCevaplar
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
        if(adim >= Object.keys(this.props.sinav.sorular).length ){
            console.log(this.props)
            let veriler = this.props.veriler.filter((el)=> el.kullaniciadi !== this.props.currentUser.kullaniciadi)
            let sinav = this.props.currentUser.sinavlar.find((el)=>el.sinavIsmi === this.props.sinav.sinavIsmi)
            if(sinav === undefined){
                this.props.currentUser.sinavlar.push({
                    sinavIsmi:this.props.sinav.sinavIsmi,
                    puan: this.state.puan
                })
            }
            else{
                sinav.puan = this.state.puan;
            }
            this.props.setVeri([...veriler, this.props.currentUser])
            console.log(this.props.veriler)
        }
    }

    render(){
        let {dogruCevap,tiklananCevap,puan,adim} = this.state
        if(this.props.sinav === undefined)
            return (<div></div>)
        let {sorular,cevaplar} = this.props.sinav;
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
                      <button className='geri' onClick={()=>this.props.switchPage(1)}>Geri</button>
                      <p>Teşekkürler</p>
                  </div>
                      
              )
            }
          </div> 
        );
    }
}