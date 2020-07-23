import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { PageService, SortService, FilterService } from '@syncfusion/ej2-angular-treegrid';
import { SparklineAllModule } from '@syncfusion/ej2-angular-charts';


@NgModule({
  imports:      [ BrowserModule, FormsModule, TreeGridModule, SparklineAllModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ PageService, SortService, FilterService, SparklineAllModule ]
})
export class AppModule { }
