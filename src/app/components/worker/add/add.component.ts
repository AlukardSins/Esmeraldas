import { Router } from '@angular/router'
import { Component, OnInit, ViewChild, NgZone } from '@angular/core'
import { COMMA, ENTER } from '@angular/cdk/keycodes'
import { WorkerService } from '../../../shared/api/worker.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MatDatepickerInputEvent } from '@angular/material/datepicker'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: [
    './add.component.css'
  ]
})
export class AddWorkerComponent implements OnInit {
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

  ngOnInit () {
    this.submitForm()
  }

  constructor (
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private workerApi: WorkerService
  ) {}

  submitForm () {
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
        ''
      ]
    })
  }

  formatDate (event: MatDatepickerInputEvent<Date>) {
    this.workerForm.get('dob').setValue(event.value, {
      onlyself: true
    })
  }

  submitWorkerForm () {
    if (this.workerForm.valid) {
      this.workerApi.AddWorker(this.workerForm.value).subscribe((res) => {
        this.ngZone.run(() => this.router.navigateByUrl('/worker/list'))
      })
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.workerForm.controls[controlName].hasError(errorName)
  }
}
