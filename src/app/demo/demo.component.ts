import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from'@angular/common/http';//dành cho pthuc get:HttpClient,dành cho post:HttpHeaders
import { stringify } from 'querystring';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  tong:string
  constructor(private http:HttpClient) {
    
   }

  ngOnInit() {
  }
  sendGet(){
    this.http.get("http://localhost:3000/demo/3/4").subscribe((data)=>{//nó giống cb, đợi có dlieu rồi thì mới chạy khứa này

      console.log(data);
    this.tong =data.Total
    })
    console.log("Get Nha")
  }

  xuly(f){
    console.log(f)
   var so1:String=f.form.value.txtSo1
    var so2:String=f.form.value.txtSo2;
    
    this.http.get("http://localhost:3000/demo/"+so1+"/"+so2).subscribe((data)=>{//nó giống cb, đợi có dlieu rồi thì mới chạy khứa này
    console.log(data)
    this.tong=data.Total// Total nỳ là khai báo bên tổng
    console.log(this.tong)
  })
  }

}
