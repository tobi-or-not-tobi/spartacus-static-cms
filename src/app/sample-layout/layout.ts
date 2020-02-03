import { LayoutConfig } from '@spartacus/storefront';

export const sampleLayoutConfig: LayoutConfig = {
  layoutSlots: {
    header: {
      slots: ['headerTop', 'headerMiddle', 'headerBottom'],
    },
    footer: { slots: ['footerSlot'] },

    LandingPage2Template: {
      slots: [
        'Section1',
        'Section2A',
        'Section2B',
        'Section2C',
        'Section3',
        'Section4',
        'Section5',
      ],
    },

    CategoryPageTemplate: {
      slots: ['Section1', 'Section2', 'Section3'],
    },
    ProductListPageTemplate: {
      slots: ['ProductListSlot', 'ProductLeftRefinements'],
    },

    ProductDetailsPageTemplate: {
      slots: [
        'Summary',
        'UpSelling',
        'CrossSelling',
        'Tabs',
        'PlaceholderContentSlot',
      ],
    },

    CartPageTemplate: {
      slots: ['TopContent', 'CenterRightContentSlot', 'EmptyCartMiddleContent'],
    },
  },
};
