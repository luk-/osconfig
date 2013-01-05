var fs = require('fs')
var path = require('path')

var osconfig = {}

osconfig.list = function (dir) {
  var files = fs.readdirSync(dir)
  var os_list = {}
  files.map(function (val) {
    var json = path.join(dir, val)
    var file = fs.readFileSync(json, 'utf8')
    var os = JSON.parse(file)
    var os_name = os.os.name
    var version = os.os.version
    if (!os_list.hasOwnProperty(os_name)) {
      os_list[os_name] = {}
      os_list[os_name][version] = json
    } else {
      os_list[os.os.name].push(os.os.version)
    }
  })
  return os_list
}

osconfig.load = function (options) {
  var dir = options.dir || './os'
  var os = options.os
  var version = options.version
  var os_list = this.list(dir)
  var load = os_list[os][version]
  if (!load) 
    return console.log('%s@%s not found', os, version)
  var file = fs.readFileSync(load, 'utf8')
  file = JSON.parse(file)
  return file
}

module.exports = osconfig
