import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AddEmeraldComponent } from './add.component'

describe('AddComponent', () => {
  let component: AddEmeraldComponent
  let fixture: ComponentFixture<AddEmeraldComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          AddEmeraldComponent
        ]
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmeraldComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
