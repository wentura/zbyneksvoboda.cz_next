This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Environment Setup

### Contact Form (Resend.com)

To enable the contact form functionality, you need to set up Resend.com:

1. Sign up at [Resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Create a `.env.local` file in the root directory with:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```
4. Update the recipient email in `app/api/contact/route.js` if needed

### Rate limiting (Upstash Redis) — recommended for production

On Vercel, in-memory rate limiting does not work across instances. Add:

1. Create a Redis database at [Upstash](https://upstash.com)
2. Add to `.env.local` / Vercel env:
   ```
   UPSTASH_REDIS_REST_URL=...
   UPSTASH_REDIS_REST_TOKEN=...
   ```

Without these vars the app falls back to in-memory limiting (OK for local dev only).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
