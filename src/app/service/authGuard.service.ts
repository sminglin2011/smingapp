import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (sessionStorage.getItem('use_id') !== null) {
      return true;
    }
    // tslint:disable-next-line:prefer-const
    let url: string = state.url;
    sessionStorage.setItem('redirectUrl', url); // 这里可以忽略，这里是登陆成功后的页面而已，需要则加
    this.router.navigate(['/loginpage']); // 这里是未登录状态下跳转登录页面的地址，自己写自己的地址。
    return false;
  }

}
