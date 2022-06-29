import React from "react";

const Form = ({
  formClassName,
  areaName,
  titleName,
  buttonName,
  areaClassName,
  titleClassName,
  title,
  content,
  handleChange,
  handleSubmit,
  isExpanded = null,
  expand = null,
}) => {
  return (
    <form className={formClassName} onSubmit={handleSubmit}>
      <input
        className={titleClassName}
        name={titleName}
        onChange={handleChange}
        value={title}
        placeholder="Title"
      />
      <textarea
        className={areaClassName}
        name={areaName}
        onClick={expand}
        onChange={handleChange}
        value={content}
        placeholder="Take a note..."
        rows={isExpanded ? 3 : 1}
      />

      <button type="submit"> {buttonName} </button>
    </form>
  );
};

export default Form;
