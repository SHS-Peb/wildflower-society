const colours = ["#f984e5", "#77acfb", "#6dc57f", "#f6a04d"];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

export default function StarField({ count = 38 }) {
  // Grid distribution:
  const columns = Math.ceil(Math.sqrt(count));
  const rows = Math.ceil(count / columns);

  const cellW = 100 / columns;
  const cellH = 100 / rows;

  const edge = 4;

  return (
    <div className="pointer-events-none fixed inset-0 z-5 hidden md:block">
      {Array.from({ length: count }).map((_, i) => {
        const col = i % columns;
        const row = Math.floor(i / columns);

        // Centre of each cell
        const baseLeft = col * cellW + cellW / 2;
        const baseTop = row * cellH + cellH / 2;

        // Jitter: 
        const jitterX = random(-cellW * 0.35, cellW * 0.35);
        const jitterY = random(-cellH * 0.35, cellH * 0.35);

        // Final position
        const left = Math.min(100 - edge, Math.max(edge, baseLeft + jitterX));
        const top = Math.min(100 - edge, Math.max(edge, baseTop + jitterY));

        // Star styling
        const size = random(45, 55);
        const duration = random(18, 35);
        const delay = random(0, 10);
        const colour = colours[i % colours.length];

        return (
          <div
            key={i}
            className="absolute animate-star-float"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              backgroundColor: colour,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
              opacity: 0.85,
            }}
          />
        );
      })}
    </div>
  );
}
