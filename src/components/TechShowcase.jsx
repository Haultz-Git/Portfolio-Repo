const roster = [
  { label: 'UNITY', glyph: 'U', color: '#2ee6f6' },
  { label: 'C SHARP', glyph: 'C#', color: '#ff2e88' },
  { label: 'REACT', glyph: 'R', color: '#2ee6f6' },
  { label: 'REACT NATIVE', glyph: 'RN', color: '#ffe14d' },
  { label: '.NET', glyph: '.N', color: '#ff2e88' },
  { label: 'JAVASCRIPT', glyph: 'JS', color: '#ffe14d' },
  { label: 'TYPESCRIPT', glyph: 'TS', color: '#2ee6f6' },
  { label: 'HTML / CSS', glyph: '</>', color: '#ff2e88' },
];

function RosterTile({ tile }) {
  return (
    <div className="w-[148px] border-2 border-line bg-void px-3.5 py-4.5 text-center transition-colors hover:border-[var(--tile-accent)]" style={{ '--tile-accent': tile.color }}>
      <div className="mb-3 font-pixel text-xl" style={{ color: tile.color }}>
        {tile.glyph}
      </div>
      <div className="font-mono text-xs tracking-wide text-ink-body">{tile.label}</div>
    </div>
  );
}

export default function TechShowcase() {
  return (
    <section id="stack" className="py-[clamp(40px,6vw,80px)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className="mb-2 font-pixel text-[clamp(18px,2.6vw,28px)] text-ink"
          style={{ textShadow: '0 0 24px rgba(255,46,136,0.4)' }}
        >
          CHOOSE YOUR TOOL
        </h2>
        <p className="mb-8 font-mono text-xs tracking-[2px] text-cyan">▶ ENGINE / FRAMEWORK ROSTER</p>

        <div
          className="group relative overflow-hidden border-t-2 border-b-2 border-line py-6.5"
          style={{
            background: 'linear-gradient(180deg, #150829 0%, #1f0d38 100%)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent 0, #000 40px, #000 calc(100% - 40px), transparent 100%)',
            maskImage: 'linear-gradient(90deg, transparent 0, #000 40px, #000 calc(100% - 40px), transparent 100%)',
          }}
        >
          <div className="animate-marquee flex w-max gap-4.5 px-2.5 group-hover:[animation-play-state:paused]">
            <div className="flex gap-4.5">
              {roster.map((tile) => (
                <RosterTile key={tile.label} tile={tile} />
              ))}
            </div>
            <div aria-hidden="true" className="flex gap-4.5">
              {roster.map((tile) => (
                <RosterTile key={`dup-${tile.label}`} tile={tile} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
