import { Injectable } from '@angular/core';
import { NavigationStart } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class NavigationAlertService {
    constructor(router) {
        this.router = router;
        this.init();
    }
    init() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (!confirm('Are you sure you want to navigate away?')) {
                    this.router.navigate([this.router.url]); // Navigate back to the current page if the user cancels navigation
                }
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1hbGVydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3Byb2ZpbGUvc3JjL2xpYi9waWNzLXByb2ZpbGUvQGNvcmUvc2VydmljZS9uYXZpZ2F0aW9uLWFsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQVUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUsxRCxNQUFNLE9BQU8sc0JBQXNCO0lBQ2pDLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFTyxJQUFJO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25DLElBQUksS0FBSyxZQUFZLGVBQWUsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx5Q0FBeUMsQ0FBQyxFQUFFO29CQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1FQUFtRTtpQkFDN0c7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7b0hBYlUsc0JBQXNCO3dIQUF0QixzQkFBc0IsY0FGckIsTUFBTTs0RkFFUCxzQkFBc0I7a0JBSGxDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25TdGFydCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uQWxlcnRTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpIHtcclxuICAgICAgICBpZiAoIWNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBuYXZpZ2F0ZSBhd2F5PycpKSB7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5yb3V0ZXIudXJsXSk7IC8vIE5hdmlnYXRlIGJhY2sgdG8gdGhlIGN1cnJlbnQgcGFnZSBpZiB0aGUgdXNlciBjYW5jZWxzIG5hdmlnYXRpb25cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=