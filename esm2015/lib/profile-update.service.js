// Inside your npm package (ProfileService)
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class ProfileUpdateService {
    constructor() {
        this.profilePictureSubject = new BehaviorSubject('/path/to/default-profile.jpg');
        this.profilePicture$ = this.profilePictureSubject.asObservable();
    }
    updateProfilePicture(newPicturePath) {
        this.profilePictureSubject.next(newPicturePath);
    }
}
ProfileUpdateService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileUpdateService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ProfileUpdateService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileUpdateService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileUpdateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS11cGRhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9wcm9maWxlL3NyYy9saWIvcHJvZmlsZS11cGRhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDOztBQUtuRCxNQUFNLE9BQU8sb0JBQW9CO0lBSGpDO1FBSVUsMEJBQXFCLEdBQUcsSUFBSSxlQUFlLENBQVMsOEJBQThCLENBQUMsQ0FBQztRQUU1RixvQkFBZSxHQUF1QixJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFLENBQUM7S0FLakY7SUFIQyxvQkFBb0IsQ0FBQyxjQUFzQjtRQUN6QyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7O2tIQVBVLG9CQUFvQjtzSEFBcEIsb0JBQW9CLGNBRm5CLE1BQU07NEZBRVAsb0JBQW9CO2tCQUhoQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEluc2lkZSB5b3VyIG5wbSBwYWNrYWdlIChQcm9maWxlU2VydmljZSlcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlVXBkYXRlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBwcm9maWxlUGljdHVyZVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJy9wYXRoL3RvL2RlZmF1bHQtcHJvZmlsZS5qcGcnKTtcclxuXHJcbiAgcHJvZmlsZVBpY3R1cmUkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLnByb2ZpbGVQaWN0dXJlU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgdXBkYXRlUHJvZmlsZVBpY3R1cmUobmV3UGljdHVyZVBhdGg6IHN0cmluZykge1xyXG4gICAgdGhpcy5wcm9maWxlUGljdHVyZVN1YmplY3QubmV4dChuZXdQaWN0dXJlUGF0aCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==