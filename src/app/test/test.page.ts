import { Component, OnInit } from "@angular/core";
import { Test } from "./test.model";
import { TestInfo } from "./test.service";
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: "app-test",
  templateUrl: "test.page.html",
  styleUrls: ["test.page.scss"]
})
export class TestPage implements OnInit {
  tests: Test[];

  constructor(private testInfo: TestInfo, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.tests = this.testInfo.getAllTests();
  }

  onclick(condition) {
  	console.log("condition:");
  	console.log(condition);
  	this.router.navigate(['/first-time'], {queryParams: {testcondition: condition}});
  }

}
