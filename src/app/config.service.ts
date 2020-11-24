import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  activeTab = 'home';

  constructor() { }

  setActiveTab(tabname: string): void {
    this.activeTab = tabname;
  }

}
