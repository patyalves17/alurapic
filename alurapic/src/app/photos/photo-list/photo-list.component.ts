import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo.model';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit{
 
  photos:Photo[] = [];
  filter:string="";
  
  hasMore:boolean=true;
  currentPage:number=1;
  userName:string='';

  constructor(private activatedRoute:ActivatedRoute,
    private photoService:PhotoService){}

  ngOnInit(): void {
    this.userName=this.activatedRoute.snapshot.params.userName;
    this.photos=this.activatedRoute.snapshot.data.photos;
    // this.debounce
    //   .pipe(debounceTime(300))
    //   .subscribe(filter=>this.filter=filter);
  }

  // ngOnDestroy(): void {
  //   // this.debounce.unsubscribe();
  // }

  load(){
    console.log("load");
    this.photoService.getUserPhotoPaginated(this.userName, ++this.currentPage )
    .subscribe(photos=>{
      this.filter='';
      this.photos=this.photos.concat(photos);
      
      if(photos.length==0 )this.hasMore=false
    })
  }

  // typing($event){
  //   this.filter=$event;
  //   console.log("typing ",$event);
  // }

}
