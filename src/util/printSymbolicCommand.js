export default function printSymblicCommand(str) {
  // Removing the directory / file char
  str = str.slice(1);

  // Split the str into 3 groups (user, group & other) & remove all "-" characters
  const userPermission = str.slice(0, 3).replace(/-/g, "");
  const groupPermission = str.slice(3, 6).replace(/-/g, "");
  const othersPermission = str.slice(6, 9).replace(/-/g, "");

  const shouldHaveCommaUser = groupPermission || othersPermission ? "," : "";
  const shouldHaveCommaGroup = othersPermission ? "," : "";

  const userCommand = userPermission ? `u=${userPermission}${shouldHaveCommaUser}` : "";
  const groupCommand = groupPermission
    ? `g=${groupPermission}${shouldHaveCommaGroup}`
    : "";
  const othersCommand = othersPermission ? `o=${othersPermission}` : "";

  return `${userCommand}${groupCommand}${othersCommand}`;
}
