import { Schema } from '@markdoc/markdoc';

export const nxCloudSection: Schema = {
  render: 'NxCloudSection',
  attributes: {
    variant: {
      type: 'String',
      matches: ['generic', 'nx-cloud', 'divider'],
      default: 'generic',
    },
  },
};
