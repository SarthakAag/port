
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  opacity: number;
  connections: number[];
}

const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.min(60, Math.floor(window.innerWidth / 25));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 500 + 100,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          vz: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          connections: []
        });
      }
      
      particlesRef.current = particles;
    };

    const updateParticles = () => {
      const particles = particlesRef.current;
      
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;
        
        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.z < 50) particle.z = 600;
        if (particle.z > 600) particle.z = 50;
        
        // Calculate connections
        particle.connections = [];
        particles.forEach((other, j) => {
          if (i !== j) {
            const dx = particle.x - other.x;
            const dy = particle.y - other.y;
            const dz = particle.z - other.z;
            const distance = Math.sqrt(dx * dx + dy * dy + dz * dz * 0.1);
            
            if (distance < 120) {
              particle.connections.push(j);
            }
          }
        });
      });
    };

    const drawParticles = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      
      // Draw connections first
      particles.forEach((particle, i) => {
        particle.connections.forEach(connectionIndex => {
          if (connectionIndex > i) { // Avoid drawing connections twice
            const other = particles[connectionIndex];
            const dx = particle.x - other.x;
            const dy = particle.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120) {
              const opacity = (120 - distance) / 120 * 0.3;
              const perspective = Math.min(particle.z, other.z) / 600;
              
              ctx.save();
              ctx.globalAlpha = opacity * perspective;
              ctx.strokeStyle = `rgba(0, 217, 255, ${opacity})`;
              ctx.lineWidth = 0.5;
              ctx.setLineDash([2, 4]);
              
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
              ctx.restore();
            }
          }
        });
      });
      
      // Draw particles
      particles.forEach(particle => {
        const perspective = particle.z / 600;
        const size = particle.size * perspective;
        const opacity = particle.opacity * perspective;
        
        // Mouse interaction
        const mouseDistance = Math.sqrt(
          (particle.x - mouse.x) ** 2 + (particle.y - mouse.y) ** 2
        );
        const mouseEffect = Math.max(0, 100 - mouseDistance) / 100;
        
        ctx.save();
        ctx.globalAlpha = opacity + mouseEffect * 0.3;
        
        // Create glowing effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, size * 3
        );
        gradient.addColorStop(0, `rgba(0, 217, 255, ${opacity + mouseEffect * 0.5})`);
        gradient.addColorStop(0.3, `rgba(139, 92, 246, ${(opacity + mouseEffect * 0.5) * 0.6})`);
        gradient.addColorStop(1, 'rgba(0, 217, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw core
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity + mouseEffect * 0.8})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleNetwork;