import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  stats = [
    {
      label: 'Available balance',
      key: 'availableBalance'
    },
    {
      label: 'Total sent payment',
      key: 'totalSentPayment'
    },
    {
      label: 'Total received payment',
      key: 'totalReceivedPayment'
    },
    {
      label: 'Data bank balance',
      key: 'dataBankBalance'
    },
    {
      label: 'Total no. of transactions',
      key: 'totalNoOfTransactions'
    },
  ]

  activities = [
    {
      title: 'Salary Payment',
      total: 2000000,
    },
    {
      title: 'Salary Payment',
      total: 2000000,
    },
    {
      title: 'Salary Payment',
      total: 2000000,
    },
    {
      title: 'Salary Payment',
      total: 2000000,
    },
    {
      title: 'Salary Payment',
      total: 2000000,
    },
    {
      title: 'Salary Payment',
      total: 2000000,
    },
  ]

  monthly = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  weekly = ['Wk 01', 'Wk 02', 'Wk 03', 'Wk 04', 'Wk 05', 'Wk 06', 'Wk 07', 'Wk 08', 'Wk 09', 'Wk 10', 'Wk 11', 'Wk 12', 'Wk 13', 'Wk 14', 'Wk 15', 'Wk 16', 'Wk 17', 'Wk 18', 'Wk 19', 'Wk 20', 'Wk 21', 'Wk 22', 'Wk 23', 'Wk 24', 'Wk 25', 'Wk 26', 'Wk 27', 'Wk 28', 'Wk 29', 'Wk 30', 'Wk 31', 'Wk 32', 'Wk 33', 'Wk 34', 'Wk 35', 'Wk 36', 'Wk 37', 'Wk 38', 'Wk 39', 'Wk 40', 'Wk 41', 'Wk 42', 'Wk 43', 'Wk 44', 'Wk 45', 'Wk 46', 'Wk 47', 'Wk 48', 'Wk 49', 'Wk 50', 'Wk 51', 'Wk 52']
  chartData = [52000, 60000, 60000, 71000, 65000, 87000, 42000,77000, 79000, 56000, 90000, 86000, 100000, 54000,66000,76000, 49000, 100000, 54000,66000,76000,66000,76000, 52000, 60000, 60000, 71000, 65000, 87000, 42000,77000, 79000, 56000, 90000, 86000, 100000, 54000,66000,76000, 49000, 100000, 54000,66000,76000, 52000, 60000, 60000, 71000, 65000, 87000, 100000, 54000,66000,76000]
  constructor() { }

}
