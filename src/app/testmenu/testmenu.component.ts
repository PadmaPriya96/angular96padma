import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testmenu',
  templateUrl: './testmenu.component.html',
  styleUrls: ['./testmenu.component.scss']
})
export class TestmenuComponent implements OnInit {

  /**
   * Desc :Menu Array
   */
  public menu : any = [];
  /**
   * Desc : OnInit function
   */
  public ngOnInit(): void  {
    this.menu = ['Home', 'Features', 'Blog', 'Test', 'Request'];
  }

}
