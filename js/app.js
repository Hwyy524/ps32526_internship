import { trangsuc_arr } from './data.js';
const hien1TS = (ts) => {
    return `
         <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="${ts.hinh}" alt="Avatar">
                    </div>
                    <div class="flip-card-back">
                        <p>Mã sản phẩm: ${ts.masp}</p>
                        <h4>${ts.ten}</h4>
                        <p>Giá: ${ts.gia} VND</p>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
        `;
};
export const showlisttrangsuc = () => {
    const html_arr = trangsuc_arr.map(hien1TS);
    return html_arr.join("");
};
const hien1loai = (loai) => {
    return `
         <div>
            <h1>${loai.tenLoai}</h1>
         </div>
        `;
};
export const showlistloaisp = async () => {
    let loaisp_arr = await fetch("http://localhost:3000/loai")
        .then(res => res.json())
        .then(data => { return data; });
    let str = '';
    loaisp_arr.forEach(loai => str += hien1loai(loai));
    return str;
};
