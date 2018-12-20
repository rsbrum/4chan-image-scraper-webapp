import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {

  mode = 'side';

  configureSideNav() {

  }

  constructor() {
    this.onResize();
  }

  onResize() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    console.log(width);
    if (width > 959) {
      this.mode = 'side';
    } else {
      this.mode = 'over';
    }
  }

  ngOnInit() {
  }

}

