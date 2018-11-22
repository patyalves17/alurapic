import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { Photo } from "../photo/photo.model";
import { PhotoService } from "../photo/photo.service";

@Injectable({providedIn: 'root'})
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{

    constructor(private photoService:PhotoService){}

    resolve(router:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<Photo[]>{
        const name=router.params.userName;
        // return this.photoService.getUserPhoto(name);
        return this.photoService.getUserPhotoPaginated(name, 1);
    }

}