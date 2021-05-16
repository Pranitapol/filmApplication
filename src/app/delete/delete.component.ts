import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DirectorService } from "../director.service";
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private deleteService: DirectorService, private activatedRoute: ActivatedRoute) { }
  data: any;
  name: any;
  filmDetails: any;
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.name = params.get('name');
      this.deleteService.getFilmDetails(this.name).subscribe(result => {
        console.log(result)
        this.filmDetails = result;
      })

    })
  }
  filmObj: any = new FormGroup({

    filmName: new FormControl(''),
  })
  //  data:any;
  onSubmit() {
    console.log(this.filmObj.value);
    this.deleteService.filmDelete(this.filmObj.value.filmName).subscribe(result => {
      console.log(result)

    })
  }

}
