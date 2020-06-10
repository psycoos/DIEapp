import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-first-time',
  templateUrl: './first-time.page.html',
  styleUrls: ['./first-time.page.scss'],
})
export class FirstTimePage implements OnInit {

  

  constructor(
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  changePage(img_text) {
    console.log(img_text)
    this.router.navigate(['/home'], {queryParams: {toMode: img_text}}); //params[fromMode: currentMode, toMode: clickedSquare]
  }

}
