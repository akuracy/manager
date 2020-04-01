import './matchmedia-ng/matchmedia-ng.config';
import './moment/moment.constant';
import './moment/moment';
import './navbar/index';
import './navbar/navbar.constants';
import './navbar/navbar.service';
import './ng-pluralize/ng-pluralize-html.directive';
import './ng-pluralize/ng-pluralize.directive';
import './notification/notification.component';
import './notification/notification.service';
import './sidebar/sidebar.config';
import './sidebar/sidebar.constants';
import './telecom/fax/sidebar/fax-sidebar.service';
import './telecom/otb/sidebar/over-the-box-sidebar.service';
import './telecom/pack/sidebar/pack-sidebar.service';
import './telecom/sms/sidebar/sms-sidebar.service';
import './telecom/telecom-mediator.service';
import './telecom/telephony/alias/liveCalls/eavesdrop/telecom-telephony-alias-configuration-liveCalls-eavesdrop.controller';
import './telecom/telephony/alias/liveCalls/hangup/telecom-telephony-alias-configuration-liveCalls-hangup.controller';
import './telecom/telephony/alias/liveCalls/intercept/telecom-telephony-alias-configuration-liveCalls-intercept.controller';
import './telecom/telephony/alias/liveCalls/telecom-telephony-alias-configuration-liveCalls.component';
import './telecom/telephony/alias/liveCalls/transfer/telecom-telephony-alias-configuration-liveCalls-transfer.controller';
import './telecom/telephony/alias/members/telecom-telephony-alias-members-add-modal.component';
import './telecom/telephony/alias/members/telecom-telephony-alias-members-add.component';
import './telecom/telephony/alias/members/telecom-telephony-alias-members.component';
import './telecom/telephony/alias/records/telecom-telephony-alias-records.component';
import './telecom/telephony/alias/svaGenerator/telephony-alias-svaGenerator.constant';
import './telecom/telephony/alias/svaGenerator/telephony-alias-svaGenerator.directive';
import './telecom/telephony/associateDevice/telecom-telephony-associate-device.component';
import './telecom/telephony/group/consumption/pie-chart/telephony-group-consumption-pie-chart.controller';
import './telecom/telephony/group/consumption/pie-chart/telephony-group-consumption-pie-chart.directive';
import './telecom/telephony/group/fax/telephony-group-fax.factory';
import './telecom/telephony/group/line/clic2Call/line-click2Call.factory';
import './telecom/telephony/group/line/clic2Call/user/line-click2Call-user.factory';
import './telecom/telephony/group/line/group-line-offers.service';
import './telecom/telephony/group/line/group-line.factory';
import './telecom/telephony/group/line/offer/line-offer.factory';
import './telecom/telephony/group/line/phone/configration/extension/line-phone-configuration-extension.component';
import './telecom/telephony/group/line/phone/configration/line-phone-configuration.component';
import './telecom/telephony/group/line/phone/configration/line-phone-configuration.constant';
import './telecom/telephony/group/line/phone/configration/line-phone-configuration.factory';
import './telecom/telephony/group/line/phone/configration/userInterface/line-phone-configuration-user-interface.component';
import './telecom/telephony/group/line/phone/function/line-phone-function.factory';
import './telecom/telephony/group/line/phone/function/parameter/line-phone-function-parameter-hunting.directive';
import './telecom/telephony/group/line/phone/function/parameter/line-phone-function-parameter-number.directive';
import './telecom/telephony/group/line/phone/function/parameter/line-phone-function-parameter-sibling.directive';
import './telecom/telephony/group/line/phone/function/parameter/line-phone-function-parameter-url.directive';
import './telecom/telephony/group/line/phone/function/parameter/line-phone-function-parameter-voicefax.directive';
import './telecom/telephony/group/line/phone/line-phone.factory';
import './telecom/telephony/group/number/feature/conference/partiticipant/telephony-group-number-feature-conference-participant.factory';
import './telecom/telephony/group/number/feature/conference/telephony-group-number-feature-conference-polling.service';
import './telecom/telephony/group/number/feature/conference/telephony-group-number-feature-conference.component.controller';
import './telecom/telephony/group/number/feature/conference/telephony-group-number-feature-conference.component';
import './telecom/telephony/group/number/feature/conference/telephony-group-number-feature-conference.factory';
import './telecom/telephony/group/number/feature/easyHunting/telephony-group-number-feature-easy-hunting.factory';
import './telecom/telephony/group/number/feature/easyPabx/telephony-group-number-feature-easy-pabx.factory';
import './telecom/telephony/group/number/feature/miniPabx/telephony-group-number-feature-easy-pabx.factory';
import './telecom/telephony/group/number/feature/number-feature.factory';
import './telecom/telephony/group/number/feature/ovhPabx/dialplan/edit/telephony-group-number-feature-ovh-pabx-dialplan-edit.controller';
import './telecom/telephony/group/number/feature/ovhPabx/dialplan/extension/edit/telephony-group-number-feature-ovh-pabx-dialplan-extension-edit.controller';
import './telecom/telephony/group/number/feature/ovhPabx/dialplan/extension/rule/edit/telephony-group-number-feature-ovh-pabx-dialplan-extension-rule-edit.controller';
import './telecom/telephony/group/number/feature/ovhPabx/dialplan/extension/rule/telephony-group-number-feature-ovh-pabx-dialplan-extension-rule.component.controller';
import './telecom/telephony/group/number/feature/ovhPabx/dialplan/extension/rule/telephony-group-number-feature-ovh-pabx-dialplan-extension-rule.component';
import './telecom/telephony/group/number/feature/ovhPabx/dialplan/extension/rule/telephony-group-number-feature-ovh-pabx-dialplan-extension-rule.factory';
import './telecom/telephony/group/number/feature/ovhPabx/dialplan/extension/telephony-group-number-feature-ovh-pabx-dialplan-extension.component.controller';
import './telecom/telephony/group/number/feature/ovhPabx/dialplan/extension/telephony-group-number-feature-ovh-pabx-dialplan-extension.component';
import './telecom/telephony/group/number/feature/ovhPabx/dialplan/extension/telephony-group-number-feature-ovh-pabx-dialplan-extension.factory';
import './telecom/telephony/group/number/feature/ovhPabx/dialplan/telephony-group-number-feature-ovh-pabx-dialplan.component.controller';
import './telecom/telephony/group/number/feature/ovhPabx/dialplan/telephony-group-number-feature-ovh-pabx-dialplan.component';
import './telecom/telephony/group/number/feature/ovhPabx/dialplan/telephony-group-number-feature-ovh-pabx-dialplan.factory';
import './telecom/telephony/group/number/feature/ovhPabx/menu/edit/telephony-group-number-feature-ovh-pabx-menu-edit.controller';
import './telecom/telephony/group/number/feature/ovhPabx/menu/entry/edit/telephony-group-number-feature-ovh-pabx-menu-entry-edit.controller';
import './telecom/telephony/group/number/feature/ovhPabx/menu/entry/telephony-group-number-feature-ovh-pabx-menu-entry.component.controller';
import './telecom/telephony/group/number/feature/ovhPabx/menu/entry/telephony-group-number-feature-ovh-pabx-menu-entry.component';
import './telecom/telephony/group/number/feature/ovhPabx/menu/entry/telephony-group-number-feature-ovh-pabx-menu-entry.factory';
import './telecom/telephony/group/number/feature/ovhPabx/menu/list/telephony-group-number-feature-ovh-pabx-menu-list.component.controller';
import './telecom/telephony/group/number/feature/ovhPabx/menu/list/telephony-group-number-feature-ovh-pabx-menu-list.component';
import './telecom/telephony/group/number/feature/ovhPabx/menu/telephony-group-number-feature-ovh-pabx-menu.component.controller';
import './telecom/telephony/group/number/feature/ovhPabx/menu/telephony-group-number-feature-ovh-pabx-menu.component';
import './telecom/telephony/group/number/feature/ovhPabx/menu/telephony-group-number-feature-ovh-pabx-menu.factory';
import './telecom/telephony/group/number/feature/ovhPabx/sound/list/telephony-group-number-feature-ovh-pabx-sound-list.component.controller';
import './telecom/telephony/group/number/feature/ovhPabx/sound/list/telephony-group-number-feature-ovh-pabx-sound-list.component';
import './telecom/telephony/group/number/feature/ovhPabx/sound/popover-section/telephony-group-number-feature-ovh-pabx-sound-popover-section.component.controller';
import './telecom/telephony/group/number/feature/ovhPabx/sound/popover-section/telephony-group-number-feature-ovh-pabx-sound-popover-section.component';
import './telecom/telephony/group/number/feature/ovhPabx/sound/telephony-group-number-feature-ovh-pabx-sound.factory';
import './telecom/telephony/group/number/feature/ovhPabx/sound/uploader/telephony-group-number-feature-ovh-pabx-sound-uploader.directive.controller';
import './telecom/telephony/group/number/feature/ovhPabx/sound/uploader/telephony-group-number-feature-ovh-pabx-sound-uploader.directive';
import './telecom/telephony/group/number/feature/ovhPabx/telephony-group-number-feature-ovh-pabx.component.controller';
import './telecom/telephony/group/number/feature/ovhPabx/telephony-group-number-feature-ovh-pabx.component';
import './telecom/telephony/group/number/feature/ovhPabx/telephony-group-number-feature-ovh-pabx.factory';
import './telecom/telephony/group/number/feature/ovhPabx/tts/create/telephony-group-number-feature-ovh-pabx-tts-create.component.controller';
import './telecom/telephony/group/number/feature/ovhPabx/tts/create/telephony-group-number-feature-ovh-pabx-tts-create.component';
import './telecom/telephony/group/number/feature/ovhPabx/tts/telephony-group-number-feature-ovh-pabx-tts.factory';
import './telecom/telephony/group/number/feature/redirect/telephony-group-number-feature-redirect.component.controller';
import './telecom/telephony/group/number/feature/redirect/telephony-group-number-feature-redirect.component';
import './telecom/telephony/group/number/feature/redirect/telephony-group-number-feature-redirect.factory';
import './telecom/telephony/group/number/feature/svi/telephony-group-number-feature-svi.component.controller';
import './telecom/telephony/group/number/feature/svi/telephony-group-number-feature-svi.component';
import './telecom/telephony/group/number/feature/svi/telephony-group-number-feature-svi.factory';
import './telecom/telephony/group/number/telephony-group-number.component.controller';
import './telecom/telephony/group/number/telephony-group-number.component';
import './telecom/telephony/group/number/telephony-group-number.constant';
import './telecom/telephony/group/number/telephony-group-number.factory';
import './telecom/telephony/group/telephony-group.factory';
import './telecom/telephony/scheduler/actions/bankHolidays/telephony-scheduler-bank-holidays.controller';
import './telecom/telephony/scheduler/actions/deleteAll/telephony-scheduler-delete-all.controller';
import './telecom/telephony/scheduler/actions/export/telephony-scheduler-export.controller';
import './telecom/telephony/scheduler/actions/import/telephony-scheduler-import.controller';
import './telecom/telephony/scheduler/events/telephony-scheduler-events.component.controller';
import './telecom/telephony/scheduler/events/telephony-scheduler-events.component';
import './telecom/telephony/scheduler/events/telephony-scheduler-events.factory';
import './telecom/telephony/scheduler/filters/telephony-scheduler-filters.component.controller';
import './telecom/telephony/scheduler/filters/telephony-scheduler-filters.component';
import './telecom/telephony/scheduler/params/telephony-scheduler-params.component.controller';
import './telecom/telephony/scheduler/params/telephony-scheduler-params.component';
import './telecom/telephony/scheduler/telephony-scheduler.constant';
import './telecom/telephony/scheduler/telephony-scheduler.directive.controller';
import './telecom/telephony/scheduler/telephony-scheduler.directive';
import './telecom/telephony/scheduler/telephony-scheduler.factory';
import './telecom/telephony/scheduler/telephony-scheduler.service';
import './telecom/telephony/service/choice-popover/telecom-telephony-service-choice-popover.directive.controller';
import './telecom/telephony/service/choice-popover/telecom-telephony-service-choice-popover.directive';
import './telecom/telephony/service/offer/telecom-telephony-service-offer-task.service';
import './telecom/telephony/service/time-condition-configuration/telecom-telephony-service-time-condition-configuration.service';
import './telecom/telephony/sidebar/telephony-sidebar.service';
import './telecom/telephony/telephony-mediator.service';
import './telecom/telephony/telephony-voip-service.service';
import './telecom/telephony/timeCondition/calendar/telephony-time-condition-calendar.directive.controller';
import './telecom/telephony/timeCondition/calendar/telephony-time-condition-calendar.directive';
import './telecom/telephony/timeCondition/condition/edit/telephony-time-condition-condition-edit.controller';
import './telecom/telephony/timeCondition/condition/telephony-time-condition-condition.factory';
import './telecom/telephony/timeCondition/slot/edit/telephony-time-condition-slot-edit.controller';
import './telecom/telephony/timeCondition/slot/telephony-time-condition-slot.component.controller';
import './telecom/telephony/timeCondition/slot/telephony-time-condition-slot.component';
import './telecom/telephony/timeCondition/slot/telephony-time-condition-slot.factory';
import './telecom/telephony/timeCondition/telephony-time-condition.constant';
import './telecom/telephony/timeCondition/telephony-time-condition.factory';
import './telecom/telephony/timeCondition/telephony-time-condition.service';