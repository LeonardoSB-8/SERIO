
// var seg = 0
// var min = 0
// var hr = 0

// var intervalo

// function dezena(digito){
//     if(digito<10){
//         return('0' + digito)
//     }else{
//         return(digito)
//     };
// };

// function inicio(){
//     contador()
//      intervalo = setInterval(contador,1000)
// }; 

// function pausa(){
//     clearInterval(intervalo)
// };

// function parada(){
//     clearInterval(intervalo)
//     seg = 0
//     min = 0
//     hr = 0
//     document.getElementById('tempo').innerText='00:00:00'
// };

// function contador(){
//     seg++
//     if(seg==60){
//         min++
//         seg=0
        
//         if(min==60){
//         hr++
//         min=0
//         seg=0
//         };
//     };
    
//     document.getElementById('tempo').innerText= dezena(hr) + ':' + dezena(min) + ':' + dezena(seg)
// };