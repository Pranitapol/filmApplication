import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DirectorService  } from "../director.service";
@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private getService:DirectorService,private router:Router) { }
  directors:any;
  show:boolean=true;
  
  ngOnInit(): void {
  
  
    }

    getDirector(){

      this.getService.getDirectorData().subscribe(result=>{
        console.log(result)
        this.directors=result;
      })
    }
films:any;
    getFilm(){
      this.getService.getfilmData().subscribe(result=>{
        console.log(result);
        this.films=result;
      })
    }
    onDelete(filmName:any){
      //this.getService.filmDelete(filmName).subscribe((result:any)=>{
        //console.log(result)
      //})
      
      this.router.navigate(['delete',filmName])
    }

    onUpdate(directorName:any){
      //this.getService.directorUpdate(directorName).subscribe((result)=>{
        //console.log(result)
        this.router.navigate(['update',directorName])
      //})
    }
  }


