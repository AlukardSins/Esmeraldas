import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

//  Worker
import { AddWorkerComponent } from './components/worker/add/add.component'
import { EditWorkerComponent } from './components/worker/edit/edit.component'
import { ListWorkerComponent } from './components/worker/list/list.component'

//  Emerald
import { AddEmeraldComponent } from './components/emerald/add/add.component'
import { EditEmeraldComponent } from './components/emerald/edit/edit.component'
import { ListEmeraldComponent } from './components/emerald/list/list.component'

const routes: Routes = [
  //  Main route
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'emerald/list'
  },

  //  Worker
  { path: 'worker/add', component: AddWorkerComponent },
  { path: 'worker/edit', component: EditWorkerComponent },
  { path: 'worker/list', component: ListWorkerComponent },

  //  Emerald
  { path: 'emerald/add', component: AddWorkerComponent },
  { path: 'emerald/edit', component: EditWorkerComponent },
  { path: 'emerald/list', component: ListWorkerComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
