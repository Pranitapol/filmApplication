import { Component, OnInit } from '@angular/core';

import { DirectorService } from "../director.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {

  constructor(private directorService: DirectorService) { }

  ngOnInit(): void {
  }

  filmObj: any = new FormGroup({
    directorName: new FormControl('', Validators.required),
    directorAge: new FormControl('', Validators.required),
    directorGender: new FormControl('male'),
    directorAwardCount: new FormControl('', Validators.required)
  })

  get directorName() {
    return this.filmObj.get('directorName')
  }

  get directorAge() {
    return this.filmObj.get('directorAge')
  }

  get directorAwardCount() {
    return this.filmObj.get('directorAwardCount')
  }
  data: any;
  onSubmit() {
    console.log(this.filmObj.value);
    this.directorService.directorDetails(this.filmObj.value).subscribe(result => {
      console.log(result)

    })

  }
  directors: any;
//  onGet() {
  //  this.directorService.getDirectorData().subscribe(result => {
    //  console.log(result)
      //this.directors = result;
    //})
 // }
  //onDelete() {
    //this.directorService.filmDelete(this.filmObj.value.directorName).subscribe(result => {
      //console.log(result)
    //})
  //}
}
