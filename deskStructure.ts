import { ConfigContext } from "sanity";
import { StructureBuilder } from "sanity/desk";

const schemasToHide = ["account", "subscription", "notification"];

export const structure = (S: StructureBuilder, context: ConfigContext) => {
  const { currentUser } = context;

  const shouldShow =
    currentUser?.email.includes("odunsi") ||
    currentUser?.email.includes("feyisayo");

  return S.list()
    .title("Rice Maestro")
    .items([
      ...S.documentTypeListItems().filter((listItem) =>
        shouldShow ? true : !schemasToHide.includes(listItem.getId() ?? "")
      ),
    ]);
};
