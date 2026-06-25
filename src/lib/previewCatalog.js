/** Static sample directory data used when the API is not configured (local preview). */

export const PREVIEW_DIRECTORY_COUNTRIES = [
  { id: 9001, name: "Nigeria", branch_country_code: "NG" },
  { id: 9002, name: "Ghana", branch_country_code: "GH" },
];

export const PREVIEW_DIRECTORY_STATES = {
  9001: [
    { id: 9101, name: "Rivers State", branch_state_code: "RI", country_id: 9001 },
    { id: 9102, name: "Lagos State", branch_state_code: "LA", country_id: 9001 },
  ],
  9002: [{ id: 9201, name: "Greater Accra", branch_state_code: "GA", country_id: 9002 }],
};

export const PREVIEW_CHURCHES = [
  {
    id: 9901,
    name: "Headquarters — Preview Branch",
    address: "Sample address (preview data only)",
    branch_country: "NG",
    branch_state: "RI",
    directory_branch_id: null,
  },
  {
    id: 9902,
    name: "Satellite Campus — Preview",
    address: "Sample satellite address",
    branch_country: "NG",
    branch_state: "RI",
    directory_branch_id: null,
  },
];
