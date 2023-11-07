
    
var isstartedsimulation=false;

const First = document.getElementById('First');
const close_btn = document.getElementById('close-btn');
const First_data = document.getElementById('First_Data');

First.addEventListener('click', () => {
    First_data.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    First_data.classList.remove('visible')
});

  
    var left = document.getElementById("First_Data"); 
     left.style.display ="block";

//component
     const Second = document.getElementById('second');
     const Second_Data = document.getElementById('Second_Data')
     const btn_close = document.getElementById('btn_close');;

Second.addEventListener('click', () => {
 Second_Data.classList.toggle('visible')
 document.getElementById('reset1').disabled=true;
 document.getElementById('reset1').style.cursor='not-allowed';
});  

btn_close.addEventListener('click', () => {
 Second_Data.classList.remove('visible')
}); 
var left = document.getElementById("Second_Data"); 
left.style.display ="block";
// Components hide show code here


const check_button = document.getElementById('checkbutton');


const bread_but=document.getElementById("breadbutton");
const supply_but=document.getElementById("supplybutton");
const switch_but=document.getElementById("switchbutton");
const ic_but=document.getElementById("ic2button");
const led_but=document.getElementById("ledbutton");




function breadboard() {
    var x = document.getElementById("board");
    x.style.visibility = "visible";

    bread_but.disabled=true;
    bread_but.style.cursor="not-allowed";

    var instance = new BoardController();

    instance.setJsPlumbInstance(jsPlumb);
    instance.initDefault();
    instance.setCircuitContainer('mid');

    //breadboard definition 
    {
          instance.addEndPoint('brown',4,1, 'board', 'row1', 'r1',  [0, 0, 0, -1, 59,   24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r2',  [0, 0, 0, -1, 72.5, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r4',  [0, 0, 0, -1, 99.5, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r5',  [0, 0, 0, -1, 113,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r3',  [0, 0, 0, -1, 86,   24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r9',  [0, 0, 0, -1, 180.5,24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r11', [0, 0, 0, -1, 221,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r8',  [0, 0, 0, -1, 167,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r6',  [0, 0, 0, -1, 140,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r10', [0, 0, 0, -1, 194,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r14', [0, 0, 0, -1, 261.5,24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r15', [0, 0, 0, -1, 275,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r7',  [0, 0, 0, -1, 153.5,24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r16', [0, 0, 0, -1, 302,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r12', [0, 0, 0, -1, 234.5,24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r19', [0, 0, 0, -1, 342.5,24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r20', [0, 0, 0, -1, 356,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r18', [0, 0, 0, -1, 329,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r21', [0, 0, 0, -1, 383,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r17', [0, 0, 0, -1, 315.5,24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r13', [0, 0, 0, -1, 248,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r22', [0, 0, 0, -1, 398,24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r23', [0, 0, 0, -1, 410,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r24', [0, 0, 0, -1, 423.5,24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r25', [0, 0, 0, -1, 437, 24], 'blue');

        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r27', [0, 0, 0, 1, 72.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r26', [0, 0, 0, 1, 59, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r30', [0, 0, 0, 1, 113, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r28', [0, 0, 0, 1, 86, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r32', [0, 0, 0, 1, 153.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r31', [0, 0, 0, 1, 140, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r29', [0, 0, 0, 1, 99.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r35', [0, 0, 0, 1, 194, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r34', [0, 0, 0, 1, 180.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r36', [0, 0, 0, 1, 221, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r33', [0, 0, 0, 1, 167.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r37', [0, 0, 0, 1, 234.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r38', [0, 0, 0, 1, 248, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r39', [0, 0, 0, 1, 261.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r41', [0, 0, 0, 1, 302, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r40', [0, 0, 0, 1, 275, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r42', [0, 0, 0, 1, 315.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r43', [0, 0, 0, 1, 329, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r45', [0, 0, 0, 1, 356, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r44', [0, 0, 0, 1, 342.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r46', [0, 0, 0, 1, 383, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r47', [0, 0, 0, 1, 396.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r49', [0, 0, 0, 1, 423.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r50', [0, 0, 0, 1, 437, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r48', [0, 0, 0, 1, 410, 38], 'blue');



        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r51', [0, 0, 0, -1, 478, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r52', [0, 0, 0, -1, 491.5, 24],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r55', [0, 0, 0, -1, 532, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r54', [0, 0, 0, -1, 518.5, 24],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r53', [0, 0, 0, -1, 505, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r56', [0, 0, 0, -1, 559, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r57', [0, 0, 0, -1, 572.5, 24],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r58', [0, 0, 0, -1, 586, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r59', [0, 0, 0, -1, 599.5, 24],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r61', [0, 0, 0, -1, 640, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r62', [0, 0, 0, -1, 653.5, 24],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r60', [0, 0, 0, -1, 613, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r63', [0, 0, 0, -1, 667, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r64', [0, 0, 0, -1, 680.5, 24],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r66', [0, 0, 0, -1, 721, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r67', [0, 0, 0, -1, 734.5, 24],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r65', [0, 0, 0, -1, 694, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r68', [0, 0, 0, -1, 748, 24], 'blue');
        instance.addEndPoint('brown',4, 1,'board', 'row3', 'r69', [0, 0, 0, -1, 761.5, 24],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r72', [0, 0, 0, -1, 815.5, 24],'blue');
        instance.addEndPoint('brown',4, 1,'board', 'row3', 'r71', [0, 0, 0, -1, 802, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r70', [0, 0, 0, -1, 775, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r73', [0, 0, 0, -1, 829, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r75', [0, 0, 0, -1, 856, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r74', [0, 0, 0, -1, 842.5, 24],'blue');

          instance.addEndPoint('brown',4,1, 'board', 'row4', 'r77', [0, 0, 0, 1, 491.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r78', [0, 0, 0, 1, 505, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r81', [0, 0, 0, 1, 559, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r76', [0, 0, 0, 0, 478, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r82', [0, 0, 0, 1, 572.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r79', [0, 0, 0, 1, 518.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r80', [0, 0, 0, 1, 532, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r84', [0, 0, 0, 1, 599.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r86', [0, 0, 0, 1, 640, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r85', [0, 0, 0, 1, 613, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r87', [0, 0, 0, 1, 653.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r89', [0, 0, 0, 1, 680.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r88', [0, 0, 0, 1, 667, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r91', [0, 0, 0, 1, 721, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r83', [0, 0, 0, 1, 586, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r90', [0, 0, 0, 1, 694, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r92', [0, 0, 0, 1, 734.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r96', [0, 0, 0, 1, 802, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r95', [0, 0, 0, 1, 775, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r94', [0, 0, 0, 1, 761.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r93', [0, 0, 0, 1, 748, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r97', [0, 0, 0, 1, 815.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r99', [0, 0, 0, 1, 842.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r98', [0, 0, 0, 1, 829, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r100', [0, 0, 0, 1, 856, 38], 'blue');


        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r101', [0, 0, 0, -1, 59.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r102', [0, 0, 0, -1, 73, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r103', [0, 0, 0, -1, 86.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r104', [0, 0, 0, -1, 100, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r105', [0, 0, 0, -1, 113.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r106', [0, 0, 0, -1, 140.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r108', [0, 0, 0, -1, 167.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r110', [0, 0, 0, -1, 194.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r107', [0, 0, 0, -1, 154, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r109', [0, 0, 0, -1, 181, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r111', [0, 0, 0, -1, 221.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r112', [0, 0, 0, -1, 235, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r113', [0, 0, 0, -1, 248.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r115', [0, 0, 0, -1, 275.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r114', [0, 0, 0, -1, 262, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r117', [0, 0, 0, -1, 316, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r118', [0, 0, 0, -1, 329.5, 267],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r116', [0, 0, 0, -1, 302.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r119', [0, 0, 0, -1, 343, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r120', [0, 0, 0, -1, 356.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r121', [0, 0, 0, -1, 383.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r122', [0, 0, 0, -1, 397, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r124', [0, 0, 0, -1, 424, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r123', [0, 0, 0, -1, 410.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r125', [0, 0, 0, -1, 437.5, 267], 'blue');


        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r127', [0, 0, 0, 1, 73, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r126', [0, 0, 0, 1, 59.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r129', [0, 0, 0, 1, 100, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r128', [0, 0, 0, 1, 86.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r130', [0, 0, 0, 1, 113.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r131', [0, 0, 0, 1, 140.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r132', [0, 0, 0, 1, 154, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r133', [0, 0, 0, 1, 167.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r134', [0, 0, 0, 1, 181, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r136', [0, 0, 0, 1, 221.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r135', [0, 0, 0, 1, 194.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r137', [0, 0, 0, 1, 235, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r138', [0, 0, 0, 1, 248.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r140', [0, 0, 0, 1, 275.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r142', [0, 0, 0, 1, 316, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r139', [0, 0, 0, 1, 262, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r141', [0, 0, 0, 1, 302.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r143', [0, 0, 0, 1, 329.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r145', [0, 0, 0, 1, 356.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r144', [0, 0, 0, 1, 343, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r147', [0, 0, 0, 1, 397, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r146', [0, 0, 0, 1, 383.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r148', [0, 0, 0, 1, 410.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r149', [0, 0, 0, 1, 424, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r150', [0, 0, 0, 1, 437.5, 281], 'blue');
 


        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r151', [0, 0, 0, -1, 478, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r152', [0, 0, 0, -1, 491.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r155', [0, 0, 0, -1, 532, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r153', [0, 0, 0, -1, 505, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r157', [0, 0, 0, -1, 572.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r156', [0, 0, 0, -1, 559, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r154', [0, 0, 0, -1, 518.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r160', [0, 0, 0, -1, 613, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r162', [0, 0, 0, -1, 653.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r161', [0, 0, 0, -1, 640, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r159', [0, 0, 0, -1, 599.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r158', [0, 0, 0, -1, 586, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r163', [0, 0, 0, -1, 667, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r164', [0, 0, 0, -1, 680.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r165', [0, 0, 0, -1, 694, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r166', [0, 0, 0, -1, 721, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r168', [0, 0, 0, -1, 748, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r167', [0, 0, 0, -1, 734.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r169', [0, 0, 0, -1, 761.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r170', [0, 0, 0, -1, 775, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r171', [0, 0, 0, -1, 802, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r172', [0, 0, 0, -1, 815.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r174', [0, 0, 0, -1, 842.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r173', [0, 0, 0, -1, 829, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r175', [0, 0, 0, -1, 856, 267], 'blue');

        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r176', [0, 0, 0, 0, 478, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r177', [0, 0, 0, -1, 491.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r180', [0, 0, 0, -1, 532, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r178', [0, 0, 0, -1, 505, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r182', [0, 0, 0, -1, 572.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r181', [0, 0, 0, -1, 559, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r179', [0, 0, 0, -1, 518.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r187', [0, 0, 0, -1, 653.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r183', [0, 0, 0, -1, 586, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r186', [0, 0, 0, -1, 640, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r185', [0, 0, 0, -1, 613, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r184', [0, 0, 0, -1, 599.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r188', [0, 0, 0, -1, 667, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r189', [0, 0, 0, -1, 680.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r191', [0, 0, 0, -1, 721, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r190', [0, 0, 0, -1, 694, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r192', [0, 0, 0, -1, 734.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r193', [0, 0, 0, -1, 748, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r194', [0, 0, 0, -1, 761.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r196', [0, 0, 0, -1, 802, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r195', [0, 0, 0, -1, 775, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r197', [0, 0, 0, -1, 815.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r198', [0, 0, 0, -1, 829, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r199', [0, 0, 0, -1, 842.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r200', [0, 0, 0, -1, 856, 281], 'blue');


 
    }
    disabledButton();
}

function inputs() {
    var x = document.getElementById("inputs");
    x.style.visibility = "visible";

    switch_but.disabled=true;
    switch_but.style.cursor="not-allowed";

    var inputs = new BoardController();
    inputs.setJsPlumbInstance(jsPlumb);
    inputs.setCircuitContainer('mid');
 
    inputs.addEndPoint('purple',5,1, 'inputs', 'input_A', 'input_A1', [0, 0, 0, 0, 619, -100], 'purple');
    inputs.addEndPoint('purple',5,1, 'inputs', 'input_B', 'input_B1', [0, 0, 0, 0, 719, -100], 'purple');
    inputs.addEndPoint('purple',5,1, 'inputs', 'input_C', 'input_B2', [0, 0, 0, 0, 819, -100], 'purple');

    disabledButton();
}


function ic7404() {
    var x = document.getElementById("ic7404");
    x.style.visibility = "visible";
    var y = document.getElementById("ic7404img");
    y.style.visibility = "visible";

    ic_but.disabled=true;
    ic_but.style.cursor="not-allowed";

    var ic7404 = new BoardController();
    ic7404.setJsPlumbInstance(jsPlumb);
    ic7404.setCircuitContainer('mid');

    {
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_VCC', 'ic7404_VCC01', [0, 0, 1, -1, 7, 2], 'red');
        ic7404.addEndPoint('blue',4.2, 1,'ic7404', 'ic7404_VCC', 'ic7404_VCC02', [0, 0, 1, -1, 7, 15.5], 'red');
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_VCC', 'ic7404_VCC03', [0, 0, 1, -1, 7, 29], 'red');
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_VCC', 'ic7404_VCC04', [0, 0, 1, -1, 7, 42.5], 'red');

        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_4A', 'ic7404_4A01', [0, 0, 1, -1, 20.5, 2], 'red');
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_4A', 'ic7404_4A02', [0, 0, 1, -1, 20.5, 15.5], 'red');
        ic7404.addEndPoint('blue',4.2, 1,'ic7404', 'ic7404_4A', 'ic7404_4A03', [0, 0, 1, -1, 20.5, 29], 'red');
        ic7404.addEndPoint('blue',4.2, 1,'ic7404', 'ic7404_4A', 'ic7404_4A04', [0, 0, 1, -1, 20.5, 42.5], 'red');

        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_4B', 'ic7404_4B01', [0, 0, 1, -1, 34, 2], 'red');
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_4B', 'ic7404_4B02', [0, 0, 1, -1, 34, 15.5], 'red');
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_4B', 'ic7404_4B03', [0, 0, 1, -1, 34, 29], 'red');
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_4B', 'ic7404_4B04', [0, 0, 1, -1, 34, 42.5], 'red');

        ic7404.addEndPoint('green',4.2,1, 'ic7404', 'ic7404_4Y', 'ic7404_4Y01', [0, 0, 1, -1, 47.5, 2], 'red');
        ic7404.addEndPoint('green',4.2,1, 'ic7404', 'ic7404_4Y', 'ic7404_4Y02', [0, 0, 1, -1, 47.5, 15.5], 'red');
        ic7404.addEndPoint('green',4.2,1, 'ic7404', 'ic7404_4Y', 'ic7404_4Y03', [0, 0, 1, -1, 47.5, 29], 'red');
        ic7404.addEndPoint('green',4.2,1, 'ic7404', 'ic7404_4Y', 'ic7404_4Y04', [0, 0, 1, -1, 47.5, 42.5], 'red');

        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_3A', 'ic7404_3A01', [0, 0, 1, -1, 61, 2], 'red');
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_3A', 'ic7404_3A02', [0, 0, 1, -1, 61, 15.5], 'red');
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_3A', 'ic7404_3A03', [0, 0, 1, -1, 61, 29], 'red');
        ic7404.addEndPoint('blue',4.2, 1,'ic7404', 'ic7404_3A', 'ic7404_3A04', [0, 0, 1, -1, 61, 42.5], 'red');

        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_3B', 'ic7404_3B01', [0, 0, 1, -1, 74.5, 2], 'red');
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_3B', 'ic7404_3B02', [0, 0, 1, -1, 74.5, 15.5], 'red');
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_3B', 'ic7404_3B03', [0, 0, 1, -1, 74.5, 29], 'red');
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_3B', 'ic7404_3B04', [0, 0, 1, -1, 74.5, 42.5], 'red');

        ic7404.addEndPoint('green',4.2,1, 'ic7404', 'ic7404_3Y', 'ic7404_3Y01', [0, 0, 1, -1, 88, 2], 'red');
        ic7404.addEndPoint('green',4.2,1, 'ic7404', 'ic7404_3Y', 'ic7404_3Y02', [0, 0, 1, -1, 88, 15.5], 'red');
        ic7404.addEndPoint('green',4.2,1, 'ic7404', 'ic7404_3Y', 'ic7404_3Y03', [0, 0, 1, -1, 88, 29], 'red');
        ic7404.addEndPoint('green',4.2,1, 'ic7404', 'ic7404_3Y', 'ic7404_3Y04', [0, 0, 1, -1, 88, 42.5], 'red');

        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_1A', 'ic7404_1A02', [0, 0, 1, -1, 7, 109.5], 'red');
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_1A', 'ic7404_1A03', [0, 0, 1, -1, 7, 123], 'red');
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_1A', 'ic7404_1A04', [0, 0, 1, -1, 7, 136.5], 'red');
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_1A', 'ic7404_1A05', [0, 0, 1, -1, 7, 150], 'red');

        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_1B', 'ic7404_1B02', [0, 0, 1, -1, 20.5, 109.5], 'red');
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_1B', 'ic7404_1B03', [0, 0, 1, -1, 20.5, 123], 'red');
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_1B', 'ic7404_1B04', [0, 0, 1, -1, 20.5, 136.5], 'red');
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_1B', 'ic7404_1B05', [0, 0, 1, -1, 20.5, 150], 'red');

        ic7404.addEndPoint('green',4.2,1, 'ic7404', 'ic7404_1Y', 'ic7404_1Y02', [0, 0, 1, -1, 34, 109.5], 'red');
        ic7404.addEndPoint('green',4.2,1, 'ic7404', 'ic7404_1Y', 'ic7404_1Y03', [0, 0, 1, -1, 34, 123], 'red');
        ic7404.addEndPoint('green',4.2,1, 'ic7404', 'ic7404_1Y', 'ic7404_1Y04', [0, 0, 1, -1, 34, 136.5], 'red');
        ic7404.addEndPoint('green',4.2, 1,'ic7404', 'ic7404_1Y', 'ic7404_1Y05', [0, 0, 1, -1, 34, 150], 'red');

        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_2A', 'ic7404_2A02', [0, 0, 1, -1, 47.5, 109.5], 'red');
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_2A', 'ic7404_2A03', [0, 0, 1, -1, 47.5, 123], 'red');
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_2A', 'ic7404_2A04', [0, 0, 1, -1, 47.5, 136.5], 'red');
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_2A', 'ic7404_2A05', [0, 0, 1, -1, 47.5, 150], 'red');

        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_2B', 'ic7404_2B02', [0, 0, 1, -1, 61, 109.5], 'red');
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_2B', 'ic7404_2B03', [0, 0, 1, -1, 61, 123], 'red');
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_2B', 'ic7404_2B04', [0, 0, 1, -1, 61, 136.5], 'red');
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_2B', 'ic7404_2B05', [0, 0, 1, -1, 61, 150], 'red');

        ic7404.addEndPoint('green',4.2,1, 'ic7404', 'ic7404_2Y', 'ic7404_2Y02', [0, 0, 1, -1, 74.5, 109.5], 'red');
        ic7404.addEndPoint('green',4.2,1, 'ic7404', 'ic7404_2Y', 'ic7404_2Y03', [0, 0, 1, -1, 74.5, 123], 'red');
        ic7404.addEndPoint('green',4.2,1, 'ic7404', 'ic7404_2Y', 'ic7404_2Y04', [0, 0, 1, -1, 74.5, 136.5], 'red');
        ic7404.addEndPoint('green',4.2,1, 'ic7404', 'ic7404_2Y', 'ic7404_2Y05', [0, 0, 1, -1, 74.5, 150], 'red');

        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_GND', 'ic7404_GND02', [0, 0, 1, -1, 88, 109.5], 'red');
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_GND', 'ic7404_GND03', [0, 0, 1, -1, 88, 123], 'red');
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_GND', 'ic7404_GND04', [0, 0, 1, -1, 88, 136.5], 'red');
        ic7404.addEndPoint('blue',4.2,1, 'ic7404', 'ic7404_GND', 'ic7404_GND05', [0, 0, 1, -1, 88, 150], 'red');
    }
    disabledButton();
}

function led1() {
    var x = document.getElementById("led");
    x.style.visibility = "visible";

    led_but.disabled=true;
    led_but.style.cursor="not-allowed";

    var led = new BoardController();
    led.setJsPlumbInstance(jsPlumb);
    led.setCircuitContainer('mid');

    led.addEndPoint('blue',4.2,1, 'led', 'led_C', 'led_C02', [0, 0, 1, -1, 64.5, 97], 'red');
    led.addEndPoint('blue',4.2,1, 'led', 'led_C', 'led_C03', [0, 0, 1, -1, 64.5, 110.5], 'red');
    led.addEndPoint('blue',4.2,1, 'led', 'led_C', 'led_C04', [0, 0, 1, -1, 64.5, 124], 'red');
    led.addEndPoint('blue',4.2,1, 'led', 'led_C', 'led_C05', [0, 0, 1, -1, 64.5, 137.5], 'red');

    led.addEndPoint('blue',4.2,1, 'led', 'led_A', 'led_A02', [0, 0, 1, -1, 52, 97], 'red');
    led.addEndPoint('blue',4.2,1, 'led', 'led_A', 'led_A03', [0, 0, 1, -1, 52, 110.5], 'red');
    led.addEndPoint('blue',4.2,1, 'led', 'led_A', 'led_A04', [0, 0, 1, -1, 52, 124], 'red');
    led.addEndPoint('blue',4.2,1, 'led', 'led_A', 'led_A05', [0, 0, 1, -1, 52, 137.5], 'red');

    disabledButton();
}

function supply() {
    var x = document.getElementById("supply");
    x.style.visibility = "visible";
    
    supply_but.disabled=true;
    supply_but.style.cursor="not-allowed";
    
    var supply = new BoardController();
    supply.setJsPlumbInstance(jsPlumb);
    supply.setCircuitContainer('mid');
 

    supply.addEndPoint('red',9,1, 'supply', 'VCC', 'VCC', [0, 0, 0,0, 58, 62], 'blue');
    supply.addEndPoint('black',9,1, 'supply', 'GND', 'GND', [0, 0, 0, 0, 113, 62], 'red');
    disabledButton();
}

function disabledButton()
{

  if(window.getComputedStyle(document.getElementById('board')).visibility === "visible" && window.getComputedStyle(document.getElementById('led')).visibility === "visible" && 
  window.getComputedStyle(document.getElementById('ic7404')).visibility === "visible" && window.getComputedStyle(document.getElementById('supply')).visibility === "visible" && 
  window.getComputedStyle(document.getElementById('input_A')).visibility === "visible"&& window.getComputedStyle(document.getElementById('input_B')).visibility === "visible" && 
  window.getComputedStyle(document.getElementById('input_C')).visibility === "visible")
  {
  check_button.disabled=false;

   document.getElementById('second').disabled=true;
   document.getElementById("second").style.cursor="not-allowed"; 

  }
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it


function check1()                     //CHECK IF THE TABLE FILLED IS RIGHT OR NOT//
            {
                       
                var a=document.getElementById("cell1");
                var b=document.getElementById("cell2");
                var c=document.getElementById("cell3");
                var d=document.getElementById("cell4");
                var e=document.getElementById("cell5");
                var f=document.getElementById("cell6");
                var g=document.getElementById("cell7");
                var h=document.getElementById("cell8");
           
                
    
  if(h.value=="1"  && g.value=="0"  && f.value=="0"  && e.value=="1"  && d.value=="0" && c.value=="1" && a.value=="0" && b.value=="1"  )
            { 
                  alert("Right data. You can proceed to simulation.");

                  document.getElementById('check1').disabled=true;
                  document.getElementById('check1').style.cursor='not-allowed';
                  document.getElementById("second").disabled=false;
                  document.getElementById("second").style.cursor="pointer"; 
                       
                  Second.style.cursor="pointer";  
                  document.querySelectorAll('.cell').forEach(elem => {
                    elem.disabled = true;elem.style.cursor="not-allowed"
                });
                          

                      }
                                  


  else if(h.value==""  && g.value==""  && f.value==""  && e.value==""  && d.value=="" && c.value=="" && a.value=="" && b.value=="")
           {
            alert("Please fill the table.");
           }
            else if(h.value=="" || g.value==""  || f.value==""  || e.value==""  || d.value=="" || c.value=="" || a.value=="" || b.value=="")
           {
            alert("Please fill the table properly.");
           }
                else
                {
                  alert("Oops! Wrong data. Please try again");
                } 
                

              }
     

               function reset1()                    //RESET ALL THE VALUES FILLED IN TABLE//
          {
                  if(confirm("Do you want to reset?")){
         
                    document.getElementById("check1").disabled=false;
                document.getElementById("second").disabled=true;
                document.getElementById("second").style.cursor="not-allowed";
        
                Second.style.cursor="pointer";  
                  document.querySelectorAll('.cell').forEach(elem => {
                    elem.disabled = false;elem.style.cursor=""
                });

                document.getElementById("cell1").value='';
                document.getElementById("cell2").value='';

               document.getElementById("cell3").value='';

               document.getElementById("cell4").value='';

               document.getElementById("cell5").value='';
               document.getElementById("cell6").value='';
               document.getElementById("cell7").value='';
               document.getElementById("cell8").value='';

               document.getElementById('check1').disabled=false;
                  document.getElementById('check1').style.cursor='pointer';
                  document.getElementById("second").disabled=true;
                  document.getElementById("second").style.cursor="not-allowed"; 
            
         }

}
         function change()                               //function for IMAGE OF A CHANGE ON CLCIKING ON IMAGE//
           {
          var img=document.getElementById("switch1").src;
            if(img.indexOf('toggleoff1')!= -1)
            {
                document.getElementById("switch1").src="images/toggleon.png";
            }
                else
                {
                       document.getElementById("switch1").src="images/toggleoff1.png";
                       
             }
              if(isstartedsimulation){
              afterSimulation();
              afterSimulation1();

             }
           }
function change1()                          //function for IMAGE OF B CHANGE//
            {
            var img=document.getElementById("switch2").src;
            if(img.indexOf('toggleoff1')!= -1)
            {
                document.getElementById("switch2").src="images/toggleon.png";
            }
                else
                {
                       document.getElementById("switch2").src="images/toggleoff1.png";
                       
             }
              if(isstartedsimulation){
              afterSimulation();
              afterSimulation1();

             }
           }

function change2()        
          {              //function for IMAGE OF C CHANGE//
            var img=document.getElementById("switch3").src;
            if(img.indexOf('toggleoff1')!= -1)
            {
                document.getElementById("switch3").src="images/toggleon.png";
            }
                else
                {
                       document.getElementById("switch3").src="images/toggleoff1.png";
                       
             }
              if(isstartedsimulation){
              afterSimulation();
              afterSimulation1();

             }
           }




function afterSimulation()

        {
           
                  var img1=document.getElementById("switch1").src;
           var img2=document.getElementById("switch2").src;
           var img3=document.getElementById("switch3").src; 
               

            if(img1.indexOf('toggleoff1')!= -1 && img2.indexOf('toggleoff1')!= -1 && img3.indexOf('toggleoff1')!= -1)
            {
                document.getElementById("led2").src="images/bulboff.png";
            }
                else if(img1.indexOf('toggleoff1')!= -1 && img2.indexOf('toggleoff1')!= -1 && img3.indexOf('toggleon')!= -1)
              {
                       document.getElementById("led2").src="images/bulbon.png";
                       
             }  
                else if(img1.indexOf('toggleoff1')!= -1 && img2.indexOf('toggleon')!= -1 && img3.indexOf('toggleoff1')!= -1)
              {
                       document.getElementById("led2").src="images/bulbon.png";
                       
             } 
                else if(img1.indexOf('toggleoff1')!= -1 && img2.indexOf('toggleon')!= -1 && img3.indexOf('toggleon')!= -1)
              {
                       document.getElementById("led2").src="images/bulboff.png";
                       
             } 
                else if(img1.indexOf('toggleon')!= -1 && img2.indexOf('toggleoff1')!= -1 && img3.indexOf('toggleoff1')!= -1)
              {
                       document.getElementById("led2").src="images/bulbon.png";
                       
             } 
                else if(img1.indexOf('toggleon')!= -1 && img2.indexOf('toggleoff1')!= -1 && img3.indexOf('toggleon')!= -1)
              {
                       document.getElementById("led2").src="images/bulboff.png";
                       
             } 
             else if(img1.indexOf('toggleon')!= -1 && img2.indexOf('toggleon')!= -1 && img3.indexOf('toggleoff1')!= -1)
              {
                       document.getElementById("led2").src="images/bulboff.png";
                       
             } 
             else if(img1.indexOf('toggleon')!= -1 && img2.indexOf('toggleon')!= -1 && img3.indexOf('toggleon')!= -1)
              {
                       document.getElementById("led2").src="images/bulbon.png";
                       
             } 
       }


function afterSimulation1()

        {
           
                   var img1=document.getElementById("switch1").src;
           var img2=document.getElementById("switch2").src;
           var img3=document.getElementById("switch3").src; 

            if(img1.indexOf('toggleoff1')!= -1 && img2.indexOf('toggleoff1')!= -1 && img3.indexOf('toggleoff1')!= -1)
              {  
                document.getElementById("cell2").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell3").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell4").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell5").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell6").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell7").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell8").style="background-color: white;text-align:center;font-weight: bolder; color:red";
                document.getElementById("cell1").style ="background-color: yellow;text-align:center;font-weight: bolder; color: black";
                
            }
                else if(img1.indexOf('toggleoff1')!= -1 && img2.indexOf('toggleoff1')!= -1 && img3.indexOf('toggleon')!= -1)
{                document.getElementById("cell2").style="background-color: yellow;text-align:center;font-weight: bolder; color: black";
                document.getElementById("cell1").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell3").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell4").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell5").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell6").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell7").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell8").style="background-color: white;text-align:center;font-weight: bolder; color:red";
                 
             }  
                else if(img1.indexOf('toggleoff1')!= -1 && img2.indexOf('toggleon')!= -1 && img3.indexOf('toggleoff1')!= -1)
              {document.getElementById("cell2").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell1").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell4").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell5").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell6").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell7").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell8").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell3").style="background-color: yellow;text-align:center;font-weight: bolder; color: black";
                  
             } 
                else if(img1.indexOf('toggleoff1')!= -1 && img2.indexOf('toggleon')!= -1 && img3.indexOf('toggleon')!= -1)
              {
                document.getElementById("cell4").style="background-color: yellow;text-align:center;font-weight: bolder; color: black";
            document.getElementById("cell2").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell1").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell3").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell5").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell6").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell7").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell8").style="background-color: white;text-align:center;font-weight: bolder; color:red";
                   
             } 
                else if(img1.indexOf('toggleon')!= -1 && img2.indexOf('toggleoff1')!= -1 && img3.indexOf('toggleoff1')!= -1)
              {
                document.getElementById("cell5").style="background-color: yellow;text-align:center;font-weight: bolder; color: black";
                document.getElementById("cell2").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell1").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell4").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell3").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell6").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell7").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell8").style="background-color: white;text-align:center;font-weight: bolder; color:red";
                  
             } 
                else if(img1.indexOf('toggleon')!= -1 && img2.indexOf('toggleoff1')!= -1 && img3.indexOf('toggleon')!= -1)
              {
                document.getElementById("cell6").style="background-color: yellow;text-align:center;font-weight: bolder; color: black";
                document.getElementById("cell2").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell1").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell4").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell5").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell3").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell7").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell8").style="background-color: white;text-align:center;font-weight: bolder; color:red";
           
                       
             } 
                else if(img1.indexOf('toggleon')!= -1 && img2.indexOf('toggleon')!= -1 && img3.indexOf('toggleoff1')!= -1)
              {
                document.getElementById("cell7").style="background-color: yellow;text-align:center;font-weight: bolder; color: black";
                document.getElementById("cell2").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell1").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell4").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell5").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell6").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell3").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell8").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            
                       
             } 
                else if(img1.indexOf('toggleon')!= -1 && img2.indexOf('toggleon')!= -1 && img3.indexOf('toggleon')!= -1)
              {
                document.getElementById("cell8").style="background-color: yellow;text-align:center;font-weight: bolder; color: black";
                document.getElementById("cell2").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell1").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell4").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell5").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell6").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell7").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            document.getElementById("cell3").style="background-color: white;text-align:center;font-weight: bolder; color:red";
            
                       
             } 
       }
 function start_simulation()
        { 
          isstartedsimulation = true;
          document.getElementById("switch1").onclick = function() {change()};
         document.getElementById("switch2").onclick = function() {change1()};
         document.getElementById("switch3").onclick = function() {change2()};

            document.getElementById("cell1").style="background-color: yellow;text-align:center;font-weight: bolder; color:black";
      
          document.getElementById("led2").src="images/bulboff.png";

         }


      
       window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
      document.getElementById("cell1").value='0';
              document.getElementById("cell2").value='1';

               document.getElementById("cell3").value='1';

               document.getElementById("cell4").value='0';

               document.getElementById("cell5").value='1';
               document.getElementById("cell6").value='0';
               document.getElementById("cell7").value='0';
               document.getElementById("cell8").value='1';
        
               document.querySelectorAll('.cell').forEach(elem => {
                elem.disabled = true;elem.style.cursor="not-allowed"
            });
            
document.getElementById("startbutton").disabled=true;


  document.getElementById("switch1").src="images/toggleoff1.png";
  document.getElementById("switch2").src="images/toggleoff1.png";
  document.getElementById("switch3").src="images/toggleoff1.png";


  document.getElementById("switch1").onclick=function(){change3()};
  document.getElementById("switch2").onclick=function(){change4()};
  document.getElementById("switch3").onclick=function(){change5()};


  document.getElementById("second").disabled=false;
  document.getElementById("second").style.cursor="pointer"; 

  document.getElementById('check1').disabled=true;
                  document.getElementById('check1').style.cursor='not-allowed';
     
                  document.getElementById('reset1').disabled=true;
                        //document.getElementById("checkbutton").disabled=false;
                        //document.getElementById("resetbutton").disabled=false;

       breadboard();
       inputs();
      // ic74513();
       ic7404();
       led1();
      
       supply();
    }
}

function resetCircuit() {
	if(confirm("Do you want to reset?")){
         
   sessionStorage.setItem("reloading", "true");
   document.location.reload();
    isstartedsimulation=false;
  }

}

  



         function change3()
{var img=document.getElementById("switch1").src;
            if(img.indexOf('toggleoff1')!= -1)
            {
                document.getElementById("switch1").src="images/toggleoff1.png";
            }
                else
                {
                       document.getElementById("switch1").src="images/toggleoff1.png";
                       
             }
             
}
function change4()
{var img=document.getElementById("switch2").src;
            if(img.indexOf('toggleoff1')!= -1)
            {
                document.getElementById("switch2").src="images/toggleoff1.png";
            }
                else
                {
                       document.getElementById("switch2").src="images/toggleoff1.png";
                       
             }
             
}
function change5()
{var img=document.getElementById("switch3").src;
            if(img.indexOf('toggleoff1')!= -1)
            {
                document.getElementById("switch3").src="images/toggleoff1.png";
            }
                else
                {
                       document.getElementById("switch3").src="images/toggleoff1.png";
                       
             }
             
}