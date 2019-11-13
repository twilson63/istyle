#!/usr/bin/env node

var fs = require('fs')
var style = process.argv[2] 

if (!style) {
  console.log('**** istyle *******')
  console.log('*                 *')
  console.log('* Gen stylesheet  *')
  console.log('* ==============  *')
  console.log('* air             *')
  console.log('* modest          *')
  console.log('* splendor        *')
  console.log('* retro           *')
  console.log('* avenue          *')
  console.log('* amblin          *')
  console.log('* antique         *')
  console.log('* manuscript      *')
  console.log('* swiss           *')
  console.log('* github          *')
  console.log('* grump           *')
  console.log('* kult            *')
  console.log('*******************')
  console.log('* istyle github > style.css *')
  return

}

const styles = ['air', 'modest', 'retro', 'splendor', 'avenue', 'amblin', 'antique', 'manuscript', 'swiss', 'github', 'grump','kult']

if (styles.indexOf(style) < 0) { 
  console.log('No Match Found!')
  return 
} 

process.stdout.write(fs.readFileSync(__dirname + '/' + style + '.css', 'utf-8'))

