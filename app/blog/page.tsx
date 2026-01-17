import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Wildlife Blog | Tips, Articles, and Guides',
  description: 'Learn about wildlife exclusion, pest prevention, and animal removal. Read expert tips and guides on dealing with critters and keeping your property protected.',
};

export default function BlogPage() {
  const blogPosts = [
    {
      slug: 'squirrels-in-attic',
      title: 'Why Squirrels Keep Coming Back (And How to Stop Them)',
      excerpt:
        'Squirrels are clever and persistent. Learn why they return to the same attics and how professional exclusion prevents them from doing it again.',
      date: 'January 15, 2026',
      readTime: '5 min',
    },
    {
      slug: 'warehouse-bird-problems',
      title: 'Bird Damage in Warehouses: Prevention vs. Reaction',
      excerpt:
        'Bird infestations cost warehouses thousands in damage and regulatory fines. Discover why prevention is cheaper than cleanup.',
      date: 'January 10, 2026',
      readTime: '7 min',
    },
    {
      slug: 'rodent-exclusion-guide',
      title: 'Rodent Exclusion: Why Trapping Alone Doesn't Work',
      excerpt:
        'Traps and poison fail when rodents keep entering from outside. This guide explains why exclusion is the only permanent rodent solution.',
      date: 'January 5, 2026',
      readTime: '6 min',
    },
    {
      slug: 'bats-in-house',
      title: 'Bats in Your House? What You Need to Know',
      excerpt:
        'Bats are important but can create health risks when in living spaces. Learn about humane exclusion and why professional help matters.',
      date: 'December 28, 2025',
      readTime: '5 min',
    },
    {
      slug: 'food-service-compliance',
      title: 'FDA & Health Code Compliance: Managing Pest Risks',
      excerpt:
        'Food service facilities face strict pest prevention requirements. Understand your obligations and how to document compliance.',
      date: 'December 20, 2025',
      readTime: '8 min',
    },
  ];

  return (
    <main className="page-container">
      <div className="page-header">
        <h1>Wildlife & Pest Prevention Blog</h1>
        <p>
          Expert articles, guides, and tips on wildlife exclusion, animal removal, and facility pest prevention. From residential critters to industrial challenges.
        </p>
      </div>

      <section className="blog-section">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.slug} className="blog-card">
              <h2>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <div className="post-meta">
                <span>{post.date}</span> • <span>{post.readTime} read</span>
              </div>
              <p>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="read-more">
                Read Article →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="blog-info">
        <h2>Why We Write About This</h2>
        <p>
          Wildlife exclusion and pest prevention can be confusing. We publish guides and articles to help property owners understand their options, recognize problems early, and make informed decisions about professional solutions. Whether you're a homeowner dealing with attic critters or a facility manager managing regulatory compliance, our blog covers the real-world challenges.
        </p>

        <h3>Topics We Cover</h3>
        <ul>
          <li>Residential animal removal and exclusion</li>
          <li>Rodent prevention and control</li>
          <li>Bird exclusion systems and netting</li>
          <li>Commercial facility pest management</li>
          <li>Regulatory compliance (USDA, FDA, health codes)</li>
          <li>Property damage prevention</li>
          <li>Humane animal handling</li>
        </ul>
      </section>
    </main>
  );
}
