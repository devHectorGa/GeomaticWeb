export const changeTitle = (project, event) => {
  const { name, value } = event.target;
  let newProject = { ...project, [name]: value };
  return newProject;
};

export const changeCommission = (project, event) => {
  const { name, value } = event.target;
  const {
    commission: { surveyor, ...otherCommission },
    ...otherProps
  } = project;

  let newSurveyor =
    name === "name"
      ? { ...surveyor, name: value }
      : { ...surveyor, email: value };
  return {
    commission: { surveyor: newSurveyor, ...otherCommission },
    ...otherProps
  };
};

export const changeAnnotator = (project, event) => {
  const { name, value } = event.target;
  const {
    commission: { annotator, ...otherCommission },
    ...otherProps
  } = project;

  // let newAnnotator = { name: "nombre", email: "email" };
  let newAnnotator =
    name === "name"
      ? { ...annotator, name: value }
      : { ...annotator, email: value };
  return {
    commission: { annotator: newAnnotator, ...otherCommission },
    ...otherProps
  };
};
