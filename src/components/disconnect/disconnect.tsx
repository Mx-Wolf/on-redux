import { FC } from "react"
import { useDispatch } from "react-redux";
import { useEngagedRule } from "../../store/hooks/use-engaged-rule"
import { changed } from "../../store/slices/line";

export const Disonnect: FC = () => {
  const engaged = useEngagedRule();
  const dispatch = useDispatch();
  return (
    <button
      className="disconnect"
      disabled={!engaged}
      onClick={() => dispatch(changed("online"))}
    >
      <i
        className="fa fa-chain-broken"
        aria-hidden="true"
      />
    </button>
  )
}