export const ip2long = function (ip: string) {
  let components;

  if ((components = ip.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/))) {
    let iplong = 0;
    let power = 1;
    for (let i = 4; i >= 1; i -= 1) {
      iplong += power * parseInt(components[i]);
      power *= 256;
    }
    return iplong;
  } else return -1;
};

export const inSubNet = function (ip: string, subnet: string) {
  let mask, base_ip;
  const long_ip = ip2long(ip);
  if (
    (mask = subnet.match(/^(.*?)\/(\d{1,2})$/)) &&
    (base_ip = ip2long(mask[1])) >= 0
  ) {
    const freedom = Math.pow(2, 32 - parseInt(mask[2]));
    return long_ip > base_ip && long_ip < base_ip + freedom - 1;
  } else return false;
};
