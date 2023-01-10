
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  new: any[] = [];
  data: any
  newData: any;
  campusdata: any;
  constructor(private apiService: ApiService, private http: HttpClient) { }
  drpdata = new FormGroup({
    location: new FormControl(''),
    territory: new FormControl(''),
    campus: new FormControl(''),
  })

  ngOnInit(): void {
    this.apiService.getdata().subscribe((res: any) => {
      this.new = res.locations;
    })
  }
  getLocationId(event: any) {
    console.log(event);
    this.apiService.getLocationId(event.value)
      .subscribe(res => {
        console.log(res)
        this.newData = res.zones;
        console.log(this.newData)
      })
  }

  getCampus(event: any) {
    console.log(event.value);
    this.apiService.getCampus(event.value).subscribe(res => {
      this.campusdata = res.result;
      console.log(this.campusdata);
    })
  }
}
