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
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ionViewWillEnter() {
  	// console.log('2');
  	this.sub = this.route.queryParams.subscribe(params => {
	    this.fromMode = params['fromMode']; 
		this.toMode = params['toMode']; 
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
  	this.router.navigate(['/player'], {queryParams: {toMode: this.toMode, fromMode: this.fromMode}});
  }

  onDeny() {
	  // console.log('1')
	  // console.log(this.toMode)
  	this.router.navigate(['/home'], {queryParams: {toMode: this.toMode}});
  }
}
