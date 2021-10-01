import { FC } from "react"
import { useEngagedRule } from "../../store/hooks/use-engaged-rule"

export const Disonnect:FC=()=>{
  const engaged = useEngagedRule();
  return (
    <button className="disconnect" disabled={!engaged}>
      <i className="fa fa-chain-broken" aria-hidden="true"/>      
    </button>
  )
}