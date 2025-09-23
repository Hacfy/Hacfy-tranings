# Turnstile Integration Setup Guide

This guide will help you set up Cloudflare Turnstile verification for your contact form.

## Step 1: Get Turnstile Keys

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Turnstile** in the left sidebar
3. Click **"Add Site"**
4. Fill in the form:
   - **Site name**: `HacFy Training Contact Form`
   - **Domain**: `localhost` (for development)
   - **Widget mode**: `Managed`
   - **Pre-clearance**: `No` (for development)
5. Click **"Create"**
6. Copy the **Site Key** and **Secret Key**

## Step 2: Environment Variables

Create or update your `.env.local` file in the project root:

```env
# Turnstile Configuration
TURNSTILE_SECRET=your-secret-key-here
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your-site-key-here

# MongoDB Configuration (if not already set)
MONGODB_URI=mongodb://localhost:27017/hacfy-trainings
```

## Step 3: Test the Integration

1. Start your development server:
   ```bash
   pnpm dev
   ```

2. Visit the test page: `http://localhost:3000/test-turnstile`
   - This page will show if your keys are loaded correctly
   - Complete the Turnstile verification
   - Test the API call

3. Visit your contact form: `http://localhost:3000`
   - The Turnstile widget should now appear
   - Complete verification before submitting

## Step 4: Production Setup

For production deployment:

1. Add your production domain to Turnstile:
   - Go to your Turnstile site settings
   - Add your production domain (e.g., `hacfy.com`)
   - Update the domain list

2. Update environment variables in your hosting platform:
   - Add `TURNSTILE_SECRET` to your production environment
   - Add `NEXT_PUBLIC_TURNSTILE_SITE_KEY` to your production environment

## Features Implemented

### Contact Form Integration
- ✅ Turnstile widget with dark theme
- ✅ Form validation requires Turnstile completion
- ✅ Submit button disabled until verification
- ✅ Error handling for failed verification
- ✅ Token reset after successful submission

### API Integration
- ✅ Server-side Turnstile verification
- ✅ Proper error responses
- ✅ Rate limiting still active

### Test Page
- ✅ Visual confirmation of key loading
- ✅ Test API functionality
- ✅ Debug information display

## Troubleshooting

### Widget Not Showing
1. Check if `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is set correctly
2. Verify the key is valid in Cloudflare dashboard
3. Check browser console for errors
4. Ensure you're using `localhost` in Turnstile domain settings

### Verification Failing
1. Check if `TURNSTILE_SECRET` is set correctly
2. Verify the secret key matches the site key
3. Check server logs for verification errors
4. Test with the test page first

### Common Issues
- **"Invalid site key"**: Check your site key in `.env.local`
- **"Invalid secret"**: Check your secret key in `.env.local`
- **"Domain not allowed"**: Add `localhost` to your Turnstile site domains
- **Widget not loading**: Check if you're using the correct site key

## Security Notes

- Never commit your `.env.local` file to version control
- Use different keys for development and production
- The secret key should only be used on the server side
- The site key is safe to expose in the frontend

## Next Steps

1. Test the integration thoroughly
2. Deploy to production with production keys
3. Monitor Turnstile analytics in Cloudflare dashboard
4. Consider adding more domains as needed
