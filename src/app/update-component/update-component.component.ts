import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { leavemodel } from 'leavemodel';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent implements OnInit{
  public dataid:any;
  public leave: leavemodel = {} as leavemodel

  constructor(private api:ApiService, private activateRoute:ActivatedRoute, private router:Router){}


  ngOnInit(): void{



    this.activateRoute.paramMap.subscribe((param:Params)=>{
    this.dataid  = param['get']('id');
    // console.log(this.dataid)


    })

    this.api.fetchdata(this.dataid).subscribe((data:any)=>{
       this.leave = data;
       console.log(this.leave)
    })

  }
 //update

 updatedata(){
  this.api.update(this.leave,this.dataid).subscribe((data:any)=>{
    alert("Data updated successfully!!!")
    this.router.navigate(['/viewleave'])
  })
 }


}
