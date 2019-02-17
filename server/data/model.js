const pkg = require('../../package.json');

module.exports = {
  appVersion: pkg.version,
  assetPath: '/public',
  pageTitle: 'PxlPro Jobs',
  navItems: [
    {
      label: 'Home',
      href: '#'
    },
    {
      label: 'Find a job',
      href: '#find-a-job'
    },
    {
      label: 'Careers advice',
      href: '#careers'
    },
    {
      label: 'Job alerts',
      href: '#job-alerts'
    },
    {
      label: 'Your jobs',
      href: '#your-jobs'
    },
    {
      label: 'Advertise a job',
      href: '#advertise-a-job'
    }
  ],
  footerNavItems: [
    {
      label: 'Browse jobs',
      href: '#browse-jobs'
    },
    {
      label: 'Search employees',
      href: '#search-employees'
    },
    {
      label: 'Terms & Conditions',
      href: '#terms-and-conditions'
    },
    {
      label: 'Privacy',
      href: '#privacy'
    },
    {
      label: 'About us',
      href: '#about-us'
    },
    {
      label: 'Contact us',
      href: '#contact-us'
    }
  ],
  jobsFirst: [
    {
      sector: 'Accountancy & Finance',
      nPositions: 41,
      href: '#'
    },
    {
      sector: 'Architecture, Building & Planning',
      nPositions: 71,
      href: '#'
    },
    {
      sector: 'Art & Design',
      nPositions: 59,
      href: '#'
    },
    {
      sector: 'Building & Construction',
      nPositions: 49,
      href: '#'
    },
    {
      sector: 'Business Management',
      nPositions: 247,
      href: '#'
    },
    {
      sector: 'Catering & Hospitality',
      nPositions: 14,
      href: '#'
    },
    {
      sector: 'Computers & IT',
      nPositions: 55,
      href: '#'
    }
  ],
  jobsSecond: [
    {
      sector: 'Education',
      nPositions: 193,
      href: '#'
    },
    {
      sector: 'Engineering',
      nPositions: 47,
      href: '#'
    },
    {
      sector: 'Media & Journalism',
      nPositions: 123,
      href: '#'
    },
    {
      sector: 'Retail & Wholesale',
      nPositions: 100,
      href: '#'
    },
    {
      sector: 'Sales',
      nPositions: 29,
      href: '#'
    },
    {
      sector: 'Sciences',
      nPositions: 79,
      href: '#'
    },
    {
      sector: 'Sports & Fitness',
      nPositions: 72,
      href: '#'
    }
  ],
  heroMessage: 'Search 1,570 jobs.',
  heroMessageDesc: 'Hundreds of new career oppurtunies each day. Find your perfect job.',
  ctas: [
    {
      icon: 'job-alerts',
      title: 'Get instant job alerts',
      subtitle: 'Personalised job recommendations sent straight to your email.'
    },
    {
      icon: 'create-account',
      title: 'Create an account for free',
      subtitle:
        'Shortlist jobs, manage your job alerts and receive special offers.'
    },
    {
      icon: 'upload-resume',
      title: 'Upload your resume',
      subtitle:
        'Upload your resume so our employers can match your details to the best jobs.'
    }
  ]
};
