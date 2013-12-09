
function CreateHostEntry(hostname,ip) {
  var sys = require('sys')
  var exec = require('child_process').exec;
  var base_path = "/etc/nagios/hosts"

  function puts(error, stdout, stderr) { sys.puts(stdout) }

  exec("cp sample.cfg " + hostname + ".cfg")
  exec("sed -i -e 's/<hostname>/" + hostname +  "/g' " + hostname + ".cfg")
  exec("sed -i -e 's/<ip>/" + ip +  "/g' " + hostname + ".cfg")
  exec("mv " +  hostname + ".cfg " + base_path)
  exec("echo " +  hostname + " " + ip, puts);
  exec("service nagios reload");
}

function CreateServiceEntry(service_name,hostname,ip) {
  var sys = require('sys')
  var exec = require('child_process').exec;
  var base_path = "/etc/nagios/services"

  function puts(error, stdout, stderr) { sys.puts(stdout) }

  exec("cp services/" + service_name + ".cfg " + hostname + "_" + service_name + ".cfg")
  exec("sed -i -e 's/<hostname>/" + hostname +  "/g' " + hostname + "_" + service_name + ".cfg")
  exec("mv " +  hostname + "_" + service_name + ".cfg " + base_path)
  exec("echo " +  hostname + " " + ip, puts);
  exec("service nagios reload");
}

module.exports.CreateHostEntry = CreateHostEntry;
module.exports.CreateServiceEntry = CreateServiceEntry;
