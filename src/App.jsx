import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import EthernetSetting from "./components/EthernetSettings";
import WirelessSetting from "./components/WirelessSettings";
import { ipv4, subnetMask, dns } from "./components/helpers/validation";
import { submitFunction } from "./components/helpers/submitFunction";
import "./styles.scss";

function App() {
  const [wifiEnable, setWifiEnable] = useState(true);
  const [securityKeyEnable, setSecurityKeyEnable] = useState(true);
  const [ethernetStateIpAddress, setEthernetStateIpAddress] = useState(true);
  const [ethernetStateDnsAddress, setEthernetStateDnsAddress] = useState(true);
  const [wirelessStateDnsAddress, setWirelessStateDnsAddress] = useState(true);
  const [wirelessStateIpAddress, setWirelessStateIpAddress] = useState(true);
  const validationSchema = yup.object().shape({
    ethernetIpAdress: !ethernetStateIpAddress
      ? yup
          .string()
          .required("Required files")
          .matches(ipv4, "Incorrect IP address")
      : null,
    wirelessIpAdress: !wirelessStateIpAddress
      ? yup
          .string()
          .required("Required files")
          .matches(ipv4, "Incorrect IP address")
      : null,
    ethernetSubnetMask: !ethernetStateIpAddress
      ? yup
          .string()
          .required("Required files")
          .matches(subnetMask, "Incorrect Subnet Mask address")
      : null,
    wirelessSubnetMask: !wirelessStateIpAddress
      ? yup
          .string()
          .required("Required files")
          .matches(subnetMask, "Incorrect Subnet Mask address")
      : null,
    ethernetPreferredDnsAdress: !ethernetStateDnsAddress
      ? yup
          .string()
          .required("Required files")
          .matches(dns, "Incorrect DNS address")
      : null,
    wirelessPreferredDnsAdress: !wirelessStateDnsAddress
      ? yup
          .string()
          .required("Required files")
          .matches(dns, "Incorrect DNS address")
      : null,
    wirelessNetworkName: !wifiEnable
      ? yup.string().required("Select Network Name")
      : null,
    wirelessNetworkSecurity: !securityKeyEnable
      ? yup.string().required("Key is required")
      : null,
  });
  
  const formik = useFormik({
    initialValues: {
      ethernetIpAdress: "",
      ethernetSubnetMask: "",
      ethernetDefaultGateway: "",
      ethernetPreferredDnsAdress: "",
      ethernetAlternativeDnsAdress: "",
      wirelessNetworkName: "",
      wirelessNetworkSecurity: "",
      wirelessIpAdress: "",
      wirelessSubnetMask: "",
      wirelessDefaultGateway: "",
      wirelessPreferredDnsAdress: "",
      wirelessAlternativeDnsAdress: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      submitFunction({
        values,
        wifiEnable,
        actions,
        wirelessStateDnsAddress,
        wirelessStateIpAddress,
        ethernetStateDnsAddress,
        ethernetStateIpAddress,
      });
    },
  });

  return (
    <div className="wrapper-container">
      <div className="container-form">
        <div className="container-content">
          <EthernetSetting
            formik={formik}
            ethernetStateIpAddress={ethernetStateIpAddress}
            ethernetStateDnsAddress={ethernetStateDnsAddress}
            setEthernetStateIpAddress={setEthernetStateIpAddress}
            setEthernetStateDnsAddress={setEthernetStateDnsAddress}
          />
          <WirelessSetting
            formik={formik}
            wirelessStateIpAddress={wirelessStateIpAddress}
            setWirelessStateIpAddress={setWirelessStateIpAddress}
            wirelessStateDnsAddress={wirelessStateDnsAddress}
            setWirelessStateDnsAddress={setWirelessStateDnsAddress}
            wifiEnable={wifiEnable}
            setWifiEnable={setWifiEnable}
            securityKeyEnable={securityKeyEnable}
            setSecurityKeyEnable={setSecurityKeyEnable}
          />
        </div>
        <div className="btns">
          <button
            type="submit"
            onClick={(values) => formik.handleSubmit(values)}
            className="submit"
          >
            Save
          </button>
          <button onClick={() => formik.handleReset()} className="cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
