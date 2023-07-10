/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/**
 * @param {string} title
 * @returns {import('@docusaurus/plugin-content-docs/src/sidebars/types').SidebarItemHtml}
 */
const unavailable = title => ({
  type: 'html',
  value: title,
  className: 'menu__link menu__link--unavailable',
  defaultStyle: true,
});

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'index',
    {
      type: 'category',
      label: 'Beginnen',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Een overzicht van Consumeer Bewust',
          link: {
            type: 'doc',
            id: 'tour/index',
          },
          items: [
            'tour/files',
            'tour/overview',
            'tour/sidebar',
            'tour/accounts',
            'tour/budget',
            'tour/schedules',
            'tour/settings',
          ],
        },
        'getting-started/tipstricks',
        'getting-started/sync',
        'getting-started/managefiles',
      ],
    },
    {
      type: 'category',
      label: 'Consumeer Bewust gebruiken',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Budgeteren',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'budgeting/index',
          },
          items: [
            'budgeting/filters',
            'budgeting/categories',
            {
              type: 'category',
              label: 'Regels',
              collapsed: true,
              link: {
                type: 'doc',
                id: 'budgeting/rules/index',
              },
              items: ['budgeting/rules/custom'],
            },
            'budgeting/schedules',
            'budgeting/returnsandreimbursements',
            'budgeting/creditcards',
            'budgeting/jointaccounts',
            //unavailable('Returns and Reimbursements'),
          ],
        },
        {
          type: 'category',
          label: 'Rekeningen & Transacties',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'accounts/index',
          },
          items: [
            'accounts/reconciliation',
            'transactions/importing',
            'transactions/bulk-editing',
            'transactions/payees',
            'transactions/transfers',
          ],
        },
        'reports/index',
        {
          type: 'category',
          label: 'Backup & Restore',
          collapsed: true,
          items: ['backup-restore/backup', 'backup-restore/restore'],
        },
      ],
    },
    'faq',
  ],
};
module.exports = sidebars;
