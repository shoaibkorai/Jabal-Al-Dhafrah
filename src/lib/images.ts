import type { ImageMetadata } from 'astro';

// Service photos live in src/assets/services/<service-slug>.jpg (16:10).
// Replace any file with your own photo of the same name to swap it everywhere.
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/services/*.jpg', { eager: true });

export const servicePhoto = (slug: string): ImageMetadata | undefined =>
  files[`../assets/services/${slug}.jpg`]?.default;
