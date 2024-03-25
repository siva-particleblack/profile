import { Router } from '@angular/router';
import { LocalService } from './local.service';
import * as i0 from "@angular/core";
export declare class NavigationAlertService {
    private router;
    private showAlertSubject;
    localstorage: LocalService;
    private flag;
    constructor(router: Router);
    setFlag(flag: boolean): void;
    getFlag(): boolean;
    showAlert(): void;
    getShowAlertSubject(): import("rxjs").Observable<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavigationAlertService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NavigationAlertService>;
}
