import { Component } from '@angular/core';


class Content {
  title: string;
  text: string;
}

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.component.html'
})



export class TabsComponent {

  contents: Content[] = [];
  id: number = 0;
  constructor() { }

  addTab() {
    this.id++;
    this.contents.push({
      title: ` New Tab ${this.id} `,
      text: `Some detail text for ${this.id}...`
    });
  }

  removeTab(content: Content) {
    //   this.contents.pop();
    this.contents = this.contents.filter((d) => d !== content);
  }


}
