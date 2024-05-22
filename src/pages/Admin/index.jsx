import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useUploadProjectMutation } from "shared/api/services/projectApi";

const Admin = () => {
  const navigate = useNavigate();
  const [uploadProject] = useUploadProjectMutation();
  const handleFormikSubmit = async (values) => {
    console.log("values", values);
    const formData = new FormData();
    for (const key in values) {
      formData.append(key, values[key]);
    }
    const { data, error } = await uploadProject(formData);
    if (data) {
      toast.success("Added successfully");
      setTimeout(() => navigate("/projects"), 1500);
      return;
    }
    toast.error(error?.data?.message);
  };
  return (
    <div className="container mx-auto">
      <div className="px-5 py-6">
        <Formik
          initialValues={{
            name: "",
            type: "",
            start: "",
            end: "",
            bgColor: "",
            textColor: "",
            thumbImg: null,
          }}
          onSubmit={handleFormikSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            setFieldValue,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col text-black">
                <div className="pb-5">
                  <input
                    type="text"
                    name="name"
                    className="w-full px-5 py-2 rounded"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </div>
                {errors.name && touched.name && errors.name}
                <div className="pb-5">
                  <input
                    type="text"
                    name="type"
                    className="w-full px-5 py-2 rounded"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.type}
                  />
                </div>
                {errors.type && touched.type && errors.type}
                <div className="pb-5">
                  <input
                    type="text"
                    name="start"
                    className="w-full px-5 py-2 rounded"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.start}
                  />
                </div>
                {errors.start && touched.start && errors.start}
                <div className="pb-5">
                  <input
                    type="text"
                    name="end"
                    className="w-full px-5 py-2 rounded"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.end}
                  />
                </div>
                {errors.end && touched.end && errors.end}
                <div className="pb-5">
                  <input
                    type="text"
                    name="bgColor"
                    className="w-full px-5 py-2 rounded"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.bgColor}
                  />
                </div>
                {errors.bgColor && touched.bgColor && errors.bgColor}
                <div className="pb-5">
                  <input
                    type="text"
                    name="textColor"
                    className="w-full px-5 py-2 rounded"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.textColor}
                  />
                </div>
                {errors.textColor && touched.textColor && errors.textColor}
                <div className="pb-5">
                  <input
                    type="file"
                    name="thumbImg"
                    className="w-full px-5 py-2 rounded"
                    onChange={(event) => {
                      setFieldValue("thumbImg", event.currentTarget.files[0]);
                    }}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.thumbImg && touched.thumbImg && errors.thumbImg}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="text-white px-4 py-2 outline rounded"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Admin;
