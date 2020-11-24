import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header: { heading: string; aboutdescription: string; buttontext: string; buttonlink: string; };

  constructor(public config: ConfigService) { }

  ngOnInit() {
  }


}
