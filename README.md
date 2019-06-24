# demeter eCommerce

Built with Gatsby. Currently uses the [Moltin eCommerce API](https://moltin.com/).

> Both a Moltin and a Stripe account are needed for this store to run successfully.

> Create a `.env.development` and `.env.production` file at the project root with your moltin `client_id` and Stripe test `publishable key`.

```dosini
MOLTIN_CLIENT_ID=
STRIPE_PUBLISHABLE_KEY=
```

## Features

- Moltin eCommerce API
- React 16
- PWA (includes manifest.webmanifest & offline support)
- Eslint & Prettier
- Styled Components
- Google Analytics - (you enter the tracking-id)
- Semantic-UI
- Authentication via Moltin (Login and Register)
- Stripe checkout
