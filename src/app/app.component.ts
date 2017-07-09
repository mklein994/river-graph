import { Component } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  csvFiles: FileList;

  parseRiverLevelsFile(files: File[]): void {
    // console.log(csvFile);
    const reader: FileReader = new FileReader();

    reader.onload = () => {
      this.processFile(reader.result);
    }

    if (files.length !== 0) {
      reader.readAsText(files[0]);
    }
  }

  processFile(data: any): void {
    const riverLevels = d3.csvParse(data);
    console.log(riverLevels.columns);
  }
}
