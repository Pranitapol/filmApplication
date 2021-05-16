import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,AbstractControl } from "@angular/forms";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DirectorService } from "../director.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private updateService:DirectorService,private activatedRoute:ActivatedRoute) { }
name:any;
directorDetails:any=[];

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.name=params.get('name');
this.updateService.getDirectorDetails(this.name).subscribe(result=>{
  console.log(result)
  this.directorDetails=result;
})
  
    })
  }
  filmObj:any=new FormGroup({
//    directorName:new FormControl(this.directorDetails.directorName),
    directorAge:new FormControl('',Validators.required),
  //  directorGender:new FormControl(this.directorDetails.directorGender),
    directorAwardCount:new FormControl('',Validators.required)
    })
    //get directorName(){
      //return this.filmObj.get('directorName')
    //}

    get directorAge(){
      return this.filmObj.get('directorAge')
    }
  
   get directorAwardCount(){
  return this.filmObj.get('directorAwardCount')
  }
data:any;
 onSubmit(){
  console.log(this.filmObj.value);
  this.updateService.directorUpdate(this.name,this.filmObj.value).subscribe(result=>{
    console.log(result)

  })
 }
}
