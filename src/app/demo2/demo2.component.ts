import { Component, OnInit } from '@angular/core';
import { URL } from 'url';
import { SanPhamService } from '../Services/SanPham/SanPhamService';//chỉ gọi service trong com nào cần dùng nó


@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css'],
  providers:[SanPhamService]// nó là mảng vì nó có thể sử dụng nhiều service, chứa service để móc dữ liệu ra bên ngoài
})
export class Demo2Component implements OnInit {

  constructor(private SanPham:SanPhamService){

  }
  kq:String=""
 

  ngOnInit() {
  }
  sendPost(){
  
   this.SanPham.SendData(5,6).subscribe(data=>{
      console.log(data)//đây là chỗ cho server trả về
      //data hiển thị ra là do service trả về
     //service: xử lý data cho com hiển thị
    })//url,body ép về tostring,option
    //chỉ từ angular trả về r đứng im thì tới đây là đủ
  }

}
