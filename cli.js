#!/usr/bin/env node

var fs = require('fs')
var style = process.argv[2] 

if (!style) {
  console.log('**** istyle ****')
  console.log('*              *')
  console.log('* Gen stylesheet *')
  console.log('* ============== *')
  console.log('* github         *')
  console.log('* grump          *')
  console.log('******************')
  console.log('* istyle github > style.css *')
  return

}

process.stdout.write(fs.readFileSync(__dirname + '/' + style + '.css', 'utf-8'))

