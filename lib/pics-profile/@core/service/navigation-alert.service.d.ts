import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NavigationAlertService {
    private router;
    private navigationSubject;
    constructor(router: Router);
    private init;
    getNavigationSubject(key: boolean): Subject<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavigationAlertService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NavigationAlertService>;
}
