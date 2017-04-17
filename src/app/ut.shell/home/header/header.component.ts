import { Component } from '@angular/core';

import { LocalStorage } from '../../../core/helper/localStorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  public disabled: boolean = false;
  public status: { isopen: boolean } = { isopen: false };

  constructor()
  { }


  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  logout() {
    localStorage.clear();
  }
}
