import { useState, useEffect, useCallback, useRef } from "react";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short" });

interface SingleImage {
  type: "single";
  src: string;
  alt: string;
  category: string;
  date?: string; // ISO format: YYYY-MM-DD
}

interface ImageGroup {
  type: "group";
  title: string;
  cover: string;
  images: { src: string; alt: string }[];
  category: string;
  date?: string; // ISO format: YYYY-MM-DD
}

export type GalleryItem = SingleImage | ImageGroup;

interface LightboxSingle {
  kind: "single";
  src: string;
  alt: string;
}

interface LightboxGroup {
  kind: "group";
  title: string;
  images: { src: string; alt: string }[];
  index: number;
}

type LightboxState = LightboxSingle | LightboxGroup;

interface Props {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: Props) {
  const categories = ["All", ...Array.from(new Set(items.map((i) => i.category)))];
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [controlsVisible, setControlsVisible] = useState(true);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const filtered =
    activeCategory === "All"
      ? items
      : items.filter((i) => i.category === activeCategory);

  const openSingle = (src: string, alt: string) =>
    setLightbox({ kind: "single", src, alt });

  const openGroup = (group: ImageGroup) => {
    setLightbox({ kind: "group", title: group.title, images: group.images, index: 0 });
    showControls();
  };

  const close = () => setLightbox(null);

  const showControls = () => {
    setControlsVisible(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setControlsVisible(false), 1000);
  };

  const prev = useCallback(() => {
    setLightbox((s) =>
      s?.kind === "group"
        ? { ...s, index: (s.index - 1 + s.images.length) % s.images.length }
        : s
    );
    showControls();
  }, []);

  const next = useCallback(() => {
    setLightbox((s) =>
      s?.kind === "group" ? { ...s, index: (s.index + 1) % s.images.length } : s
    );
    showControls();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (lightbox.kind === "group") {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, prev, next]);

  // Cleanup timer on unmount
  useEffect(() => () => { if (hideTimer.current) clearTimeout(hideTimer.current); }, []);

  // Click anywhere on the backdrop: left half = prev, right half = next (group only)
  // Single image: click backdrop to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (lightbox?.kind === "group") {
      if (e.clientX < window.innerWidth / 2) prev();
      else next();
    } else {
      close();
    }
  };

  return (
    <>
      {/* Category filter */}
      {categories.length > 2 && (
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={[
                "rounded-full border px-3 py-1 text-xs transition-colors",
                activeCategory === cat
                  ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--bg)]"
                  : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
              ].join(" ")}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {filtered.map((item, i) =>
          item.type === "single" ? (
            <li key={i}>
              <button
                onClick={() => openSingle(item.src, item.alt)}
                className="group relative w-full overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] transition-colors hover:border-[var(--accent)]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="aspect-square w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                {item.date && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2 pt-6">
                    <p className="text-left text-[10px] text-white/60">{formatDate(item.date)}</p>
                  </div>
                )}
              </button>
            </li>
          ) : (
            <li key={i}>
              <button
                onClick={() => openGroup(item)}
                className="group relative w-full overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] transition-colors hover:border-[var(--accent)]"
              >
                <img
                  src={item.cover}
                  alt={item.title}
                  className="aspect-square w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2 pt-6">
                  <p className="text-left text-xs font-medium text-white truncate">{item.title}</p>
                  <p className="text-left text-[10px] text-white/60">
                    {item.images.length} pages{item.date ? ` · ${formatDate(item.date)}` : ""}
                  </p>
                </div>
              </button>
            </li>
          )
        )}
      </ul>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={handleBackdropClick}
          onMouseMove={lightbox.kind === "group" ? showControls : undefined}
        >
          {lightbox.kind === "single" ? (
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[95vh] max-w-[95vw] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <>
              <img
                src={lightbox.images[lightbox.index].src}
                alt={lightbox.images[lightbox.index].alt}
                className="max-h-[95vh] max-w-[95vw] rounded-lg object-contain pointer-events-none"
              />

              {/* Controls — fade in/out on mouse move */}
              <div
                className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
                style={{ opacity: controlsVisible ? 1 : 0 }}
              >
                {/* Left arrow */}
                <div className="pointer-events-auto absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-16 w-16 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors select-none">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-white stroke-2 stroke-linecap-round stroke-linejoin-round"><polyline points="15 18 9 12 15 6"/></svg>
                </div>
                {/* Right arrow */}
                <div className="pointer-events-auto absolute left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-16 w-16 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors select-none">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-white stroke-2 stroke-linecap-round stroke-linejoin-round"><polyline points="9 18 15 12 9 6"/></svg>
                </div>
                {/* Counter */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-1.5 text-xs text-white/80">
                  {lightbox.title} &nbsp;·&nbsp; {lightbox.index + 1} / {lightbox.images.length}
                </div>
                {/* ESC hint */}
                <div className="absolute top-5 right-6 text-xs text-white/50">
                  ESC to exit
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
