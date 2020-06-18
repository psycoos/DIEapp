import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-first-time',
  templateUrl: './first-time.page.html',
  styleUrls: ['./first-time.page.scss'],
})
export class FirstTimePage implements OnInit {
  condition: any;
  sub: any;
  

  constructor(
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit() {
  }


  ionViewWillEnter() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.condition = params['testcondition'];
    }); 
  }

  changePage(img_text) {
    console.log(img_text)
    this.router.navigate(['/home'], {queryParams: {toMode: img_text, testcondition: this.condition}}); //params[fromMode: currentMode, toMode: clickedSquare]
  }

}
