const populateFormField = (val) => {
    if (!Number.isNaN(val)) {
      return val;
    } else {
      return "";
    }
  };

  export {populateFormField};