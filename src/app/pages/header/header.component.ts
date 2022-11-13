import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClipComponent } from 'src/app/shared/component/clip/clip.component';
import { AuthModalComponent } from 'src/app/user/auth-modal/auth-modal.component';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatOption } from '@angular/material/core';

export interface Films {
  name: string;
  nameEn: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  toggleSearch: boolean = false;
  myControl = new FormControl<string | Films>('');
  options: Films[] = [
    { name: 'Дом дракона', nameEn: 'dragon' },
    { name: 'Добыча', nameEn: 'dobuha' },
    { name: 'Дитя тьмы', nameEn: 'ditya_tmy' },
    { name: 'Быстрее пули', nameEn: 'bystreye_puli' },
    { name: 'Миньоны', nameEn: 'minions' },
    { name: 'Несломленный', nameEn: 'neslomlennyy' },
    { name: 'Рубикон', nameEn: 'rubikon' },
    { name: 'Тор: Любовь и гром', nameEn: 'tor' },
    { name: 'Удача', nameEn: 'udacha' },
  ];
  filteredOptions?: Observable<Films[]>;

  constructor(public dialog: MatDialog) {}
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      })
    );
  }

  displayFn(film: Films): string {
    return film && film.name ? film.name : '';
  }

  private _filter(name: string): Films[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  onSelected(matOption: MatOption) {
    this.showClip(matOption.value.nameEn);
  }

  showModal() {
    let dialogRef = this.dialog.open(AuthModalComponent, {});
    dialogRef.afterClosed().subscribe((result) => {});
  }

  showClip(url: string) {
    if (url) {
      let dialogRef = this.dialog.open(ClipComponent, {
        data: { url },
      });
      dialogRef.afterClosed().subscribe((result) => {});
    }
  }
}
