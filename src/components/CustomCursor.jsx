import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId = null;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Immediate response for the inner dot
      dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (target && target.closest && target.closest('a, button, [data-cursor-hover], input, textarea')) {
        ring.classList.add('cursor-hovered');
      } else {
        ring.classList.remove('cursor-hovered');
      }
    };

    // Smooth snappy trailing loop for outer ring
    const render = () => {
      // Fast lerp (0.28 for instant responsiveness without lag)
      ringX += (mouseX - ringX) * 0.28;
      ringY += (mouseY - ringY) * 0.28;

      ring.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;
      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-cyan-400 pointer-events-none z-50 transition-[width,height,background-color,border-color] duration-150 ease-out hidden md:block"
        style={{ willChange: 'transform' }}
      />
      {/* Inner Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-50 hidden md:block"
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
