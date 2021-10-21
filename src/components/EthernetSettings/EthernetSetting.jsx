import React from "react";
import { FormLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import ConfigurationIP from "../ConfigurationIP";
import ConfigurationDNS from "../ConfigurationDNS";
function EthernetSetting({
  formik,
  setEthernetStateIpAddress,
  ethernetStateIpAddress,
  ethernetStateDnsAddress,
  setEthernetStateDnsAddress,
}) {
  return (
    <div className="form-group">
      <FormControl component="fieldset">
        <FormLabel component="legend">Ethernet Settings</FormLabel>
        <ConfigurationIP
          handleChange={formik.handleChange}
          onSubmit={formik.onSubmit}
          values={formik.values}
          ethernet={true}
          ethernetStateIpAddress={ethernetStateIpAddress}
          setEthernetStateIpAddress={setEthernetStateIpAddress}
          errors={formik.errors}
        />
        <ConfigurationDNS
          handleChange={formik.handleChange}
          values={formik.values}
          ethernet={true}
          setEthernetStateDnsAddress={setEthernetStateDnsAddress}
          ethernetStateDnsAddress={ethernetStateDnsAddress}
          errors={formik.errors}
        />
      </FormControl>
    </div>
  );
}

export default EthernetSetting;
