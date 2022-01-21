module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '432febbe0477a45560e0ee2cc6fb094c'),
  },
});
