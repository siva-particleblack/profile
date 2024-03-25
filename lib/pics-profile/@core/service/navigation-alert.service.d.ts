import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class NavigationAlertService {
    private router;
    private showAlertSubject;
    constructor(router: Router);
    showAlert(flag: boolean): void;
    getShowAlertSubject(): import("rxjs").Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavigationAlertService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NavigationAlertService>;
}
