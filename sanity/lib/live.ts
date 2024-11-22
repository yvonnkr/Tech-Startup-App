// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import "server-only";
import { defineLive } from "next-sanity";
import { client } from "./client";
import { token } from "@/sanity/env";

export const { sanityFetch, SanityLive } = defineLive({
    client,
    serverToken: token,
    browserToken: token,
});
