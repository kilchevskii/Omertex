import React from "react";
import { FormControlLabel } from "@mui/material";
import {
  Checkbox,
  TextField,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
function ConfigurationWifi({
  handleChange,
  values,
  securityKeyEnable,
  setSecurityKeyEnable,
  errors,
  wifiEnable
}) {
  return (
    <>
      <div className="field-container-wireless">
        <Select
          className="wifi-select"
          name={"wirelessNetworkName"}
          value={values.wirelessNetworkName}
          onChange={handleChange}
        >
          <MenuItem value={"Cisco"}>Cisco</MenuItem>
          <MenuItem value={"Huawei"}>Huawei</MenuItem>
          <MenuItem value={"HomeNetwork"}>HomeNetwork</MenuItem>
        </Select>
        <FormHelperText>Wireless Network Name *</FormHelperText>
        <div className="required">{!wifiEnable && errors.wirelessNetworkName}</div>
      </div>
      <FormControlLabel
        onChange={() => setSecurityKeyEnable(!securityKeyEnable)}
        control={<Checkbox />}
        label="Enable Wireless Security:"
      />
      <div className="fields-group">
        <div className="field-container">
          <TextField
            helperText="Security Key *"
            disabled={securityKeyEnable}
            name={"wirelessNetworkSecurity"}
            value={values.wirelessNetworkSecurity}
            onChange={handleChange}
          />
          <div className="required">{!securityKeyEnable && errors.wirelessNetworkSecurity}</div>
        </div>
      </div>
    </>
  );
}

export default ConfigurationWifi;
