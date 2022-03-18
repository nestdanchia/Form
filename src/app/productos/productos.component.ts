import { Component, OnInit } from '@angular/core';
class Product {
 
  constructor(
   public id:number,
   public name:string,
   public descri:string,
   public img:string,
  public detail:Detail[],
  
  ) {  }


  
}
class Detail {

  id!:number;
  price!:number;
  exist!:number;
  createInit!:string;
  username!:string

  
}





@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
 // public detail:Detail = new Detail();
  public product :Product = new Product(1,"Manzana",
  "Manzana de calidad precio por KG arriba","https://elegifruta.com.ar/onepage/wp-content/uploads/2017/07/manzana_roja.jpg",
  [{price:40.5,
    exist:45,id:1,
    createInit:"2022/02/23",
    username:"pepe"}],
    
  );
  
  public prod:any={title:"Name",des:"Decription",im:"Imagen",pri:"Price",exi:"Exist"}
  submitted = false;

  constructor() { 
    this.product.detail[0].username="pepe";
    this.product.detail[0].createInit="2202/02/23"
  }

  ngOnInit(): void {
  }
 
  onSubmit() {
    console.log(this.product);
    console.log(this.product.id,this.product.detail[0].exist,this.product.detail[0].username)
    }

}
