import { RootState } from "../store/store"

type EngagedRultProps = Pick<RootState,"line">
export const getEngagedRule = (state:EngagedRultProps) => state.line==="engaged";