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

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NetworkChange} from '../../proto/github.com/onosproject/onos-config/api/types/change/network/types_pb';
import {DeviceService} from '../../device.service';
import {Change} from '../../proto/github.com/onosproject/onos-config/api/types/change/device/types_pb';
import {StatusUtil} from '../../status.util';
import {formatDate, KeyValue} from '@angular/common';
import {Device} from '../../../onos-topo/proto/github.com/onosproject/onos-topo/api/device/device_pb';

@Component({
    selector: '[onos-network-change]',
    templateUrl: './network-change.component.html',
    styleUrls: ['./network-change.component.css', '../../status.styles.css']
})
export class NetworkChangeComponent implements OnInit {
    @Input() networkChange: NetworkChange;
    @Input() deviceSortCriterion: (a: KeyValue<string, Device>, b: KeyValue<string, Device>) => number
        = DeviceService.deviceSorterForwardAlpha;
    @Output() dcSelected = new EventEmitter<Change>();
    @Input() canRollback: boolean = false;
    @Output() rollbackSelected = new EventEmitter<boolean>();
    created: number;

    constructor(
        public deviceService: DeviceService
    ) {
    }

    ngOnInit() {
        this.created = (new Date()).setTime(this.networkChange.getCreated().getSeconds() * 1000);
    }

    getChangeByName(name: string, version: string): Change {
        return this.networkChange.getChangesList().find((c) => c.getDeviceId() === name && c.getDeviceVersion() === version);
    }

    getStatusClass(): string[] {
        if (this.networkChange.getStatus() === undefined) {
            return ['undefined'];
        }
        return StatusUtil.statusToStrings(this.networkChange.getStatus());
    }

    getTooltip(): string {
        const created = (new Date()).setTime(this.networkChange.getCreated().getSeconds() * 1000);
        const updated = (new Date()).setTime(this.networkChange.getUpdated().getSeconds() * 1000);

        const tooltip = [
            'Created:' + formatDate(created, 'medium', 'en_US'),
            'Updated:' + formatDate(updated, 'medium', 'en_US'),
            'Status: ' + this.getStatusClass().join(','),
            'Index: ' + this.networkChange.getIndex(),
            'Revision: ' + this.networkChange.getRevision()
        ];

        return tooltip.join('\n');
    }

    itemSelected(nwChangeId: string, deviceId: string, version: string) {
        this.dcSelected.emit(this.getChangeByName(deviceId, version));
    }

    rollbackChange() {
        this.rollbackSelected.emit(true);
    }
}
