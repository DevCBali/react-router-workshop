import React from 'react';

export const LocaleContext = React.createContext({
  locale: 'en',
  setLocale: () => {}
});
