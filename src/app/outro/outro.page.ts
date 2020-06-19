import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-outro',
  templateUrl: './outro.page.html',
  styleUrls: ['./outro.page.scss'],
})
export class OutroPage implements OnInit {
	fromMode: any;
	toMode: any;
	sub: any;
	instruction: any;
	transition: string;//'/assets/'+this.fromMode+"to"+this.toMode+'.wav';
	condition: any;
	


  transitions = ['sleeptowork', 'leisuretosleep', 'sleeptoworkout', 'leisuretowork'];
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
	  console.log(this.instruction);
  	this.sub = this.route.queryParams.subscribe(params => {
	    this.fromMode = params['fromMode']; 
		this.toMode = params['toMode']; 
      	this.condition = params['testcondition'];
		console.log(this.condition);
		console.log(this.toMode);
		   
 	if (this.condition == 1 && this.toMode != "sleep"){
		
		this.instruction = "Before you get back in...";
	
	} else if (this.condition == 2 && this.toMode != "sleep") {
		
		this.instruction = "Now, step back outside and when you're ready, press play";
	} else if (this.condition == 3 && this.toMode != "sleep"){
		this.instruction = "Find a door that leads outside of your room and step through it. When you're ready, press play";
	} else if (this.toMode == "sleep"){
		this.instruction = "Go stand in front of a chair or couch and close your eyes...";
	} else {
		this.instruction = "something went wrong";
	}
		

	});
		this.transition = '/assets/'+this.fromMode+"to"+this.toMode+'outro.wav';
   }
   

   

	
  onEnd() {
  	this.router.navigate(['/home'], {queryParams: {toMode: this.toMode, fromMode: this.fromMode, testcondition: this.condition}});
  }
}
