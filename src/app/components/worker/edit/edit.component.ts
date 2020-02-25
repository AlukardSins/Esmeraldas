import { Router, ActivatedRoute } from '@angular/router'
import { Component, OnInit, ViewChild, NgZone } from '@angular/core'
import { COMMA, ENTER } from '@angular/cdk/keycodes'
import { MatChipInputEvent } from '@angular/material/chips'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MatDatepickerInputEvent } from '@angular/material/datepicker'

import { WorkerService } from '../../../shared/api/worker.service'
import { EmeraldService } from '../../../shared/api/emerald.service'

import { Emerald } from '../../../emerald.model'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: [
    './edit.component.css'
  ]
})
export class EditWorkerComponent implements OnInit {
  visible = true
  selectable = true
  removable = true
  addOnBlur = true

  @ViewChild('chipList') chipList
  @ViewChild('resetWorkerForm') myNgForm

  readonly separatorKeysCodes: number[] = [
    ENTER,
    COMMA
  ]
  workerForm: FormGroup

  emeraldsMined: string[] = []

  emeraldArray: Emerald[] = []

  constructor (
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private workerApi: WorkerService,
    private emeraldApi: EmeraldService
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id')

    this.workerApi.GetWorker(id).subscribe((workerData) => {
      console.log(workerData)

      this.emeraldsMined = workerData.emeraldsMined
      for (let i = 0; i < this.emeraldArray.length; i++) {
        this.emeraldApi.GetEmerald(this.emeraldsMined[i]).subscribe((emeraldData) => {
          this.emeraldArray.push(emeraldData)
        })
      }

      this.workerForm = this.fb.group({
        fullName: [
          workerData.fullName,
          [
            Validators.required
          ]
        ],
        dob: [
          workerData.dob,
          [
            Validators.required
          ]
        ],
        gender: [
          workerData.gender,
          [
            Validators.required
          ]
        ],
        emeraldArray: [
          this.emeraldArray
        ]
      })
    })
  }

  ngOnInit () {
    this.updateBookForm()
  }

  updateBookForm () {
    this.workerForm = this.fb.group({
      fullName: [
        '',
        [
          Validators.required
        ]
      ],
      dob: [
        '',
        [
          Validators.required
        ]
      ],
      gender: [
        '',
        [
          Validators.required
        ]
      ],
      emeraldArray: [
        this.emeraldArray
      ]
    })
  }

  updateWorkerForm () {
    console.log(this.workerForm.value)
    var id = this.actRoute.snapshot.paramMap.get('id')
    if (window.confirm('Are you sure you want to update?')) {
      this.workerApi.UpdateWorker(id, this.workerForm.value).subscribe((res) => {
        this.ngZone.run(() => this.router.navigateByUrl('/worker/list'))
      })
    }
  }

  formatDate (event: MatDatepickerInputEvent<Date>) {
    this.workerForm.get('dob').setValue(event.value, {
      onlyself: true
    })
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.workerForm.controls[controlName].hasError(errorName)
  }
}
