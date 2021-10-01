interface FavRuleProps{
  display: string;
  favorites: string[];
}
export const checkFavRule = ({display,favorites}:FavRuleProps)=>favorites.some((e)=>e===display);