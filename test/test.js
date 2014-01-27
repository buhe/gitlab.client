var project = require('../lib/project'),
	issue = require('../lib/issues')
	Gitlab = require('gitlab').ApiV3;

gitlab = new Gitlab({
    url: 'https://ocshq.com/',
    token: 'txoNBSR29ZG6KRVQidsv'
  });

// project.list(gitlab);

// project.show(gitlab,58);

// issue.list(gitlab);

issue.listOpen(gitlab);
