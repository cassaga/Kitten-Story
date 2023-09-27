import { Component, OnInit } from '@angular/core';
import { Kitten, KittenService } from '../kitten.service';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './app-list-kitten.component.html',
  styleUrls: ['./app-list-kitten.component.css']
})
export class AppListKittenComponent implements OnInit {
  kittens: Kitten[] = [];

  constructor(private kittenService: KittenService) {}

  ngOnInit(): void {
    this.kittens = this.kittenService.getKittens();
  }

  onAdopt(kitten: Kitten): void {
    this.kittenService.adoptKitten(kitten);
    this.kittens = this.kittenService.getKittens();
  }
}
