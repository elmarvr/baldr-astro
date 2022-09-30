import { StrapiEntry } from "./strapi";

export type ImageAttributes = {
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  url: string;
  formats: {
    thumbnail: {
      url: string;
      width: number;
      height: number;
    };
    small: {
      url: string;
      width: number;
      height: number;
    };
    medium: {
      url: string;
      width: number;
      height: number;
    };
    large?: {
      url: string;
      width: number;
      height: number;
    };
  };
};

export type MemberAttributes = {
  firstName: string;
  lastName: string;
  study: string;
  year: string;
  image: StrapiEntry<ImageAttributes>;
};

export type BoardAttributes = {
  members: {
    function: string;
    member: StrapiEntry<MemberAttributes>;
  }[];
};

export type HouseAttributes = {
  description: string;
  images: StrapiEntry<ImageAttributes[]>;
};
