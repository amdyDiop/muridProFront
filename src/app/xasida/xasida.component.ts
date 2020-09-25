import { Component, OnInit } from '@angular/core';
import {XasidaService} from './xasida.service';

@Component({
  selector: 'app-xasida',
  templateUrl: './xasida.component.html',
  styleUrls: ['./xasida.component.css']
})
export class XasidaComponent implements OnInit {
xasidas: any;
  constructor(public xasidaSrv: XasidaService) { }
  ngOnInit(): void {
    this.xasidaSrv.findAll().subscribe(data => {
      this.xasidas = data;
      console.log(this.xasidas);
    });
  }
}
