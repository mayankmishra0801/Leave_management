import { Component,  OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { leavemodel } from 'leavemodel';

@Component({
  selector: 'app-apply-laeave',
  templateUrl: './apply-laeave.component.html',
  styleUrls: ['./apply-laeave.component.css']
})
export class ApplyLaeaveComponent  implements OnInit{
  
  public leave: leavemodel = {} as leavemodel;

  constructor(private api: ApiService, private route:Router){}

  ngOnInit(): void {
      
  }

  apply(){
    this.api.applyleave(this.leave).subscribe(res=>{
    alert("leave Applied Sucessfully")
    this.route.navigate(['/viewleave'])
    })
  }


}
