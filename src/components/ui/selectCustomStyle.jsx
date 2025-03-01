export const customStyle = {
  control: (base, state) => ({
    ...base,
    border: state.isFocused ? "1px solid #000000" : "1px solid #d1d5db",

    padding: "0.1rem",
    boxShadow: "none",
    lineHeight: "1.25rem",
    fontSize: "0.875rem",
    fontWeight: "100",
    outline: state.isFocused ? "1px solid #000000" : "none",
    "&:hover": {
      borderColor: "",
    },
  }),

  option: (base, state) => ({
    ...base,
    padding: "0.5rem",
    cursor: "pointer",
    backgroundColor: state.isFocused ? "#1967D2" : "white",
    color: state.isFocused ? "#ffffff" : "#000000",
    "&:hover": {
      backgroundColor: "",
    },
  }),
};
