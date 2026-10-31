import cafeHeroAmbience from './images/cafe_hero_ambience_1793381416203.jpg';
import cappuccinoLatteArt from './images/cappuccino_latte_art_1793381412162.jpg';
import fudgeBrownieDessert from './images/fudge_brownie_dessert_1793381413537.jpg';
import gourmetCafeBurger from './images/gourmet_cafe_burger_1793381415002.jpg';
import icedColdCoffee from './images/iced_cold_coffee_1793381423310.jpg';

export const CAFE_IMAGES = {
  heroAmbience: cafeHeroAmbience,
  cappuccino: cappuccinoLatteArt,
  coldCoffee: icedColdCoffee,
  burger: gourmetCafeBurger,
  brownie: fudgeBrownieDessert,
};

/**
 * Resolves an image URL to a production-safe Vite bundled asset.
 * If the URL is a legacy path (e.g. from localStorage), maps it to the bundled asset.
 */
export function resolveImageUrl(url: string | undefined): string {
  if (!url) return cafeHeroAmbience;
  if (url.includes('cappuccino_latte_art')) return cappuccinoLatteArt;
  if (url.includes('iced_cold_coffee')) return icedColdCoffee;
  if (url.includes('gourmet_cafe_burger')) return gourmetCafeBurger;
  if (url.includes('fudge_brownie_dessert')) return fudgeBrownieDessert;
  if (url.includes('cafe_hero_ambience')) return cafeHeroAmbience;
  
  if (url.startsWith('/src/assets/images/')) {
    return url.replace('/src/assets/images/', '/assets/images/');
  }
  return url;
}
