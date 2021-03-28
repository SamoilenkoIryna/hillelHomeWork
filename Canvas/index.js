const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//тело
ctx.beginPath();
ctx.arc(250, 150, 50, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(250, 275, 75, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(250, 450, 100, 0, Math.PI * 2);
ctx.stroke();

//пуговка центр
ctx.beginPath();
ctx.arc(250, 245, 10, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.arc(250, 305, 10, 0, Math.PI * 2);
ctx.fill();

//глаза и нос
ctx.beginPath();
ctx.arc(230, 145, 10, 0, Math.PI * 2);
ctx.arc(270, 145, 10, 0, Math.PI * 2);
ctx.fill();
ctx.fillStyle = 'orange';
ctx.beginPath();
ctx.arc(250, 160, 10, 0, Math.PI * 2);
ctx.fill();

//поговки низ
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(250, 380, 10, 0, Math.PI * 2);
ctx.arc(250, 440, 10, 0, Math.PI * 2);
ctx.arc(250, 510, 10, 0, Math.PI * 2);
ctx.fill();

// ноги
ctx.beginPath();
ctx.arc(200, 549, 25, 0, Math.PI, true);
ctx.arc(295, 549, 25, 0, Math.PI, true);
ctx.fill();