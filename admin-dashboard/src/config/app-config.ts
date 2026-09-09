import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "Auto365 Preview Admin",
  version: packageJson.version,
  copyright: `© ${currentYear}, 365Group.`,
  meta: {
    title: "Auto365 Preview Admin",
    description: "Quản lý và chỉnh sửa nhanh các landing page preview của auto365.vn.",
  },
};
