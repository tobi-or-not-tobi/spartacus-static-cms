import { translationChunksConfig, translations } from '@spartacus/assets';

export const AppConfig = {
  backend: {
    occ: {
      baseUrl:
        'https://storefront.c39j2-walkersde1-d4-public.model-t.cc.commerce.ondemand.com',
    },
  },
  context: {
    baseSite: ['electronics-spa'],
  },
  i18n: {
    resources: translations,
    chunks: translationChunksConfig,
    fallbackLang: 'en',
  },
  features: {
    level: '1.4',
  },
};
