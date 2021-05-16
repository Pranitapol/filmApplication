import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from "@angular/forms";

import { DirectorService } from "../director.service";
@Component({
  selector: 'app-film-component',
  templateUrl: './film-component.component.html',
  styleUrls: ['./film-component.component.css']
})
export class FilmComponentComponent implements OnInit {

  constructor(private filmService:DirectorService) { }

  ngOnInit(): void {
  }

  filmObj:any=new FormGroup({
    filmName:new FormControl(''),
    filmId:new FormControl(''),
    boxOfficeCollection:new FormControl(''),
    filmRating:new FormControl('')
    })
get filmName(){
  return this.filmObj.get('filmName')
}
get filmId(){
  return this.filmObj.get('filmId')
}
get boxOfficeCollection(){
  return this.filmObj.get('boxOfficeCollection')
}
get filmRating(){
  return this.filmObj.get('filmRating')
}
data:any;
onSubmit(){
  console.log(this.filmObj.value)
  this.filmService.filmDetails(this.filmObj.value).subscribe(result=>{
  console.log(result)
})
this.filmService.getfilmData().subscribe(result=>{
  console.log(result)
  this.data=result;
})
}
    /*
    onDelete(){
      this.filmService.filmDelete(this.filmObj.filmName).subscribe(result=>{
        console.log(result)
      })
    }*/
}
