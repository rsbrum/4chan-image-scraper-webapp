import { Component, OnInit } from '@angular/core';
import { ScraperService } from '../../core/data/scraper.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-scraper',
  templateUrl: './scraper.component.html',
  styleUrls: ['./scraper.component.css']
})
export class ScraperComponent implements OnInit {

  url: any;
  a: any;
  downloading = false;
  error = false;

  constructor(
    private _scraper: ScraperService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {

  }


  openSnackBar(message: string, action: string) {
    const snackBarRef = this.snackBar.open(message, action, {
      duration: 1000000,
      panelClass: ['snackbar']
    });

    snackBarRef.afterDismissed().subscribe(() => {
      this.a.click();
      window.URL.revokeObjectURL(this.url);
    });
  }


  download(url) {
    this.downloading = true;
    this.error = false;
    this._scraper.downloadImages(url).subscribe(
      res => { this.downloadFile(res); },
      err => { this.error = true; this.downloading = false;}
    );
  }

  downloadFile(data) {
    const blob = new Blob([data],  { type: 'application/zip' });
    this.url = window.URL.createObjectURL(blob);
    this.downloading = false;
    this.a = document.createElement('a');
    document.body.appendChild(this.a);
    this.a.style = 'display: none';
    this.a.href = this.url;
    this.a.download = 'images.zip';
    this.openSnackBar('ZIP is ready', 'Download');
  }

}
