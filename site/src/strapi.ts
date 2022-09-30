import { ImageAttributes } from "./types";
import { getImage } from "@astrojs/image";

type StrapiData<T> = {
  id: string;
  attributes: T;
};

export type StrapiEntry<T> = {
  data: T extends (infer U)[] ? StrapiData<U>[] : StrapiData<T>;
};

export async function preloadStrapiImages(
  images: StrapiEntry<ImageAttributes[]>,
  opts: { width?: number; height?: number; aspectRatio?: number | `${number}:${number}` }
) {
  return Promise.all(
    images.data.map(async (image) => {
      const { src: url } = await getImage({
        src: `http://localhost:1337${image.attributes.url}`,
        ...opts,
      });

      return {
        ...image.attributes,
        url,
      };
    })
  );
}

export async function strapi<T>(
  endpoint: string,
  opts?: {
    method: "GET" | "POST" | "PUT" | "DELETE";
  }
): Promise<StrapiEntry<T>> {
  const response = await fetch(`http://localhost:1337/api${endpoint}`, {
    method: opts?.method,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}
