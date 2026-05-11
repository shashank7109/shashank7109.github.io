import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Shashank Bindal — Full-Stack & AI Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Background grid lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Accent radial glow — top-right */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-60px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(200,255,0,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Bottom-left glow */}
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-40px',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(15,118,110,0.14) 0%, transparent 70%)',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '64px 80px',
            height: '100%',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Top row — availability badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#c8ff00',
              }}
            />
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
              }}
            >
              Available for internships & collaboration
            </span>
          </div>

          {/* Center — name block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {/* Name */}
            <div
              style={{
                fontSize: 88,
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1,
                color: '#ffffff',
              }}
            >
              Shashank
            </div>
            <div
              style={{
                fontSize: 88,
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1,
                color: 'rgba(255,255,255,0.28)',
              }}
            >
              Bindal
            </div>

            {/* Divider */}
            <div
              style={{
                width: '80px',
                height: '2px',
                background: '#c8ff00',
                margin: '28px 0 24px',
              }}
            />

            {/* Role */}
            <div
              style={{
                fontSize: 26,
                fontWeight: 400,
                color: 'rgba(255,255,255,0.55)',
                letterSpacing: '0.01em',
              }}
            >
              Full-Stack & AI/ML Engineer · B.Tech IT @ RGIPT Amethi
            </div>
          </div>

          {/* Bottom row — tech pills + URL */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}
          >
            {/* Tech tags */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['Next.js', 'FastAPI', 'LangChain', 'AWS', 'RAG', 'Flutter'].map((tech) => (
                <div
                  key={tech}
                  style={{
                    padding: '6px 14px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '999px',
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.5)',
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>

            {/* URL */}
            <div
              style={{
                fontSize: 16,
                fontWeight: 500,
                letterSpacing: '0.05em',
                color: 'rgba(255,255,255,0.25)',
              }}
            >
              shashankbindal.me
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
