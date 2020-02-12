import { Component } from "@angular/core";
import { ActivatedRoute,ParamMap } from '@angular/router';//thư viện để lấy tham số trên thanh địa chỉ của thằng B về

@Component({
    selector:"comB",
    templateUrl:"./comB.component.html"
})

export class ComBComponent{
    constructor(private route:ActivatedRoute){//Activate: sẽ quản trị route đang chạy là route nào

    }
    chuoi:string;
    ngOnInit(){
        this.route.paramMap.subscribe((parrams:ParamMap)=>{//parammap sẽ quản trị tất cả các tham số trên thanh địa chỉ để ta linh động trong việc lấy bất kì tham số nào trên thanh địa chỉ xuống 
            // console.log(parrams.get("id"))
            this.chuoi=parrams.get("id")
        })
    }
}