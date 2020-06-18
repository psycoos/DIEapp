import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {
	fromMode: any;
	toMode: any;
	sub: any;	 
  transitions = ['sleeptowork', 'leisuretosleep', 'sleeptoworkout', 'leisuretowork'];
  condition: any;
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ionViewWillEnter() {
  	this.sub = this.route.queryParams.subscribe(params => {
	    this.fromMode = params['fromMode']; 
		  this.toMode = params['toMode']; 
      this.condition = params['testcondition'];
  		console.log(this.toMode); 
  		console.log(this.fromMode);
  		if (this.transitions.indexOf(this.fromMode+"to"+this.toMode) == -1) {
  			this.router.navigate(['/home'], {queryParams: {toMode: this.toMode}});
  		}
	  });
  }

  ngOnInit() {
  }

  onConfirm() {
	  // console.log('1')
	  // console.log(this.toMode)
  	this.router.navigate(['/player'], {queryParams: {toMode: this.toMode, fromMode: this.fromMode, testcondition: this.condition}});
  }

  onDeny() {
	  // console.log('1')
	  // console.log(this.toMode)
  	this.router.navigate(['/home'], {queryParams: {toMode: this.toMode, testcondition: this.condition}});
  }
}
