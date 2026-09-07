export const AUTHOR_NAME = "va1bhavx";

const getBaseUrl = (): string => {
  if (
    process.env.NEXT_PUBLIC_SITE_URL &&
    !process.env.NEXT_PUBLIC_SITE_URL.includes("kumarvaibhav.xyz")
  ) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (
    process.env.VERCEL_PROJECT_PRODUCTION_URL &&
    !process.env.VERCEL_PROJECT_PRODUCTION_URL.includes("kumarvaibhav.xyz")
  ) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (
    process.env.VERCEL_URL &&
    !process.env.VERCEL_URL.includes("kumarvaibhav.xyz")
  ) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "https://kumarvaibhav.vercel.app";
};

export const SITE_URL = getBaseUrl();
