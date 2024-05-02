function hex(wifi) {
  return wifi.split("")
             .map((e) => e.charCodeAt(0).toString(16).padStart(2, "0"))
             .join("")
             .toUpperCase()
}

function dehex(wifi) {
  return wifi.split(/(\w\w)/g)
             .filter(e => !!e)
             .map(e => String.fromCharCode(parseInt(e, 16)))
             .join("");
}

function getInfo(internals_json) {
  info = typeof internals_json === "string"
                          ? JSON.parse(internals_json)
                          : internals_json
  return {
    "internals_name": info.NON_UNIQUE_NAME,
    "ssid": dehex(atob(info.SPECIFICS.wifi_configuration.hex_ssid)),
    "password": atob(info.SPECIFICS.wifi_configuration.passphrase)
  }
}