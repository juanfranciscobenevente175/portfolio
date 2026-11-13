import React, { useEffect, useRef } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Cube {
  x: number;
  y: number;
  z: number;
  size: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  speedRotX: number;
  speedRotY: number;
  speedY: number;
  color: string;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Floating futuristic 3D cubes in neon red & sleek dark accents
    const cubes: Cube[] = Array.from({ length: 15 }, () => ({
      x: (Math.random() - 0.5) * width * 1.3,
      y: (Math.random() - 0.5) * height * 1.3,
      z: Math.random() * 600 + 180,
      size: Math.random() * 26 + 18,
      rotX: Math.random() * Math.PI,
      rotY: Math.random() * Math.PI,
      rotZ: Math.random() * Math.PI,
      speedRotX: (Math.random() - 0.5) * 0.016,
      speedRotY: (Math.random() - 0.5) * 0.016,
      speedY: - (Math.random() * 0.35 + 0.15),
      color: Math.random() > 0.3 ? '#FF1E44' : '#FF0033',
    }));

    // Ambient floating neon particles
    const particles: Particle[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.7 + 0.2,
      color: Math.random() > 0.25 ? '#FF1E44' : '#FFFFFF',
    }));

    // Futuristic cyber telemetry code lines
    const codeLines = [
      'SYSTEM.INIT({ core: "NEON_RED_PROTOCOL", status: 200 })',
      'const agent = new GeminiAgent({ model: "gemini-2.5-flash", auth: true });',
      'await agent.orchestrate({ pipeline: "AUTONOMOUS", precision: 0.999 });',
      'render(<GlassmorphismView theme="CYBER_RED_MINIMAL" />)',
      'export interface QuantumState { signal: "NEON_ACTIVE", latency: "1.2ms" }',
      'const matrixWeights = [0.99, 0.94, 0.88, 1.00];'
    ];

    // Projection calculation for 3D Cube
    const project = (p: Point3D, fov: number, cx: number, cy: number) => {
      const scale = fov / (fov + p.z);
      return {
        x: p.x * scale + cx,
        y: p.y * scale + cy,
        scale,
      };
    };

    const render = () => {
      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Base background: Deep black
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // Radial ambient lighting: Glowing Neon Red
      const glowNeonRed = ctx.createRadialGradient(
        width * 0.85 + (mouseX - width / 2) * 0.06,
        height * 0.25 + (mouseY - height / 2) * 0.06,
        15,
        width * 0.85,
        height * 0.25,
        width * 0.55
      );
      glowNeonRed.addColorStop(0, 'rgba(255, 30, 68, 0.20)');
      glowNeonRed.addColorStop(0.5, 'rgba(180, 0, 40, 0.08)');
      glowNeonRed.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glowNeonRed;
      ctx.fillRect(0, 0, width, height);

      // Secondary Crimson Glow
      const glowCrimson = ctx.createRadialGradient(
        width * 0.15 - (mouseX - width / 2) * 0.06,
        height * 0.75 - (mouseY - height / 2) * 0.06,
        15,
        width * 0.15,
        height * 0.75,
        width * 0.48
      );
      glowCrimson.addColorStop(0, 'rgba(255, 0, 51, 0.15)');
      glowCrimson.addColorStop(0.6, 'rgba(120, 0, 25, 0.06)');
      glowCrimson.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glowCrimson;
      ctx.fillRect(0, 0, width, height);

      // Faint cyber code overlay in the background
      ctx.font = '12px "JetBrains Mono", monospace';
      codeLines.forEach((line, index) => {
        const xPos = width * 0.65 + (mouseX - width / 2) * 0.02;
        const yPos = 85 + index * 26 + (mouseY - height / 2) * 0.02;
        ctx.fillStyle = index % 2 === 0 ? 'rgba(255, 30, 68, 0.10)' : 'rgba(255, 255, 255, 0.04)';
        ctx.fillText(line, xPos, yPos);
      });

      // Futuristic Neon Red signal lines / frequency pulses
      const signalSpacing = 34;
      const signalCount = Math.floor(width / signalSpacing);
      for (let i = 0; i < signalCount; i++) {
        if (i % 3 === 0) {
          const sx = i * signalSpacing;
          const sy = height * 0.70 + Math.sin(i * 0.5 + Date.now() * 0.0012) * 35;
          const sHeight = 25 + Math.abs(Math.sin(i + Date.now() * 0.0018) * 55);

          // Neon red bar
          ctx.fillStyle = 'rgba(255, 30, 68, 0.12)';
          ctx.fillRect(sx, sy - sHeight / 2, 3, sHeight);

          // Intense core beam
          ctx.fillStyle = 'rgba(255, 30, 68, 0.28)';
          ctx.fillRect(sx + 0.5, sy - sHeight * 0.7, 2, sHeight * 1.4);
        }
      }

      // Draw floating neon particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color === '#FF1E44' 
          ? `rgba(255, 30, 68, ${p.opacity})` 
          : `rgba(255, 255, 255, ${p.opacity * 0.7})`;
        ctx.fill();

        // Neon spark halo
        if (p.color === '#FF1E44' && p.size > 1.8) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 30, 68, ${p.opacity * 0.2})`;
          ctx.fill();
        }
      });

      // Draw 3D Cubes
      const fov = 450;
      const cx = width / 2 + (mouseX - width / 2) * 0.08;
      const cy = height / 2 + (mouseY - height / 2) * 0.08;

      cubes.forEach((cube) => {
        cube.rotX += cube.speedRotX;
        cube.rotY += cube.speedRotY;
        cube.y += cube.speedY;

        // Reset if float above screen
        if (cube.y < -height * 0.8) {
          cube.y = height * 0.8;
          cube.x = (Math.random() - 0.5) * width * 1.3;
        }

        const s = cube.size;
        const baseVerts = [
          { x: -s, y: -s, z: -s },
          { x: s, y: -s, z: -s },
          { x: s, y: s, z: -s },
          { x: -s, y: s, z: -s },
          { x: -s, y: -s, z: s },
          { x: s, y: -s, z: s },
          { x: s, y: s, z: s },
          { x: -s, y: s, z: s },
        ];

        // Rotate vertices
        const cosX = Math.cos(cube.rotX), sinX = Math.sin(cube.rotX);
        const cosY = Math.cos(cube.rotY), sinY = Math.sin(cube.rotY);

        const transformed = baseVerts.map((v) => {
          const y1 = v.y * cosX - v.z * sinX;
          const z1 = v.y * sinX + v.z * cosX;
          const x2 = v.x * cosY + z1 * sinY;
          const z2 = -v.x * sinY + z1 * cosY;

          return {
            x: x2 + cube.x,
            y: y1 + cube.y,
            z: z2 + cube.z,
          };
        });

        const projected = transformed.map((v) => project(v, fov, cx, cy));

        const edges = [
          [0, 1], [1, 2], [2, 3], [3, 0],
          [4, 5], [5, 6], [6, 7], [7, 4],
          [0, 4], [1, 5], [2, 6], [3, 7]
        ];

        // Neon Red wireframe glow
        ctx.strokeStyle = 'rgba(255, 30, 68, 0.55)';
        ctx.lineWidth = 1.3;

        edges.forEach(([i, j]) => {
          ctx.beginPath();
          ctx.moveTo(projected[i].x, projected[i].y);
          ctx.lineTo(projected[j].x, projected[j].y);
          ctx.stroke();
        });

        // Semi-transparent shaded face
        ctx.fillStyle = 'rgba(255, 30, 68, 0.06)';
        ctx.beginPath();
        ctx.moveTo(projected[4].x, projected[4].y);
        ctx.lineTo(projected[5].x, projected[5].y);
        ctx.lineTo(projected[6].x, projected[6].y);
        ctx.lineTo(projected[7].x, projected[7].y);
        ctx.closePath();
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ display: 'block' }}
    />
  );
};
