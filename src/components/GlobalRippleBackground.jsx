import React, { useEffect, useRef } from 'react';

const GlobalRippleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let ripples = [];
    let particles = [];
    let mouse = { x: null, y: null };
    let lastMouse = { x: null, y: null };
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Initialize Particles (Galaxy Swirl)
    const numParticles = Math.floor((canvas.width * canvas.height) / 4000); // effectively doubling the density
    for (let i = 0; i < numParticles; i++) {
      const radiusFromCenter = Math.pow(Math.random(), 1.5) * Math.max(canvas.width, canvas.height) * 0.8;
      const arms = 4; // 4 tighter arms
      const armOffset = (Math.floor(Math.random() * arms) * (Math.PI * 2)) / arms;
      const spiralOffset = radiusFromCenter * 0.005; // tighter spiral
      const scatter = (Math.random() - 0.5) * (radiusFromCenter * 0.1 + 20);
      const angle = armOffset + spiralOffset + (Math.random() - 0.5) * 0.5;

      particles.push({
        radiusFromCenter: radiusFromCenter + scatter,
        angle: angle,
        speedAngle: 0.0002 + (150 / (radiusFromCenter + 100)) * 0.0015,
        z: Math.random() * 100, // For depth pulsing
        radius: Math.random() * 1.5 + 0.3, 
        colorBase: 'rgba(212, 175, 55, ', 
        opacity: Math.random() * 0.6 + 0.1,
        fadeSpeed: (Math.random() * 0.005) + 0.002,
        fadingOut: Math.random() > 0.5
      });
    }

    const handleMouseMove = (e) => {
      lastMouse.x = mouse.x;
      lastMouse.y = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (lastMouse.x !== null && lastMouse.y !== null) {
        const dx = mouse.x - lastMouse.x;
        const dy = mouse.y - lastMouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Ripples
        if (distance > 2) {
          ripples.push({
            x: mouse.x,
            y: mouse.y,
            radius: 5,
            maxRadius: 100 + Math.random() * 50,
            opacity: 0.6,
            expansionRate: 2 + Math.random() * 2,
            isGold: Math.random() > 0.6 // Increased gold ripples
          });
        }
      }
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
      lastMouse.x = null;
      lastMouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      time += 0.01;
      
      // Clear with very deep dark emerald background
      ctx.fillStyle = '#01150c'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // --- NEW DYNAMIC GOLD GLOWS ---
      // Breathing center-bottom gold glow
      const breatheGold = (Math.sin(time) + 1) / 2; // 0 to 1
      const centerBottomGlow = ctx.createRadialGradient(
        canvas.width / 2, canvas.height + 100, 0, 
        canvas.width / 2, canvas.height, canvas.width * 0.8
      );
      centerBottomGlow.addColorStop(0, `rgba(212, 175, 55, ${0.03 + breatheGold * 0.04})`); 
      centerBottomGlow.addColorStop(1, 'rgba(212, 175, 55, 0)');
      ctx.fillStyle = centerBottomGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Breathing top-right gold glow
      const trGlow = ctx.createRadialGradient(
        canvas.width, 0, 0, 
        canvas.width, 0, 800
      );
      trGlow.addColorStop(0, `rgba(212, 175, 55, ${0.04 + (1 - breatheGold) * 0.03})`); 
      trGlow.addColorStop(1, 'rgba(212, 175, 55, 0)');
      ctx.fillStyle = trGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // --- GALACTIC CORE ---
      const coreCenterX = canvas.width / 2;
      const coreCenterY = canvas.height / 2;
      const coreGlow = ctx.createRadialGradient(
        coreCenterX, coreCenterY, 0, 
        coreCenterX, coreCenterY, 300
      );
      coreGlow.addColorStop(0, 'rgba(212, 175, 55, 0.25)'); // Bright gold center
      coreGlow.addColorStop(0.2, 'rgba(212, 175, 55, 0.1)');
      coreGlow.addColorStop(1, 'rgba(212, 175, 55, 0)');
      
      // We apply a slight squash to the core to match the 3D tilt
      ctx.save();
      ctx.translate(coreCenterX, coreCenterY);
      ctx.scale(1, 0.5); // squash Y
      ctx.translate(-coreCenterX, -coreCenterY);
      ctx.fillStyle = coreGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height * 2);
      ctx.restore();


      // Mouse interaction glows
      if (mouse.x !== null && mouse.y !== null) {
        // Emerald mouse glow
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 400);
        gradient.addColorStop(0, 'rgba(15, 107, 75, 0.25)');
        gradient.addColorStop(1, 'rgba(15, 107, 75, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Intense small gold point at mouse
        const goldPoint = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 100);
        goldPoint.addColorStop(0, 'rgba(212, 175, 55, 0.05)');
        goldPoint.addColorStop(1, 'rgba(212, 175, 55, 0)');
        ctx.fillStyle = goldPoint;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      // Draw Particles
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        // Give particles a tiny glowing shadow
        ctx.shadowBlur = 5;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.4)';
        ctx.fillStyle = `${p.colorBase}${p.opacity})`;
        ctx.fill();
        ctx.shadowBlur = 0; // reset

        // Galaxy Orbit Movement
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        p.angle += p.speedAngle;
        p.z += 0.01;
        
        const currentRadius = p.radiusFromCenter + Math.sin(p.z) * 15;
        p.x = centerX + Math.cos(p.angle) * currentRadius;
        p.y = centerY + Math.sin(p.angle) * currentRadius * 0.5; // 0.5 gives a nice 3D tilt

        // Fade pulsing
        if (p.fadingOut) {
          p.opacity -= p.fadeSpeed;
          if (p.opacity <= 0.1) p.fadingOut = false;
        } else {
          p.opacity += p.fadeSpeed;
          if (p.opacity >= 0.9) p.fadingOut = true; // brighter particles
        }
      });

      // Draw Ripples
      for (let i = 0; i < ripples.length; i++) {
        const p = ripples[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        if (p.isGold) {
          ctx.strokeStyle = `rgba(212, 175, 55, ${p.opacity})`;
          ctx.lineWidth = 1.5;
        } else {
          ctx.strokeStyle = `rgba(16, 185, 129, ${p.opacity})`;
          ctx.lineWidth = 2;
        }
        ctx.stroke();

        p.radius += p.expansionRate;
        p.opacity -= 0.015;

        if (p.opacity <= 0 || p.radius >= p.maxRadius) {
          ripples.splice(i, 1);
          i--;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ width: '100vw', height: '100vh', background: '#01150c' }}
    />
  );
};

export default GlobalRippleBackground;
