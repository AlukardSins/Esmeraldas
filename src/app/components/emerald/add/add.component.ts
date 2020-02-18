import { Router } from '@angular/router'
import { Component, OnInit, ViewChild, NgZone } from '@angular/core'
import { COMMA, ENTER } from '@angular/cdk/keycodes'
//import { MatChipInputEvent } from '@angular/material/chips'
import { EmeraldService } from '../../../shared/api/emerald.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MatDatepickerInputEvent } from '@angular/material/datepicker'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: [
    './add.component.css'
  ]
})
export class AddEmeraldComponent implements OnInit {
  visible = true
  selectable = true
  removable = true
  addOnBlur = true

  @ViewChild('chipList') chipList
  @ViewChild('resetEsmeraldrForm') myNgForm

  readonly separatorKeysCodes: number[] = [
    ENTER,
    COMMA
  ]

  esmeraldForm: FormGroup

  ngOnInit () {
    this.submitForm()
  }

  constructor (
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private workerApi: EmeraldService
  ) {}

  submitForm () {
    this.esmeraldForm = this.fb.group({
      description: [
        '',
        [
          Validators.required
        ]
      ],
      purity: [
        '',
        [
          Validators.required
        ]
      ],
      weight: [
        ''
      ],
      minedBy: [
        ''
      ],
      minedOn: [
        ''
      ]
    })
  }

  formatDate (event: MatDatepickerInputEvent<Date>) {
    this.esmeraldForm.get('dob').setValue(event.value, {
      onlyself: true
    })
  }

  submitStudentForm () {
    if (this.esmeraldForm.valid) {
      this.workerApi.AddEmerald(this.esmeraldForm.value).subscribe((res) => {
        this.ngZone.run(() => this.router.navigateByUrl('/esmerald/list'))
      })
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.esmeraldForm.controls[controlName].hasError(errorName)
  }
}





















