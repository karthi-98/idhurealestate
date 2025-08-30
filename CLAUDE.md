# Next.js 15 + Claude Code: Complete Best Practices Guide

## 📋 CLAUDE.md Setup Rules

### Essential CLAUDE.md Configuration

```markdown
# Claude Code Rules for Next.js 15 Project

## Project Overview
- Next.js 15 with App Router
- TypeScript for type safety
- Server/Client Components optimization
- Security-first approach

## Critical Rules

### MUST Rules (Enforced)
- **SECURITY-1 (MUST)**: Never expose sensitive environment variables to client
- **PERF-1 (MUST)**: Use Server Components by default, Client Components only when needed
- **TYPE-1 (MUST)**: All components must be TypeScript with proper types
- **SEO-1 (MUST)**: Every page must have unique metadata
- **IMG-1 (MUST)**: Use HTML <img> tag instead of next/image component
- **BUILD-1 (MUST)**: Code must pass TypeScript compilation and linting

### SHOULD Rules (Strongly Recommended)
- **ARCH-1 (SHOULD)**: Follow feature-based folder structure
- **CACHE-1 (SHOULD)**: Implement proper caching strategies
- **A11Y-1 (SHOULD)**: Follow WCAG accessibility guidelines

## Commands
- `qplan`: Analyze codebase consistency and create implementation plan
- `qcode`: Implement with tests and formatting
- `qcheck`: Review code against all MUST rules
- `qsec`: Security audit of changes
- `qseo`: SEO optimization check
```

## 🏗️ Project Structure Rules

### Scalable Folder Architecture

```
my-nextjs-project/
├── src/                          # Source directory (REQUIRED)
│   ├── app/                      # App Router (Next.js 15)
│   │   ├── (auth)/              # Route groups (auth pages)
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── register/
│   │   │       └── page.tsx
│   │   ├── (dashboard)/         # Protected routes group
│   │   │   ├── dashboard/
│   │   │   └── settings/
│   │   ├── api/                 # API routes
│   │   │   ├── auth/
│   │   │   └── users/
│   │   ├── [locale]/            # i18n support
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── robots.ts           # SEO robots.txt
│   │   └── sitemap.ts          # SEO sitemap
│   ├── components/              # Reusable components
│   │   ├── ui/                 # Base UI components
│   │   ├── forms/              # Form components
│   │   ├── layout/             # Layout components
│   │   └── features/           # Feature-specific components
│   ├── lib/                    # Utilities & configuration
│   │   ├── auth/               # Authentication logic
│   │   ├── db/                 # Database configuration
│   │   ├── utils/              # Helper functions
│   │   └── validations/        # Form validation schemas
│   ├── hooks/                  # Custom React hooks
│   ├── types/                  # TypeScript type definitions
│   ├── styles/                 # Additional styling
│   └── middleware.ts           # Next.js middleware
├── public/                     # Static assets
│   ├── images/
│   ├── icons/
│   └── favicon.ico
├── .env.local                  # Environment variables
├── .env.example               # Environment template
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── CLAUDE.md                  # Claude Code instructions
```

## 🔒 Security Rules

### Environment Variables
```typescript
// ✅ CORRECT: Server-only environment variables
const DATABASE_URL = process.env.DATABASE_URL; // Server only
const API_SECRET = process.env.API_SECRET; // Server only

// ✅ CORRECT: Client environment variables (prefixed with NEXT_PUBLIC_)
const PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL; // Client accessible

// ❌ WRONG: Exposing sensitive data to client
const SECRET_KEY = process.env.SECRET_KEY; // DON'T expose secrets
```

### Content Security Policy
```javascript
// next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};
```

### Server Actions Security
```typescript
'use server'

import { auth } from '@/lib/auth';
import { z } from 'zod';

const updateUserSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
});

export async function updateUser(formData: FormData) {
  // ✅ ALWAYS authenticate server actions
  const session = await auth();
  if (!session?.user) {
    throw new Error('Unauthorized');
  }

  // ✅ ALWAYS validate input data
  const result = updateUserSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
  });

  if (!result.success) {
    throw new Error('Invalid input data');
  }

  // Process the validated data
  return result.data;
}
```

## ⚡ Performance Rules

### Server vs Client Components
```typescript
// ✅ CORRECT: Server Component (default)
export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id);
  
  return (
    <div>
      <h1>{product.name}</h1>
      <ProductInteractiveButton productId={product.id} />
    </div>
  );
}

// ✅ CORRECT: Client Component (only when needed)
'use client'

import { useState } from 'react';

export default function ProductInteractiveButton({ productId }: { productId: string }) {
  const [isLiked, setIsLiked] = useState(false);
  
  return (
    <button onClick={() => setIsLiked(!isLiked)}>
      {isLiked ? '❤️' : '🤍'} Like
    </button>
  );
}
```

### Image Optimization (Using HTML img tag)
```typescript
// ✅ CORRECT: Use HTML img tag with optimization
export default function ProductImage({ src, alt, className }: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      width={800}
      height={600}
    />
  );
}
```

### Caching Strategies
```typescript
// ✅ Static Site Generation (SSG)
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await fetchPost(params.slug);
  return <BlogContent post={post} />;
}

export async function generateStaticParams() {
  const posts = await fetchAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// ✅ Incremental Static Regeneration (ISR)
export const revalidate = 3600; // Revalidate every hour

// ✅ Server-Side Rendering with caching
export default async function DynamicPage() {
  const data = await fetch('https://api.example.com/data', {
    cache: 'force-cache',
    next: { revalidate: 60 } // Revalidate every minute
  });
  
  return <DynamicContent data={data} />;
}
```

## 🔍 SEO Rules

### Metadata API Implementation
```typescript
// app/layout.tsx - Root layout metadata
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Your App Name',
    default: 'Your App Name - Best Product Ever',
  },
  description: 'Your app description for better SEO',
  keywords: ['nextjs', 'react', 'typescript'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    siteName: 'Your App Name',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Your App Name',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your App Name',
    description: 'Your app description',
    images: ['/images/twitter-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Dynamic metadata for specific pages
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = await fetchPost(params.slug);
  
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}
```

### Structured Data
```typescript
// components/StructuredData.tsx
export default function StructuredData({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Usage in page
export default function ProductPage({ product }: { product: Product }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <div>Product content...</div>
    </>
  );
}
```

### Sitemap and Robots
```typescript
// app/sitemap.ts
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchAllPosts();
  
  const postUrls = posts.map((post) => ({
    url: `https://yourwebsite.com/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://yourwebsite.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://yourwebsite.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...postUrls,
  ];
}

// app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'],
    },
    sitemap: 'https://yourwebsite.com/sitemap.xml',
  };
}
```

## 🧪 Testing Rules

### Component Testing
```typescript
// components/__tests__/Button.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## 🚀 Deployment Rules

### Build Optimization
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  compress: true,
  
  experimental: {
    optimizePackageImports: ['@heroicons/react'],
  },
  
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/images/**',
      },
    ],
  },
  
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
```

## 📱 Accessibility Rules

### WCAG Compliance
```typescript
// ✅ CORRECT: Accessible form component
export default function LoginForm() {
  return (
    <form>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          aria-describedby="email-error"
        />
        <span id="email-error" role="alert">
          Please enter a valid email address
        </span>
      </div>
      
      <button type="submit" aria-describedby="submit-help">
        Sign In
      </button>
      <div id="submit-help">
        Click to sign in to your account
      </div>
    </form>
  );
}
```

## 🔄 Development Workflow

### Git Hooks Setup
```bash
# Install husky and lint-staged
npm install --save-dev husky lint-staged

# Setup pre-commit hooks
npx husky add .husky/pre-commit "npx lint-staged"

# package.json
{
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{css,scss,md}": [
      "prettier --write"
    ]
  }
}
```

### TypeScript Configuration
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "ES6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## ⚙️ Claude Code Specific Commands

### Custom Commands for Claude Code
```markdown
## Custom Commands

### /create-page
Generate a new page with:
- Proper TypeScript types
- Metadata configuration
- Server Component by default
- Error boundaries

### /create-component  
Create component with:
- TypeScript interface
- Accessibility attributes
- Test file
- Storybook story (if using)

### /security-audit
Check for:
- Environment variable exposure
- Server Action authentication
- Input validation
- Security headers

### /seo-optimize
Optimize for:
- Metadata completeness
- Structured data
- Performance metrics
- Accessibility compliance
```

## 🚨 Common Pitfalls to Avoid

1. **❌ Using Client Components unnecessarily**
2. **❌ Exposing sensitive environment variables**
3. **❌ Missing error boundaries**
4. **❌ Not implementing proper caching**
5. **❌ Ignoring accessibility requirements**
6. **❌ Missing TypeScript types**
7. **❌ Not optimizing images**
8. **❌ Poor folder organization**
9. **❌ Missing SEO metadata**
10. **❌ Not following security best practices**

## 📚 Resources

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Claude Code Best Practices](https://docs.anthropic.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Security Headers](https://securityheaders.com/)

---

**Remember**: These rules should be constantly refined based on your project needs and team preferences. Always prioritize security, performance, and user experience.