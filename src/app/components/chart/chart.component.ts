import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
declare var Chart: any;
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  lineChart: any;
  ftMonthlyData: any;  
  ftWeeklyData: any;
  currentLineChart = 'weekly'

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    const data = this.dataService.chartData
    this.initiateLineChart(data, this.dataService.weekly);
  }


  initiateLineChart(data:any, labels:any) {

    const canva = <HTMLCanvasElement> document.getElementById('myLineChart');
    const ctx:any = canva.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(0, 165, 188,.3)');   
    gradient.addColorStop(1, 'rgba(0, 165, 188,0)');
    

    this.lineChart = new Chart('myLineChart', {
      type: 'line',
      data: {
        labels, // your labels array
        datasets: [
          {
            borderColor: "#7D5C44",
            color: '#2DBC55',
            borderWidth: 2,
            backgroundColor: '#ffffff00',
            data
          },
        ]
      },
      options: {
        // onClick:this.initiateChartInterativity.bind(this),
        responsive: true,
        scaleFontColor: "#FFFFFF",
        layout:{
        },
        legend: {
          display: false,
          labels: {
            fontColor: "#2DBC55",
          }
        },
        scales: {
          xAxes: [{
            display: false,
            barPercentage: 0.9,
            categoryPercentage: 0.5,
            gridLines: {
              color: "#eeeeee"
            },
          }],
          yAxes: [{
            display: true,
            gridLines: {
              color: "#eeeeee"
            },
          }],
        }
      }
    });

    // }, 200);
  }

  updateLineChart(){
    console.log(this.dataService.chartData)
    if (this.currentLineChart == 'monthly') {
      const data = this.dataService.chartData;
      this.lineChart.data.datasets[0].data = data.slice(12);
      this.lineChart.data.labels = this.dataService.monthly;
    }
    if (this.currentLineChart == 'weekly') {
      this.lineChart.data.datasets[0].data = this.dataService.chartData;
      this.lineChart.data.labels = this.dataService.weekly;
    }
    this.lineChart.update();
  }
}
