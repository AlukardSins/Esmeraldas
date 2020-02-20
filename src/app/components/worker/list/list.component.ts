import { Component, ViewChild, OnInit } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { MatSort } from '@angular/material/sort'

import { WorkerService } from '../../../shared/api/worker.service'
import { Worker } from '../../../worker.model'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [
    './list.component.css'
  ]
})
export class ListWorkerComponent implements OnInit {
  WorkerData: any = []
  dataSource: MatTableDataSource<Worker>
  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator
  @ViewChild(MatSort, { static: true })
  sort: MatSort

  displayedColumns: string[] = [
    '_id',
    'fullName',
    'dob',
    'gender',
    'action'
  ]

  ngOnInit (): void {}

  constructor (private workerApi: WorkerService) {
    this.workerApi.GetWorkers().subscribe((res) => {
      this.WorkerData = res
      this.dataSource = new MatTableDataSource<Worker>(this.WorkerData)
      setTimeout(() => {
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
      }, 0)
    })
  }

  deleteWorker (index: number, e) {
    if (window.confirm('Are you sure')) {
      const data = this.dataSource.data
      data.splice(this.paginator.pageIndex * this.paginator.pageSize + index, 1)
      this.dataSource.data = data
      this.workerApi.DeleteWorker(e._id).subscribe()
    }
  }

  applyFilter (event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }
}
