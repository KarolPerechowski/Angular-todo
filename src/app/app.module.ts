import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskComponent } from './tasks/task/task.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TasksComponent } from './tasks/tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpModule} from '@angular/http';
import { Mongoose } from ''

const appRoutes: Routes =[
  { path: 'task-list', component:   TaskListComponent },
  { path:'task-adding', component: TaskComponent  },
  { path:'aa', component: PageNotFoundComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    TasksComponent,
    SidebarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
   HttpModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
