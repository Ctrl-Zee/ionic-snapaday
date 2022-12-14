import { Component, OnInit } from '@angular/core';
import { PhotoService } from './home/data-access/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.load();
  }
}
