//librabry
import {Injectable} from '@angular/core'//chich dlieu tu day vo component
import {HttpClient,HttpHeaders} from'@angular/common/http';//dành cho pthuc get:HttpClient,dành cho post:HttpHeaders

//@ts-check
@Injectable()
//export
export class SanPhamService{
    constructor(private http:HttpClient) {

     }

     SendData(no1,no2){
         //nên viết một hàm cho tất cả xài luôn
         

         //Cấu hình option là nới khi báo cấu trúc của http, coi coi từ thằng này nó nả lên server dưới dạng gì:text,...
    let option={
      
       headers:new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")
      }
      //cấu hình body
      let body=new URLSearchParams();//cấu hình tát cả các biến trc khi gửi lên server
      body.set("so1",no1)//tso1:tên biên, ts2: giá trị
      body.set("so2",no2)
      //lưu ý :có bao nhiêu input có name cần gửi lên server thì có bấy nhiêu cái set này,tham số đầu là tên input, tham số sau là giá trị
      //thực thi(Post lên server)
      return  this.http.post(
        "http://localhost:3000/tinh",
        body.toString(),
        option
      )
      
     }
}