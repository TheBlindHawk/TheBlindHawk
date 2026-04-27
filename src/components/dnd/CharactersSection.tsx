import { motion } from "motion/react";

interface Character {
  name: string;
  role?: string;
  portrait?: string;
  abilities: string[];
}

interface Props {
  characters: Character[];
}

export default function CharactersSection({ characters }: Props) {
  if (characters.length === 0) {
    return (
      <section
        id="characters"
        className="py-32 px-6"
        style={{ background: "var(--dnd-bg)" }}
      >
        <div className="mx-auto max-w-6xl">
          <p
            className="dnd-display mb-12 text-xs tracking-[0.4em] uppercase text-center"
            style={{ color: "var(--dnd-divine)" }}
          >
            Characters
          </p>
          <p className="text-center text-sm" style={{ color: "var(--dnd-muted)" }}>
            Character profiles coming soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="characters"
      className="py-32 px-6"
      style={{
        background:
          "linear-gradient(to bottom, var(--dnd-bg) 0%, var(--dnd-surface) 50%, var(--dnd-bg) 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.p
          className="dnd-display mb-12 text-xs tracking-[0.4em] uppercase text-center"
          style={{ color: "var(--dnd-divine)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-10%" }}
        >
          Characters
        </motion.p>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {characters.map((char, i) => (
            <motion.li
              key={char.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <div
                className="group relative flex flex-col overflow-hidden rounded-lg transition-all duration-300"
                style={{
                  border: "1px solid var(--dnd-border)",
                  background: "var(--dnd-surface)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--dnd-demon)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 0 24px color-mix(in srgb, var(--dnd-demon-glow) 30%, transparent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--dnd-border)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Portrait */}
                <div
                  className="aspect-[3/2] w-full overflow-hidden"
                  style={{ background: "var(--dnd-abyss)" }}
                >
                  {char.portrait ? (
                    <img
                      src={char.portrait}
                      alt={char.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="flex h-full items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--dnd-surface), var(--dnd-abyss))",
                      }}
                    >
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.75"
                        style={{ color: "var(--dnd-border)" }}
                      >
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex flex-col gap-3 p-5">
                  <div>
                    <h3
                      className="dnd-display font-semibold tracking-wide"
                      style={{ color: "var(--dnd-text)" }}
                    >
                      {char.name}
                    </h3>
                    {char.role && (
                      <p
                        className="mt-0.5 text-xs tracking-widest uppercase"
                        style={{ color: "var(--dnd-muted)" }}
                      >
                        {char.role}
                      </p>
                    )}
                  </div>

                  {char.abilities.length > 0 && (
                    <ul className="flex flex-wrap gap-1.5">
                      {char.abilities.map((ability) => (
                        <li
                          key={ability}
                          className="rounded px-2 py-0.5 text-xs"
                          style={{
                            border: "1px solid var(--dnd-border)",
                            color: "var(--dnd-muted)",
                          }}
                        >
                          {ability}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
