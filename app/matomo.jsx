// * Import React pro jednoduchou Matomo komponentu.
import React from "react";

// * Export jednoduchého Matomo pixelu.
export default function Matomo() {
  return (
    <div>
      <img
        referrerPolicy="no-referrer-when-downgrade"
        src="https://matomo.zbyneksvoboda.cz/matomo.php?idsite=18&amp;rec=1"
        className="border-0"
        alt="matomo analytics"
      />
    </div>
  );
}
