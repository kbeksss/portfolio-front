import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useUploadProjectMutation } from "shared/api/services/projectApi";
import { useCheckAdminQuery } from "shared/api/services/usersApi";
import { Navigate } from "react-router";
import "./styles.css";

const Admin = () => {
  const navigate = useNavigate();
  const { error: adminError } = useCheckAdminQuery();
  const [uploadProject] = useUploadProjectMutation();
  const handleFormikSubmit = async (values) => {
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
  if (adminError?.status === 403) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="container mx-auto">
      <div className="admin px-5 py-6">
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
              <div className="flex flex-col">
                <div className="pb-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Project name"
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
                    placeholder="Project type"
                    className="w-full px-5 py-2 rounded"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.type}
                  />
                </div>
                {errors.type && touched.type && errors.type}
                <div className="grid grid-cols-2 gap-4 pb-5">
                  <div>
                    <div>
                      <label htmlFor="start">Start: </label>
                    </div>
                    <input
                      type="date"
                      name="start"
                      id="start"
                      className="px-2 py-2 w-full rounded"
                      onChange={(e) =>
                        setFieldValue(
                          "start",
                          new Date(e.target.value).toISOString()
                        )
                      }
                    />
                  </div>
                  <div>
                    <div>
                      <label htmlFor="end">End: </label>
                    </div>
                    <input
                      type="date"
                      name="end"
                      id="end"
                      className="px-2 py-2 w-full rounded"
                      onChange={(e) =>
                        setFieldValue(
                          "end",
                          new Date(e.target.value).toISOString()
                        )
                      }
                    />
                  </div>
                </div>
                {errors.start && touched.start && errors.start}
                {errors.end && touched.end && errors.end}
                <div className="grid grid-cols-2 pb-5 gap-4">
                  <input
                    type="text"
                    name="bgColor"
                    className="w-full px-5 py-2 rounded"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="background color"
                    value={values.bgColor}
                  />
                  {errors.bgColor && touched.bgColor && errors.bgColor}
                  <input
                    type="text"
                    name="textColor"
                    className="w-full px-5 py-2 rounded"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="text color"
                    value={values.textColor}
                  />
                  {errors.textColor && touched.textColor && errors.textColor}
                </div>
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
