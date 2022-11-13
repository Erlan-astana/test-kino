import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.scss'],
})
export class ClipComponent implements OnInit {
  url: string = '';

  constructor(
    public dialogRef: MatDialogRef<ClipComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.url = `../../../../assets/video/${data.url}.mp4`;
  }

  ngOnInit(): void {}
}
