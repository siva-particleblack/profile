import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { PicsProfileModule } from './pics-profile/pics-profile.module';
import { HttpClient } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';
import { PermissionStore } from './pics-profile/@core/permissions/permission.store';
import { AlertService } from './pics-profile/@core/service/alert.service';
import { AttachmentsService } from './pics-profile/@core/service/attachments.service';
import { AuthService } from './pics-profile/@core/service/auth.service';
import { DataStoreService } from './pics-profile/@core/service/data-store.service';
import { ProfileService } from './profile.service';
import { ProfileUpdateService } from './profile-update.service';
import { NavigationAlertService } from './pics-profile/@core/service/navigation-alert.service';
import * as i0 from "@angular/core";
export class ProfileSettingsModule {
}
ProfileSettingsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileSettingsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProfileSettingsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileSettingsModule, declarations: [ProfileComponent], imports: [PicsProfileModule], exports: [ProfileComponent] });
ProfileSettingsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileSettingsModule, providers: [ProfileService, ProfileUpdateService, AttachmentsService, HttpClient, AlertService, AuthService, ConfirmationService, PermissionStore, DataStoreService, NavigationAlertService], imports: [[
            PicsProfileModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileSettingsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ProfileComponent
                    ],
                    imports: [
                        PicsProfileModule
                    ],
                    exports: [
                        ProfileComponent
                    ],
                    providers: [ProfileService, ProfileUpdateService, AttachmentsService, HttpClient, AlertService, AuthService, ConfirmationService, PermissionStore, DataStoreService, NavigationAlertService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvcHJvZmlsZS9zcmMvbGliL3Byb2ZpbGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDcEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNuRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdURBQXVELENBQUM7O0FBZ0IvRixNQUFNLE9BQU8scUJBQXFCOzttSEFBckIscUJBQXFCO29IQUFyQixxQkFBcUIsaUJBVjlCLGdCQUFnQixhQUdoQixpQkFBaUIsYUFHakIsZ0JBQWdCO29IQUlQLHFCQUFxQixhQUZyQixDQUFDLGNBQWMsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsc0JBQXNCLENBQUMsWUFObkw7WUFDUCxpQkFBaUI7U0FDbEI7NEZBTVUscUJBQXFCO2tCQVpqQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixnQkFBZ0I7cUJBQ2pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7cUJBQ2pCO29CQUNELFNBQVMsRUFBRSxDQUFDLGNBQWMsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsc0JBQXNCLENBQUM7aUJBQzdMIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvZmlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQaWNzUHJvZmlsZU1vZHVsZSB9IGZyb20gJy4vcGljcy1wcm9maWxlL3BpY3MtcHJvZmlsZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uU3RvcmUgfSBmcm9tICcuL3BpY3MtcHJvZmlsZS9AY29yZS9wZXJtaXNzaW9ucy9wZXJtaXNzaW9uLnN0b3JlJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXByb2ZpbGUvQGNvcmUvc2VydmljZS9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXR0YWNobWVudHNTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXByb2ZpbGUvQGNvcmUvc2VydmljZS9hdHRhY2htZW50cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL3BpY3MtcHJvZmlsZS9AY29yZS9zZXJ2aWNlL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuL3BpY3MtcHJvZmlsZS9AY29yZS9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IFByb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnLi9wcm9maWxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQcm9maWxlVXBkYXRlU2VydmljZSB9IGZyb20gJy4vcHJvZmlsZS11cGRhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25BbGVydFNlcnZpY2UgfSBmcm9tICcuL3BpY3MtcHJvZmlsZS9AY29yZS9zZXJ2aWNlL25hdmlnYXRpb24tYWxlcnQuc2VydmljZSc7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBQcm9maWxlQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBQaWNzUHJvZmlsZU1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgUHJvZmlsZUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbUHJvZmlsZVNlcnZpY2UsIFByb2ZpbGVVcGRhdGVTZXJ2aWNlLCBBdHRhY2htZW50c1NlcnZpY2UsIEh0dHBDbGllbnQsIEFsZXJ0U2VydmljZSwgQXV0aFNlcnZpY2UsIENvbmZpcm1hdGlvblNlcnZpY2UsIFBlcm1pc3Npb25TdG9yZSwgRGF0YVN0b3JlU2VydmljZSwgTmF2aWdhdGlvbkFsZXJ0U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVTZXR0aW5nc01vZHVsZSB7IH1cclxuIl19