
import {Injectable} from '@angular/core';
import Swal from "sweetalert2";
import {Router} from "@angular/router";
import {HeaderComponent} from "../header/header.component";

@Injectable( {
  providedIn: 'root'
})

export class ShowMessage {
  constructor(private router:Router,
              ) {
  }

  async alertLoginSuccess(){
    await Swal.fire(
      '',
      'Đăng nhập thành công!',
      'success'
    )
  }

  async alertSuccess(){
    await Swal.fire(
      '',
      'Thành công!',
      'success'
    )
  }

  alertLoginFail(){
    Swal.fire({
      icon: 'error',
      title: 'Lỗi',
      text: 'Đăng nhập thất bại, tài khoản của bạn đang bị khóa!',
    })
  }

  alertLoginFailActive(){
    Swal.fire({
      icon: 'error',
      title: 'Lỗi',
      text: 'Tài khoản đang chờ phê duyệt!',
    })
  }

  alertRegisterSuccess(){
    Swal.fire(
      '',
      'Đăng ký thành công! Kiểm tra email của bạn!',
      'success'
    )
  }

  alertShareJob(){
    Swal.fire(
      '',
      'Chia sẻ thành công!',
      'success'
    )
  }

  alertForgotPassword(){
    Swal.fire(
      '',
      'Đổi mật khẩu thành công!',
      'success'
    )
  }

  async alertLogout(){
    await Swal.fire({
      title: 'Bạn chắc chắc muốn đăng xuất?',
      showCancelButton: true,
      confirmButtonText: 'Đăng xuất',
      // denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        localStorage.clear();
        Swal.fire('Đăng xuất thành công!', '', 'success');

      }
    })
  }
}
