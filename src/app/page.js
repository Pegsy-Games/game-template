export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', margin: 0, letterSpacing: '-0.03em' }}>
        GAME_NAME
      </h1>
      <p style={{ color: 'var(--muted)', maxWidth: '30rem', marginTop: '1rem' }}>
        Replace this with your game. Start in <code>src/app/page.js</code>.
      </p>
    </main>
  );
}
