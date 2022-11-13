import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClipComponent } from 'src/app/shared/component/clip/clip.component';

@Component({
  selector: 'app-section-free',
  templateUrl: './section-free.component.html',
  styleUrls: ['./section-free.component.scss'],
})
export class SectionFreeComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  showClip(url: string) {
    let dialogRef = this.dialog.open(ClipComponent, {
      data: { url },
    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }
}
