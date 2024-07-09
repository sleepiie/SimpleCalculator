let text = "";   // สตริงว่างสำหรับเก็บตัวเลขแต่ละส่วน
let index = 0;   // ดัชนีปัจจุบัน
let numb_arr = [''];

export const number = (numb) => {
    console.log(numb);
    if (numb ===  "AC"){
        numb_arr = ['']
    }
    else if (numb === "<-") {
        // ลบตัวอักษรที่สุดท้าย
        if (numb_arr[index]) {
            numb_arr[index] = numb_arr[index].slice(0, -1);
            }
        // ถ้าตำแหน่งปัจจุบันเป็นสตริงว่าง และมีดัชนีมากกว่า 0 ให้เลื่อนดัชนีกลับหนึ่ง
        if (numb_arr[index] === "" && index > 0) {
            index -= 1;
            }
        }
    else if (numb === "+/-") {
    // เปลี่ยนเครื่องหมายของตัวเลข
        if (numb_arr[index]){
        numb_arr[index] = (Number(numb_arr[index]) * -1).toString();
        }
    }
    else if (numb === "%") {
        // คำนวณเปอร์เซ็นต์
        numb_arr[index] = (Number(numb_arr[index]) / 100).toString();
        console.log(numb_arr[index]);
    } else if (numb === "/" || numb === "+" || numb === "-" || numb === "*") {
        // เพิ่มตัวดำเนินการและขยับไปยังดัชนีถัดไป
        index += 1;
        numb_arr[index] = numb;
        index += 1;
        numb_arr[index] = '';
    } else if (numb === "=") {
        // คำนวณผลลัพธ์
        let str1 = numb_arr.join('');
        try {
            let result = eval(str1);
            console.log(result);
            numb_arr = [result.toString()];
            index = 0;
        } catch (e) {
            console.error("Error in calculation:", e);
        }
    } else {
        // เพิ่มตัวเลขลงในตำแหน่งปัจจุบัน
        if (!numb_arr[index]) {
            numb_arr[index] = numb;
        } else {
            numb_arr[index] += numb;
        }
    }

    console.log(numb_arr);
};
