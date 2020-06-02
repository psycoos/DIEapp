import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {
	fromMode: any;
	toMode: any;
	sub: any;	 
	transition: string;//'/assets/'+this.fromMode+"to"+this.toMode+'.wav';


  transitions = ['sleeptowork', 'leisuretosleep', 'sleeptoworkout', 'leisuretowork'];
  constructor(private route: ActivatedRoute, private router: Router) {console.log('4');}


  ngOnInit() {
  	console.log('2');
  	this.sub = this.route.params.subscribe(params => {
	    this.fromMode = 'leisure';//params['fromMode']; 
	    this.toMode = 'work';//params['toMode']; 
		});
		this.transition = '/assets/'+this.fromMode+"to"+this.toMode+'.wav';
	

  }
	
	onEnd() {
  	console.log('1')
  	this.router.navigate(['/home', this.toMode]);
  }

  

}
