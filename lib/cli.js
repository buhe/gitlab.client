var consoler = require('consoler'),
    prompt = require('prompt'),
    sys = require('../package'),
    Gitlab = require('gitlab').ApiV3,
    project = require('../lib/project'),
    issue = require('../lib/issues');

var promptSchema = {
    properties: {
        url: {
            description: 'Gitlab Url',
            type: 'string',
            required: true
        },
        token: {
            description: 'Gitlab Token',
            type: 'string',
            required: true
        }
    }
};

var actions = {
    project: {
        // console.log('invoke project');
        list: function(sdk) {
            project.list(sdk)
        }
    },
    config: function(fm) {
        prompt.start();
        prompt.get(promptSchema, function(err, result) {
            if (err) return consoler.error(err);
            var url = result.url;
            var token = result.token;
        });
    },
    help: function() {
        // console.log('');
        // consoler.align(4);
        console.info('Gitlab客户端命令列表 v' + sys.version);
        return console.log([

        ].join('\n'));
    }
};

exports = module.exports = function() {
    var command = process.argv[2],
      subCommand = process.argv[3],
        gitlab = new Gitlab({
            url: 'https://ocshq.com/',
            token: 'txoNBSR29ZG6KRVQidsv'
        });
    if (!actions[command]) {
        console.log('命令错误');
        return actions.help();
    }
    return actions[command][subCommand](gitlab);
};