import React, { useState } from "react";
import { Radio, RadioGroup, FormControlLabel, TextField } from "@mui/material";

function ConfigurationDNS({
  handleChange,
  ethernet,
  values,
  ethernetStateDnsAddress,
  setEthernetStateDnsAddress,
  wirelessStateDnsAddress,
  setWirelessStateDnsAddress,
  errors,
}) {
  const [dnsSetting, setDnsSetting] = useState("automatically");
  const changeRadio = (event) => {
    setDnsSetting(event);
    event === "automatically"
      ? ethernet
        ? setEthernetStateDnsAddress(true)
        : setWirelessStateDnsAddress(true)
      : ethernet
      ? setEthernetStateDnsAddress(false)
      : setWirelessStateDnsAddress(false);
  };
  return (
    <>
      <div className="radio-group">
        <RadioGroup
          aria-label="settings"
          name="controlled-radio-buttons-group"
          value={dnsSetting}
        >
          <FormControlLabel
            value="automatically"
            control={<Radio />}
            onChange={(event) => changeRadio(event.target.defaultValue)}
            label="Obtain DNS server address automatically"
          />
          <FormControlLabel
            value="DS"
            control={<Radio />}
            onChange={(event) => changeRadio(event.target.defaultValue)}
            label="Use the following DS server adress:"
          />
        </RadioGroup>
      </div>
      <div className="fields-group">
        <div className="field-container">
          <TextField
            helperText="Preferred DNS server *"
            disabled={
              ethernet ? ethernetStateDnsAddress : wirelessStateDnsAddress
            }
            required={true}
            id={
              ethernet
                ? "ethernetPreferredDnsAdress"
                : "wirelessPreferredDnsAdress"
            }
            value={
              ethernet
                ? values.ethernetPreferredDnsAdress
                : values.wirelessPreferredDnsAdress
            }
            onChange={handleChange}
          />
          <div className="required">
            {ethernet
              ? !ethernetStateDnsAddress && errors?.ethernetPreferredDnsAdress
              : !wirelessStateDnsAddress && errors?.wirelessPreferredDnsAdress}
          </div>
        </div>
        <div className="field-container">
          <TextField
            helperText="Alternative DNS server "
            disabled={
              ethernet ? ethernetStateDnsAddress : wirelessStateDnsAddress
            }
            id={
              ethernet
                ? "ethernetAlternativeDnsAdress"
                : "wirelessAlternativeDnsAdress"
            }
            value={
              ethernet
                ? values.ethernetAlternativeDnsAdress
                : values.wirelessAlternativeDnsAdress
            }
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

export default ConfigurationDNS;
