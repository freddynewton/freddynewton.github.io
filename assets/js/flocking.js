document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    let boids = [];
  
    function init() {
      for (let i = 0; i < 100; i++) {
        boids.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: Math.random() * 2 - 1,
          dy: Math.random() * 2 - 1
        });
      }
    }
  
    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      for (let boid of boids) {
        boid.x += boid.dx;
        boid.y += boid.dy;
  
        if (boid.x < 0) boid.x = canvas.width;
        if (boid.x > canvas.width) boid.x = 0;
        if (boid.y < 0) boid.y = canvas.height;
        if (boid.y > canvas.height) boid.y = 0;
  
        ctx.beginPath();
        ctx.arc(boid.x, boid.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.fill();
      }
  
      requestAnimationFrame(update);
    }
  
    init();
    update();
  
    window.addEventListener("resize", function() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  });