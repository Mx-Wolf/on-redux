import { FC } from "react"

export const Disonnect:FC=()=>{
  return (
    <button className="disconnect" disabled={true}>
      <i className="fa fa-chain-broken" aria-hidden="true"/>      
    </button>
  )
}