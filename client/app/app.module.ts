import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { TasksComponent }  from './components/tasks/tasks.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// A meeting file for all the different components
@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, TasksComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
