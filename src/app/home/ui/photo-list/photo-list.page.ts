import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Photo } from 'src/app/shared/interfaces/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.page.html',
  styleUrls: ['./photo-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoListPage implements OnInit {
  @Input() photos!: Photo[];

  constructor() {}

  trackByFn(index: number, photo: Photo) {
    return photo.name;
  }

  ngOnInit() {}
}
