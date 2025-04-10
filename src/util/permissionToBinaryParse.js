export default function permissionToBinaryParse(permissionString) {
  const str = permissionString.slice(1);

  const userPermission = str.slice(0, 3);
  const groupPermission = str.slice(3, 6);
  const othersPermission = str.slice(6, 9);

  const userPermissionNumeric = permissionToNumeric(userPermission);
  const groupPermissionNumeric = permissionToNumeric(groupPermission);
  const othersPermissionNumeric = permissionToNumeric(othersPermission);

  return `${userPermissionNumeric}${groupPermissionNumeric}${othersPermissionNumeric}`;
}

function permissionToNumeric(str) {
  // Transform the str (rwx) into binary (111)
  const binaryString = str
    .split("")
    .map((char) => {
      if (/[a-zA-Z]/.test(char)) {
        return "1";
      } else if (char === "-") {
        return "0";
      }
      return char;
    })
    .join("");

  // Binary to decimal
  return parseInt(binaryString, 2);
}
