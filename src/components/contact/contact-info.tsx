import { FC, Fragment } from "react";
import { PicsumMeta } from "../../store/state";

export const ContactInfo: FC<PicsumMeta> = (p) => {
  const { id, author, downloadUrl } = p;

  return (<Fragment>
    <img src={downloadUrl} alt={id} />
    <h2>{author}</h2>
  </Fragment>);
}