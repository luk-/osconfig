var test = require('tap').test
var osconfig = require('../')

var dir = ('./fixture')
var list = osconfig.list(dir)

var os_list = JSON.stringify({ 
  cent:   { '6.0': 'fixture/centos6.json' },
  debian: { '6.0': 'fixture/squeeze6.json' },
  ubuntu: { '10.0': 'fixture/ubuntu10.json' } 
})

var os = osconfig.load({
  os: 'debian',
  version: '6.0',
  dir: './fixture'
})


var squeeze = JSON.stringify({
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
})


test('ensure file list', function (t) {
  t.equal(JSON.stringify(list), os_list)
  t.end()
})

test('ensure os config file', function (t) {
  t.equal(JSON.stringify(os), squeeze)
  t.end()
})
