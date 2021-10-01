import { useSelector } from "react-redux";
import { getPicsumId } from "../../helpers/picsum-id";

export const usePicsumId = ()=>useSelector(getPicsumId);