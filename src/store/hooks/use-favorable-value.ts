import { useSelector } from "react-redux";
import { getFavorableValue } from "../../helpers/favorable-value";

export const useFavorableValue = () => useSelector(getFavorableValue);