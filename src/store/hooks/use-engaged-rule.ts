import { useSelector } from "react-redux";
import { getEngagedRule } from "../../helpers/engaged-rule";

export const useEngagedRule = () => useSelector(getEngagedRule);