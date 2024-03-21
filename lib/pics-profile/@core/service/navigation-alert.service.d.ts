import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NavigationAlertService {
    private router;
    private showAlertSubject;
    constructor(router: Router);
    private init;
    getShowAlertSubject(): Subject<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavigationAlertService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NavigationAlertService>;
}
