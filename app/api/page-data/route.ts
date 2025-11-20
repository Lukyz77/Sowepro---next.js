import { client } from "@/lib/sanity";
import { NextResponse } from "next/server";
import { heroQuery } from "@/lib/queries";

export async function GET() {
  const queries = {
    hero: heroQuery,

    navbar: `
      *[_type == "navigation"][0]{
        items[]{
          label,
          href
        },
        ctaText,
        ctaHref
      }
    `,

    about: `
      *[_type == "aboutSection"][0]{
        titleBefore,
        titleMiddle,
        titleAfter,
        text1,
        text2,
        text3,
        buttonText,
        buttonHref
      }
    `,

    services: `
      *[_type == "servicesSection"][0]{
        titleBefore,
        titleMiddle,
        titleAfter,
        subtitle,
        services[]{
          title,
          text,
          buttonText,
          buttonHref
        }
      }
    `,

    whyus: `
      *[_type == "whyUsSection"][0]{
        titleBefore,
        titleMiddle,
        titleAfter,
        subtitle,
        reasons[]{
          title,
          text
        }
      }
    `,

    portfolio: `
      *[_type == "portfolioSection"][0]{
        titleBefore,
        titleMiddle,
        titleAfter,
        subtitle
      }
    `,

    contact: `
      *[_type == "contactSection"][0]{
        titleBefore,
        titleMiddle,
        titleAfter,
        subtitle,
        contactTitle,
        email,
        phone
      }
    `,

    footer: `
      *[_type == "footerSection"][0]{
        brand,
        menuItems[]{
          label,
          href
        },
        socials{
          facebook,
          instagram,
          linkedin
        },
        copyright,
        ico
      }
    `
  };

  const data = await Promise.all(
    Object.entries(queries).map(async ([key, query]) => {
      const result = await client.fetch(query);
      return [key, result];
    })
  );

  return NextResponse.json(Object.fromEntries(data));
}
