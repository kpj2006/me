// Join a site-relative path onto the base ("/me/").
export const url = (p = '') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${p.replace(/^\//, '')}`;
};
