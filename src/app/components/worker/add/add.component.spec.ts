import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AddWorkerComponent } from './add.component'

describe('AddComponent', () => {
  let component: AddWorkerComponent
  let fixture: ComponentFixture<AddWorkerComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          AddWorkerComponent
        ]
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
