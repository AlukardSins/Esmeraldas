import { Router } from '@angular/router'
import { Component, OnInit, ViewChild, NgZone } from '@angular/core'
import { COMMA, ENTER } from '@angular/cdk/keycodes'
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
  @ViewChild('resetEmeraldForm') myNgForm

  readonly separatorKeysCodes: number[] = [
    ENTER,
    COMMA
  ]

  emeraldForm: FormGroup

  ngOnInit () {
    this.submitForm()
  }

  constructor (
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private emeraldApi: EmeraldService
  ) {}

  submitForm () {
    this.emeraldForm = this.fb.group({
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
        '',
        [
          Validators.required
        ]
      ],
      minedBy: [
        ''
      ],
      minedOn: [
        '',
        [
          Validators.required
        ]
      ]
    })
  }

  formatDate (event: MatDatepickerInputEvent<Date>) {
    this.emeraldForm.get('dob').setValue(event.value, {
      onlyself: true
    })
  }

  submitEmeraldForm () {
    if (this.emeraldForm.valid) {
      this.emeraldApi.AddEmerald(this.emeraldForm.value).subscribe((res) => {
        this.ngZone.run(() => this.router.navigateByUrl('/emerald/list'))
      })
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.emeraldForm.controls[controlName].hasError(errorName)
  }
}
