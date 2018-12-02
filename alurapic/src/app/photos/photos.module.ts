import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhotoFormModule } from "./photo-form/photo-form.module";
import { PhotoListModule } from "./photo-list/photo-list.module";
import { PhotoModule } from "./photo/photo.module";

@NgModule({
    declarations:[],
    exports:[
        
    ],
    imports:[
        CommonModule,
        PhotoFormModule,
        PhotoListModule,
        PhotoModule,
    ],
    providers:[
    ]
})
export class PhotosModule{}