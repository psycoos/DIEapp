import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Test } from '../test.model';
import { TestInfo } from '../test.service';

@Component({
  selector: 'app-test-detail',
  templateUrl: 'test-detail.page.html',
  styleUrls: ['test-detail.page.scss'],
})
export class TestDetailPage implements OnInit{
  loadedTest: Test;
  
  constructor(private route: ActivatedRoute, private router: Router, private testInfo: TestInfo){}

  ngOnInit(){
     this.route.paramMap.subscribe(paramMap => {
       if (!paramMap.has('testTitle')) {
         //redirect
         return;
       }
       const testTitle = paramMap.get('testTitle');
       this.loadedTest = this.testInfo.getTest(testTitle);
     });
  }
}

