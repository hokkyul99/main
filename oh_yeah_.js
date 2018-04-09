function drawSponge(x, y,big){
//face
fill(255,255,0);
rect(x,y,big*3,big*4);
fill(171,74,18);
rect(x,y+big*3,big*3,big*1);
fill(255);
rect(x,y+big*3,big*3,big*0.35);
triangle(x+big*1.5,y+big*3,x+big*1.10,y+big*3.00,x+big*1.30,y+big*3.10);
triangle(x+big*1.5,y+big*3,x+big*1.90,y+big*3.00,x+big*1.70,y+big*3.10);

//necktie
fill(255,0,0);
noStroke();
triangle(x+big*1.5,y+big*3,x+big*1.40,y+big*3.09,x+big*1.6,y+big*3.09);
triangle(x+big*1.5,y+big*3,x+big*1.40,y+big*3.5,x+big*1.6,y+big*3.50);
triangle(x+big*1.40,y+big*3.50,x+big*1.6,y+big*3.5,x+big*1.50,y+big*3.70);

//belt
fill(0);
rect(x+big*0.30,y+big*3.45,big*0.3,big*0.1);
rect(x+big*0.90,y+big*3.45,big*0.3,big*0.1);
rect(x+big*1.85,y+big*3.45,big*0.3,big*0.1);
rect(x+big*2.45,y+big*3.45,big*0.3,big*0.1);

//eyes
fill(255);
stroke(0);
ellipse(x+big*0.95,y+big*1.30,big*1.1,big*1.1);
ellipse(x+big*2.05,y+big*1.30,big*1.1,big*1.1);

//nose
fill(255,255,0);
arc(x+big*1.50,y+big*1.60,big*0.3,big*0.5,HALF_PI+QUARTER_PI,TWO_PI+QUARTER_PI,OPEN);

//eyeblow
fill(0);
quad(x+big*0.50,y+big*0.75,x+big*0.53,y+big*0.72,x+big*0.59,y+big*0.87,x+big*0.57,y+big*0.88);
quad(x+big*0.90,y+big*0.75,x+big*0.94,y+big*0.75,x+big*0.94,y+big*0.60,x+big*0.90,y+big*0.60);
quad(x+big*1.27,y+big*0.85,x+big*1.31,y+big*0.88,x+big*1.33,y+big*0.69,x+big*1.29,y+big*0.70);
quad(x+big*1.62,y+big*0.75,x+big*1.65,y+big*0.72,x+big*1.71,y+big*0.87,x+big*1.69,y+big*0.88);
quad(x+big*2.02,y+big*0.75,x+big*2.08,y+big*0.75,x+big*2.06,y+big*0.60,x+big*2.02,y+big*0.60);
quad(x+big*2.39,y+big*0.85,x+big*2.43,y+big*0.88,x+big*2.45,y+big*0.69,x+big*2.41,y+big*0.70);

//eyeround
fill(67,218,236);
ellipse(x+big*1.15,y+big*1.30,big*0.3,big*0.3);
ellipse(x+big*1.85,y+big*1.30,big*0.3,big*0.3);
fill(0);
ellipse(x+big*1.15,y+big*1.30,big*0.1,big*0.1);
ellipse(x+big*1.85,y+big*1.30,big*0.1,big*0.1);

//mouse
fill(255,255,0,0);
curve(x+big*1.50,y-big*2.00,x+big*0.40,y+big*1.75,x+big*2.60,y+big*1.75,x+big*1.50,y-big*2.00);

//tooth
fill(255);
quad(x+big*1.20,y+big*2.20,x+big*1.40,y+big*2.22,x+big*1.37,y+big*2.37,x+big*1.17,y+big*2.35);
quad(x+big*1.80,y+big*2.20,x+big*1.60,y+big*2.22,x+big*1.63,y+big*2.37,x+big*1.83,y+big*2.35);

//balltouch
stroke(255,0,0);
fill(255,255,0);
arc(x+big*0.40,y+big*1.70,big*0.4,big*0.3,HALF_PI + QUARTER_PI , TWO_PI + QUARTER_PI, OPEN);
arc(x+big*2.60,y+big*1.70,big*0.4,big*0.3,HALF_PI + QUARTER_PI , TWO_PI + QUARTER_PI, OPEN);
fill(255,0,0);
ellipse(x+big*0.39,y+big*1.72,big*0.02,big*0.02);
ellipse(x+big*0.30,y+big*1.65,big*0.02,big*0.02);
ellipse(x+big*0.47,y+big*1.64,big*0.02,big*0.02);

ellipse(x+big*2.61,y+big*1.72,big*0.02,big*0.02);
ellipse(x+big*2.70,y+big*1.65,big*0.02,big*0.02);
ellipse(x+big*2.53,y+big*1.64,big*0.02,big*0.02);

//point
fill(0,150,0,150);
noStroke();
ellipse(x+big*2.61,y+big*2.50,big*0.3,big*0.15);
ellipse(x+big*2.40,y+big*2.80,big*0.18,big*0.08);
ellipse(x+big*0.40,y+big*2.80,big*0.3,big*0.15);
ellipse(x+big*0.44,y+big*2.50,big*0.18,big*0.08);
ellipse(x+big*0.40,y+big*0.30,big*0.3,big*0.15);
ellipse(x+big*0.30,y+big*0.55,big*0.18,big*0.08);
ellipse(x+big*2.70,y+big*0.50,big*0.2,big*0.1);

//arm
stroke(1);
fill(255,255,0);
ellipse(x+big*4.25,y+big*1.70,big*0.15,big*0.40);
ellipse(x+big*4.60,y+big*1.85,big*0.40,big*0.10);
ellipse(x+big*4.60,y+big*1.97,big*0.40,big*0.10);
ellipse(x+big*4.57,y+big*2.09,big*0.40,big*0.10);
quad(x+big*3.00,y+big*2.35,x+big*3.00,y+big*2.45,x+big*4.20,y+big*2.00,x+big*4.15,y+big*1.90);
noStroke();
ellipse(x+big*4.30,y+big*1.95,big*0.38,big*0.38);
stroke(1);
ellipse(x-big*1.25,y+big*1.70,big*0.15,big*0.40);
ellipse(x-big*1.60,y+big*1.85,big*0.40,big*0.10);
ellipse(x-big*1.60,y+big*1.97,big*0.40,big*0.10);
ellipse(x-big*1.57,y+big*2.09,big*0.40,big*0.10);
quad(x,y+big*2.35,x,y+big*2.45,x-big*1.20,y+big*2.00,x-big*1.15,y+big*1.90);
noStroke();
ellipse(x-big*1.30,y+big*1.95,big*0.38,big*0.38);
fill(255);
stroke(1);
quad(x+big*3.00,y+big*2.30,x+big*3.00,y+big*2.50,x+big*3.33,y+big*2.45,x+big*3.30,y+big*2.15);
quad(x,y+big*2.30,x,y+big*2.50,x-big*0.33,y+big*2.45,x-big*0.30,y+big*2.15);
noFill();
curve(x+big*4.30,y+big*2.33,x+big*4.15,y+big*2.00,x+big*4.30,y+big*1.95,x+big*4.30,y+big*2.33);
curve(x-big*1.30,y+big*2.33,x-big*1.15,y+big*2.00,x-big*1.30,y+big*1.95,x-big*1.30,y+big*2.33);

//leg
fill(255,255,0);
rect(x+big*0.65,y+big*4.00,big*0.10,big*1);
rect(x+big*2.25,y+big*4.00,big*0.10,big*1);
fill(255);
rect(x+big*0.65,y+big*4.70,big*0.10,big*0.40);
rect(x+big*2.25,y+big*4.70,big*0.10,big*0.40);
fill(0,0,255);
rect(x+big*0.65,y+big*4.73,big*0.10,big*0.02);
rect(x+big*2.25,y+big*4.73,big*0.10,big*0.02);
fill(255,0,0);
rect(x+big*0.65,y+big*4.80,big*0.10,big*0.02);
rect(x+big*2.25,y+big*4.80,big*0.10,big*0.02);
fill(171,74,18);
quad(x+big*0.55,y+big*4.00,x+big*0.85,y+big*4.00,x+big*0.90,y+big*4.20,x+big*0.50,y+big*4.20);
quad(x+big*2.45,y+big*4.00,x+big*2.15,y+big*4.00,x+big*2.10,y+big*4.20,x+big*2.50,y+big*4.20);
fill(0);
ellipse(x+big*0.55,y+big*5.10,big*0.50,big*0.20);
ellipse(x+big*2.45,y+big*5.10,big*0.50,big*0.20);
}
function drawCloud(x, y, z, w, r, g, b)
{
  noStroke();
  fill(r,g,b);
  ellipse(x,y,z,z);
  ellipse(x-w,y,0.8*z,0.8*z);
  ellipse(x+w,y,0.8*z,0.8*z);
}
function drawManbo(x, y, size){ 
   strokeWeight(size*0.007);
 
  //ear
  fill(0,100,105);
  arc(x-size*0.2,y-size*0.6,size*0.3,size*0.24,radians(274.4),radians(339));
  arc(x+size*0.2,y-size*0.6,size*0.3,size*0.24,radians(201),radians(265.8));
  arc(x,y-size*0.62,size*0.45,size*0.4,radians(172.5),radians(210));
  arc(x,y-size*0.62,size*0.45,size*0.4,radians(330.5),radians(367.5));
 
  //arm
  ellipse(x,y+size*0.04,size*1.16,size*0.4);
  arc(x,y+size*0.2,size*1.22,size*1.15,radians(200),radians(340));
 
  //head
  ellipse(x,y-0.48*size,size*0.55,size*0.4);

  //face
  noStroke();
  fill(255,245,220);
  ellipse(x, y-0.42*size,size*0.40,size*0.30);
  fill(0,100,105);
  arc(x,y-0.65*size,size*0.2,size*0.2,radians(20),radians(160));
 
  //eye
  strokeWeight(size*0.007);
  stroke(0);
  line(x-size*0.15,y-size*0.495,x-size*0.07,y-size*0.505);
  line(x+size*0.15,y-size*0.495,x+size*0.07,y-size*0.505);
 
  //tooth
  noFill();
  arc(x,y-0.45*size,size*0.12,size*0.1,radians(189),radians(210));
  arc(x-size*0.102,y-0.45*size,size*0.13,size*0.1,radians(330),radians(350));
  arc(x,y-0.45*size,size*0.12,size*0.1,radians(330),radians(351));
  arc(x+size*0.102,y-0.45*size,size*0.13,size*0.1,radians(190),radians(210));
 
  //mouse
  arc(x,y,size,size*0.92,radians(263),radians(277));
 
  //body
  stroke(0);
  fill(0,100,105);
  ellipse(x,y-size*0.02, size*0.98,size*0.75);
  
  //Bae?
  strokeWeight(size*0.007);
  fill(255,245,220);
  arc(x,y, size,size*0.79,radians(230), radians(310));
  arc(x,y-size*0.353,size,size*0.9,radians(48),radians(133));
  arc(x-size*0.11,y-size*0.105,size*0.9,size*1.2,radians(340.8),radians(368));
  arc(x+size*0.105,y-size*0.105,size*0.9,size*1.2,radians(172),radians(199)); 
  fill(0,100,105);
  arc(x,y+0.15*size,size*0.5,size*0.25,radians(222),radians(318));
  noStroke();
  arc(x,y+0.15*size,size*0.5-size*0.007,size*0.25-size*0.007,radians(180),radians(360));
  ellipse(x,y+0.15*size,size*0.3,size*0.2);
 
 //foot 
  stroke(0);
  fill(255,245,220);
  ellipse(x-size*0.29,y+size*0.3,size*0.38,size*0.3);
  ellipse(x+size*0.29,y+size*0.3,size*0.38,size*0.3);
  fill(170,117,87);
  ellipse(x-size*0.29,y+size*0.3,size*0.18,size*0.13);
  ellipse(x+size*0.29,y+size*0.3,size*0.18,size*0.13);
    
  //lettering?
  strokeWeight(size*0.013);
  line(x-size*0.45,y-size*0.48,x-size*0.38,y-size*0.48);
  line(x-size*0.45,y-size*0.48,x-size*0.38,y-size*0.55);
  line(x-size*0.45,y-size*0.55,x-size*0.38,y-size*0.55);
  line(x-size*0.44,y-size*0.51,x-size*0.40,y-size*0.51);
  strokeWeight(size*0.01);
  line(x-size*0.4,y-size*0.44,x-size*0.35,y-size*0.46);
  line(x-size*0.35,y-size*0.46,x-size*0.37,y-size*0.4);
  line(x-size*0.37,y-size*0.4,x-size*0.33,y-size*0.42);
  line(x-size*0.38,y-size*0.43,x-size*0.34,y-size*0.44);
}

function btropg(x, y, h, s) {

  x= x*(1/s);
  y= y*(1/s);
  scale(s);
  float hy = y-(h*5);
  //foot...?
  stroke(0);
  strokeWeight(0.5);
  fill(#FA9714);
  triangle(x, y, x+10, y+10, x-10, y+10);
  triangle(x, y, x+17, y+5, x+10, y+10);
  triangle(x, y, x-17, y+5, x-10, y+10);

  quad(x+10, y+10, x-10, y+10, x-15, y+20, x+15, y+20);
  quad(x-10, y+10, x-15, y+20, x-25, y+15, x-17, y+5);
  quad(x+10, y+10, x+15, y+20, x+25, y+15, x+17, y+5);

  strokeWeight(2);
  stroke(0);
  line(x-5, y+1, x-40, y-10);
  line(x-40, y-10, x-50, y+40);

  line(x-5, y+2, x-20, y+10);
  line(x-20, y+10, x-30, y+50);

  line(x+5, y+2, x+20, y+10);
  line(x+20, y+10, x+30, y+50);


 line(x+5, y+1, x+40, y-10);
  line(x+40, y-10, x+50, y+40);

  //body
  strokeWeight(0.3);
  stroke(0);
  for (var i =1; i<=h; i++ ) {
    fill(150);
    ellipse(x, y-(i*5), 30, 13);
  }

  //head
  fill(#E39C40);
  triangle(x, hy, x, hy-10, x-30, hy-20);
  fill(#FFC271);
  triangle(x, hy, x+30, hy-20, x, hy-10);//buttom

  fill(#F7AD4B);
  triangle(x, hy-10, x+30, hy-20, x+20, hy-70);
  fill(#E3A049);
  triangle(x, hy-10, x-30, hy-20, x-20, hy-70);
  fill(#FF9E1F);
  triangle(x, hy-10, x-20, hy-70, x+20, hy-70);//middle middle
  fill(#E39C40);
  triangle(x-30, hy-20, x-30, hy-75, x-20, hy-70);
  fill(#FFC271);
  triangle(x+30, hy-20, x+30, hy-75, x+20, hy-70);//side middle

  fill(#E39C40);
  triangle(x, hy-95, x-20, hy-70, x+20, hy-70);
  triangle(x, hy-95, x-30, hy-75, x-20, hy-70);
  triangle(x, hy-95, x+30, hy-75, x+20, hy-70);//top


  stroke(#FA9714);
  strokeWeight(2);
  line(x+15, hy, x+30, hy+30);
  line(x+12, hy+5, x+20, hy+40);
  line(x-12, hy+5, x-20, hy+40);
  line(x-15, hy, x-30, hy+30);
}

function drawMike( x, y, size){
   noStroke(); 
   fill(150);
   triangle(x-180,y-190,x-160,y-120,x-100,y-130);
   
   fill(150);
   triangle(x+180,y-190,x+150,y-120,x+80,y-130);
   
   fill(120,225,140);
   ellipse(x,y,size,size);
   
   fill(255);
   ellipse(x,y-50,size/2,size/2);
   
   fill(100,200,100);
   noStroke();
   ellipse(x,y-50,size/5,size/5);
   
   fill(0);
   ellipse(x,y-50,size/10,size/10);
   
   fill(255);
   ellipse(x-25,y-55,size/15,size/15);
   
   fill(0);
   ellipse(x,y+120,size/3,size/9);
   
   fill(224,41,41);
   ellipse(x,y+132,size/6,size/19);
   
   fill(255);
   triangle(x+40,y+118,x+35,y+102,x+45,y+105);
   
  }
function drawSSU(sizescale)
{
  scale(sizescale);
  //1
  noStroke();
  fill(7,81,128);
  rect(27,26,53,199);
  triangle(99, 26, 43, 27, 67, 89);
  curve(-384, 43, 51, 224, 70, 103, -384, -414);
  curve(140, 844, 85, 145, 62, 26, -332, 118);
  
  //2
  fill(60,169,200);
  rect(135,82,53,200);
  curve(74, 305, 176, 158, 188, 281, -12, 396);
  curve(270, 86, 136, 82, 135, 158, 292, 320);
  fill(255);
  curve(60, 305, 133, 159, 134, 282, -87, 351);
  curve(288, 137, 191, 82, 189, 168, 338, 262);
  
 //3
  fill(55,203,208);
  rect(225,25,139,195);
  curve(254, 97, 225, 26, 227, 112, 516, 470);
  fill(255);
  curve(24, -12, 223, 105, 225, 227, -110, 192);
  
  //4
  fill(63,84,124);
  rect(386,78,64,171);
  ellipse(418,250,64,63);
  
  //5
  fill(54,159,185);
  rect(474,23,108,203);
  fill(255);
  rect(473,13,10,203);
  curve(575, 23, 472, 139, 469, 227, 240, 184);
}


function drawGirl(x, y, c1, c2, c3, length){
var i;
color from = color(c1,c2,c3);
color to = color(c1-20,c2-116,c3-65);
color interA;
color fromB = color(c1-14,c2-34,c3-34);
color toB = color(c1-24,c2-134,c3-74);
color interB;



for(i=0;i<=length-10;i++){
  interB = lerpColor(fromB,toB,.01*i);
  stroke(interB);
  line(x-55,i+y-10,x+55,i+y-10);
}


//body
stroke(234,208,145);
fill(234,208,145);
ellipse(x,y+45,80,40);


//legs
stroke(255,236,230);
fill(255,236,230);
rect(x-32,y+60,30,50);
rect(x+3,y+60,30,50);

//shoes
stroke(87,91,93);
fill(87,91,93);
rect(x-32,y+100,30,10);
rect(x+3,y+100,30,10);

//skirts
stroke(135,135,135);
fill(135,135,135);
rect(x-35,y+50,70,25);

stroke(234,208,145);
fill(234,208,145);
rect(x-40,y+25,80,30);
ellipse(x,y+35,65,60);

stroke(255);
fill(255);
ellipse(x-28,y+30,40,40);
ellipse(x+28,y+30,40,40);


//shirts
stroke(245);
fill(245);
triangle(x,y+30,x-20,y,x+20,y);

stroke(242,196,186);
fill(242,196,186);
ellipse(x,y+5,20,15);

stroke(255);
fill(255);
triangle(x,y+15,x-15,y+25,x-15,y);
triangle(x,y+15,x+15,y+25,x+15,y);

stroke(196,71,61);
fill(196,71,61);
triangle(x-2,y+16,x-8,y+55,x-12,y+52);
triangle(x+2,y+16,x+8,y+55,x+12,y+52);
triangle(x,y+15,x-17,y+23,x-6,y+25);
triangle(x,y+15,x+17,y+23,x+6,y+25);
rect(x-2,y+15,3,5);

//hand
stroke(255,236,230);
fill(255,236,230);
ellipse(x-25,y+23,35,30);
ellipse(x+25,y+23,35,30);


//hair1
stroke(from);
fill(from);
ellipse(x,y-60,150,130);
rect(x-75,y-60,150,50);

for(i=0;i<=length;i++){
  interA = lerpColor(from,to,.01*i);
  stroke(interA);
  line(7*sin(0.08*i-1.3)+x-68,i+y-10,7*sin(0.08*i-0.5)+x-40,i+y-10);
  line(-7*sin(0.08*i-0.5)+x+40,i+y-10,-7*sin(0.08*i-1.3)+x+68,i+y-10);

}


//head
stroke(255,243,239);
fill(255,243,239);
ellipse(x,y-35,97,80);
ellipse(x,y-14,100,45);

//hair2
stroke(from);
fill(from);
arc(x-42,y-70,50,70,-QUARTER_PI,HALF_PI+QUARTER_PI);
arc(x-17,y-80,70,70,-QUARTER_PI-HALF_PI,HALF_PI);
arc(x+40,y-70,50,70,QUARTER_PI,QUARTER_PI+PI);



//chick
stroke(246,215,214);
fill(246,215,214);
ellipse(x-35,y-14,29,25);
ellipse(x+36,y-14,29,25);

//left eye
stroke(117,77,54);
fill(117,77,54);
ellipse(x-30,y-30,30,25);
arc(x-50,y-32,20,15,-QUARTER_PI,HALF_PI+QUARTER_PI);

stroke(255);
fill(255);
ellipse(x-28,y-26,26,20);

stroke(c1-67,c2-7,c3+54);
fill(c1-67,c2-7,c3+54);
ellipse(x-25,y-26,20,20);


//right eye
stroke(117,77,54);
fill(117,77,54);
ellipse(x+30,y-30,30,25);
arc(x+50,y-32,20,15,QUARTER_PI,PI+QUARTER_PI);

stroke(255);
fill(255);
ellipse(x+29,y-26,26,20);

stroke(c1-67,c2-7,c3+54);
fill(c1-67,c2-7,c3+54);
ellipse(x+25,y-26,20,20);

//pupils
stroke(c1-130,c2+60,c3+6);
fill(c1-130,c2+60,c3+6);
ellipse(x+25,y-28,18,15);
ellipse(x-25,y-28,18,15);

stroke(c1-124,c2-102,c3-36);
fill(c1-124,c2-102,c3-36);
ellipse(x+25,y-26,10,13);
ellipse(x-25,y-26,10,13);

stroke(0,70);
fill(0,70);
ellipse(x+29,y-33,25,20);
ellipse(x-28,y-33,25,20);


//lights
stroke(255);
fill(255);
ellipse(x+22,y-31,8,5);
ellipse(x-29,y-31,8,5);

//eyebrow
stroke(c1-56,c2-67,c3-67);
fill(c1-56,c2-67,c3-67);
ellipse(x+25,y-55,25,7);
ellipse(x-27,y-55,25,7);


//mouth
stroke(249,126,118);
fill(249,126,118);
ellipse(x,y-5,10,5);

}

function draw(){
  background(122,213,234);
  strokeWeight(1);
  drawCloud(430,130,90,50,255,255,255);
  drawCloud(210,350,50,30,255,255,255);
  fill(204,171,85);
  stroke(204,171,85);
  rect(0,480,500,20);
  stroke(0);
  drawSponge(-80,-295,150);

  drawGirl(300,380,243,138,104,110);
  drawCloud(300,395,70,20,246,175,198);
  btropg(300,250,1,0.3);
  drawMike(700,700,400);
  stroke(255);
  strokeWeight(8);
  line(700,900,870,1400);
  line(1300,900,1130,1400);
  strokeWeight(1);
  stroke(0);
  drawManbo(1300,800,400);
  strokeWeight(1);
  drawSSU(0.5);
}