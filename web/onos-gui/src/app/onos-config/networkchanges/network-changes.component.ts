/*
 * Copyright 2019-present Open Networking Foundation
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

import {Component, OnInit, SimpleChanges} from '@angular/core';
import {OnosConfigAdminService} from '../proto/onos-config-admin.service';
import {NetChange} from '../proto/github.com/onosproject/onos-config/pkg/northbound/admin/admin_pb';
import {
    FnService, IconService,
    LogService, SortDir, TableAnnots,
    TableBaseImpl, TableFilter,
    WebSocketService
} from 'gui2-fw-lib';
import {ActivatedRoute, Router} from '@angular/router';
import {PendingNetChangeService} from '../pending-net-change.service';
import {PENDING_U} from '../pending-net-change.service';

export interface NwChangeEntry {
    configId: string;
    changeId: string;
}

export interface NwChange {
    name: string;
    created: Date;
    user: string;
    configChanges: NwChangeEntry[];
}

@Component({
    selector: 'onos-network-changes',
    templateUrl: './network-changes.component.html',
    styleUrls: [
        './network-changes.component.css',
        './network-changes.theme.css',
        '../../fw/widget/table.css',
        '../../fw/widget/table.theme.css'
    ]
})
export class NetworkChangesComponent extends TableBaseImpl implements OnInit {

    rollbackTip: string = 'Rollback';
    selectedChange: NwChangeEntry; // The complete row - not just the selId

    // Constants - have to declare a viable to hold a constant so it can be used in HTML (?!?!)
    public PENDING_U = PENDING_U;

    constructor(
        protected fs: FnService,
        protected log: LogService,
        protected as: ActivatedRoute,
        protected router: Router,
        protected wss: WebSocketService,
        protected is: IconService,
        private admin: OnosConfigAdminService,
        private pending: PendingNetChangeService,
    ) {
        super(fs, log, wss, 'nwchange', 'name');

        this.is.loadIconDef('switch');
        this.is.loadIconDef('xClose');

        this.sortParams = {
            firstCol: 'name',
            firstDir: SortDir.asc,
            secondCol: 'user',
            secondDir: SortDir.desc,
        };

        this.tableDataFilter = <TableFilter>{ // This is here until table pipe bug is fixed
            queryStr: '',
            queryBy: 'name', // Default should be $ all fields
        };

        this.annots = <TableAnnots>{
            noRowsMsg: 'No data found'
        };
        console.debug('Constructed NetworkChangesComponent');
    }

    ngOnInit() {
        this.tableData.length = 0;
        this.admin.requestNetworkChanges((netChange: NetChange) => {
            const changes: NwChangeEntry[] = [];
            const changesAsMap = netChange.getChangesList();
            for (const nc of changesAsMap) {
                changes.push(<NwChangeEntry>{
                    configId: nc.getId(),
                    changeId: nc.getHash(),
                });
            }

            const nwChange = <NwChange>{
                name: netChange.getName(),
                created: <unknown>(netChange.getTime() * 1000),
                user: netChange.getUser(),
                configChanges: changes,
            };
            console.debug('NetworkChange response for', netChange.getName(), 'received');
            this.tableData.push(nwChange);
        });
        if (this.pending.hasPendingChange) {
            const pendingChange = <NwChange>{
                name: this.pending.pendingChangeName,
                created: <unknown>Date.now(),
                user: this.pending.pendingChangeUser,
                configChanges: this.pending.pendingChangesMap,
            };
            this.tableData.push(pendingChange);
        }
    }

    navto(path) {
        this.log.debug('navigate to', path);
        if (this.selId) {
            this.router.navigate([path], {queryParams: {devId: this.selId}});
        }
    }

    rollback(selected: string): void {
        if (selected == null || selected === PENDING_U) {
            return;
        }
        console.warn('Rollback for network change not yet implemented');
    }

    discardPending(selected: string): void {
        if (selected !== PENDING_U) {
            return;
        }
        this.pending.deletePendingChange();
        const removed = this.tableData.splice(0, 1);
        this.selId = null;
        console.log('Pending change discarded', removed);
    }

}
