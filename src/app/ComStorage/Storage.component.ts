import { Component } from "@angular/core";

@Component({
    selector:"storage",
    templateUrl:"./storage.component.html"
})

export class StorageComponent{
    hoten:String="....."
    save(){
        localStorage.setItem("hoten","Gia Minh Nguyễn")
    }
    check(){
        if (localStorage.length > 0) {
         this.hoten=localStorage.getItem("hoten")
        } else {
          this.hoten ='kkk'
          }
    }
}