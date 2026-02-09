import { getCollection } from 'astro:content';

const PAGE_SIZE = 8;

export async function getAllPosts() {
  const posts = await getCollection('blog');
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPaginatedPosts(page: number) {
  const posts = await getAllPosts();
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  return {
    posts: posts.slice(start, end),
    total: posts.length,
    page,
    totalPages: Math.ceil(posts.length / PAGE_SIZE),
    hasPrev: page > 1,
    hasNext: page < Math.ceil(posts.length / PAGE_SIZE),
  };
}

export async function getPostsByYear(year: number) {
  const posts = await getAllPosts();
  return posts.filter((p) => p.data.pubDate.getFullYear() === year);
}

export async function getPostsByYearMonth(year: number, month: number) {
  const posts = await getAllPosts();
  return posts.filter(
    (p) => p.data.pubDate.getFullYear() === year && p.data.pubDate.getMonth() + 1 === month
  );
}

export async function getAvailableYears() {
  const posts = await getAllPosts();
  const years = new Set(posts.map((p) => p.data.pubDate.getFullYear()));
  return Array.from(years).sort((a, b) => b - a);
}

export async function getAvailableMonthsForYear(year: number) {
  const posts = await getAllPosts();
  const months = new Set(
    posts.filter((p) => p.data.pubDate.getFullYear() === year).map((p) => p.data.pubDate.getMonth() + 1)
  );
  return Array.from(months).sort((a, b) => b - a);
}

export async function getArchiveData() {
  const posts = await getAllPosts();
  const byYear = new Map<number, { count: number; months: Map<number, number> }>();

  for (const post of posts) {
    const year = post.data.pubDate.getFullYear();
    const month = post.data.pubDate.getMonth() + 1;

    if (!byYear.has(year)) {
      byYear.set(year, { count: 0, months: new Map() });
    }
    const entry = byYear.get(year)!;
    entry.count += 1;
    entry.months.set(month, (entry.months.get(month) ?? 0) + 1);
  }

  return Array.from(byYear.entries())
    .sort(([a], [b]) => b - a)
    .map(([year, { count, months }]) => ({
      year,
      count,
      months: Array.from(months.entries()).sort(([a], [b]) => b - a),
    }));
}

export { PAGE_SIZE };
