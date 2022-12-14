import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { combineLatest, map } from 'rxjs';
import { PhotoService } from './data-access/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  photos$ = this.photoService.photos$.pipe(
    map((photos) =>
      photos.map((photo) => ({
        ...photo,
        safeResourceUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
          photo.path
        ),
      }))
    )
  );

  vm$ = combineLatest([
    this.photos$,
    this.photoService.hasTakenPhotoToday$,
  ]).pipe(
    map(([photos, hasTakenPhotoToday]) => ({
      photos,
      hasTakenPhotoToday,
    }))
  );

  constructor(
    protected photoService: PhotoService,
    private sanitizer: DomSanitizer
  ) {}
}
