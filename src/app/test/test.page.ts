import { Component, OnInit } from "@angular/core";
import { Test } from "./test.model";
import { TestInfo } from "./test.service";

@Component({
  selector: "app-test",
  templateUrl: "test.page.html",
  styleUrls: ["test.page.scss"]
})
export class TestPage implements OnInit {
  tests: Test[];

  constructor(private testInfo: TestInfo) {}

  ngOnInit() {
    this.tests = this.testInfo.getAllTests();
  }

}
