// Instruction Button Code

const First = document.getElementById('First');
const close_btn = document.getElementById('close-btn');
const First_data = document.getElementById('First_Data');

First.addEventListener('click', () => {
    First_data.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    First_data.classList.remove('visible')
});


// Components Button Code

const Second = document.getElementById('second');
const Second_Data = document.getElementById('Second_Data')
const btn_close = document.getElementById('btn_close');;

Second.addEventListener('click', () => {
    Second_Data.classList.toggle('visible')
});

btn_close.addEventListener('click', () => {
    Second_Data.classList.remove('visible')
});



// Components hide show code here
function breadboard() {
    var x = document.getElementById("board");
    x.style.visibility = "visible";

    var instance = new BoardController();

    instance.setJsPlumbInstance(jsPlumb);
    instance.initDefault();
    instance.setCircuitContainer('mid');

    //breadboard definition 
    {
        instance.addEndPoint(4.5, 'board', 'row1', 'r1', [0, 0, 0, -1, 59, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row1', 'r2', [0, 0, 0, -1, 72.5, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row1', 'r4', [0, 0, 0, -1, 99.5, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row1', 'r5', [0, 0, 0, -1, 113, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row1', 'r3', [0, 0, 0, -1, 86, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row1', 'r9', [0, 0, 0, -1, 180.5, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row1', 'r11', [0, 0, 0, -1, 221, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row1', 'r8', [0, 0, 0, -1, 167, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row1', 'r6', [0, 0, 0, -1, 140, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row1', 'r10', [0, 0, 0, -1, 194, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row1', 'r14', [0, 0, 0, -1, 261.5, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row1', 'r15', [0, 0, 0, -1, 275, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row1', 'r7', [0, 0, 0, -1, 153.5, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row1', 'r16', [0, 0, 0, -1, 302, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row1', 'r12', [0, 0, 0, -1, 234.5, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row1', 'r19', [0, 0, 0, -1, 342.5, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row1', 'r20', [0, 0, 0, -1, 356, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row1', 'r18', [0, 0, 0, -1, 329, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row1', 'r21', [0, 0, 0, -1, 383, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row1', 'r17', [0, 0, 0, -1, 315.5, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row1', 'r13', [0, 0, 0, -1, 248, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row1', 'r22', [0, 0, 0, -1, 396.5, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row1', 'r23', [0, 0, 0, -1, 410, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row1', 'r24', [0, 0, 0, -1, 423.5, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row1', 'r25', [0, 0, 0, -1, 437, 26], 'blue');



        instance.addEndPoint(4.5, 'board', 'row2', 'r27', [0, 0, 0, 1, 72.5, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row2', 'r26', [0, 0, 0, 1, 59, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row2', 'r30', [0, 0, 0, 1, 113, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row2', 'r28', [0, 0, 0, 1, 86, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row2', 'r32', [0, 0, 0, 1, 153.5, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row2', 'r31', [0, 0, 0, 1, 140, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row2', 'r29', [0, 0, 0, 1, 99.5, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row2', 'r35', [0, 0, 0, 1, 194, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row2', 'r34', [0, 0, 0, 1, 180.5, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row2', 'r36', [0, 0, 0, 1, 221, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row2', 'r33', [0, 0, 0, 1, 167, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row2', 'r37', [0, 0, 0, 1, 234.5, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row2', 'r38', [0, 0, 0, 1, 248, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row2', 'r39', [0, 0, 0, 1, 261.5, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row2', 'r41', [0, 0, 0, 1, 302, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row2', 'r40', [0, 0, 0, 1, 275, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row2', 'r42', [0, 0, 0, 1, 315.5, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row2', 'r43', [0, 0, 0, 1, 329, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row2', 'r45', [0, 0, 0, 1, 356, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row2', 'r44', [0, 0, 0, 1, 342.5, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row2', 'r46', [0, 0, 0, 1, 383, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row2', 'r47', [0, 0, 0, 1, 396.5, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row2', 'r49', [0, 0, 0, 1, 423.5, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row2', 'r50', [0, 0, 0, 1, 437, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row2', 'r48', [0, 0, 0, 1, 410, 39.5], 'blue');



        instance.addEndPoint(4.5, 'board', 'row3', 'r51', [0, 0, 0, -1, 478, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row3', 'r52', [0, 0, 0, -1, 491.5, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row3', 'r55', [0, 0, 0, -1, 532, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row3', 'r54', [0, 0, 0, -1, 518.5, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row3', 'r53', [0, 0, 0, -1, 505, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row3', 'r56', [0, 0, 0, -1, 559, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row3', 'r57', [0, 0, 0, -1, 572.5, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row3', 'r58', [0, 0, 0, -1, 586, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row3', 'r59', [0, 0, 0, -1, 599.5, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row3', 'r61', [0, 0, 0, -1, 640, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row3', 'r62', [0, 0, 0, -1, 653.5, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row3', 'r60', [0, 0, 0, -1, 613, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row3', 'r63', [0, 0, 0, -1, 667, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row3', 'r64', [0, 0, 0, -1, 680.5, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row3', 'r66', [0, 0, 0, -1, 721, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row3', 'r67', [0, 0, 0, -1, 734.5, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row3', 'r65', [0, 0, 0, -1, 694, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row3', 'r68', [0, 0, 0, -1, 748, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row3', 'r69', [0, 0, 0, -1, 761.5, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row3', 'r72', [0, 0, 0, -1, 815.5, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row3', 'r71', [0, 0, 0, -1, 802, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row3', 'r70', [0, 0, 0, -1, 775, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row3', 'r73', [0, 0, 0, -1, 829, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row3', 'r75', [0, 0, 0, -1, 856, 26], 'blue');
        instance.addEndPoint(4.5, 'board', 'row3', 'r74', [0, 0, 0, -1, 842.5, 26], 'blue');



        instance.addEndPoint(4.5, 'board', 'row4', 'r77', [0, 0, 0, 1, 491.5, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row4', 'r78', [0, 0, 0, 1, 505, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row4', 'r81', [0, 0, 0, 1, 559, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row4', 'r76', [0, 0, 0, 1, 478, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row4', 'r82', [0, 0, 0, 1, 572.5, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row4', 'r79', [0, 0, 0, 1, 518.5, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row4', 'r80', [0, 0, 0, 1, 532, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row4', 'r84', [0, 0, 0, 1, 599.5, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row4', 'r86', [0, 0, 0, 1, 640, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row4', 'r85', [0, 0, 0, 1, 613, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row4', 'r87', [0, 0, 0, 1, 653.5, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row4', 'r89', [0, 0, 0, 1, 680.5, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row4', 'r88', [0, 0, 0, 1, 667, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row4', 'r91', [0, 0, 0, 1, 721, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row4', 'r83', [0, 0, 0, 1, 586, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row4', 'r90', [0, 0, 0, 1, 694, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row4', 'r92', [0, 0, 0, 1, 734.5, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row4', 'r96', [0, 0, 0, 1, 802, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row4', 'r95', [0, 0, 0, 1, 775, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row4', 'r94', [0, 0, 0, 1, 761.5, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row4', 'r93', [0, 0, 0, 1, 748, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row4', 'r97', [0, 0, 0, 1, 815.5, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row4', 'r99', [0, 0, 0, 1, 842.5, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row4', 'r98', [0, 0, 0, 1, 829, 39.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row4', 'r100', [0, 0, 0, 1, 856, 39.5], 'blue');


        instance.addEndPoint(4.5, 'board', 'row5', 'r101', [0, 0, 0, -1, 59.5, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row5', 'r102', [0, 0, 0, -1, 73, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row5', 'r103', [0, 0, 0, -1, 86.5, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row5', 'r104', [0, 0, 0, -1, 100, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row5', 'r105', [0, 0, 0, -1, 113.5, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row5', 'r106', [0, 0, 0, -1, 140.5, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row5', 'r108', [0, 0, 0, -1, 167.5, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row5', 'r110', [0, 0, 0, -1, 194.5, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row5', 'r107', [0, 0, 0, -1, 154, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row5', 'r109', [0, 0, 0, -1, 181, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row5', 'r111', [0, 0, 0, -1, 221.5, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row5', 'r112', [0, 0, 0, -1, 235, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row5', 'r113', [0, 0, 0, -1, 248.5, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row5', 'r115', [0, 0, 0, -1, 275.5, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row5', 'r114', [0, 0, 0, -1, 262, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row5', 'r117', [0, 0, 0, -1, 316, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row5', 'r118', [0, 0, 0, -1, 329.5, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row5', 'r116', [0, 0, 0, -1, 302.5, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row5', 'r119', [0, 0, 0, -1, 343, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row5', 'r120', [0, 0, 0, -1, 356.5, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row5', 'r121', [0, 0, 0, -1, 383.5, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row5', 'r122', [0, 0, 0, -1, 397, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row5', 'r124', [0, 0, 0, -1, 424, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row5', 'r123', [0, 0, 0, -1, 410.5, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row5', 'r125', [0, 0, 0, 0, 434.5, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row6', 'r127', [0, 0, 0, 1, 73, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row6', 'r126', [0, 0, 0, 1, 59.5, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row6', 'r129', [0, 0, 0, 1, 100, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row6', 'r128', [0, 0, 0, 1, 86.5, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row6', 'r130', [0, 0, 0, 1, 113.5, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row6', 'r131', [0, 0, 0, 1, 140.5, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row6', 'r132', [0, 0, 0, 1, 154, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row6', 'r133', [0, 0, 0, 1, 167.5, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row6', 'r134', [0, 0, 0, 1, 181, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row6', 'r136', [0, 0, 0, 1, 221.5, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row6', 'r135', [0, 0, 0, 1, 194.5, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row6', 'r137', [0, 0, 0, 1, 235, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row6', 'r138', [0, 0, 0, 1, 248.5, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row6', 'r140', [0, 0, 0, 1, 275.5, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row6', 'r142', [0, 0, 0, 1, 316, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row6', 'r139', [0, 0, 0, 1, 262, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row6', 'r141', [0, 0, 0, 1, 302.5, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row6', 'r143', [0, 0, 0, 1, 329.5, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row6', 'r145', [0, 0, 0, 1, 356.5, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row6', 'r144', [0, 0, 0, 1, 343, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row6', 'r147', [0, 0, 0, 1, 397, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row6', 'r146', [0, 0, 0, 1, 383.5, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row6', 'r148', [0, 0, 0, 1, 410.5, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row6', 'r149', [0, 0, 0, 1, 424, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row6', 'r150', [0, 0, 0, 1, 437.5, 282.5], 'blue');



        instance.addEndPoint(4.5, 'board', 'row7', 'r151', [0, 0, 0, 0, 478, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row7', 'r152', [0, 0, 0, -1, 491.5, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row7', 'r155', [0, 0, 0, -1, 532, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row7', 'r153', [0, 0, 0, -1, 505, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row7', 'r157', [0, 0, 0, -1, 572.5, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row7', 'r156', [0, 0, 0, -1, 559, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row7', 'r154', [0, 0, 0, -1, 518.5, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row7', 'r160', [0, 0, 0, -1, 613, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row7', 'r162', [0, 0, 0, -1, 653.5, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row7', 'r161', [0, 0, 0, -1, 640, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row7', 'r159', [0, 0, 0, -1, 599.5, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row7', 'r158', [0, 0, 0, -1, 586, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row7', 'r163', [0, 0, 0, -1, 667, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row7', 'r164', [0, 0, 0, -1, 680.5, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row7', 'r165', [0, 0, 0, -1, 694, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row7', 'r166', [0, 0, 0, -1, 721, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row7', 'r168', [0, 0, 0, -1, 748, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row7', 'r167', [0, 0, 0, -1, 734.5, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row7', 'r169', [0, 0, 0, -1, 761.5, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row7', 'r170', [0, 0, 0, -1, 775, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row7', 'r171', [0, 0, 0, -1, 802, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row7', 'r172', [0, 0, 0, -1, 814.5, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row7', 'r174', [0, 0, 0, -1, 842.5, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row7', 'r173', [0, 0, 0, -1, 829, 269], 'blue');
        instance.addEndPoint(4.5, 'board', 'row7', 'r175', [0, 0, 0, -1, 856, 269], 'blue');


        instance.addEndPoint(4.5, 'board', 'row8', 'r176', [0, 0, 0, 1, 478, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row8', 'r177', [0, 0, 0, 1, 491.5, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row8', 'r180', [0, 0, 0, 1, 532, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row8', 'r178', [0, 0, 0, 1, 505, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row8', 'r182', [0, 0, 0, 1, 572.5, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row8', 'r181', [0, 0, 0, 1, 559, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row8', 'r179', [0, 0, 0, 1, 518.5, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row8', 'r187', [0, 0, 0, 1, 653.5, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row8', 'r183', [0, 0, 0, 1, 586, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row8', 'r186', [0, 0, 0, 1, 640, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row8', 'r185', [0, 0, 0, 1, 613, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row8', 'r184', [0, 0, 0, 1, 599.5, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row8', 'r188', [0, 0, 0, 1, 667, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row8', 'r189', [0, 0, 0, 1, 680.5, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row8', 'r191', [0, 0, 0, 1, 721, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row8', 'r190', [0, 0, 0, 1, 694, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row8', 'r192', [0, 0, 0, 1, 734.5, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row8', 'r193', [0, 0, 0, 1, 748, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row8', 'r194', [0, 0, 0, 1, 761.5, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row8', 'r196', [0, 0, 0, 1, 802, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row8', 'r195', [0, 0, 0, 1, 775, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row8', 'r197', [0, 0, 0, 1, 815.5, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row8', 'r198', [0, 0, 0, 1, 829, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row8', 'r199', [0, 0, 0, 1, 842.5, 282.5], 'blue');
        instance.addEndPoint(4.5, 'board', 'row8', 'r200', [0, 0, 0, 1, 856, 282.5], 'blue');
    }
}

function inputs() {
    var x = document.getElementById("inputs");
    x.style.visibility = "visible";

    var inputs = new BoardController();
    inputs.setJsPlumbInstance(jsPlumb);
    inputs.setCircuitContainer('mid');

    inputs.addEndPoint(4.5, 'inputs', 'input_A', 'input_A', [0, 0, 0, 0, 40, 90], 'red');
    inputs.addEndPoint(4.5, 'inputs', 'input_B', 'input_B', [0, 0, 0, 0, 120, 90], 'red');
    inputs.addEndPoint(4.5, 'inputs', 'input_C', 'input_C', [0, 0, 0, 0, 200, 90], 'red');
    inputs.addEndPoint(4.5, 'inputs', 'input_D', 'input_D', [0, 0, 0, 0, 280, 90], 'red');
}

function supply() {
    var x = document.getElementById("supply");
    x.style.visibility = "visible";

    var supply = new BoardController();
    supply.setJsPlumbInstance(jsPlumb);
    supply.setCircuitContainer('mid');

    supply.addEndPoint(8, 'supply', 'VCC', 'VCC', [0, 0, -1, 0, 40, 45], 'blue','red');
    supply.addEndPoint(8, 'supply', 'GND', 'GND', [0, 0, 1, 0, 80, 45], 'red','black');
}

function ic7442() {
    var x = document.getElementById("ic7442");
    x.style.visibility = "visible";

    var ic7442 = new BoardController();
    ic7442.setJsPlumbInstance(jsPlumb);
    ic7442.setCircuitContainer('mid');

    {
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_VCC', 'ic7442_VCC01', [0, 0, 1, -1, 9, 4], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_VCC', 'ic7442_VCC02', [0, 0, 1, -1, 9, 17.5], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_VCC', 'ic7442_VCC03', [0, 0, 1, -1, 9, 31], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_VCC', 'ic7442_VCC04', [0, 0, 1, -1, 9, 44.5], 'red');


        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_A', 'ic7442_A01', [0, 0, 1, -1, 22.5, 4], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_A', 'ic7442_A02', [0, 0, 1, -1, 22.5, 17.5], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_A', 'ic7442_A03', [0, 0, 1, -1, 22.5, 31], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_A', 'ic7442_A04', [0, 0, 1, -1, 22.5, 44.5], 'red');


        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_B', 'ic7442_B01', [0, 0, 1, -1, 36, 4], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_B', 'ic7442_B02', [0, 0, 1, -1, 36, 17.5], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_B', 'ic7442_B03', [0, 0, 1, -1, 36, 31], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_B', 'ic7442_B04', [0, 0, 1, -1, 36, 44.5], 'red');


        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_C', 'ic7442_C01', [0, 0, 1, -1, 49.5, 4], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_C', 'ic7442_C02', [0, 0, 1, -1, 49.5, 17.5], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_C', 'ic7442_C03', [0, 0, 1, -1, 49.5, 31], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_C', 'ic7442_C04', [0, 0, 1, -1, 49.5, 44.5], 'red');


        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_D', 'ic7442_D01', [0, 0, 1, -1, 63, 4], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_D', 'ic7442_D02', [0, 0, 1, -1, 63, 17.5], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_D', 'ic7442_D03', [0, 0, 1, -1, 63, 31], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_D', 'ic7442_D04', [0, 0, 1, -1, 63, 44.5], 'red');


        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y9', 'ic7442_Y901', [0, 0, 1, -1, 76.5, 4], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y9', 'ic7442_Y902', [0, 0, 1, -1, 76.5, 17.5], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y9', 'ic7442_Y903', [0, 0, 1, -1, 76.5, 31], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y9', 'ic7442_Y904', [0, 0, 1, -1, 76.5, 44.5], 'red');


        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y8', 'ic7442_Y801', [0, 0, 1, -1, 90, 4], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y8', 'ic7442_Y802', [0, 0, 1, -1, 90, 17.5], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y8', 'ic7442_Y803', [0, 0, 1, -1, 90, 31], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y8', 'ic7442_Y804', [0, 0, 1, -1, 90, 44.5], 'red');


        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y7', 'ic7442_Y701', [0, 0, 1, -1, 103.5, 4], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y7', 'ic7442_Y702', [0, 0, 1, -1, 103.5, 17.5], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y7', 'ic7442_Y703', [0, 0, 1, -1, 103.5, 31], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y7', 'ic7442_Y704', [0, 0, 1, -1, 103.5, 44.5], 'red');


        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y0', 'ic7442_Y002', [0, 0, 0, 1, 9, 111.5], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y0', 'ic7442_Y003', [0, 0, 0, 1, 9, 125], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y0', 'ic7442_Y004', [0, 0, 0, 1, 9, 138.5], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y0', 'ic7442_Y005', [0, 0, 0, 1, 9, 152], 'red');


        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y1', 'ic7442_Y102', [0, 0, 0, 1, 22.5, 111.5], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y1', 'ic7442_Y103', [0, 0, 0, 1, 22.5, 125], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y1', 'ic7442_Y104', [0, 0, 0, 1, 22.5, 138.5], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y1', 'ic7442_Y105', [0, 0, 0, 1, 22.5, 152], 'red');


        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y2', 'ic7442_Y202', [0, 0, 0, 1, 36, 111.5], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y2', 'ic7442_Y203', [0, 0, 0, 1, 36, 125], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y2', 'ic7442_Y204', [0, 0, 0, 1, 36, 138.5], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y2', 'ic7442_Y205', [0, 0, 0, 1, 36, 152], 'red');


        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y3', 'ic7442_Y302', [0, 0, 0, 1, 49.5, 111.5], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y3', 'ic7442_Y303', [0, 0, 0, 1, 49.5, 125], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y3', 'ic7442_Y304', [0, 0, 0, 1, 49.5, 138.5], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y3', 'ic7442_Y305', [0, 0, 0, 1, 49.5, 152], 'red');


        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y4', 'ic7442_Y402', [0, 0, 0, 1, 63, 111.5], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y4', 'ic7442_Y403', [0, 0, 0, 1, 63, 125], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y4', 'ic7442_Y404', [0, 0, 0, 1, 63, 138.5], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y4', 'ic7442_Y405', [0, 0, 0, 1, 63, 152], 'red');


        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y5', 'ic7442_Y502', [0, 0, 0, 1, 76.5, 111.5], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y5', 'ic7442_Y503', [0, 0, 0, 1, 76.5, 125], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y5', 'ic7442_Y504', [0, 0, 0, 1, 76.5, 138.5], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y5', 'ic7442_Y505', [0, 0, 0, 1, 76.5, 152], 'red');


        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y6', 'ic7442_Y602', [0, 0, 0, 1, 90, 111.5], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y6', 'ic7442_Y603', [0, 0, 0, 1, 90, 125], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y6', 'ic7442_Y604', [0, 0, 0, 1, 90, 138.5], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_Y6', 'ic7442_Y605', [0, 0, 0, 1, 90, 152], 'red');


        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_GND', 'ic7442_GND02', [0, 0, 0, 1, 103.5, 111.5], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_GND', 'ic7442_GND03', [0, 0, 0, 1, 103.5, 125], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_GND', 'ic7442_GND04', [0, 0, 0, 1, 103.5, 138.5], 'red');
        ic7442.addEndPoint(4.5, 'ic7442', 'ic7442_GND', 'ic7442_GND05', [0, 0, 0, 1, 103.5, 152], 'red');

    }
}

function led() {
   var a = document.getElementById("led0");
   a.style.visibility = "visible";

   var elms = document.querySelectorAll("[id='l0']");
        for(var i = 0; i < elms.length; i++) 
          elms[i].style.visibility="visible";
        

    var b = document.getElementById("led1");
    b.style.visibility = "visible";
    var elms = document.querySelectorAll("[id='l1']");
    for(var i = 0; i < elms.length; i++) 
      elms[i].style.visibility="visible";

    var c = document.getElementById("led2");
    c.style.visibility = "visible";
    var elms = document.querySelectorAll("[id='l2']");
    for(var i = 0; i < elms.length; i++) 
      elms[i].style.visibility="visible";

    var d = document.getElementById("led3");
    d.style.visibility = "visible";
    var elms = document.querySelectorAll("[id='l3']");
    for(var i = 0; i < elms.length; i++) 
      elms[i].style.visibility="visible";

    var e = document.getElementById("led4");
    e.style.visibility = "visible";
    var elms = document.querySelectorAll("[id='l4']");
    for(var i = 0; i < elms.length; i++) 
      elms[i].style.visibility="visible";

    var f = document.getElementById("led5");
    f.style.visibility = "visible";
    var elms = document.querySelectorAll("[id='l5']");
    for(var i = 0; i < elms.length; i++) 
      elms[i].style.visibility="visible";

    var g = document.getElementById("led6");
    g.style.visibility = "visible";
    var elms = document.querySelectorAll("[id='l6']");
    for(var i = 0; i < elms.length; i++) 
      elms[i].style.visibility="visible";

    var h = document.getElementById("led7");
    h.style.visibility = "visible";
    var elms = document.querySelectorAll("[id='l7']");
    for(var i = 0; i < elms.length; i++) 
      elms[i].style.visibility="visible";

    var i = document.getElementById("led8");
    i.style.visibility = "visible";
    var elms = document.querySelectorAll("[id='l8']");
    for(var i = 0; i < elms.length; i++) 
      elms[i].style.visibility="visible";

    var j = document.getElementById("led9");
    j.style.visibility = "visible";
    var elms = document.querySelectorAll("[id='l9']");
    for(var i = 0; i < elms.length; i++) 
      elms[i].style.visibility="visible";
    

    var led0 = new BoardController();
    led0.setJsPlumbInstance(jsPlumb);
    led0.setCircuitContainer('mid');

    led0.addEndPoint(4.5, 'led0', 'led_C0', 'led_C001', [0, 0, 0, 1, 10, 100], 'red');
    led0.addEndPoint(4.5, 'led0', 'led_C0', 'led_C002', [0, 0, 0, 1, 10, 113.5], 'red');
    led0.addEndPoint(4.5, 'led0', 'led_C0', 'led_C003', [0, 0, 0, 1, 10, 127], 'red');
    led0.addEndPoint(4.5, 'led0', 'led_C0', 'led_C004', [0, 0, 0, 1, 10, 140.5], 'red');
    led0.addEndPoint(4.5, 'led0', 'led_C0', 'led_C005', [0, 0, 0, 1, 10, 154], 'red');
    led0.addEndPoint(4.5, 'led0', 'led_A0', 'led_A001', [0, 0, 0, 0, 23.5, 100], 'red');
    led0.addEndPoint(4.5, 'led0', 'led_A0', 'led_A002', [0, 0, 0, 0, 23.5, 113.5], 'red');
    led0.addEndPoint(4.5, 'led0', 'led_A0', 'led_A003', [0, 0, 0, 0, 23.5, 127], 'red');
    led0.addEndPoint(4.5, 'led0', 'led_A0', 'led_A004', [0, 0, 0, 0, 23.5, 140.5], 'red');
    led0.addEndPoint(4.5, 'led0', 'led_A0', 'led_A005', [0, 0, 0, 0, 23.5, 154], 'red');

    var led1 = new BoardController();
    led1.setJsPlumbInstance(jsPlumb);
    led1.setCircuitContainer('mid');

    led1.addEndPoint(4.5, 'led1', 'led_C1', 'led_C101', [0, 0, 0, 1, 10, 100], 'red');
    led1.addEndPoint(4.5, 'led1', 'led_C1', 'led_C102', [0, 0, 0, 1, 10, 113.5], 'red');
    led1.addEndPoint(4.5, 'led1', 'led_C1', 'led_C103', [0, 0, 0, 1, 10, 127], 'red');
    led1.addEndPoint(4.5, 'led1', 'led_C1', 'led_C104', [0, 0, 0, 1, 10, 140.5], 'red');
    led1.addEndPoint(4.5, 'led1', 'led_C1', 'led_C105', [0, 0, 0, 1, 10, 154], 'red');
    led1.addEndPoint(4.5, 'led1', 'led_A1', 'led_A101', [0, 0, 0, 0, 23.5, 100], 'red');
    led1.addEndPoint(4.5, 'led1', 'led_A1', 'led_A102', [0, 0, 0, 0, 23.5, 113.5], 'red');
    led1.addEndPoint(4.5, 'led1', 'led_A1', 'led_A103', [0, 0, 0, 0, 23.5, 127], 'red');
    led1.addEndPoint(4.5, 'led1', 'led_A1', 'led_A104', [0, 0, 0, 0, 23.5, 140.5], 'red');
    led1.addEndPoint(4.5, 'led1', 'led_A1', 'led_A105', [0, 0, 0, 0, 23.5, 154], 'red');

    var led2 = new BoardController();
    led2.setJsPlumbInstance(jsPlumb);
    led2.setCircuitContainer('mid');

    led2.addEndPoint(4.5, 'led2', 'led_C2', 'led_C201', [0, 0, 0, 1, 10, 100], 'red');
    led2.addEndPoint(4.5, 'led2', 'led_C2', 'led_C202', [0, 0, 0, 1, 10, 113.5], 'red');
    led2.addEndPoint(4.5, 'led2', 'led_C2', 'led_C203', [0, 0, 0, 1, 10, 127], 'red');
    led2.addEndPoint(4.5, 'led2', 'led_C2', 'led_C204', [0, 0, 0, 1, 10, 140.5], 'red');
    led2.addEndPoint(4.5, 'led2', 'led_C2', 'led_C205', [0, 0, 0, 1, 10, 154], 'red');
    led2.addEndPoint(4.5, 'led2', 'led_A2', 'led_A201', [0, 0, 0, 0, 23.5, 100], 'red');
    led2.addEndPoint(4.5, 'led2', 'led_A2', 'led_A202', [0, 0, 0, 0, 23.5, 113.5], 'red');
    led2.addEndPoint(4.5, 'led2', 'led_A2', 'led_A203', [0, 0, 0, 0, 23.5, 127], 'red');
    led2.addEndPoint(4.5, 'led2', 'led_A2', 'led_A204', [0, 0, 0, 0, 23.5, 140.5], 'red');
    led2.addEndPoint(4.5, 'led2', 'led_A2', 'led_A205', [0, 0, 0, 0, 23.5, 154], 'red');

    var led3 = new BoardController();
    led3.setJsPlumbInstance(jsPlumb);
    led3.setCircuitContainer('mid');

    led3.addEndPoint(4.5, 'led3', 'led_C3', 'led_C301', [0, 0, 0, 1, 10, 100], 'red');
    led3.addEndPoint(4.5, 'led3', 'led_C3', 'led_C302', [0, 0, 0, 1, 10, 113.5], 'red');
    led3.addEndPoint(4.5, 'led3', 'led_C3', 'led_C303', [0, 0, 0, 1, 10, 127], 'red');
    led3.addEndPoint(4.5, 'led3', 'led_C3', 'led_C304', [0, 0, 0, 1, 10, 140.5], 'red');
    led3.addEndPoint(4.5, 'led3', 'led_C3', 'led_C305', [0, 0, 0, 1, 10, 154], 'red');
    led3.addEndPoint(4.5, 'led3', 'led_A3', 'led_A301', [0, 0, 0, 0, 23.5, 100], 'red');
    led3.addEndPoint(4.5, 'led3', 'led_A3', 'led_A302', [0, 0, 0, 0, 23.5, 113.5], 'red');
    led3.addEndPoint(4.5, 'led3', 'led_A3', 'led_A303', [0, 0, 0, 0, 23.5, 127], 'red');
    led3.addEndPoint(4.5, 'led3', 'led_A3', 'led_A304', [0, 0, 0, 0, 23.5, 140.5], 'red');
    led3.addEndPoint(4.5, 'led3', 'led_A3', 'led_A305', [0, 0, 0, 0, 23.5, 154], 'red');

    var led4 = new BoardController();
    led4.setJsPlumbInstance(jsPlumb);
    led4.setCircuitContainer('mid');

    led4.addEndPoint(4.5, 'led4', 'led_C4', 'led_C401', [0, 0, 0, 1, 10, 100], 'red');
    led4.addEndPoint(4.5, 'led4', 'led_C4', 'led_C402', [0, 0, 0, 1, 10, 113.5], 'red');
    led4.addEndPoint(4.5, 'led4', 'led_C4', 'led_C403', [0, 0, 0, 1, 10, 127], 'red');
    led4.addEndPoint(4.5, 'led4', 'led_C4', 'led_C404', [0, 0, 0, 1, 10, 140.5], 'red');
    led4.addEndPoint(4.5, 'led4', 'led_C4', 'led_C405', [0, 0, 0, 1, 10, 154], 'red');
    led4.addEndPoint(4.5, 'led4', 'led_A4', 'led_A401', [0, 0, 0, 0, 23.5, 100], 'red');
    led4.addEndPoint(4.5, 'led4', 'led_A4', 'led_A402', [0, 0, 0, 0, 23.5, 113.5], 'red');
    led4.addEndPoint(4.5, 'led4', 'led_A4', 'led_A403', [0, 0, 0, 0, 23.5, 127], 'red');
    led4.addEndPoint(4.5, 'led4', 'led_A4', 'led_A404', [0, 0, 0, 0, 23.5, 140.5], 'red');
    led4.addEndPoint(4.5, 'led4', 'led_A4', 'led_A405', [0, 0, 0, 0, 23.5, 154], 'red');

    var led5 = new BoardController();
    led5.setJsPlumbInstance(jsPlumb);
    led5.setCircuitContainer('mid');

    led5.addEndPoint(4.5, 'led5', 'led_C5', 'led_C501', [0, 0, 0, 1, 10, 100], 'red');
    led5.addEndPoint(4.5, 'led5', 'led_C5', 'led_C502', [0, 0, 0, 1, 10, 113.5], 'red');
    led5.addEndPoint(4.5, 'led5', 'led_C5', 'led_C503', [0, 0, 0, 1, 10, 127], 'red');
    led5.addEndPoint(4.5, 'led5', 'led_C5', 'led_C504', [0, 0, 0, 1, 10, 140.5], 'red');
    led5.addEndPoint(4.5, 'led5', 'led_C5', 'led_C505', [0, 0, 0, 1, 10, 154], 'red');
    led5.addEndPoint(4.5, 'led5', 'led_A5', 'led_A501', [0, 0, 0, 0, 23.5, 100], 'red');
    led5.addEndPoint(4.5, 'led5', 'led_A5', 'led_A502', [0, 0, 0, 0, 23.5, 113.5], 'red');
    led5.addEndPoint(4.5, 'led5', 'led_A5', 'led_A503', [0, 0, 0, 0, 23.5, 127], 'red');
    led5.addEndPoint(4.5, 'led5', 'led_A5', 'led_A504', [0, 0, 0, 0, 23.5, 140.5], 'red');
    led5.addEndPoint(4.5, 'led5', 'led_A5', 'led_A505', [0, 0, 0, 0, 23.5, 154], 'red');

    var led6 = new BoardController();
    led6.setJsPlumbInstance(jsPlumb);
    led6.setCircuitContainer('mid');

    led6.addEndPoint(4.5, 'led6', 'led_C6', 'led_C601', [0, 0, 0, 1, 10, 100], 'red');
    led6.addEndPoint(4.5, 'led6', 'led_C6', 'led_C602', [0, 0, 0, 1, 10, 113.5], 'red');
    led6.addEndPoint(4.5, 'led6', 'led_C6', 'led_C603', [0, 0, 0, 1, 10, 127], 'red');
    led6.addEndPoint(4.5, 'led6', 'led_C6', 'led_C604', [0, 0, 0, 1, 10, 140.5], 'red');
    led6.addEndPoint(4.5, 'led6', 'led_C6', 'led_C605', [0, 0, 0, 1, 10, 154], 'red');
    led6.addEndPoint(4.5, 'led6', 'led_A6', 'led_A601', [0, 0, 0, 0, 23.5, 100], 'red');
    led6.addEndPoint(4.5, 'led6', 'led_A6', 'led_A602', [0, 0, 0, 0, 23.5, 113.5], 'red');
    led6.addEndPoint(4.5, 'led6', 'led_A6', 'led_A603', [0, 0, 0, 0, 23.5, 127], 'red');
    led6.addEndPoint(4.5, 'led6', 'led_A6', 'led_A604', [0, 0, 0, 0, 23.5, 140.5], 'red');
    led6.addEndPoint(4.5, 'led6', 'led_A6', 'led_A605', [0, 0, 0, 0, 23.5, 154], 'red');

    var led7 = new BoardController();
    led7.setJsPlumbInstance(jsPlumb);
    led7.setCircuitContainer('mid');

    led7.addEndPoint(4.5, 'led7', 'led_C7', 'led_C701', [0, 0, 0, 1, 10, 100], 'red');
    led7.addEndPoint(4.5, 'led7', 'led_C7', 'led_C702', [0, 0, 0, 1, 10, 113.5], 'red');
    led7.addEndPoint(4.5, 'led7', 'led_C7', 'led_C703', [0, 0, 0, 1, 10, 127], 'red');
    led7.addEndPoint(4.5, 'led7', 'led_C7', 'led_C704', [0, 0, 0, 1, 10, 140.5], 'red');
    led7.addEndPoint(4.5, 'led7', 'led_C7', 'led_C705', [0, 0, 0, 1, 10, 154], 'red');
    led7.addEndPoint(4.5, 'led7', 'led_A7', 'led_A701', [0, 0, 0, 0, 23.5, 100], 'red');
    led7.addEndPoint(4.5, 'led7', 'led_A7', 'led_A702', [0, 0, 0, 0, 23.5, 113.5], 'red');
    led7.addEndPoint(4.5, 'led7', 'led_A7', 'led_A703', [0, 0, 0, 0, 23.5, 127], 'red');
    led7.addEndPoint(4.5, 'led7', 'led_A7', 'led_A704', [0, 0, 0, 0, 23.5, 140.5], 'red');
    led7.addEndPoint(4.5, 'led7', 'led_A7', 'led_A705', [0, 0, 0, 0, 23.5, 154], 'red');

    var led8 = new BoardController();
    led8.setJsPlumbInstance(jsPlumb);
    led8.setCircuitContainer('mid');

    led8.addEndPoint(4.5, 'led8', 'led_C8', 'led_C801', [0, 0, 0, 1, 10, 100], 'red');
    led8.addEndPoint(4.5, 'led8', 'led_C8', 'led_C802', [0, 0, 0, 1, 10, 113.5], 'red');
    led8.addEndPoint(4.5, 'led8', 'led_C8', 'led_C803', [0, 0, 0, 1, 10, 127], 'red');
    led8.addEndPoint(4.5, 'led8', 'led_C8', 'led_C804', [0, 0, 0, 1, 10, 140.5], 'red');
    led8.addEndPoint(4.5, 'led8', 'led_C8', 'led_C805', [0, 0, 0, 1, 10, 154], 'red');
    led8.addEndPoint(4.5, 'led8', 'led_A8', 'led_A801', [0, 0, 0, 0, 23.5, 100], 'red');
    led8.addEndPoint(4.5, 'led8', 'led_A8', 'led_A802', [0, 0, 0, 0, 23.5, 113.5], 'red');
    led8.addEndPoint(4.5, 'led8', 'led_A8', 'led_A803', [0, 0, 0, 0, 23.5, 127], 'red');
    led8.addEndPoint(4.5, 'led8', 'led_A8', 'led_A804', [0, 0, 0, 0, 23.5, 140.5], 'red');
    led8.addEndPoint(4.5, 'led8', 'led_A8', 'led_A805', [0, 0, 0, 0, 23.5, 154], 'red');

    var led9 = new BoardController();
    led9.setJsPlumbInstance(jsPlumb);
    led9.setCircuitContainer('mid');

    led9.addEndPoint(4.5, 'led9', 'led_C9', 'led_C901', [0, 0, 0, 1, 10, 100], 'red');
    led9.addEndPoint(4.5, 'led9', 'led_C9', 'led_C902', [0, 0, 0, 1, 10, 113.5], 'red');
    led9.addEndPoint(4.5, 'led9', 'led_C9', 'led_C903', [0, 0, 0, 1, 10, 127], 'red');
    led9.addEndPoint(4.5, 'led9', 'led_C9', 'led_C904', [0, 0, 0, 1, 10, 140.5], 'red');
    led9.addEndPoint(4.5, 'led9', 'led_C9', 'led_C905', [0, 0, 0, 1, 10, 154], 'red');
    led9.addEndPoint(4.5, 'led9', 'led_A9', 'led_A901', [0, 0, 0, 0, 23.5, 100], 'red');
    led9.addEndPoint(4.5, 'led9', 'led_A9', 'led_A902', [0, 0, 0, 0, 23.5, 113.5], 'red');
    led9.addEndPoint(4.5, 'led9', 'led_A9', 'led_A903', [0, 0, 0, 0, 23.5, 127], 'red');
    led9.addEndPoint(4.5, 'led9', 'led_A9', 'led_A904', [0, 0, 0, 0, 23.5, 140.5], 'red');
    led9.addEndPoint(4.5, 'led9', 'led_A9', 'led_A905', [0, 0, 0, 0, 23.5, 154], 'red');

}

function resistance(){
    var a = document.getElementById("r0");
    a.style.visibility = "visible";
    var elms = document.querySelectorAll("[id='re0']");
    for(var i = 0; i < elms.length; i++) 
      elms[i].style.visibility="visible";
    var b = document.getElementById("r1");
    b.style.visibility = "visible";
    var elms = document.querySelectorAll("[id='re1']");
    for(var i = 0; i < elms.length; i++) 
      elms[i].style.visibility="visible";
    var c = document.getElementById("r2");
    c.style.visibility = "visible";
    var elms = document.querySelectorAll("[id='re2']");
    for(var i = 0; i < elms.length; i++) 
      elms[i].style.visibility="visible";
    var d = document.getElementById("r3");
    d.style.visibility = "visible";
    var elms = document.querySelectorAll("[id='re3']");
    for(var i = 0; i < elms.length; i++) 
      elms[i].style.visibility="visible";
    var e = document.getElementById("r4");
    e.style.visibility = "visible";
    var elms = document.querySelectorAll("[id='re4']");
    for(var i = 0; i < elms.length; i++) 
      elms[i].style.visibility="visible";
    var f = document.getElementById("r5");
    f.style.visibility = "visible";
    var elms = document.querySelectorAll("[id='re5']");
    for(var i = 0; i < elms.length; i++) 
      elms[i].style.visibility="visible";
    var g = document.getElementById("r6");
    g.style.visibility = "visible";
    var elms = document.querySelectorAll("[id='re6']");
    for(var i = 0; i < elms.length; i++) 
      elms[i].style.visibility="visible";
    var h = document.getElementById("r7");
    h.style.visibility = "visible";
    var elms = document.querySelectorAll("[id='re7']");
    for(var i = 0; i < elms.length; i++) 
      elms[i].style.visibility="visible";
    var i = document.getElementById("r8");
    i.style.visibility = "visible";
    var elms = document.querySelectorAll("[id='re8']");
    for(var i = 0; i < elms.length; i++) 
      elms[i].style.visibility="visible";
    var j = document.getElementById("r9");
    j.style.visibility = "visible";
    var elms = document.querySelectorAll("[id='re9']");
    for(var i = 0; i < elms.length; i++) 
      elms[i].style.visibility="visible";



    var r0 = new BoardController();
    r0.setJsPlumbInstance(jsPlumb);
    r0.setCircuitContainer('mid');

    r0.addEndPoint(4.2, 'r0', 'r0_A', 'r0_A01', [0, 0, -1, 0, 8, 4], 'red');
    r0.addEndPoint(4.2, 'r0', 'r0_A', 'r0_A02', [0, 0, -1, 0, 8, 17.5], 'red');
    r0.addEndPoint(4.2, 'r0', 'r0_A', 'r0_A03', [0, 0, -1, 0, 8, 31], 'red');
    r0.addEndPoint(4.2, 'r0', 'r0_A', 'r0_A04', [0, 0, -1, 0, 8, 44.5], 'red');
    r0.addEndPoint(4.2, 'r0', 'r0_B', 'r0_B01', [0, 0, 0, 1, 8, 111.5], 'red');
    r0.addEndPoint(4.2, 'r0', 'r0_B', 'r0_B02', [0, 0, 0, 1, 8, 125], 'red');
    r0.addEndPoint(4.2, 'r0', 'r0_B', 'r0_B03', [0, 0, 0, 1, 8, 138.5], 'red');
    r0.addEndPoint(4.2, 'r0', 'r0_B', 'r0_B04', [0, 0, 0, 1, 8, 152], 'red');


    var r1 = new BoardController();
    r1.setJsPlumbInstance(jsPlumb);
    r1.setCircuitContainer('mid');

    r1.addEndPoint(4.2, 'r1', 'r1_A', 'r1_A01', [0, 0, -1, 0, 8, 4], 'red');
    r1.addEndPoint(4.2, 'r1', 'r1_A', 'r1_A02', [0, 0, -1, 0, 8, 17.5], 'red');
    r1.addEndPoint(4.2, 'r1', 'r1_A', 'r1_A03', [0, 0, -1, 0, 8, 31], 'red');
    r1.addEndPoint(4.2, 'r1', 'r1_A', 'r1_A04', [0, 0, -1, 0, 8, 44.5], 'red');
    r1.addEndPoint(4.2, 'r1', 'r1_B', 'r1_B01', [0, 0, 0, 1, 8, 111.5], 'red');
    r1.addEndPoint(4.2, 'r1', 'r1_B', 'r1_B02', [0, 0, 0, 1, 8, 125], 'red');
    r1.addEndPoint(4.2, 'r1', 'r1_B', 'r1_B03', [0, 0, 0, 1, 8, 138.5], 'red');
    r1.addEndPoint(4.2, 'r1', 'r1_B', 'r1_B04', [0, 0, 0, 1, 8, 152], 'red');



    var r2 = new BoardController();
    r2.setJsPlumbInstance(jsPlumb);
    r2.setCircuitContainer('mid');

    r2.addEndPoint(4.2, 'r2', 'r2_A', 'r2_A01', [0, 0, -1, 0, 8, 4], 'red');
    r2.addEndPoint(4.2, 'r2', 'r2_A', 'r2_A02', [0, 0, -1, 0, 8, 17.5], 'red');
    r2.addEndPoint(4.2, 'r2', 'r2_A', 'r2_A03', [0, 0, -1, 0, 8, 31], 'red');
    r2.addEndPoint(4.2, 'r2', 'r2_A', 'r2_A04', [0, 0, -1, 0, 8, 44.5], 'red');
    r2.addEndPoint(4.2, 'r2', 'r2_B', 'r2_B01', [0, 0, 0, 1, 8, 111.5], 'red');
    r2.addEndPoint(4.2, 'r2', 'r2_B', 'r2_B02', [0, 0, 0, 1, 8, 125], 'red');
    r2.addEndPoint(4.2, 'r2', 'r2_B', 'r2_B03', [0, 0, 0, 1, 8, 138.5], 'red');
    r2.addEndPoint(4.2, 'r2', 'r2_B', 'r2_B04', [0, 0, 0, 1, 8, 152], 'red');


    var r3 = new BoardController();
    r3.setJsPlumbInstance(jsPlumb);
    r3.setCircuitContainer('mid');

    r3.addEndPoint(4.2, 'r3', 'r3_A', 'r3_A01', [0, 0, -1, 0, 8, 4], 'red');
    r3.addEndPoint(4.2, 'r3', 'r3_A', 'r3_A02', [0, 0, -1, 0, 8, 17.5], 'red');
    r3.addEndPoint(4.2, 'r3', 'r3_A', 'r3_A03', [0, 0, -1, 0, 8, 31], 'red');
    r3.addEndPoint(4.2, 'r3', 'r3_A', 'r3_A04', [0, 0, -1, 0, 8, 44.5], 'red');
    r3.addEndPoint(4.2, 'r3', 'r3_B', 'r3_B01', [0, 0, 0, 1, 8, 111.5], 'red');
    r3.addEndPoint(4.2, 'r3', 'r3_B', 'r3_B02', [0, 0, 0, 1, 8, 125], 'red');
    r3.addEndPoint(4.2, 'r3', 'r3_B', 'r3_B03', [0, 0, 0, 1, 8, 138.5], 'red');
    r3.addEndPoint(4.2, 'r3', 'r3_B', 'r3_B04', [0, 0, 0, 1, 8, 152], 'red');


    var r4 = new BoardController();
    r4.setJsPlumbInstance(jsPlumb);
    r4.setCircuitContainer('mid');

    r4.addEndPoint(4.2, 'r4', 'r4_A', 'r4_A01', [0, 0, -1, 0, 8, 4], 'red');
    r4.addEndPoint(4.2, 'r4', 'r4_A', 'r4_A02', [0, 0, -1, 0, 8, 17.5], 'red');
    r4.addEndPoint(4.2, 'r4', 'r4_A', 'r4_A03', [0, 0, -1, 0, 8, 31], 'red');
    r4.addEndPoint(4.2, 'r4', 'r4_A', 'r4_A04', [0, 0, -1, 0, 8, 44.5], 'red');
    r4.addEndPoint(4.2, 'r4', 'r4_B', 'r4_B01', [0, 0, 0, 1, 8, 111.5], 'red');
    r4.addEndPoint(4.2, 'r4', 'r4_B', 'r4_B02', [0, 0, 0, 1, 8, 125], 'red');
    r4.addEndPoint(4.2, 'r4', 'r4_B', 'r4_B03', [0, 0, 0, 1, 8, 138.5], 'red');
    r4.addEndPoint(4.2, 'r4', 'r4_B', 'r4_B04', [0, 0, 0, 1, 8, 152], 'red');


    var r5 = new BoardController();
    r5.setJsPlumbInstance(jsPlumb);
    r5.setCircuitContainer('mid');

    r5.addEndPoint(4.2, 'r5', 'r5_A', 'r5_A01', [0, 0, -1, 0, 8, 4], 'red');
    r5.addEndPoint(4.2, 'r5', 'r5_A', 'r5_A02', [0, 0, -1, 0, 8, 17.5], 'red');
    r5.addEndPoint(4.2, 'r5', 'r5_A', 'r5_A03', [0, 0, -1, 0, 8, 31], 'red');
    r5.addEndPoint(4.2, 'r5', 'r5_A', 'r5_A04', [0, 0, -1, 0, 8, 44.5], 'red');
    r5.addEndPoint(4.2, 'r5', 'r5_B', 'r5_B01', [0, 0, 0, 1, 8, 111.5], 'red');
    r5.addEndPoint(4.2, 'r5', 'r5_B', 'r5_B02', [0, 0, 0, 1, 8, 125], 'red');
    r5.addEndPoint(4.2, 'r5', 'r5_B', 'r5_B03', [0, 0, 0, 1, 8, 138.5], 'red');
    r5.addEndPoint(4.2, 'r5', 'r5_B', 'r5_B04', [0, 0, 0, 1, 8, 152], 'red');

    
    var r6 = new BoardController();
    r6.setJsPlumbInstance(jsPlumb);
    r6.setCircuitContainer('mid');

    r6.addEndPoint(4.2, 'r6', 'r6_A', 'r6_A01', [0, 0, -1, 0, 8, 4], 'red');
    r6.addEndPoint(4.2, 'r6', 'r6_A', 'r6_A02', [0, 0, -1, 0, 8, 17.5], 'red');
    r6.addEndPoint(4.2, 'r6', 'r6_A', 'r6_A03', [0, 0, -1, 0, 8, 31], 'red');
    r6.addEndPoint(4.2, 'r6', 'r6_A', 'r6_A04', [0, 0, -1, 0, 8, 44.5], 'red');
    r6.addEndPoint(4.2, 'r6', 'r6_B', 'r6_B01', [0, 0, 0, 1, 8, 111.5], 'red');
    r6.addEndPoint(4.2, 'r6', 'r6_B', 'r6_B02', [0, 0, 0, 1, 8, 125], 'red');
    r6.addEndPoint(4.2, 'r6', 'r6_B', 'r6_B03', [0, 0, 0, 1, 8, 138.5], 'red');
    r6.addEndPoint(4.2, 'r6', 'r6_B', 'r6_B04', [0, 0, 0, 1, 8, 152], 'red');


    var r7 = new BoardController();
    r7.setJsPlumbInstance(jsPlumb);
    r7.setCircuitContainer('mid');

    r7.addEndPoint(4.2, 'r7', 'r7_A', 'r7_A01', [0, 0, -1, 0, 8, 4], 'red');
    r7.addEndPoint(4.2, 'r7', 'r7_A', 'r7_A02', [0, 0, -1, 0, 8, 17.5], 'red');
    r7.addEndPoint(4.2, 'r7', 'r7_A', 'r7_A03', [0, 0, -1, 0, 8, 31], 'red');
    r7.addEndPoint(4.2, 'r7', 'r7_A', 'r7_A04', [0, 0, -1, 0, 8, 44.5], 'red');
    r7.addEndPoint(4.2, 'r7', 'r7_B', 'r7_B01', [0, 0, 0, 1, 8, 111.5], 'red');
    r7.addEndPoint(4.2, 'r7', 'r7_B', 'r7_B02', [0, 0, 0, 1, 8, 125], 'red');
    r7.addEndPoint(4.2, 'r7', 'r7_B', 'r7_B03', [0, 0, 0, 1, 8, 138.5], 'red');
    r7.addEndPoint(4.2, 'r7', 'r7_B', 'r7_B04', [0, 0, 0, 1, 8, 152], 'red');


    var r8 = new BoardController();
    r8.setJsPlumbInstance(jsPlumb);
    r8.setCircuitContainer('mid');

    r8.addEndPoint(4.2, 'r8', 'r8_A', 'r8_A01', [0, 0, -1, 0, 8, 4], 'red');
    r8.addEndPoint(4.2, 'r8', 'r8_A', 'r8_A02', [0, 0, -1, 0, 8, 17.5], 'red');
    r8.addEndPoint(4.2, 'r8', 'r8_A', 'r8_A03', [0, 0, -1, 0, 8, 31], 'red');
    r8.addEndPoint(4.2, 'r8', 'r8_A', 'r8_A04', [0, 0, -1, 0, 8, 44.5], 'red');
    r8.addEndPoint(4.2, 'r8', 'r8_B', 'r8_B01', [0, 0, 0, 1, 8, 111.5], 'red');
    r8.addEndPoint(4.2, 'r8', 'r8_B', 'r8_B02', [0, 0, 0, 1, 8, 125], 'red');
    r8.addEndPoint(4.2, 'r8', 'r8_B', 'r8_B03', [0, 0, 0, 1, 8, 138.5], 'red');
    r8.addEndPoint(4.2, 'r8', 'r8_B', 'r8_B04', [0, 0, 0, 1, 8, 152], 'red');



    var r9 = new BoardController();
    r9.setJsPlumbInstance(jsPlumb);
    r9.setCircuitContainer('mid');

    r9.addEndPoint(4.2, 'r9', 'r9_A', 'r9_A01', [0, 0, -1, 0, 8, 4], 'red');
    r9.addEndPoint(4.2, 'r9', 'r9_A', 'r9_A02', [0, 0, -1, 0, 8, 17.5], 'red');
    r9.addEndPoint(4.2, 'r9', 'r9_A', 'r9_A03', [0, 0, -1, 0, 8, 31], 'red');
    r9.addEndPoint(4.2, 'r9', 'r9_A', 'r9_A04', [0, 0, -1, 0, 8, 44.5], 'red');
    r9.addEndPoint(4.2, 'r9', 'r9_B', 'r9_B01', [0, 0, 0, 1, 8, 111.5], 'red');
    r9.addEndPoint(4.2, 'r9', 'r9_B', 'r9_B02', [0, 0, 0, 1, 8, 125], 'red');
    r9.addEndPoint(4.2, 'r9', 'r9_B', 'r9_B03', [0, 0, 0, 1, 8, 138.5], 'red');
    r9.addEndPoint(4.2, 'r9', 'r9_B', 'r9_B04', [0, 0, 0, 1, 8, 152], 'red');
}