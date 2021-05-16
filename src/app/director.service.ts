import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders  } from "@angular/common/http";
import { Observable } from 'rxjs';
import {  catchError, map} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  constructor(private http:HttpClient) { }
  url:any="http://localhost:3000/api/director";
filmUrl:any="http://localhost:3000/api/film";
//headers = new HttpHeaders().set('Content-Type', 'application/json');

//post director data 
  directorDetails(data:any){
return this.http.post(this.url,data)
  }
//post dilm details
  filmDetails(data:any){
    return this.http.post(this.filmUrl,data)
      }
      //get all the film data
      getfilmData():Observable<any>{
        return this.http.get(this.filmUrl)
      }
      //get all director data
      getDirectorData():Observable<any>{
        return this.http.get(this.url)
      }
      /*
      filmDelete(data:any){
        return this.http.delete<any>(`this.filmUrl/${data}`)
      }*/
      //delete film data
     filmDelete(filmName:any):Observable<any>{
        return this.http.delete(`${this.filmUrl}/${filmName}`,filmName)
      }
      //get particular details of director
      getDirectorDetails(directorName:any):Observable<any>{
        return this.http.get(this.url,directorName)
      }
      //get particular details of film
      getFilmDetails(filmName:any):Observable<any>{
        return this.http.get(this.filmUrl,filmName)
      }
      //update director data
      directorUpdate(directorName:any,director:any):Observable<any>{
        return this.http.patch(`${this.url}/${directorName}`,director)
      }
     
}
