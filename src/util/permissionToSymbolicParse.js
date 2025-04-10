export default function permissionToSymbolicParse(str) {
  // Removing the directory / file char
  str = str.slice(1);

  // Split the str into 3 groups (user, group & other) & remove all "-" characters
  const user = str.slice(0, 3).replace(/-/g, "");
  const group = str.slice(3, 6).replace(/-/g, "");
  const others = str.slice(6, 9).replace(/-/g, "");

  const shouldHaveCommaUser = group || others ? "," : "";
  const shouldHaveCommaGroup = others ? "," : "";

  const userCommand = user ? `u=${user}${shouldHaveCommaUser}` : "";
  const groupCommand = group ? `g=${group}${shouldHaveCommaGroup}` : "";
  const othersCommand = others ? `o=${others}` : "";

  return `${userCommand}${groupCommand}${othersCommand}`;
}
