import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class NavigationAlertService {
    constructor(router) {
        this.router = router;
        this.showAlertSubject = new Subject();
    }
    // Method to trigger the alert message based on the flag value
    showAlert(flag) {
        if (flag) {
            this.showAlertSubject.next(true);
        }
    }
    // Method to get the subject for subscribing to the alert event
    getShowAlertSubject() {
        return this.showAlertSubject.asObservable();
    }
}
NavigationAlertService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NavigationAlertService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
NavigationAlertService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NavigationAlertService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NavigationAlertService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1hbGVydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3Byb2ZpbGUvc3JjL2xpYi9waWNzLXByb2ZpbGUvQGNvcmUvc2VydmljZS9uYXZpZ2F0aW9uLWFsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFLL0IsTUFBTSxPQUFPLHNCQUFzQjtJQUdqQyxZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUYxQixxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO0lBRWIsQ0FBQztJQUV0Qyw4REFBOEQ7SUFDOUQsU0FBUyxDQUFDLElBQWE7UUFDckIsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUVELCtEQUErRDtJQUMvRCxtQkFBbUI7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7b0hBZlUsc0JBQXNCO3dIQUF0QixzQkFBc0IsY0FGckIsTUFBTTs0RkFFUCxzQkFBc0I7a0JBSGxDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25TdGFydCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25BbGVydFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgc2hvd0FsZXJ0U3ViamVjdCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XHJcblxyXG4gIC8vIE1ldGhvZCB0byB0cmlnZ2VyIHRoZSBhbGVydCBtZXNzYWdlIGJhc2VkIG9uIHRoZSBmbGFnIHZhbHVlXHJcbiAgc2hvd0FsZXJ0KGZsYWc6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmIChmbGFnKSB7XHJcbiAgICAgIHRoaXMuc2hvd0FsZXJ0U3ViamVjdC5uZXh0KHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gTWV0aG9kIHRvIGdldCB0aGUgc3ViamVjdCBmb3Igc3Vic2NyaWJpbmcgdG8gdGhlIGFsZXJ0IGV2ZW50XHJcbiAgZ2V0U2hvd0FsZXJ0U3ViamVjdCgpIHtcclxuICAgIHJldHVybiB0aGlzLnNob3dBbGVydFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==