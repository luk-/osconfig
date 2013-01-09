var assert = require('assert')
var osconfig = require('../')

var list = osconfig.list(__dirname + '/fixture')

var os_list = { 
  cent:   { '6.0': __dirname + '/fixture/centos6.json' },
  debian: { '6.0': __dirname + '/fixture/squeeze6.json' },
  ubuntu: { '10.0': __dirname + '/fixture/ubuntu10.json' } 
}

var os = osconfig.load({
  os: 'debian',
  version: '6.0',
  dir: __dirname + '/fixture'
})

var squeeze = {
  "os": {
    "name": "debian",
    "version": "6.0"
    },
  "dependencies": [
    "build-essential",
    "libcurl3",
    "curl"
  ],
  "setup_steps": {
    "pre_dep": "/usr/bin/env apt-get update",
    "deps": "/usr/bin/env apt-get install -y",
    "post_deps": [
      "/usr/bin/env wget http://nodejs.org/dist/v0.8.9/node_src.tar.gz",
      "/usr/bin/env tar -xzvf node_src.tar.gz",
      "(cd node_src && ./configure)",
      "/usr/bin/env make -C node_src",
      "/usr/bin/env make install -C node_src"
    ]
  }
}

assert.deepEqual(list, os_list, 'os list is not equal')
assert.deepEqual(os, squeeze, 'loaded os is not equal')
