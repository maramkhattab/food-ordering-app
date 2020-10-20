import { EventEmitter } from '@angular/core';
export class AuthService {
    private isAuthenticated: boolean = false;
    authChanged = new EventEmitter<boolean>();

    getAuthStatus() {
        return this.isAuthenticated.valueOf();
    }
    login() {
        this.isAuthenticated = true;
        this.authChanged.emit(this.isAuthenticated.valueOf())
    }
    logout() {
        this.isAuthenticated = false;
        this.authChanged.emit(this.isAuthenticated.valueOf())
    }
}