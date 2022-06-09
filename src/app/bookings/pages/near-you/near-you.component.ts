import {Component, OnInit, ViewChild} from '@angular/core';
import {Studio} from "../../model/studio";
import {NgForm} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {StudiosService} from "../../services/studios.service";
import * as _ from "lodash";

@Component({
  selector: 'app-near-you',
  templateUrl: './near-you.component.html',
  styleUrls: ['./near-you.component.css']
})
export class StudiosComponent implements OnInit {

  studioData: Studio;
  dataSource: any = [];

  @ViewChild('studentForm', {static: false})
  studioForm!: NgForm;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  isEditMode = false;

  constructor(private studiosService: StudiosService) {
    this.studioData = {} as Studio;

  }

  ngOnInit(): void {
    this.getAllStudios();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAllStudios() {
    this.studiosService.getAll().subscribe((response: any) => {
      this.dataSource = response;
    });
  }

  editItem(element: Studio) {
    this.studioData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.studioForm.resetForm();
  }

  deleteItem(id: number) {
    this.studiosService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((o: Studio) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }

  addStudio() {
    this.studioData.id = 0;
    this.studiosService.create(this.studioData).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
    });
  }

  updateStudio() {
    this.studiosService.update(this.studioData.id, this.studioData).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: Studio) => {
        if (o.id == response.id) {
          o = response;
        }
        return o;
      });
    });

  }

  onSubmit() {
    if (this.studioForm.form.valid) {
      console.log('valid');
      if (this.isEditMode) {
        console.log('about to update');
        this.updateStudio();
      } else {
        console.log('about to create');
        this.addStudio();
      }
      this.cancelEdit();
    } else {
      console.log('Invalid data');
    }
  }

}
