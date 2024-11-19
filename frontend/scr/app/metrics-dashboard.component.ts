// metrics-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { map } from 'rxjs/operators';

interface Metric {
  cpu: number;
  memory: number;
  latency: number;
}

@Component({
  selector: 'app-metrics-dashboard',
  templateUrl: './metrics-dashboard.component.html',
  styleUrls: ['./metrics-dashboard.component.css']
})
export class MetricsDashboardComponent implements OnInit   
 {

  metrics: Metric = { cpu: 0, memory: 0, latency: 0 };

  constructor() { }

  ngOnInit(): void {
    const subject = webSocket('ws://localhost:8080/ws'); // Substitua pela URL do seu backend

    subject.pipe(
      map((msg: any) => msg as Metric)
    ).subscribe(
      (msg) => this.metrics = msg,
      (err) => console.log(err),
      () => console.log('complete')
    );
  }
}