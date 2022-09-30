import { useEffect, useRef, useState } from "preact/hooks";
import { ImageAttributes } from "../types";
import MagicGrid from "magic-grid";

interface ImageGridProps {
  images: ImageAttributes[];
}

const ImageGrid = (props: ImageGridProps) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const magicGrid = useRef<MagicGrid>();

  useEffect(() => {
    magicGrid.current = new MagicGrid({
      container: gridRef.current,
      static: true,
      useMin: true,
      gutter: 8,
    });

    magicGrid.current.listen();
  }, []);

  return (
    <div ref={gridRef}>
      {props.images.map(({ url }) => (
        <img src={url} width={300} />
      ))}
    </div>
  );
};

export default ImageGrid;
