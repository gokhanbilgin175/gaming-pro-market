import React from "react";
import { settings } from "../../../helpers/settings";

const Map = () => {
  return (
    <div>
      <iframe
        src={settings.mapEmbedUrl}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={settings.siteName}
      ></iframe>
    </div>
  );
};

export default Map;
