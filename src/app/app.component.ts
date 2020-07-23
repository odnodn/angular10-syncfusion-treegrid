import { Component } from '@angular/core';

import { sampleData } from './datasource';
import { projectData } from './datasource2';
import {PageSettingsModel, SortSettingsModel } from '@syncfusion/ej2-angular-treegrid';
import { textdata, getSparkData } from './datasource3';
import { TreeGridComponent,ResizeService} from '@syncfusion/ej2-angular-treegrid';
import { EmitType } from '@syncfusion/ej2-base';
import { Sparkline, ISparklineLoadEventArgs, SparklineTheme } from '@syncfusion/ej2-charts';
import { RowDataBoundEventArgs, getObject } from '@syncfusion/ej2-grids';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
   providers: [ResizeService ]
})
export class AppComponent  {
  name = 'Angular';

  public data: Object[];
  public data2: Object[];
  public dataSpark: Object[] = [];
  public sparkData: Object[] = [];
  public sortSettings: SortSettingsModel;
  public pageSettings: PageSettingsModel;

    ngOnInit(): void {
        this.data = sampleData;
        this.sortSettings = { columns: [{ field: 'taskName', direction: 'Ascending' }, { field: 'taskID', direction: 'Descending' }]  };
        this.pageSettings = { pageSize: 6 };
        this.data2 = projectData;

        this.dataSpark = textdata;
        this.sparkData = getSparkData('line' + getObject('EmployeeID',textdata[0]));
    }

        getSparkLine (val: number) {
        return getSparkData('line', val);
    }
}
