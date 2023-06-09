import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from '../api.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];






@Component({
  selector: 'app-view-leave',
  templateUrl: './view-leave.component.html',
  styleUrls: ['./view-leave.component.css']
})
export class ViewLeaveComponent implements OnInit{

  displayedColumns: string[] = ['Employee-id', 'Fromdate', 'Todate', 'Reason','Action'];
  dataSource! :MatTableDataSource<any>;
// MatTableDataSource: CdkTableDataSourceInput<any>;

  constructor(private api: ApiService){}
  ngOnInit():void{

    this.displayleave();

  }
  displayleave(){
    this.api.viewleave().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
      }
    })
  }

  //delete

  delete(id:number){
    this.api.delete(id).subscribe(res=>{
      alert("leave canceled sucessfully")
      this.displayleave();
    })

}
}
