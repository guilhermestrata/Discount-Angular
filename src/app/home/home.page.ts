import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  res:number=0;
  valor:string=''
  radioSelecionada:string="";


  constructor(public toastController: ToastController, public alertController: AlertController) {}

  verificarRadio(){
    if(this.radioSelecionada == "Pix"){
      this.pixDiscount();
    }else if(this.radioSelecionada == "Debito"){
      this.debitDiscount();
    }else if(this.radioSelecionada == "Credito"){
      this.creditDiscount();
    }
    this.exibirAlerta();
  }
  pixDiscount(){
    this.res = parseFloat(this.valor) - parseFloat(this.valor)*0.1
  }
  debitDiscount(){
    this.res = parseFloat(this.valor)
  }
  creditDiscount(){
    this.res = parseFloat(this.valor) + parseFloat(this.valor)*0.1
  }

  async exibirAlerta(){
    const alerta = await this.alertController.create({
      header: this.radioSelecionada,
      subHeader:"Seu preço a pagar é de:",
      message:""+Math.round(this.res),
      buttons:["Ok"]
    });
    alerta.present();
  }}
