let text = ""
let index = 0
let numb_arr = []

export const number = (numb) =>{
    if (numb == "%"){
        numb_arr[index] = Number(numb_arr[index])/100
        console.log(numb_arr[index])
    }
    else if(numb === "/"||"+"||"-"||"*"){
        // index += 1
        numb_arr[index] = numb
    }
    else{
        console.log(index)
        numb_arr[index] += numb
    }
    console.log(numb_arr[index])
    console.log(numb_arr)
    // console.log(text);
    // if (numb == "="){
    //     console.log(eval(text))
    //     text = ""
    // }
    // else if(numb == "+/-"){
    //     text += "-" + numb
        
    // }
    // else{
    //     text += numb
    // console.log(numb)
    // }  
}
 