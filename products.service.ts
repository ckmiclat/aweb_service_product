import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() {
    return [
      {
    ProductID: 'P-101',
    ProductName: 'Logitech Mouse',
    Description: '6 Button Mechanical Mouse',
    price: '899',
      },
      {
        ProductID: 'P-102',
        ProductName: 'JBL BT SPEAKER',
        Description: 'waterproof radio 360 surround',
        price: '1099',
      },
      {
        ProductID: 'P-103',
    ProductName: 'mechanical keyboard',
    Description: 'hot swappable rgb backlit',
    price: '2395',
      },
      {
        ProductID: 'P-104',
    ProductName: 'Oculus Meta',
    Description: 'all in one gaming headset',
    price: '22,450',
      }
      
    ]
  }
}
