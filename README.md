# osconfig

Read config files with OS specific installation instructions for use with [nput](https://github.com/st-luke/nput)

#### Installation:

`npm install osconfig`

#### Usage:

`var osconfig = require('osconfig')`

#### Methods:

### .list()

Reads a config file and synchronously returns an object of included operating systems & versions with filenames.

Example:

```js
.list('./os')
```

### .load()

Synchronously return an object containing the parameters of the specified osconfig file.

Example: 

```js
.load({
  os: 'debian',
  version: '6.0',
  dir: './configs' //optional, defaults to './os'
})
```



###License 
MIT