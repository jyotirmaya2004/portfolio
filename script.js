/* ============================================
   AUREATE MINIMAL — STRICT BLACK, WHITE & GOLD
   Pure JavaScript 3D Canvas Mesh & Animations
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Set Copyright Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --------------------------------------------
  // Three.js Interactive 3D Gold Particle Mesh
  // --------------------------------------------
  const canvas = document.getElementById('bg-canvas');
  if (canvas && typeof THREE !== 'undefined') {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particle Geometry
    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorGold = new THREE.Color(0xD4AF37);
    const colorWhite = new THREE.Color(0xFFFFFF);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;

      const mixColor = Math.random() > 0.3 ? colorGold : colorWhite;
      colors[i * 3] = mixColor.r;
      colors[i * 3 + 1] = mixColor.g;
      colors[i * 3 + 2] = mixColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 1.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse interactive movement
    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    // Resize listener
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);

      particles.rotation.y += 0.0015;
      particles.rotation.x += 0.0008;

      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    }
    animate();
  }

  // --------------------------------------------
  // Interactive Card Mouse 3D Tilt Effect
  // --------------------------------------------
  const card = document.getElementById('card');
  if (card && window.matchMedia('(hover: hover)').matches) {
    window.addEventListener('mousemove', (e) => {
      const { innerWidth, innerHeight } = window;
      const rotateX = ((e.clientY / innerHeight) - 0.5) * -10;
      const rotateY = ((e.clientX / innerWidth) - 0.5) * 10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  }

  // --------------------------------------------
  // GSAP Smooth Text Entrance Reveal
  // --------------------------------------------
  if (typeof gsap !== 'undefined') {
    gsap.from('.hero-title .line', { opacity: 0, y: 30, duration: 1.2, delay: 0.4, ease: 'power3.out' });
  }
});
