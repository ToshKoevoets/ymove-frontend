import { useEffect } from "react";


export default function Overview({
  site,
  resource,
}) {
  useEffect(() => {
    const resources = getResources();
  }, []);

  return (
      <div>
      {resources.map() => {

      }}
     </div>
  );
}
