import { Injectable } from '@angular/core';
import { Test } from './test.model';
import { Router, ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TestInfo {
   private tests: Test[] = [
  {
    title: 'Test 1',
    instructions: 'Please walk out of your door and press start when you are outside'
  },
  {
    title: 'Test 2',
    instructions: 'Please stand up and press the start button'
  },
  {
    title: 'Test 3',
    instructions: 'Please walk out of your door, take a moment and walk back in. Press start when you are inside'
  }
  ];

  constructor(private route: ActivatedRoute, private router: Router){}

  getAllTests(){
    return [...this.tests];
  }

  getTest(testTitle: string){
    return {...this.tests.find(test => {
      return test.title === testTitle;
    })
    };
  }


}