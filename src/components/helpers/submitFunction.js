export const submitFunction = ({
  wifiEnable,
  values,
  actions,
  wirelessStateDnsAddress,
  wirelessStateIpAddress,
  ethernetStateDnsAddress,
  ethernetStateIpAddress,
  securityKeyEnable,
}) => {
  if (wifiEnable) {
    console.log(
      JSON.stringify({
        ethernetIpAdress:
          values.ethernetIpAdress && !ethernetStateIpAddress
            ? values.ethernetIpAdress
            : "DHCP/BootP",
        ethernetSubnetMask:
          values.ethernetSubnetMask && !ethernetStateIpAddress
            ? values.ethernetSubnetMask
            : "DHCP/BootP",
        ethernetDefaultGateway:
          values.ethernetDefaultGateway && !ethernetStateIpAddress
            ? values.ethernetDefaultGateway
            : "DHCP/BootP",
        ethernetPreferredDnsAdress:
          values.ethernetPreferredDnsAdress && !ethernetStateDnsAddress
            ? values.ethernetPreferredDnsAdress
            : "DHCP/BootP",
        ethernetAlternativeDnsAdress:
          values.ethernetAlternativeDnsAdress && !ethernetStateDnsAddress
            ? values.ethernetAlternativeDnsAdress
            : "DHCP/BootP",
      })
    );
    actions.resetForm({
      values: {
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
    });
  } else {
    console.log(
      JSON.stringify({
        ethernetIpAdress:
          values.ethernetIpAdress && !ethernetStateIpAddress
            ? values.ethernetIpAdress
            : "DHCP/BootP",
        ethernetSubnetMask:
          values.ethernetSubnetMask && !ethernetStateIpAddress
            ? values.ethernetSubnetMask
            : "DHCP/BootP",
        ethernetDefaultGateway:
          values.ethernetDefaultGateway && !ethernetStateIpAddress
            ? values.ethernetDefaultGateway
            : "DHCP/BootP",
        ethernetPreferredDnsAdress:
          values.ethernetPreferredDnsAdress && !ethernetStateDnsAddress
            ? values.ethernetPreferredDnsAdress
            : "DHCP/BootP",
        ethernetAlternativeDnsAdress:
          values.ethernetAlternativeDnsAdress && !ethernetStateDnsAddress
            ? values.ethernetAlternativeDnsAdress
            : "DHCP/BootP",
        wirelessNetworkName: values.wirelessNetworkName
          ? values.wirelessNetworkName
          : "DHCP/BootP",
        wirelessNetworkSecurity:
          values.wirelessNetworkSecurity && !securityKeyEnable
            ? values.wirelessNetworkSecurity
            : "DHCP/BootP",
        wirelessIpAdress:
          values.wirelessIpAdress && !wirelessStateIpAddress
            ? values.wirelessIpAdress
            : "DHCP/BootP",
        wirelessSubnetMask:
          values.wirelessSubnetMask && !wirelessStateIpAddress
            ? values.wirelessSubnetMask
            : "DHCP/BootP",
        wirelessDefaultGateway:
          values.wirelessDefaultGateway && !wirelessStateIpAddress
            ? values.wirelessDefaultGateway
            : "DHCP/BootP",
        wirelessPreferredDnsAdress:
          values.wirelessPreferredDnsAdress && !wirelessStateDnsAddress
            ? values.wirelessPreferredDnsAdress
            : "DHCP/BootP",
        wirelessAlternativeDnsAdress:
          values.wirelessAlternativeDnsAdress && !wirelessStateDnsAddress
            ? values.wirelessAlternativeDnsAdress
            : "DHCP/BootP",
      })
    );
    actions.resetForm({
      values: {
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
    });
  }
};
