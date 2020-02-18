import { BrowserModule } from '@angular/platform-browser'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { EmeraldService } from './shared/api/emerald.service'
import { WorkerService } from './shared/api/worker.service'

//  Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AngularMaterialModule } from './material.module'

//  Worker
import { AddWorkerComponent } from './components/worker/add/add.component'
import { EditWorkerComponent } from './components/worker/edit/edit.component'
import { ListWorkerComponent } from './components/worker/list/list.component'

//  Emerald
import { AddEmeraldComponent } from './components/emerald/add/add.component'
import { EditEmeraldComponent } from './components/emerald/edit/edit.component'
import { ListEmeraldComponent } from './components/emerald/list/list.component'





@NgModule({
  declarations: [
    AppComponent,
    AddWorkerComponent,
    EditWorkerComponent,
    ListWorkerComponent,
    AddEmeraldComponent,
    EditEmeraldComponent,
    ListEmeraldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EmeraldService,
    WorkerService
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
