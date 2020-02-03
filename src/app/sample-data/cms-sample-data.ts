import { CmsStructureConfig } from '@spartacus/core';
import {
  FactoryComponentData,
  FactoryData,
  SampleDataFactory,
} from './builder/cms-data-factory';
import {
  NavigationFactoryData,
  SampleDataNavigationFactory,
} from './builder/navigation-factory';

const categoryNavigationData: NavigationFactoryData = {
  type: 'CategoryNavigationComponent',
  uid: 'ElectronicsCategoryNavNode',
  childs: [
    {
      entryId: 'DigitalCamerasCategoryLink',
      childs: ['DigitalCompactsCategoryLink', 'DigitalSLRCategoryLink'],
    },
    'FilmCamerasCategoryLink',
    'HandheldCamcordersCategoryLink',
    'WebcamsCategoryLink',
    {
      entryId: 'CameraAccessoriesCategoryLink',
      childs: [
        {
          title: 'Gear',
          childs: [
            'CamerasFlashesCategoryLink',
            'TripodsCategoryLink',
            'CameraLensesCategoryLink',
            'PowerSuppliesCategoryLink',
            'FlashMemoryCategoryLink',
          ],
        },
        {
          title: 'Supplies',
          childs: [
            'ColourFilmsCategoryLink',
            'BlackAndWhiteFilmsCategoryLink',
            'BlankVideotapesCategoryLink',
          ],
        },
      ],
    },
  ],
};
const categoryNavigation = SampleDataNavigationFactory.build(
  categoryNavigationData
);

const footerNavigationData: NavigationFactoryData = {
  type: 'FooterNavigationComponent',
  uid: 'FooterNavNode',
  childs: [
    {
      title: 'SAP Commerce Cloud',
      entryId: 'SAPCommerceNavNode',
      childs: ['AboutSAPCommerceLink', 'FAQLink'],
    },
    {
      title: 'SAP Customer Experience',
      entryId: 'SAPCustomerExperienceNavNode',
      childs: ['VisitSAPLink', 'ContactUsLink'],
    },
    {
      title: 'Follow Us',
      entryId: 'SAPCommerceNavNode',
      childs: [
        'AgileCommerceBlogLink',
        'LinkedInLink',
        'FacebookLink',
        'TwitterLink',
      ],
    },
  ],
};

const headerTop: (string | FactoryComponentData)[] = [
  { type: 'CMSSiteContextComponent', context: 'CURRENCY', uid: '1' },
  { type: 'CMSSiteContextComponent', context: 'LANGUAGE', uid: '2' },
  {
    type: 'CMSLinkComponent',
    url: '/store-finder',
    linkName: 'find a store',
  },
];

const headerMiddle: (string | FactoryComponentData)[] = [
  {
    type: 'BannerComponent',
    media: {
      url:
        'https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg.adapt.svg/1493030643828.svg',
    },
    urlLink: '/',
  },
  { type: 'SearchBoxComponent', displaySuggestions: false },
  'LoginComponent',
  'MiniCartComponent',
];

const globalSlots: FactoryData = {
  body: [
    {
      uid: 'pc1',
      type: 'ProductCarouselComponent',
      productCodes: '2278102 1992693 1981415 1934796 1776948 1641905 932577',
    },
  ],
};

const headerBottom: string[] = ['CategoryNavigationComponent'];
// const footerSlot: string[] = ['FooterNavigationComponent'];

const footerSlot: (string | FactoryComponentData)[] = [
  SampleDataNavigationFactory.build(footerNavigationData),
  'AnonymousConsentOpenDialogComponent',
  {
    type: 'CMSParagraphComponent',
    content:
      '<div class="cx-notice">Copyright © 2019 SAP SE or an SAP affiliate company. All rights reserved.</div>',
  },
  'AnonymousConsentManagementBannerComponent',
];

export function defaultCmsContentConfig(): CmsStructureConfig {
  return {
    cmsStructure: {
      // add all components in the list of components
      components: SampleDataFactory.buildComponents([
        ...headerTop,
        ...headerMiddle,
        SampleDataNavigationFactory.build(categoryNavigationData),

        ...footerSlot,
        ...globalSlots.body,
      ]),

      // add all global slots and their component IDs
      // will be used in case the CMS page doesn't have slots at all
      slots: SampleDataFactory.buildSlots(
        Object.assign({
          ...globalSlots,
          ...{ headerTop },
          ...{ headerMiddle },
          ...{ headerBottom },
          ...{ footerSlot },
        })
      ),

      // pages: [
      //   {
      //     pageId: 'homepage',
      //     template: 'LandingPage2Template',
      //     slots: {
      //       body: { componentIds: ['pc1'] },
      //     },
      //     ignoreBackend: true,
      //   },
      // ],
    },
  };
}

export const cmsSampleData = defaultCmsContentConfig;
