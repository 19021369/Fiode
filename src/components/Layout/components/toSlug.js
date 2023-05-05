import React from 'react';

function toSlug(str) {
	// Chuyển hết sang chữ thường
    if(str !== undefined) {
        str = str.toString().toLowerCase();     
     
        // xóa dấu
        str = str
            .normalize('NFD') // chuyển chuỗi sang unicode tổ hợp
            .replace(/[\u0300-\u036f]/g, ''); // xóa các ký tự dấu sau khi tách tổ hợp
     
        // Thay ký tự đĐ
        str = str.replace(/[đĐ]/g, 'd');
        
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
     
        // Xóa khoảng trắng
        str = str.replace(/(\s+)/g, '');
     
        // xóa phần dư - ở đầu & cuối
        str = str.replace(/^-+|-+$/g, '');
        
        str = str.replace('-', '');
        // return
        return str;
    }
}

export default toSlug;