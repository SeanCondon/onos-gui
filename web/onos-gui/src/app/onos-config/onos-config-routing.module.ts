/*
 * Copyright 2018-present Open Networking Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
// import {NetworkChangesComponent} from './networkchanges/network-changes.component';
// import {ConfigViewComponent} from './config-view/config-view.component';
// import {ConfigsListComponent} from './configs-list/configs-list.component';
import {ModelsListComponent} from './models-list/models-list.component';

const routes: Routes = [
    // {
    //     path: 'configview/:configName',
    //     component: ConfigViewComponent
    // },
    // {
    //     path: 'nwchanges',
    //     component: NetworkChangesComponent
    // },
    // {
    //     path: 'configs',
    //     component: ConfigsListComponent
    // },
    {
        path: 'models',
        component: ModelsListComponent
    },
    {
        path: '',
        redirectTo: 'models',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OnosConfigRoutingModule {
}
