import { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://gerbangku.com",
            lastModified: new Date()
        }
    ];
}