"use client";

import { useMemo, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const animeList = [
    {
      title: "Swallowed Star",
      image: "/posters/swallowed-star.jpg",
      score: "5.5",
      tag: "EP220",
      link: "/watch/ep1",
    },
    {
      title: "Dragon Prince Yuan Remake",
      image: "/posters/swallowed-star.jpg",
      score: "10.0",
      tag: "Coming Soon",
      link: "/watch/ep2",
    },
    {
      title: "Apotheosis Season 3",
      image: "/posters/swallowed-star.jpg",
      score: "9.0",
      tag: "EP21",
      link: "/watch/ep3",
    },
    {
      title: "Changan Martial Bureau",
      image: "/posters/swallowed-star.jpg",
      score: "10.0",
      tag: "Coming Soon",
      link: "/watch/ep1",
    },
  ];

  const filteredAnime = useMemo(() => {
    return animeList.filter((anime) =>
      anime.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#03101f",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 32px",
          background: "#06172c",
          position: "sticky",
          top: 0,
          zIndex: 10,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ fontSize: "24px", fontWeight: "bold" }}>
          🎬 Anime Streaming
        </div>

        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <a href="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>
          <a href="#popular" style={{ color: "white", textDecoration: "none" }}>
            Popular
          </a>
        </div>
      </nav>

      <section
        style={{
          position: "relative",
          height: "420px",
          backgroundImage: 'url("/posters/swallowed-star.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "end",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(3,16,31,1), rgba(3,16,31,0.2))",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: "32px",
            maxWidth: "700px",
          }}
        >
          <h1 style={{ fontSize: "48px", fontWeight: "bold", margin: 0 }}>
            Swallowed Star
          </h1>

          <p style={{ margin: "12px 0 20px", color: "#cbd5f5", fontSize: "18px" }}>
            Watch your favorite anime episodes with cinematic style.
          </p>

          <a
            href="/watch/ep1"
            style={{
              background: "#2563eb",
              padding: "12px 20px",
              borderRadius: "10px",
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              display: "inline-block",
            }}
          >
            ▶ Watch Now
          </a>
        </div>
      </section>

      <section style={{ padding: "32px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <h2 id="popular" style={{ fontSize: "28px", margin: 0 }}>
            Popular Anime
          </h2>

          <input
            type="text"
            placeholder="Search anime..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "280px",
              maxWidth: "100%",
              padding: "12px 14px",
              borderRadius: "10px",
              border: "1px solid #334155",
              background: "#0b1b31",
              color: "white",
              outline: "none",
            }}
          />
        </div>

        {filteredAnime.length === 0 ? (
          <div
            style={{
              background: "#081425",
              padding: "20px",
              borderRadius: "16px",
              color: "#cbd5e1",
            }}
          >
            No anime found.
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
              gap: "20px",
            }}
          >
            {filteredAnime.map((anime, index) => (
              <a
                key={index}
                href={anime.link}
                style={{
                  textDecoration: "none",
                  color: "white",
                  background: "#081425",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "2 / 3",
                    background: "#111827",
                  }}
                >
                  <img
                    src={anime.image}
                    alt={anime.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      background: "#22c55e",
                      padding: "4px 10px",
                      borderRadius: "8px",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {anime.score}
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "20px 10px 10px",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))",
                      textAlign: "right",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {anime.tag}
                  </div>
                </div>

                <div style={{ padding: "12px" }}>
                  <div style={{ fontWeight: "bold", lineHeight: 1.4 }}>
                    {anime.title}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}