export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category: "day" | "night" | "story";
}
