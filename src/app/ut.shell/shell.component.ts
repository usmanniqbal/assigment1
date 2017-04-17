import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './shell.component.html'
})
export class ShellComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
