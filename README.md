# SportsLiveDecals Shopify Theme

A custom Shopify theme for SportsLiveDecals.com - selling custom helmet decals, award stickers, and team branding.

## 🎨 Brand & Design

- **Vibe**: Bold, athletic, competitive
- **Colors**: Dark/high-contrast with red accents
- **Typography**: Anton (headings), Inter (body)

## 🚀 Getting Started

### Prerequisites

- Shopify CLI installed (`npm install -g @shopify/cli @shopify/theme`)
- A Shopify store
- Git (for version control)

### Local Development

1. Clone this repository
2. Navigate to the theme directory
3. Run `shopify theme dev` to start local development
4. Follow the prompts to authenticate and select your store

### Deploy to Shopify

#### Option 1: Using Shopify CLI
```bash
shopify theme push
```

#### Option 2: Connect GitHub to Shopify
1. Go to your Shopify Admin → Online Store → Themes
2. Click "Add theme" → "Connect from GitHub"
3. Authorize Shopify to access your GitHub account
4. Select this repository
5. Choose a branch (usually `main`)
6. Shopify will automatically sync changes

## 📁 Theme Structure

```
├── assets/          # CSS and JavaScript files
├── layout/          # Theme layout (theme.liquid)
├── sections/        # Reusable sections
├── snippets/        # Reusable code snippets
└── templates/       # Page templates (JSON format)
```

## 🎯 Features

- ✅ Responsive design (mobile-first)
- ✅ Product browsing and filtering
- ✅ Shopping cart with AJAX updates
- ✅ Dynamic checkout (Apple Pay, PayPal, etc.)
- ✅ Mobile navigation
- ✅ SEO optimized
- ✅ Accessible (WCAG compliant)

## 📝 Theme Sections

- **Header**: Logo, navigation, cart icon
- **Footer**: About, customer service, contact, newsletter
- **Hero**: Full-width banner with CTA
- **Featured Collection**: Product grid
- **Product Page**: Media gallery, variants, add to cart
- **Collection Page**: Product listing with sorting
- **Cart Page**: Shopping cart management
- **404 Page**: Custom error page

## 🔧 Customization

All sections are customizable through the Shopify Theme Editor. Navigate to:
**Online Store → Themes → Customize**

## 📄 License

Proprietary - SportsLiveDecals.com

