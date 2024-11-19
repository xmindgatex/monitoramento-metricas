import { Component, OnInit, OnDestroy } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Chart } from 'chart.js';

interface Metric {
  cpu: number;
  memory: number;
  latency: number;
  timestamp: Date;
}

@Component({
  selector: 'app-metrics-dashboard',
  template: `
    <div class="dashboard-container">
      <div class="metrics-grid">
        <!-- CPU Metric -->
        <div class="metric-card" [ngClass]="{'alert': cpuAlert}">
          <h3>CPU Usage</h3>
          <div class="metric-value">{{currentMetrics.cpu}}%</div>
          <canvas #cpuChart></canvas>
        </div>

        <!-- Memory Metric -->
        <div class="metric-card" [ngClass]="{'alert': memoryAlert}">
          <h3>Memory Usage</h3>
          <div class="metric-value">{{currentMetrics.memory}}%</div>
          <canvas #memoryChart></canvas>
        </div>

        <!-- Latency Metric -->
        <div class="metric-card" [ngClass]="{'alert': latencyAlert}">
          <h3>Latency</h3>
          <div class="metric-value">{{currentMetrics.latency}}ms</div>
          <canvas #latencyChart></canvas>
        </div>
      </div>

      <!-- Alerts Section -->
      <div class="alerts-section">
        <h3>Recent Alerts</h3>
        <div class="alert-list">
          <div *ngFor="let alert of alerts" class="alert-item">
            {{alert.message}} - {{alert.timestamp | date:'medium'}}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 20px;
      background: #f5f5f5;
    }

    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      margin-bottom: 20px;
    }

    .metric-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .metric-card.alert {
      border: 2px solid #ff4444;
    }

    .metric-value {
      font-size: 24px;
      font-weight: bold;
      margin: 10px 0;
    }

    .alerts-section {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .alert-item {
      padding: 10px;
      border-bottom: 1px solid #eee;
    }
  `]
})
export class MetricsDashboardComponent implements OnInit, OnDestroy {
  private socket: WebSocketSubject<any>;
  currentMetrics: Metric = { cpu: 0, memory: 0, latency: 0, timestamp: new Date() };
  alerts: any[] = [];
  cpuAlert = false;
  memoryAlert = false;
  latencyAlert = false;

  constructor() {
    this.socket = webSocket('ws://localhost:8080/ws');
  }

  ngOnInit() {
    this.socket.subscribe(
      (data) => {
        this.updateMetrics(data);
        this.checkAlerts(data);
      },
      (error) => console.error('WebSocket error:', error)
    );
  }

  ngOnDestroy() {
    this.socket.complete();
  }

  private updateMetrics(data: Metric) {
    this.currentMetrics = data;
    // Update charts here
  }

  private checkAlerts(metrics: Metric) {
    this.cpuAlert = metrics.cpu > 80;
    this.memoryAlert = metrics.memory > 75;
    this.latencyAlert = metrics.latency > 200;

    if (this.cpuAlert || this.memoryAlert || this.latencyAlert) {
      this.addAlert(metrics);
    }
  }

  private addAlert(metrics: Metric) {
    const alert = {
      message: this.createAlertMessage(metrics),
      timestamp: new Date()
    };
    this.alerts.unshift(alert);
    if (this.alerts.length > 10) {
      this.alerts.pop();
    }
  }

  private createAlertMessage(metrics: Metric): string {
    const alerts = [];
    if (metrics.cpu > 80) alerts.push(`CPU usage critical: ${metrics.cpu}%`);
    if (metrics.memory > 75) alerts.push(`Memory usage critical: ${metrics.memory}%`);
    if (metrics.latency > 200) alerts.push(`High latency: ${metrics.latency}ms`);
    return alerts.join(', ');
  }
}