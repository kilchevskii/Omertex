import React, { useState } from "react";
import { Radio, RadioGroup, FormControlLabel, TextField } from "@mui/material";

function ConfigurationIP({
  disabled,
  handleChange,
  ethernet,
  values,
  setEthernetStateIpAddress,
  ethernetStateIpAddress,
  wirelessStateIpAddress,
  setWirelessStateIpAddress,
  errors,
}) {
  const [ipSetting, setIpSetting] = useState("DHCP");
  const changeRadio = (event) => {
    setIpSetting(event);
    event === "DHCP"
      ? ethernet
        ? setEthernetStateIpAddress(true)
        : setWirelessStateIpAddress(true)
      : ethernet
      ? setEthernetStateIpAddress(false)
      : setWirelessStateIpAddress(false);
  };
  return (
    <div className="ip-container">
      <div className="radio-group">
        <RadioGroup
          disabled={disabled}
          aria-label="settings"
          name="controlled-radio-buttons-group"
          value={ipSetting}
        >
          <FormControlLabel
            value="DHCP"
            control={<Radio />}
            onChange={(event) => changeRadio(event.target.defaultValue)}
            label="Obtain an IP address automatically (DHCP/BootP)"
          />
          <FormControlLabel
            value="IP"
            control={<Radio />}
            onChange={(event) => changeRadio(event.target.defaultValue)}
            label="Use the following IP adress:"
          />
        </RadioGroup>
      </div>
      <div className="fields-group">
        <div className="field-container">
          <TextField
            helperText="IP adress *"
            disabled={
              ethernet ? ethernetStateIpAddress : wirelessStateIpAddress
            }
            required={true}
            id={ethernet ? "ethernetIpAdress" : "wirelessIpAdress"}
            value={ethernet ? values.ethernetIpAdress : values.wirelessIpAdress}
            onChange={handleChange}
          />
          {
            <div className="required">
              {ethernet
                ? !ethernetStateIpAddress && errors?.ethernetIpAdress
                : !wirelessStateIpAddress && errors?.wirelessIpAdress}
            </div>
          }
        </div>
        <div className="field-container">
          <TextField
            helperText="Subnet Mask *"
            disabled={
              ethernet ? ethernetStateIpAddress : wirelessStateIpAddress
            }
            required={true}
            id={ethernet ? "ethernetSubnetMask" : "wirelessSubnetMask"}
            value={
              ethernet ? values.ethernetSubnetMask : values.wirelessSubnetMask
            }
            onChange={handleChange}
          />
          {
            <div className="required">
              {ethernet
                ? !ethernetStateIpAddress && errors?.ethernetSubnetMask
                : !wirelessStateIpAddress && errors?.wirelessSubnetMask}
            </div>
          }
        </div>
        <div className="field-container">
          <TextField
            helperText="Default Gateway"
            disabled={
              ethernet ? ethernetStateIpAddress : wirelessStateIpAddress
            }
            id={ethernet ? "ethernetDefaultGateway" : "wirelessDefaultGateway"}
            value={
              ethernet
                ? values.ethernetDefaultGateway
                : values.wirelessDefaultGateway
            }
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default ConfigurationIP;
