import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items=[]
  constructor(private http:HttpClient) { }
  addToCart(item){
    this.items.push(item)
  }
  getItems(){
    return this.items
  }
  clearCart(){
    this.items=[]
    return this.items
  }
  getShippingCharges(){
    return this.http.get('/assests/shipping.json')
  }
}
