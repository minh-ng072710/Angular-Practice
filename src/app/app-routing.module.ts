import { NgModule } from "@angular/core";
import {Routes,RouterModule, Route} from '@angular/router'//routes thư vienj quản trị tất cả màn hình nó có
import { CommonModule } from '@angular/common';//để cho tất cả thằng ngModel các thứ có thể chạy được 
import { ComAComponent } from './ComA/comA.component';
import { ComBComponent } from './ComB/comB.component';
import { HomeComponent } from './Home/home.component';


const routesConfig:Routes=[
    {path:"a",component:ComAComponent},//path là // cái gì đò phái sai http:localhost:4200/a
    {path:"b/:id",component:ComBComponent},//path là // cái gì đò phái sai http:localhost:4200/a
    {path:"**",component:HomeComponent},//các trường hợp cong lại kh gõ bậy bạ trên thanh địa chị thì com home hiện ra

]
@NgModule({

    declarations:[
        ComAComponent,
        ComBComponent,
        HomeComponent
    ],//nơi khai báo các component mà nó có
    imports:[
        RouterModule.forRoot(routesConfig),
        CommonModule
    ],//khai báo thư viện có trong các com
    exports:[RouterModule]
})// mục đích ghi thằng này là để export xpng nhúng nó ra

export class AppRoutingModule{

}