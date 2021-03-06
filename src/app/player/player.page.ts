import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage {
	fromMode: any;
	toMode: any;
	sub: any;	 
	transition: string;//'/assets/'+this.fromMode+"to"+this.toMode+'.wav';
	condition: any;


  transitions = ['sleeptowork', 'leisuretosleep', 'sleeptoworkout', 'leisuretowork'];
  constructor(private route: ActivatedRoute, private router: Router) {}


  ngOnInit() {
  }
  
  ionViewWillEnter() {
  	this.sub = this.route.queryParams.subscribe(params => {
	    this.fromMode = params['fromMode']; 
		this.toMode = params['toMode']; 
      	this.condition = params['testcondition'];
	});
		this.transition = '/assets/'+this.fromMode+"to"+this.toMode+'.wav';
   }
	
  onEnd() {
  	this.router.navigate(['/outro'], {queryParams: {toMode: this.toMode, fromMode: this.fromMode, testcondition: this.condition}});
  }

}


