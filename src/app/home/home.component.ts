import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/Service/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trendingMovies:any;
  popularMovies:any;
  thillerMovies:any;

  constructor(private http:HttpClient, config:NgbRatingConfig, private route:Router) {
    config.max = 5;
    config.readonly = true;
  }




  ngOnInit(): void {
    this.getTrendingMovies();
    this.getThillerMovies();
    this.getPopularMovies();
    
  }

  getTrendingMovies() {
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((res) => {
      this.trendingMovies= res;
      console.log(this.trendingMovies);

    })
  }
  getPopularMovies() {
    this.http.get('http://localhost:4200/assets/data/popular-movies.json').subscribe((res) => {
      this.popularMovies= res;
    

    })
  }
  getThillerMovies() {
    this.http.get('http://localhost:4200/assets/data/theatre-movies.json').subscribe((res) => {
      this.thillerMovies= res;

    })
  }






  gotoMovie(type:string, id:string) {
    this.route.navigate(['movies', type, id]);

  }



  

}
