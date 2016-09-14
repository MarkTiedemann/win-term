'use strict'

const env = process.env

/* EXOTIC TERMINALS */

// Is the only term that sets CMDER_START
const isCmder = !!env.CMDER_START || !!env.CMDER_ROOT

// Check that it's not Cmder since Cmder is based on ConEmu, too
const isConEmu = !isCmder && env.ConEmuArgs != undefined

// Is the only term that uses the /winpty path
const isMingw = !!env._ && env._.endsWith('/winpty')

// Is the only term that uses the /cygdrive path prefix
const isCygwin = !!env._ && env._.startsWith('/cygdrive')

/* BUILT-IN TERMINALS */

const isNonBuiltIn = !isCmder && !isConEmu && !isMingw && !isCygwin

// Only difference between cmd and PowerShell is that
// PowerShell doesn't set PROMPT
const isPowerShell = !env.PROMPT && isNonBuiltIn
const isCmd =  env.PROMPT && isNonBuiltIn

/* HELPERS */

const isWin = process.platform == 'win32'
const isTTY = process.stdout.isTTY

module.exports = !isWin ? false
               : !isTTY ? false
               : isCmder ? 'cmder'
               : isConEmu ? 'conemu'
               : isMingw ? 'mingw'
               : isCygwin ? 'cygwin'
               : isPowerShell ? 'powershell'
               : isCmd ? 'cmd'
               : false
