import { useEffect, useRef } from "react";
import gsap from "gsap";
import gallery1 from "../assets/gallery/gallery-1.png";
import gallery2 from "../assets/gallery/gallery-2.png";
import gallery3 from "../assets/gallery/gallery-3.png";
import gallery4 from "../assets/gallery/gallery-4.png";

const photos = [
  { id: 1, src: gallery1, title: "Modern Distribution Center", category: "Warehouse" },
  { id: 2, src: gallery2, title: "Interstate Transit", category: "Transport" },
  { id: 3, src: gallery3, title: "Advanced Tracking Systems", category: "Technology" },
  { id: 4, src: gallery4, title: "Air Freight Operations", category: "Logistics" },
];

const PhotoGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-title", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".gallery-item", {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        padding: "160px 5% 100px",
        minHeight: "100vh",
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-main)",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "5rem" }}>
        <h1
          className="gallery-title"
          style={{
            fontSize: "clamp(3rem, 8vw, 5rem)",
            fontWeight: 900,
            marginBottom: "1.5rem",
          }}
        >
          Photo Gallery
        </h1>
        <p
          className="gallery-title"
          style={{
            fontSize: "1.2rem",
            color: "var(--text-muted)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          A glimpse into our daily operations and the scale of shipments we handle across the globe.
        </p>
      </header>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="gallery-item"
            style={{
              position: "relative",
              borderRadius: "24px",
              overflow: "hidden",
              aspectRatio: "4/3",
              background: "var(--bg-secondary)",
              border: "1px solid var(--glass-border)",
              cursor: "pointer",
              flex: "1 1 350px",
              maxWidth: "450px",
            }}
          >
            <img
              src={photo.src}
              alt={photo.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "2rem",
                background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
                color: "#fff",
                opacity: 0,
                transition: "opacity 0.3s ease",
              }}
              className="photo-overlay"
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
            >
              <span
                style={{
                  fontSize: "0.8rem",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "var(--color-accent)",
                  fontWeight: 700,
                }}
              >
                {photo.category}
              </span>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginTop: "0.5rem" }}>
                {photo.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .gallery-item:hover .photo-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default PhotoGallery;
