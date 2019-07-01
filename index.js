/* variables defined here */
//cursor
var cur;
var cursor_property;
//canvas
var ctx;
var can;
var drawing;
var gradient;
var s_x, s_y;
//polygon remains
var remains;
//undo actions
var prevImgData = [];
var prevImgData_id;
const prevIDmax = 30;
var backvalue;
var backcheck;
//slider
var sldr;
//picker
var pkr;
//download
var dbtn;
//txt
var txt;
var txt_face;
var txt_size;
//img
var img;

/* initialize function */
function init_func(){
    //cursor
    cur = document.getElementById("main");
    cursor_property = 0;
    //canvas
    can = document.getElementById("myCanvas");
    ctx = can.getContext("2d");
    drawing = false;
    //slider
    sldr = document.getElementById("mySlider");
    ctx.lineWidth = sldr.value;
    //picker
    pkr = document.getElementById("myPicker");
    //undo array
    prevImgData_id = -1;
    backvalue = -1;
    backcheck = false;
    //remains
    remains = ctx.getImageData(0, 0, can.width, can.height);
    //download btn
    dbtn = document.getElementById("myDownload");
    //txt
    txt = document.getElementById("myTexter");
    //img
    img = new Image();
    img.src = "./image/face.png";
}

/* Choose the size of brush */
function f_ssb(){
    ctx.lineWidth = sldr.value;
}
/* Cursor functions */
function f_click( bsh ){
    if(bsh == 1){//pen
        if(cursor_property == 1){
            cur.style.cursor = "default";
            cursor_property = 0;
        }
        else{
            cur.style.cursor = "url('./image/pen.png'), auto";
            cursor_property = 1;
        }
    }
    else if(bsh == 2){//eraser
        if(cursor_property == 2){
            cur.style.cursor = "default";
            cursor_property = 0;
        }
        else{
            cur.style.cursor = "url('./image/era.png'), auto";
            cursor_property = 2;
        }
    }
    else if(bsh == 3){//rainbow
        if(cursor_property == 3){
            cur.style.cursor = "default";
            cursor_property = 0;
        }
        else{
            cur.style.cursor = "url('./image/rainbow.png'), auto";
            cursor_property = 3;
        }
    }
    else if(bsh == 4){//text
        if(cursor_property == 4){
            cur.style.cursor = "default";
            cursor_property = 0;
        }
        else{
            cur.style.cursor = "url('./image/keyboard.png'), auto";
            cursor_property = 4;
        }
    }
    else if(bsh == 5){//sqaure
        if(cursor_property == 5){
            cur.style.cursor = "default";
            cursor_property = 0;
        }
        else{
            cur.style.cursor = "url('./image/square.png'), auto";
            cursor_property = 5;
        }
    }
    else if(bsh == 6){//circle
        if(cursor_property == 6){
            cur.style.cursor = "default";
            cursor_property = 0;
        }
        else{
            cur.style.cursor = "url('./image/circle.png'), auto";
            cursor_property = 6;
        }
    }
    else if(bsh == 7){//triangle
        if(cursor_property == 7){
            cur.style.cursor = "default";
            cursor_property = 0;
        }
        else{
            cur.style.cursor = "url('./image/triangle.png'), auto";
            cursor_property = 7;
        }
    }
    else if(bsh == 8){//line
        if(cursor_property == 8){
            cur.style.cursor = "default";
            cursor_property = 0;
        }
        else{
            cur.style.cursor = "url('./image/line.png'), auto";
            cursor_property = 8;
        }
    }
    else if( bsh == 9){//undo
        if(prevImgData_id >= 0){
            if(backvalue == -1){store_data(); backvalue = prevImgData_id;}
            if(backcheck == false){prevImgData_id--; backcheck = true;}
            ctx.putImageData(prevImgData[prevImgData_id], 0, 0);
            remains = ctx.getImageData(0, 0, can.width, can.height);
            prevImgData_id--;
        }
    }
    else if( bsh== 10 ){//redo
        if(prevImgData_id < backvalue){
            if(backcheck == true){prevImgData_id++; backcheck = false;}
            prevImgData_id++;
            ctx.putImageData(prevImgData[prevImgData_id], 0, 0);
            remains = ctx.getImageData(0, 0, can.width, can.height);
        }
    }
    else if( bsh== 11 ){//download
        dbtn.download = "image.png";
        dbtn.href = can.toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
    }
    else if(bsh == 12){//clear
        ctx.clearRect(0, 0, can.width, can.height);
        remains = ctx.getImageData(0, 0, can.width, can.height);
        prevImgData_id = -1;
        backvalue = -1;
        backcheck = false;
    }
    else if(bsh == 13){//face
        if(cursor_property == 13){
            cur.style.cursor = "default";
            cursor_property = 0;
        }
        else{
            cur.style.cursor = "url('./image/face.png'), auto";
            cursor_property = 13;
        }
    }
    else if(bsh == 14){//image
        cur.style.cursor = "url('./image/face.png'), auto";
        cursor_property = 14;
    }
    else if(bsh == 15){//poopoo pen
        if(cursor_property == 15){
            cur.style.cursor = "default";
            cursor_property = 0;
        }
        else{
            cur.style.cursor = "url('./image/poo.png'), auto";
            cursor_property = 15;
        }
    }
}

/* Canvas functions */
function f_down(event){
    // different cases.
    if(cursor_property == 1 || cursor_property == 2 || cursor_property == 3){
        ctx.beginPath();
        ctx.moveTo(event.offsetX, event.offsetY); //set position.
        drawing = true;
        // store the data.
        store_data();
        get_color();
    }
    else if(cursor_property == 4){
        // store the data.
        store_data();
        get_color();
        ctx.fillText(txt.value,event.offsetX,event.offsetY);
        cursor_property = 0;
        cur.style.cursor = "default";
    }
    else if(cursor_property == 5 || cursor_property == 6 || cursor_property == 7|| cursor_property == 8){
        s_x = event.offsetX;
        s_y = event.offsetY;
        drawing = true;
        // store the data.
        store_data();
        get_color();
    }
    else if(cursor_property == 13){
        // store the data.
        store_data();
        get_color();
        draw_face(event.offsetX, event.offsetY);
    }
    else if(cursor_property == 14){
        //store the data.
        var img = document.getElementById("myImg");
        store_data();
        ctx.drawImage(img, event.offsetX, event.offsetY);
    }
    else if(cursor_property == 15){
        ctx.moveTo(event.offsetX, event.offsetY); //set position.
        drawing = true;
        // store the data.
        store_data();
        get_color();
    }
}
function f_move(event) {
    if(cursor_property == 1 || cursor_property == 2 || cursor_property == 3){
        if(drawing == true){
            ctx.lineTo(event.offsetX, event.offsetY);
            ctx.stroke();
        }
    }
    else if(cursor_property == 5){
        if(drawing == true){
            //clear -> draw
            ctx.clearRect(0,0,can.width,can.height);
            ctx.putImageData(remains, 0, 0);
            ctx.fillRect(s_x, s_y, event.offsetX-s_x, event.offsetY-s_y);
        }
    }
    else if(cursor_property == 6){
        if(drawing == true){
            ctx.clearRect(0,0,can.width,can.height);
            ctx.putImageData(remains, 0, 0);
            ctx.beginPath();
            var radius = ((event.offsetX-s_x)**2+(event.offsetY-s_y)**2)**(1/2);
            ctx.arc(s_x, s_y, radius, getRads(0), getRads(360));
            ctx.stroke();
            ctx.fill();
        }
    }
    else if(cursor_property == 7){
        if(drawing == true){
            ctx.clearRect(0,0,can.width,can.height);
            ctx.putImageData(remains, 0, 0);
            ctx.beginPath();
            let diff = s_y-(event.offsetY);
            ctx.moveTo(s_x, s_y);
            ctx.lineTo(event.offsetX, event.offsetY);
            ctx.lineTo(event.offsetX, s_y+diff);
            ctx.fill();
        }
    }
    else if(cursor_property == 8){
        if(drawing == true){
            ctx.clearRect(0,0,can.width,can.height);
            ctx.putImageData(remains, 0, 0);
            ctx.beginPath();
            ctx.moveTo(s_x, s_y);
            ctx.lineTo(event.offsetX, event.offsetY);
            ctx.stroke();
        }
    }
    else if(cursor_property == 15){
        if(drawing == true){
            ctx.beginPath();
            ctx.arc(event.offsetX, event.offsetY, 20, 0, Math.PI*2, true);
            ctx.closePath();
            ctx.stroke();
        }
    }
}
function f_up(){
    if(cursor_property == 1 || cursor_property == 2 || cursor_property == 3){
        drawing = false;
    }
    else if(cursor_property == 5){
        drawing = false;
        ctx.clearRect(0,0,can.width,can.height);
        ctx.putImageData(remains, 0, 0);
        ctx.fillRect(s_x, s_y, event.offsetX-s_x, event.offsetY-s_y);
    }
    else if(cursor_property == 6){
        drawing = false;
        ctx.clearRect(0,0,can.width,can.height);
        ctx.putImageData(remains, 0, 0);
        ctx.beginPath();
        var radius = ((event.offsetX-s_x)**2+(event.offsetY-s_y)**2)**(1/2);
        ctx.arc(s_x, s_y, radius, getRads(0), getRads(360));
        ctx.stroke();
        ctx.fill();
    }
    else if(cursor_property == 7){
        drawing = false;
        ctx.clearRect(0,0,can.width,can.height);
        ctx.putImageData(remains, 0, 0);
        ctx.beginPath();
        let diff = s_y-(event.offsetY);
        ctx.moveTo(s_x, s_y);
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.lineTo(event.offsetX, s_y+diff);
        ctx.fill();
    }
    else if(cursor_property == 8){
        drawing = false;
        ctx.clearRect(0,0,can.width,can.height);
        ctx.putImageData(remains, 0, 0);
        ctx.beginPath();
        ctx.moveTo(s_x, s_y);
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
    }
    else if(cursor_property == 15){
        drawing = false;
        ctx.beginPath();
        ctx.arc(event.offsetX, event.offsetY, 20, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.stroke();
    }
    remains = ctx.getImageData(0, 0, can.width, can.height);
}
function getRads (degrees) { return (Math.PI * degrees) / 180; }
function store_data(){
    let imgD = ctx.getImageData(0, 0, can.width, can.height);
    backvalue = -1;
    backcheck = false;
    if(prevImgData_id == prevIDmax){   
        for(var i=0;i<prevIDmax;i++){
            prevImgData[i] = prevImgData[i+1];
        }
        prevImgData[prevIDmax] = imgD;
    }
    else{
        prevImgData_id++;
        prevImgData[prevImgData_id] = imgD;
    }
}
function get_color(){
    if(cursor_property == 1 || cursor_property == 4 || cursor_property == 5 || cursor_property == 6 || cursor_property == 7 || cursor_property == 8|| cursor_property == 13){
        ctx.strokeStyle = pkr.value;
        ctx.fillStyle = pkr.value;
    }
    else if(cursor_property == 2){
        ctx.strokeStyle = "white";
    }
    else if(cursor_property == 3){
        gradient = ctx.createLinearGradient(0, 0, 300, 0);
        gradient.addColorStop("0", "magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");
        ctx.strokeStyle = gradient;
    }
    else if(cursor_property == 15){
        gradient = ctx.createLinearGradient(0, 0, 300, 0);
        gradient.addColorStop("0", "magenta");
        gradient.addColorStop("0.5", "brown");
        gradient.addColorStop("1.0", "yellow");
        ctx.strokeStyle = gradient;
    }
}
function f_change_font(sel, val){
    //[0->face, 1->size]
    if(sel == 0) txt_face = val;    
    else txt_size = val;

    ctx.font = "normal normal "+ txt_size + "px " + txt_face;
}
function draw_face(x, y){
    //face
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.stroke();
    //eyes
    ctx.beginPath();
    ctx.moveTo(x-7.5, y-12.5);
    ctx.arc(x-12.5, y-12.5, 5, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(x+17.5, y-12.5);
    ctx.arc(x+12.5, y-12.5, 5, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    //mouth
    ctx.beginPath();
    ctx.moveTo(x, y+12.5);
    ctx.arc(x, y+12.5, 25, 0, Math.PI, false);
    ctx.moveTo(x, y+12.5);
    ctx.lineTo(x-25, y+12.5);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#myImg')
                .attr('src', e.target.result)
                .width(30)
                .height(30);
        };
        reader.readAsDataURL(input.files[0]);
    }
}