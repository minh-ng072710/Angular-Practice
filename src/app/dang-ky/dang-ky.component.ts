import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.css']
})
export class DangKyComponent implements OnInit {
  hoten:String="Tèo";
   
  constructor() { }

  ngOnInit() {
  }
  gochu(e){
    console.log(e);// event là một object, nó sẽ log ra toàn bộ object của sự kiện đồng thời các thuộc tính, giá trị của form khi khang tương tác vs nó gán về lại cho angular
    this.hoten=e.target.value//từ khách hàng trả giá trị về angular
  }
  xuly(f){
    console.log(f.form.value)

  }

}
