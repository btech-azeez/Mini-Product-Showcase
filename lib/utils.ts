export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function slugToTitle(slug: string) {
  return slug.split('-').map((word) => word[0]?.toUpperCase() + word.slice(1)).join(' ');
}
