import { Injector, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ProfileService } from '../../profile.service';
import { AlertService } from '../@core/service/alert.service';
import { ThemeService } from '../@core/service/theme.service';
import { AttachmentsService } from '../@core/service/attachments.service';
import { LocalService } from '../@core/service/local.service';
import { AuthService } from '../@core/service/auth.service';
import { RBACINFO } from '../@core/urls/rbac-url.config';
import { DataStoreService } from '../@core/service/data-store.service';
import { ProfileUpdateService } from '../../profile-update.service';
import { Router } from '@angular/router';
import { NavigationAlertService } from '../@core/service/navigation-alert.service';
import * as i0 from "@angular/core";
export declare class ProfileComponent implements OnInit {
    private authService;
    private formBuilder;
    private profileService;
    private attachmentService;
    private _storeservice;
    private confirmationService;
    private profileUpdateService;
    private router;
    private navigationAlertService;
    userForm: FormGroup;
    userid: any;
    thumbnail: string;
    imageData: any;
    uploadedFile: any;
    urlPath: any;
    attachType: any;
    resetPasswordForm: FormGroup;
    alertService: AlertService;
    localstorage: LocalService;
    isValid: boolean;
    socketSubscription: Subscription;
    currentDate: Date;
    themes: any;
    fontSetList: any;
    selectedTheme: any;
    selectedFont: any;
    themeService: ThemeService;
    rocketIcon: string;
    environment: any;
    RBACORG: RBACINFO;
    orgSubs: Subscription;
    orgId: any;
    errors: string[];
    httpService: any;
    nextNavigation: string;
    currentTab: string;
    constructor(injector: Injector, authService: AuthService, formBuilder: FormBuilder, profileService: ProfileService, attachmentService: AttachmentsService, _storeservice: DataStoreService, confirmationService: ConfirmationService, profileUpdateService: ProfileUpdateService, router: Router, navigationAlertService: NavigationAlertService);
    ngOnInit(): void;
    setCurrentTab(tab: string): void;
    setFlag(flag: boolean): void;
    initializeResetPasswordForm(): void;
    initializeForm(): void;
    get resetFormcontrols(): {
        [key: string]: import("@angular/forms").AbstractControl;
    };
    getUserInfo(): void;
    handleFileInput(fileValue: any): void;
    updateprofile(): void;
    updateStyling(): void;
    getUserTheme(): void;
    setTheme(event: any): void;
    setFont(event: any): void;
    setRangeFont(modal: any): void;
    changePassword(): void;
    validateImage(file: any): boolean;
    clearForm(): void;
    onClickRemove(): void;
    cancel(): void;
    removeThumbnail(): void;
    ngOnDestroy(): void;
    fontSlider(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProfileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProfileComponent, "core-profile", never, {}, {}, never, never>;
}
