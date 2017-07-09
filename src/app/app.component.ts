import { Component } from '@angular/core';
import { RiverLevel } from './river-level';

import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  csvFiles: FileList;

  riverLevels: d3.DSVParsedArray<RiverLevel>;

  private parseRiverLevelsFile(files: File[]): void {
    // console.log(csvFile);
    const reader: FileReader = new FileReader();

    reader.onload = () => {
      this.processFile(reader.result);
      this.createGraph();
    }

    if (files.length !== 0) {
      reader.readAsText(files[0]);
    }
  }

  private processFile(data): void {
    this.riverLevels = d3.csvParse<RiverLevel>(data, (d) => {
      return {
        date: new Date(d['Date']),
        level: +d['Numeric River Level'],
        note: d['Notes']
      }
    });
  }

  createGraph(): void {
    const yScale = d3.scaleLinear();
    const xScale = d3.scaleTime();

    d3.select('.river-levels-graph')
      .selectAll('rect')
      .data(this.riverLevels)
      .enter()
      .attr('width', (d) => xScale(d.date))
      .attr('height', (d) => yScale(d.level))
  }
}
