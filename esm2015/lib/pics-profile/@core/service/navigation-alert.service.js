import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class NavigationAlertService {
    constructor(router) {
        this.router = router;
        this.showAlertSubject = new Subject();
        this.flag = false;
    }
    setFlag(flag) {
        this.flag = flag;
        this.localstorage.setObj('isThemeUpdated', flag);
    }
    getFlag() {
        return this.flag;
    }
    showAlert() {
        this.showAlertSubject.next();
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1hbGVydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3Byb2ZpbGUvc3JjL2xpYi9waWNzLXByb2ZpbGUvQGNvcmUvc2VydmljZS9uYXZpZ2F0aW9uLWFsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFNL0IsTUFBTSxPQUFPLHNCQUFzQjtJQUtqQyxZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUoxQixxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBRXZDLFNBQUksR0FBWSxLQUFLLENBQUM7SUFFTyxDQUFDO0lBRXRDLE9BQU8sQ0FBQyxJQUFhO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxtQkFBbUI7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7b0hBdEJVLHNCQUFzQjt3SEFBdEIsc0JBQXNCLGNBRnJCLE1BQU07NEZBRVAsc0JBQXNCO2tCQUhsQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IExvY2FsU2VydmljZSB9IGZyb20gJy4vbG9jYWwuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uQWxlcnRTZXJ2aWNlIHtcclxuICBwcml2YXRlIHNob3dBbGVydFN1YmplY3QgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIGxvY2Fsc3RvcmFnZTogTG9jYWxTZXJ2aWNlO1xyXG4gIHByaXZhdGUgZmxhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxyXG5cclxuICBzZXRGbGFnKGZsYWc6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZmxhZyA9IGZsYWc7XHJcbiAgICB0aGlzLmxvY2Fsc3RvcmFnZS5zZXRPYmooJ2lzVGhlbWVVcGRhdGVkJywgZmxhZyk7XHJcbiAgfVxyXG5cclxuICBnZXRGbGFnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZmxhZztcclxuICB9XHJcblxyXG4gIHNob3dBbGVydCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2hvd0FsZXJ0U3ViamVjdC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBnZXRTaG93QWxlcnRTdWJqZWN0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hvd0FsZXJ0U3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcbn1cclxuIl19