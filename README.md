# HacFy Trainings Website

A modern, secure cybersecurity training website built with Next.js, featuring comprehensive security measures and professional design.

## Features

- **Modern Design**: Dark cybersecurity theme with neon accents
- **Responsive Layout**: Mobile-first design that works on all devices
- **Security-First**: Built with security best practices and anti-abuse measures
- **Comprehensive Content**: Complete training program information and contact forms
- **Accessibility**: WCAG AA compliant with proper semantic HTML and ARIA attributes

## Security Features

### HTTP Security Headers
The application implements comprehensive security headers:
- Strict-Transport-Security (HSTS)
- Content-Security-Policy (CSP) with nonces
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy for feature restrictions

### Bot Protection
- Cloudflare Turnstile integration ready (requires configuration)
- Server-side verification for all form submissions
- Rate limiting on contact form submissions
- IP-based cooldown periods

### Additional Security
- Secure cookie configuration
- Input validation and sanitization
- CORS protection
- Environment variable security

## Setup Instructions

### 1. Environment Variables
Create a `.env.local` file with the following variables:

\`\`\`env
# Turnstile Configuration (Optional - for production)
TURNSTILE_SITE_KEY=your_turnstile_site_key
TURNSTILE_SECRET=your_turnstile_secret_key

# Alternative: reCAPTCHA (if preferred over Turnstile)
RECAPTCHA_SITE_KEY=your_recaptcha_site_key
RECAPTCHA_SECRET=your_recaptcha_secret_key
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Run Development Server
\`\`\`bash
npm run dev
\`\`\`

### 4. Production Deployment

#### Cloudflare Setup (Recommended)
1. Deploy behind Cloudflare for DDoS protection and WAF
2. Enable Cloudflare Managed Rules for OWASP Top 10 protection
3. Configure rate limiting rules
4. Set up Cloudflare Tunnel (cloudflared) to hide origin server

#### Security Headers Configuration
Ensure your hosting platform or CDN applies the security headers. For Vercel, create `vercel.json`:

\`\`\`json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains; preload"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
\`\`\`

### 5. Turnstile Integration
To enable Turnstile verification:

1. Get Turnstile keys from Cloudflare Dashboard
2. Add keys to environment variables
3. Update the contact form component to include the Turnstile widget
4. The server-side verification is already implemented

## Content Management

All content is structured and can be easily updated:
- Hero section content in `components/hero-section.tsx`
- Training programs in `components/training-programs.tsx`
- FAQ content in `components/faq.tsx`
- Contact information in `components/contact-form.tsx`

## Performance Optimizations

- Optimized images with Next.js Image component
- Lazy loading for components
- Minimal JavaScript bundle
- CSS-in-JS with Tailwind for optimal performance
- Font optimization with Geist fonts

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast color scheme
- Focus indicators

## Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

© 2025 HacFy Trainings. All Rights Reserved.
