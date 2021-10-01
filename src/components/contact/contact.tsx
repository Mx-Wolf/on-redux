import { FC } from "react";
import { usePicsumId } from "../../store/hooks/use-picsum-id";
import { ContactInfo } from "./contact-info";
import { ContactPlaceholder } from "./contact-placeholder";

export const Contact: FC = () => {
  const picsumId = usePicsumId();
  if (picsumId === "") {
    return <ContactPlaceholder />
  }
  return <ContactInfo picsumId={picsumId} />
}