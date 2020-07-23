import { Component } from '@angular/core';

import { sampleData } from './datasource';
import { projectData } from './datasource2';
import {PageSettingsModel, SortSettingsModel } from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  public data: Object[];
  public data2: Object[];
  public sortSettings: SortSettingsModel;
  public pageSettings: PageSettingsModel;

    ngOnInit(): void {
        this.data = sampleData;
        this.sortSettings = { columns: [{ field: 'taskName', direction: 'Ascending' }, { field: 'taskID', direction: 'Descending' }]  };
        this.pageSettings = { pageSize: 6 };
        this.data2 = projectData;
    }
}
