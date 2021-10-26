const data = {
  testhead: 'HELLO!!!!',
  tabs: {
    title: 'Please select one font',
    items: [
      {
        type: 'selector-box',
        options: [
          {
            value: 'Merriweather',
            description: 'Merriweather project is led by Sorkin Type',
            color: '#00a652',
          },
          {
            value: 'Roboto',
            description: 'Roboto doesn\'t compromise, allowing letters',
            color: '#ff7fc2',
          },
          {
            value: 'Noto Sans',
            description: 'Noto Sans covers over 30 scripts',
            color: '#006dfe',
          },
        ]
      },
      {
        type: 'card-box',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ],
  },
}

export default data;
