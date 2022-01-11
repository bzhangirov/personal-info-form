export const INPUT_ATTRIBUTES = {
  options: [
    {id: 1, title: 'Home'},
    {id: 2, title: 'Work'},
    {id: 3, title: 'Mobile'},
    {id: 4, title: 'Main'},
    {id: 5, title: 'Other'}
  ],
  inputStyles: {
    borderLeft: 'none',
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0'
  }
};

export const PERSONAL_INFORMATION = () => ({
  isExit: false,
  formInfo: {
    email: '',
    firstName: '',
    lastName: '',
    contactInfo: [
      {
        id: 1,
        title: 'Home',
        phone: ''
      },
      {
        id: 2,
        title: 'Work',
        phone: ''
      }
    ],
    membership: [
      {
        id: 1,
        type: 'Regular',
        checked: true,
        description: 'Regular Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque urna, ligula eget maecenas. At pharetra fermentum augue egestas. Sed morbi sed est, ultrices in vel maecenas.'
      },
      {
        id: 2,
        type: 'Premium',
        checked: false,
        description: 'Premium Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolorem doloribus expedita facilis nulla saepe vero. Ad alias delectus'
      }
    ],
  },
  chosenRoute: '/form/contact-info',
  stepper: [
    {
      id: 1,
      active: true,
      label: 'Personal info',
      routeName: 'index',
      isDone: false,
      chosenRoute: '/form/contact-info'
    },
    {
      id: 2,
      active: false,
      label: 'Membership',
      routeName: 'membership',
      isDone: false,
      chosenRoute: '/form/membership'
    },
    {
      id: 3,
      active: false,
      label: 'OverviewItem',
      routeName: 'overview',
      isDone: false,
      chosenRoute: '/form/overview'
    }
  ]
});

export const URL = 'https://httpreq.com/black-bread-nupxs44s/record';
