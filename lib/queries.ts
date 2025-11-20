export const heroQuery = `
  *[_type == "heroSection"][0]{
    title,
    titleBefore,
    titleMiddle,
    titleAfter,
    subtitle,
    text,
    buttonText,
    "image": image.asset->url
  }
`;
