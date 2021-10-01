import { useSelector } from "react-redux";
import { checkFavRule } from "../../helpers/fav-rule";

export const useFavRule = ()=>useSelector(checkFavRule);