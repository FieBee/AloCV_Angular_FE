
import {Injectable} from '@angular/core';
import Swal from "sweetalert2";

@Injectable( {
  providedIn: 'root'
})

export class ShowMessage {
  constructor() {
  }

  alertLoginSuccess(){
    Swal.fire(
      '',
      'Đăng nhập thành công!',
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

  alertRegisterSuccess(){
    Swal.fire(
      '',
      'Đăng ký thành công!',
      'success'
    )
  }
}
