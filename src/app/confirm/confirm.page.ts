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
	instruction1: any;
  transitions = ['sleeptowork', 'leisuretosleep', 'sleeptoworkout', 'leisuretowork'];
  condition: any;
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ionViewWillEnter() {
  	this.sub = this.route.queryParams.subscribe(params => {
	    this.fromMode = params['fromMode']; 
		  this.toMode = params['toMode']; 
      this.condition = params['testcondition'];
  		console.log("toMode:" + this.toMode); 
  		console.log("fromMode: " + this.fromMode);
  		if (this.transitions.indexOf(this.fromMode+"to"+this.toMode) == -1) {
  			this.router.navigate(['/home'], {queryParams: {toMode: this.toMode}});
  		}
		
 	if (this.condition == 1 && this.toMode != "sleep"){
		
		this.instruction1 = "Put your headphones on. Find a door that leads outside of your room and step through it.";
	
	} else if (this.condition == 2 && this.toMode != "sleep") {
		
		this.instruction1 = "Put your headphones on. Find a door that leads outside of your room. Step through it, take a deep breath and step back in.";
	} else if (this.condition == 3 && this.toMode != "sleep"){
		this.instruction1 = "Put your headphones on and go stand in the middle of your room.";
	} else if (this.toMode == "sleep"){
		this.instruction1 = "Put your headphones on. Find a door that leads outside of your room and step through it.";
	} else {
		this.instruction1 = "somehting went wrong";
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
