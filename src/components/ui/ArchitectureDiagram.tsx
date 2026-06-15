const C = {
  fg: '#5b4040',
  muted: '#a0807a',
  border: '#d4c5c0',
  accent: '#9e0027',
  surface: '#ffffff',
  subBg: '#f5f0ee',
};

const W = 80;
const H = 44;

function cx(x: number) {
  return x + W / 2;
}

export function ArchitectureDiagram() {
  return (
    <div className="bg-surface-container border border-outline-variant p-4 overflow-x-auto">
      <svg viewBox="0 0 900 360" className="w-full h-auto" style={{ minWidth: 900 }}>
        <defs>
          <marker id="as" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10Z" fill={C.fg} />
          </marker>
          <marker id="ad" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10Z" fill={C.accent} />
          </marker>
        </defs>

        {/* ============ TIER 1 ============ */}

        {/* Headers */}
        <text x={cx(40)} y={16} textAnchor="middle" fill={C.accent} fontSize="9" fontWeight="bold" letterSpacing="2">CLIENT</text>
        <text x={cx(200)} y={16} textAnchor="middle" fill={C.accent} fontSize="9" fontWeight="bold" letterSpacing="2">GATEWAY</text>
        <text x={cx(370)} y={16} textAnchor="middle" fill={C.accent} fontSize="9" fontWeight="bold" letterSpacing="2">API</text>
        <text x={cx(540)} y={16} textAnchor="middle" fill={C.accent} fontSize="9" fontWeight="bold" letterSpacing="2">STORAGE</text>

        {/* React */}
        <rect x={40} y={24} width={W} height={H} rx={2} fill={C.surface} stroke={C.border} strokeWidth={1} />
        <text x={cx(40)} y={42} textAnchor="middle" fill={C.fg} fontSize="10" fontWeight="bold">React SPA</text>
        <text x={cx(40)} y={56} textAnchor="middle" fill={C.muted} fontSize="8">TanStack Query</text>

        {/* Arrow */}
        <line x1={40 + W} y1={46} x2={200} y2={46} stroke={C.fg} strokeWidth={1} markerEnd="url(#as)" />
        <text x={cx(120)} y={40} textAnchor="middle" fill={C.muted} fontSize="7" letterSpacing="1">POST</text>

        {/* Bucket4j */}
        <rect x={200} y={24} width={W} height={H} rx={2} fill={C.surface} stroke={C.border} strokeWidth={1} />
        <text x={cx(200)} y={42} textAnchor="middle" fill={C.fg} fontSize="10" fontWeight="bold">Bucket4j</text>
        <text x={cx(200)} y={56} textAnchor="middle" fill={C.muted} fontSize="8">5 req/min/IP</text>

        {/* Arrow */}
        <line x1={200 + W} y1={46} x2={370} y2={46} stroke={C.fg} strokeWidth={1} markerEnd="url(#as)" />
        <text x={cx(285)} y={40} textAnchor="middle" fill={C.muted} fontSize="7" letterSpacing="1">THROTTLE</text>

        {/* Spring Boot */}
        <rect x={370} y={24} width={W} height={H} rx={2} fill={C.surface} stroke={C.border} strokeWidth={1} />
        <text x={cx(370)} y={42} textAnchor="middle" fill={C.fg} fontSize="10" fontWeight="bold">Spring Boot</text>
        <text x={cx(370)} y={56} textAnchor="middle" fill={C.muted} fontSize="8">REST Controller</text>

        {/* Arrow */}
        <line x1={370 + W} y1={46} x2={540} y2={46} stroke={C.fg} strokeWidth={1} markerEnd="url(#as)" />
        <text x={cx(455)} y={40} textAnchor="middle" fill={C.muted} fontSize="7" letterSpacing="1">SAVE (PENDING)</text>

        {/* PostgreSQL (cylinder) */}
        <ellipse cx={cx(540)} cy={28} rx={W / 2} ry={8} fill={C.surface} stroke={C.border} strokeWidth={1} />
        <rect x={540} y={28} width={W} height={36} fill={C.surface} stroke={C.border} strokeWidth={1} />
        <ellipse cx={cx(540)} cy={64} rx={W / 2} ry={8} fill={C.surface} stroke={C.border} strokeWidth={1} />
        <text x={cx(540)} y={48} textAnchor="middle" fill={C.fg} fontSize="10" fontWeight="bold">PostgreSQL</text>
        <text x={cx(540)} y={60} textAnchor="middle" fill={C.muted} fontSize="7">metadata + extracted</text>

        {/* ============ TIER 1 → TIER 2 ============ */}
        <line x1={cx(370)} y1={68} x2={cx(370)} y2={136} stroke={C.fg} strokeWidth={1} markerEnd="url(#as)" />
        <rect x={cx(370) - 38} y={86} width={76} height={16} rx={2} fill={C.subBg} stroke={C.border} strokeWidth={0.5} />
        <text x={cx(370)} y={98} textAnchor="middle" fill={C.muted} fontSize="7" letterSpacing="1">ENQUEUE DOC ID</text>

        {/* ============ TIER 2 ============ */}
        <text x={cx(370)} y={128} textAnchor="middle" fill={C.accent} fontSize="9" fontWeight="bold" letterSpacing="2">MESSAGING</text>

        {/* RabbitMQ */}
        <rect x={370} y={136} width={W} height={H} rx={2} fill={C.surface} stroke={C.border} strokeWidth={1} />
        <text x={cx(370)} y={154} textAnchor="middle" fill={C.fg} fontSize="10" fontWeight="bold">RabbitMQ</text>
        <text x={cx(370)} y={168} textAnchor="middle" fill={C.muted} fontSize="8">document.processing</text>

        {/* Arrow */}
        <line x1={370 + W} y1={158} x2={540} y2={158} stroke={C.fg} strokeWidth={1} markerEnd="url(#as)" />
        <text x={cx(455)} y={152} textAnchor="middle" fill={C.muted} fontSize="7" letterSpacing="1">NACK →</text>

        {/* DLQ */}
        <rect x={540} y={136} width={W} height={H} rx={2} fill={C.surface} stroke={C.border} strokeWidth={1} strokeDasharray="3,2" />
        <text x={cx(540)} y={154} textAnchor="middle" fill={C.fg} fontSize="10" fontWeight="bold">DLQ</text>
        <text x={cx(540)} y={168} textAnchor="middle" fill={C.muted} fontSize="8">retries exhausted</text>

        {/* ============ TIER 2 → TIER 3 ============ */}
        <line x1={cx(370)} y1={180} x2={cx(370)} y2={248} stroke={C.fg} strokeWidth={1} markerEnd="url(#as)" />
        <rect x={cx(370) - 34} y={200} width={68} height={16} rx={2} fill={C.subBg} stroke={C.border} strokeWidth={0.5} />
        <text x={cx(370)} y={212} textAnchor="middle" fill={C.muted} fontSize="7" letterSpacing="1">DELIVER</text>

        {/* ============ TIER 3 ============ */}
        <text x={cx(370)} y={240} textAnchor="middle" fill={C.accent} fontSize="9" fontWeight="bold" letterSpacing="2">WORKER</text>

        {/* Consumer */}
        <rect x={370} y={248} width={W} height={H} rx={2} fill={C.surface} stroke={C.border} strokeWidth={1} />
        <text x={cx(370)} y={266} textAnchor="middle" fill={C.fg} fontSize="10" fontWeight="bold">Consumer</text>
        <text x={cx(370)} y={280} textAnchor="middle" fill={C.muted} fontSize="8">@RabbitListener</text>

        {/* Arrow */}
        <line x1={370 + W} y1={270} x2={510} y2={270} stroke={C.fg} strokeWidth={1} markerEnd="url(#as)" />
        <text x={cx(440)} y={264} textAnchor="middle" fill={C.muted} fontSize="7" letterSpacing="1">1. OCR</text>

        {/* Tesseract */}
        <rect x={510} y={248} width={W} height={H} rx={2} fill={C.surface} stroke={C.border} strokeWidth={1} />
        <text x={cx(510)} y={266} textAnchor="middle" fill={C.fg} fontSize="10" fontWeight="bold">Tesseract 5</text>
        <text x={cx(510)} y={280} textAnchor="middle" fill={C.muted} fontSize="8">Tess4J</text>

        {/* Arrow */}
        <line x1={510 + W} y1={270} x2={660} y2={270} stroke={C.fg} strokeWidth={1} markerEnd="url(#as)" />
        <text x={cx(585)} y={264} textAnchor="middle" fill={C.muted} fontSize="7" letterSpacing="1">2. EXTRACT</text>

        {/* Groq */}
        <rect x={660} y={248} width={W} height={H} rx={2} fill={C.surface} stroke={C.border} strokeWidth={1} />
        <text x={cx(660)} y={266} textAnchor="middle" fill={C.fg} fontSize="10" fontWeight="bold">Groq API</text>
        <text x={cx(660)} y={280} textAnchor="middle" fill={C.muted} fontSize="8">Llama 3.1 8B</text>

        {/* Back-arrow from Consumer → PostgreSQL */}
        <path d={`M ${cx(370)} ${292} L ${cx(370)} ${308} L ${620} ${308} L ${620} ${46}`} fill="none" stroke={C.fg} strokeWidth={1} markerEnd="url(#as)" />
        <text x={cx(455)} y={306} textAnchor="middle" fill={C.muted} fontSize="7" letterSpacing="1">3. UPDATE COMPLETED</text>

        {/* ============ ASYNC POLL (React ↔ Spring Boot) ============ */}
        <path d={`M ${cx(40)} ${68} L ${cx(40)} ${324} L ${cx(370)} ${324} L ${cx(370)} ${68}`} fill="none" stroke={C.accent} strokeWidth={1} strokeDasharray="4,3" markerEnd="url(#ad)" />
        <text x={cx(205)} y={322} textAnchor="middle" fill={C.accent} fontSize="7" letterSpacing="1">POLL STATUS (4s)</text>

        {/* ============ LEGEND ============ */}
        <line x1={40} y1={336} x2={70} y2={336} stroke={C.fg} strokeWidth={1} markerEnd="url(#as)" />
        <text x={76} y={339} fill={C.muted} fontSize="7">sync</text>
        <line x1={130} y1={336} x2={160} y2={336} stroke={C.accent} strokeWidth={1} strokeDasharray="4,3" />
        <text x={166} y={339} fill={C.muted} fontSize="7">async / poll</text>
      </svg>
    </div>
  );
}
