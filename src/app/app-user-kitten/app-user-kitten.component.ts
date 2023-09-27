import { Component, OnInit } from '@angular/core';
import { Kitten, KittenService } from '../kitten.service';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './app-user-kitten.component.html',
  styleUrls: ['./app-user-kitten.component.css']
})
export class AppUserKittenComponent implements OnInit {
  userKittens: Kitten[] = [];

  constructor(private kittenService: KittenService) {}

  ngOnInit(): void {
    this.userKittens = this.kittenService.getUserKittens();
  }
}
