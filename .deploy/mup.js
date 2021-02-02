module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: 'XXX.XXX.X.XX',
      username: 'Username',
      password: 'Password',
    }
  },

  app: {
    // TODO: change app name and path
    name: 'mup_test_app',
    path: '../',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: 'SERVER_URL:SERVER_PORT',
    },

    docker: {
      // abernix/meteord:node-12-base works with Meteor 1.9 - 1.10
      // If you are using a different version of Meteor,
      // refer to the docs for the correct image to use.
      image: 'abernix/meteord:node-12-base',
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true,

    // LOGGING TEST
    // TODO: Change to your provisioned Syslog port
    // Docker log options to send to LogDNA Syslog
    log: {
      driver: 'syslog',
      opts: {
        'syslog-address': 'tcp://syslog-a.logdna.com:SYSLOG_PORT_NUMBER',
        'tag': 'mup_test_source'
      }
    },
  },

  mongo: {
    version: '3.4.1',
    servers: {
      one: {}
    }
  },
};
