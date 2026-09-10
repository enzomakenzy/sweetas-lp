import { Star } from "lucide-react";

export function listStars(color: "WHITE" | "RED") {
  const stars = [];
  
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star className={`w-2.5 z-10 ${color === "WHITE" ? "text-background fill-background" : "text-tertiary fill-tertiary"}`} />
    )
  }

  return stars
}