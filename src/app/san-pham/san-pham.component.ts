import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-san-pham',
  templateUrl: './san-pham.component.html',
  styleUrls: ['./san-pham.component.css']
})
export class SanPhamComponent implements OnInit {
  GioHang=[
    new SanPham("Kẹo",40),
    new SanPham("Sữa",15),
    new SanPham("Bánh",10)
  ]

  constructor() { }

  ngOnInit() {

  }

}
class SanPham{
  public Ten:String;
  public SoLuong:Number;
  constructor(t:string,sl:Number){
    this.Ten=t;
    this.SoLuong=sl

  }
}
