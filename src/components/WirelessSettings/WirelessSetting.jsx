import React from "react";
import { FormLabel, FormControlLabel, Checkbox } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import ConfigurationIP from "../ConfigurationIP";
import ConfigurationDNS from "../ConfigurationDNS";
import ConfigurationWifi from "../ConfigurationWifi/ConfigurationWifi";
function WirelessSetting({
  formik,
  wirelessStateIpAddress,
  setWirelessStateIpAddress,
  wirelessStateDnsAddress,
  setWirelessStateDnsAddress,
  wifiEnable,
  setWifiEnable,
  securityKeyEnable,
  setSecurityKeyEnable,
}) {
  const handleWifiEnabled = () => {
    setWifiEnable(!wifiEnable);
    setSecurityKeyEnable(true);
    setWirelessStateIpAddress(true);
    setWirelessStateDnsAddress(true);
  };

  return (
    <div className="form-group">
      <FormControl component="fieldset">
        <FormLabel component="legend">Wireless Settings</FormLabel>
        <div className="wireless-checkbox" style={{ padding: "0 0 30px 0" }}>
          <FormControlLabel
            value={wifiEnable}
            control={<Checkbox />}
            label="Enable wifi:"
            onChange={() => handleWifiEnabled()}
          />
        </div>
        <FormControl disabled={wifiEnable}>
          <ConfigurationWifi
            handleChange={formik.handleChange}
            values={formik.values}
            securityKeyEnable={securityKeyEnable}
            setSecurityKeyEnable={setSecurityKeyEnable}
            errors={formik.errors}
            wifiEnable={wifiEnable}
          />
          <ConfigurationIP
            handleChange={formik.handleChange}
            values={formik.values}
            ethernet={false}
            wirelessStateIpAddress={wirelessStateIpAddress}
            setWirelessStateIpAddress={setWirelessStateIpAddress}
            errors={formik.errors}
            handleWifiEnabled={handleWifiEnabled}
          />
          <ConfigurationDNS
            handleChange={formik.handleChange}
            values={formik.values}
            ethernet={false}
            wirelessStateDnsAddress={wirelessStateDnsAddress}
            setWirelessStateDnsAddress={setWirelessStateDnsAddress}
            errors={formik.errors}
            handleWifiEnabled={handleWifiEnabled}
          />
        </FormControl>
      </FormControl>
    </div>
  );
}

export default WirelessSetting;
