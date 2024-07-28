import session from 'next-session';

export default session({
  name: 'ecommerce-app',
  cookie: {
    secure: process.env.NODE_ENV === 'production',
  },
});