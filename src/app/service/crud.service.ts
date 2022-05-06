import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  base_url = environment.server;
  option =  {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  };

  constructor(private http: HttpClient) {
  }

  postData(endpoint: String, data: any): Promise<any> {
    return this.http.post(this.base_url + endpoint, data, this.option).toPromise();
  }

  getData(endpoint: String): Promise<any> {
    return this.http.get(this.base_url + endpoint).toPromise();
  }
  
  sendEmail(endpoint: String, data: any): Promise<any> {
    return this.http.post(this.base_url + endpoint, data).toPromise();
  }
  
  getSingle(endpoint: String, id: String): Promise<any> {
    return this.http.get(this.base_url + endpoint + id, this.option).toPromise();
  }

  updateData(endpoint: String, data: any): Promise<any> {
    return this.http.patch(this.base_url + endpoint, data).toPromise();
  }
}
