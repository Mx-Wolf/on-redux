import { FC } from "react";
import { INVALID_PICSUM_ID } from "../../helpers/picsum-id";
import { usePicsumId } from "../../store/hooks/use-picsum-id";
import { ContactInfo } from "./contact-info";
import { ContactPlaceholder } from "./contact-placeholder";

export const Contact: FC = () => {
  const picsumId = usePicsumId();
  if (picsumId === INVALID_PICSUM_ID) {
    return <ContactPlaceholder />
  }
  return <ContactInfo picsumId={picsumId} />
}