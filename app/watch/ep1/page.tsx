"use client";

import { useState, useEffect } from "react";

export default function WatchPage() {
  const [autoPlay, setAutoPlay] = useState(true);
  const [autoNext, setAutoNext] = useState(true);

  useEffect(() => {
    const savedAutoPlay = localStorage.getItem("autoPlay");
    const savedAutoNext = localStorage.getItem("autoNext");

    if (savedAutoPlay !== null) {
      setAutoPlay(savedAutoPlay === "true");
    }

    if (savedAutoNext !== null) {
      setAutoNext(savedAutoNext === "true");
    }
  }, []);

  const toggleAutoPlay = () => {
    const newValue = !autoPlay;
    setAutoPlay(newValue);
    localStorage.setItem("autoPlay", String(newValue));
  };

  const toggleAutoNext = () => {
    const newValue = !autoNext;
    setAutoNext(newValue);
    localStorage.setItem("autoNext", String(newValue));
  };

  const goNextEpisode = () => {
    if (autoNext) {
      window.location.href = "/watch/ep2";
    }
  };

  return (
    <main
      style={{
        background: "#03101f",
        color: "white",
        minHeight: "100vh",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <a
        href="/"
        style={{
          display: "inline-block",
          marginBottom: "20px",
          padding: "10px 16px",
          background: "#1e293b",
          borderRadius: "10px",
          color: "#93c5fd",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        ← Back to Home
      </a>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "24px",
          alignItems: "start",
        }}
      >
        <div>
          <h1 style={{ fontSize: "30px", marginBottom: "14px" }}>
            Swallowed Star — Episode 1
          </h1>

          <video
         controls
  autoPlay={autoPlay}
  muted={autoPlay}
  onEnded={goNextEpisode}
  style={{
    width: "100%",
    borderRadius: "16px",
    background: "black",
  }}
>
  <source src="/videos/ep1.mp4" type="video/mp4" />
        <track
          kind="subtitles"
          src="/subtitles/ep1-en.vtt"
          srcLang="en"
          label="English"
          default
        />
      </video>

      <div style={{ marginTop: "16px", display: "flex", gap: "30px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span>Auto Play</span>
          <div
            onClick={toggleAutoPlay}
            style={{
              width: "46px",
              height: "24px",
              background: autoPlay ? "#2563eb" : "#334155",
              borderRadius: "999px",
              position: "relative",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                background: "white",
                borderRadius: "50%",
                position: "absolute",
                top: "2px",
                left: autoPlay ? "24px" : "2px",
                transition: "0.3s",
              }}
            />
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span>Auto Next</span>
          <div
            onClick={toggleAutoNext}
            style={{
              width: "46px",
              height: "24px",
              background: autoNext ? "#2563eb" : "#334155",
              borderRadius: "999px",
              position: "relative",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                background: "white",
                borderRadius: "50%",
                position: "absolute",
                top: "2px",
                left: autoNext ? "24px" : "2px",
                transition: "0.3s",
              }}
            />
          </div>
        </div>
      </div>

          <div
            style={{
              marginTop: "20px",
              background: "#081425",
              borderRadius: "16px",
              padding: "18px",
            }}
          >
            <h2 style={{ marginBottom: "12px" }}>About this episode</h2>
            <p style={{ color: "#cbd5e1", lineHeight: 1.7 }}>
              Swallowed Star begins with a cinematic world full of mystery,
              power, and danger.
            </p>
          </div>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/watch/ep1"
              style={{
                background: "#2563eb",
                color: "white",
                padding: "10px 16px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Episode 1
            </a>

            <a
              href="/watch/ep2"
              style={{
                background: "#1e293b",
                color: "white",
                padding: "10px 16px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Next Episode →
            </a>
          </div>
        </div>

        <aside
          style={{
            background: "#081425",
            borderRadius: "16px",
            padding: "18px",
          }}
        >
          <h2 style={{ marginBottom: "14px" }}>Episodes</h2>

          <div style={{ display: "grid", gap: "12px" }}>
            <a
              href="/watch/ep1"
              style={{
                background: "#2563eb",
                color: "white",
                padding: "12px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Episode 1
            </a>

            <a
              href="/watch/ep2"
              style={{
                background: "#1e293b",
                color: "white",
                padding: "12px",
                borderRadius: "10px",
                textDecoration: "none",
              }}
            >
              Episode 2
            </a>

            <a
              href="/watch/ep3"
              style={{
                background: "#1e293b",
                color: "white",
                padding: "12px",
                borderRadius: "10px",
                textDecoration: "none",
              }}
            >
              Episode 3
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}