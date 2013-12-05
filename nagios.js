
function CreateHostEntry(hostname,ip) {
  var sys = require('sys')
  var exec = require('child_process').exec;

  function puts(error, stdout, stderr) { sys.puts(stdout) }
  exec("cp sample.cfg foo.cfg")
  exec("sed -i -e 's/<hostname>/" + hostname +  "/g' foo.cfg")
  exec("sed -i -e 's/<ip>/" + ip +  "/g' foo.cfg")
  exec("echo " +  hostname + " " + ip, puts);
}

module.exports.CreateHostEntry = CreateHostEntry;
