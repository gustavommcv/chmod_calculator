export default function permissionToSymbolicParse(permission) {
  // Removing the directory / file char
  permission = permission.slice(1);

  // Split the permission into 3 groups (user, group & other) & remove all "-" characters
  const user = permission.slice(0, 3).replace(/-/g, "");
  const group = permission.slice(3, 6).replace(/-/g, "");
  const others = permission.slice(6, 9).replace(/-/g, "");

  const shouldHaveCommaUser = group || others ? "," : "";
  const shouldHaveCommaGroup = others ? "," : "";

  const userCommand = user ? `u=${user}${shouldHaveCommaUser}` : "";
  const groupCommand = group ? `g=${group}${shouldHaveCommaGroup}` : "";
  const othersCommand = others ? `o=${others}` : "";

  return `${userCommand}${groupCommand}${othersCommand}`;
}
