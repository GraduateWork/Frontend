import { NgModule } from '@angular/core';

import { SearchContainerRoutingModule } from './search-container-routing.module';
import { SharedModule } from '@shared/shared.module';
import { SearchContainerPage } from './search-container.page';

@NgModule({
  imports: [
    SearchContainerRoutingModule,
    SharedModule,
  ],
  declarations: [
    SearchContainerPage,
  ],
})
export class SearchContainerModule { }
