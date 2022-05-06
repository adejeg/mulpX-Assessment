import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from './service/crud.service';
import { DataService } from './service/data.service';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: any;
  stats: any;
  activities: any;
  form: FormGroup;
  submitted = false;

  constructor(public dataService: DataService, private crud: CrudService, private toastr: ToastrService, private fb: FormBuilder){
    this.user = JSON.parse(sessionStorage.getItem('user'));
    if (this.user) {
      this.getActivities();
      this.getStats();
    }
    if (!this.user) {
      this.getUser();
    }
  }
  ngOnInit(): void {
    this.initForm();
  }

  async getUser(){
    try {
      this.user = await this.crud.getData('user');
      sessionStorage.setItem('user', JSON.stringify(this.user))
    } catch (err: any) {
      this.toastr.error(err.error)
    }
  }

  async getStats(){
    try {
      this.stats = await this.crud.getData('transactions/dashboard/' + this.user.userId)
    } catch (err) {
      this.toastr.error(err.error)
    }
  }

  async getActivities(){
    try {
      this.activities = await this.crud.getData('transactions/user/' + this.user.userId)
    } catch (err) {
      this.toastr.error(err.error)
    }
  }

  getValue(key){
    return this.stats[key]
  }

  initForm(){
    this.form = this.fb.group({
      amount: ['', [Validators.required, Validators.min(100)]]
    })
  }

  async submit(){
    this.submitted = true;
    if (this.form.invalid) {
      this.toastr.warning('Minimum value is ₦100');
      this.submitted = false;
    }

    try {
      await this.crud.postData('transactions/', this.form.value)
      this.submitted = false;
      $('#sendModal').modal('hide')
      $('#successModal').modal('show')
      this.form.reset()
    } catch (err) {
      this.form.reset()
      $('#sendModal').modal('hide')
      $('#failedModal').modal('show')
      this.toastr.error(err.error);
      this.submitted = false
    }
  }
}
