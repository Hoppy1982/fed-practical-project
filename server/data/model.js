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
    }
  ],
  heroMessage: 'Search 1,570 jobs.',
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
