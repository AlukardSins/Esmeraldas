import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { EditWorkerComponent } from './edit.component'

describe('EditComponent', () => {
  let component: EditWorkerComponent
  let fixture: ComponentFixture<EditWorkerComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          EditWorkerComponent
        ]
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWorkerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
