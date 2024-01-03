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
import { HttpService } from './pics-profile/@core/service/http.service';
import { ProfileService } from './profile.service';
import { ProfileUpdateService } from './profile-update.service';
import * as i0 from "@angular/core";
export class ProfileSettingsModule {
}
ProfileSettingsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileSettingsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProfileSettingsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileSettingsModule, declarations: [ProfileComponent], imports: [PicsProfileModule], exports: [ProfileComponent] });
ProfileSettingsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileSettingsModule, providers: [ProfileService, AttachmentsService, HttpClient, HttpService, AlertService, AuthService, ConfirmationService, PermissionStore, DataStoreService, ProfileUpdateService], imports: [[
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
                    providers: [ProfileService, AttachmentsService, HttpClient, HttpService, AlertService, AuthService, ConfirmationService, PermissionStore, DataStoreService, ProfileUpdateService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvcHJvZmlsZS9zcmMvbGliL3Byb2ZpbGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDcEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNuRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQWdCaEUsTUFBTSxPQUFPLHFCQUFxQjs7bUhBQXJCLHFCQUFxQjtvSEFBckIscUJBQXFCLGlCQVY5QixnQkFBZ0IsYUFHaEIsaUJBQWlCLGFBR2pCLGdCQUFnQjtvSEFJUCxxQkFBcUIsYUFGckIsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsQ0FBQyxZQU54SztZQUNQLGlCQUFpQjtTQUNsQjs0RkFNVSxxQkFBcUI7a0JBWmpDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGdCQUFnQjtxQkFDakI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGlCQUFpQjtxQkFDbEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjtxQkFDakI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLENBQUM7aUJBQ2xMIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvZmlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQaWNzUHJvZmlsZU1vZHVsZSB9IGZyb20gJy4vcGljcy1wcm9maWxlL3BpY3MtcHJvZmlsZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uU3RvcmUgfSBmcm9tICcuL3BpY3MtcHJvZmlsZS9AY29yZS9wZXJtaXNzaW9ucy9wZXJtaXNzaW9uLnN0b3JlJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXByb2ZpbGUvQGNvcmUvc2VydmljZS9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXR0YWNobWVudHNTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXByb2ZpbGUvQGNvcmUvc2VydmljZS9hdHRhY2htZW50cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL3BpY3MtcHJvZmlsZS9AY29yZS9zZXJ2aWNlL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuL3BpY3MtcHJvZmlsZS9AY29yZS9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXByb2ZpbGUvQGNvcmUvc2VydmljZS9odHRwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJy4vcHJvZmlsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUHJvZmlsZVVwZGF0ZVNlcnZpY2UgfSBmcm9tICcuL3Byb2ZpbGUtdXBkYXRlLnNlcnZpY2UnO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgUHJvZmlsZUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgUGljc1Byb2ZpbGVNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFByb2ZpbGVDb21wb25lbnRcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1Byb2ZpbGVTZXJ2aWNlLCBBdHRhY2htZW50c1NlcnZpY2UsIEh0dHBDbGllbnQsIEh0dHBTZXJ2aWNlLCBBbGVydFNlcnZpY2UsIEF1dGhTZXJ2aWNlLCBDb25maXJtYXRpb25TZXJ2aWNlLCBQZXJtaXNzaW9uU3RvcmUsIERhdGFTdG9yZVNlcnZpY2UsIFByb2ZpbGVVcGRhdGVTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZVNldHRpbmdzTW9kdWxlIHsgfVxyXG4iXX0=