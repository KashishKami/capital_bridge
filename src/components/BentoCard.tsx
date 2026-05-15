import React, { useRef, useState } from "react";
import type { FeatureItem } from "../types/content";
import { Settings, Zap, Headphones } from "lucide-react";
import gsap from "gsap";

interface BentoCardProps {
  feature: FeatureItem;
  index: number;
}

const getIcon = (id: string, isHovering: boolean) => {
  const size = 48;
  const color = "var(--color-accent)";

  switch (id) {
    case "technology":
      return (
        <Settings
          size={size}
          color={color}
          className={isHovering ? "spin-icon" : ""}
        />
      );
    case "quick-quotes":
      return (
        <Zap
          size={size}
          color={color}
          className={isHovering ? "pulse-icon" : ""}
        />
      );
    case "customer-service":
      return (
        <Headphones
          size={size}
          color={color}
          className={isHovering ? "bounce-icon" : ""}
        />
      );
    default:
      return <Settings size={size} color={color} />;
  }
};

const BentoCard: React.FC<BentoCardProps> = ({ feature, index }) => {
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
    gsap.to(cardRef.current, {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
      borderColor: "var(--color-accent)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
      borderColor: "var(--glass-border)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const isFeatured = index === 0;

  return (
    <div
      ref={cardRef}
      data-hovering={isHovering}
      className={`bento-card ${isFeatured ? "featured" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        background: "var(--glass-bg)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid var(--glass-border)",
        borderRadius: "24px",
        padding: "3rem 2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "default",
        minHeight: "300px",
        position: "relative",
        overflow: "hidden",
        // Fallback for grid in case CSS doesn't load fully
        gridColumn: "auto",
      }}
    >
      {/* Subtle background glow when hovered */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at center, rgba(255, 215, 0, 0.05) 0%, transparent 70%)",
          opacity: isHovering ? 1 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
      />

      <div style={{ marginBottom: "2rem" }}>
        {getIcon(feature.id, isHovering)}
      </div>

      <div>
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            color: "var(--text-main)",
          }}
        >
          {feature.title}
        </h2>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "1.1rem",
            lineHeight: "1.6",
          }}
        >
          {feature.description}
        </p>
      </div>
    </div>
  );
};

export default BentoCard;
