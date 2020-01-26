export const editProjectType = (project, event) => {
  const { value } = event.target;

  return { ...project, type: value.replace(/ /g, "_") };
};
