import { FC } from "react";
import { usePicsumQuery } from "../../store/api/api";
import { useEngagedRule } from "../../store/hooks/use-engaged-rule";
import { usePicsumId } from "../../store/hooks/use-picsum-id";
import { ContactInfo } from "./contact-info";

export const Contact: FC = () => {
  const picsumId = usePicsumId();
  const skip = !useEngagedRule();
  const result = usePicsumQuery(picsumId, { skip });
  const { data, isUninitialized } = result;

  return (
    <div className="contact">
      {typeof data === "undefined" || isUninitialized ? null : <ContactInfo {...data} />}
    </div>
  )
}