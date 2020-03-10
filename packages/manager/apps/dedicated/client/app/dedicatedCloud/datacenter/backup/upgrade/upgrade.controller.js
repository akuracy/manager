import find from 'lodash/find';
import get from 'lodash/get';
import pick from 'lodash/pick';

import { BACKUP_OFFER_NAME } from '../backup.constants';

export default class {
  /* @ngInject */
  constructor($translate, dedicatedCloudDatacenterBackupService) {
    this.$translate = $translate;
    this.dedicatedCloudDatacenterBackupService = dedicatedCloudDatacenterBackupService;

    this.BACKUP_OFFER_NAME = BACKUP_OFFER_NAME;
  }

  $onInit() {
    this.upgrading = false;
    this.dataReplicationConditionAccepted = false;
    if (this.backup && this.backup.backupOffer) {
      this.selectedOffer = find(this.backupOffers, {
        offerName: this.backup.backupOffer,
      });
    }
    if (this.actualOffer) {
      this.currentOffer = find(this.backupOffers, {
        offerName: this.actualOffer,
      });
    }
  }

  upgrade() {
    this.upgrading = true;
    return this.dedicatedCloudDatacenterBackupService
      .updateBackupCapabilities(
        this.productId,
        this.datacenterId,
        pick(this.backup, [
          'backupDurationInReport',
          'backupSizeInReport',
          'diskSizeInReport',
          'fullDayInReport',
          'restorePointInReport',
          'mailAddress',
          'backupOffer',
        ]),
      )
      .then(() =>
        this.goToBackup(
          `${this.$translate.instant(
            'dedicatedCloud_datacenter_backup_upgrade_success_1',
            {
              actualOffer: get(this.BACKUP_OFFER_NAME, this.actualOffer),
              newOffer: get(this.BACKUP_OFFER_NAME, this.backup.backupOffer),
            },
          )} ${this.$translate.instant(
            'dedicatedCloud_datacenter_backup_upgrade_success_2',
            { operationsUrl: this.operationsUrl },
          )}`,
        ),
      )
      .catch((error) => {
        return this.goToBackup(
          this.$translate.instant(
            'dedicatedCloud_datacenter_backup_upgrade_error',
            {
              message: get(error, ['data', 'message'], error.message),
            },
          ),
          'error',
        );
      })
      .finally(() => {
        this.upgrading = false;
      });
  }
}
