export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Lingerieindonesia';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Lingerieindonesia Terlengkap Sesuai Fantasi Anda';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'Hubungi Kami : www.bajudinasmalam.id';

  return {
    name,
    blogTitle,
    footerText,
  };
};
