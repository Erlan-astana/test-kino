import { Component, OnInit, DoCheck } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClipComponent } from 'src/app/shared/component/clip/clip.component';

@Component({
  selector: 'app-section-trend',
  templateUrl: './section-trend.component.html',
  styleUrls: ['./section-trend.component.scss'],
})
export class SectionTrendComponent implements OnInit, DoCheck {
  genre: string = 'All';
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  ngDoCheck() {
    if (
      this.genre === 'All' &&
      (window.screen.width <= 950 || window.innerWidth <= 950)
    ) {
      this.genre = 'Fiction';
    }
  }

  showClip(url: string) {
    let dialogRef = this.dialog.open(ClipComponent, {
      data: { url },
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  checkGenre(genreList: Array<string>) {
    return genreList.includes(this.genre) || this.genre === 'All';
  }

  setGenre(genre: string) {
    this.genre = genre;
  }
}
