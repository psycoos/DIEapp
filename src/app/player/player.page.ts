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


  transitions = ['sleeptowork', 'leisuretosleep', 'sleeptoworkout', 'leisuretowork'];
  constructor(private route: ActivatedRoute, private router: Router) {console.log('4');}


  ionViewWillEnter() {
  	console.log('2');
  	this.sub = this.route.queryParams.subscribe(params => {
	    this.fromMode = params['fromMode']; 
		this.toMode = params['toMode']; 
		console.log(this.toMode)
	});
		this.transition = '/assets/'+this.fromMode+"to"+this.toMode+'.wav';
   }
	
	onEnd() {
	  console.log('1')
	  console.log(this.toMode)
  	this.router.navigate(['/home'], {queryParams: {toMode: this.toMode}});
  }

  

}
