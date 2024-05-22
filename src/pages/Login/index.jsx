import { Formik } from "formik";
import { useLoginMutation } from "shared/api/services/usersApi";
import { saveTokenToLocal } from "shared/api/xhr/helpers";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const handleFormikSubmit = async (values) => {
    const { data, error } = await login(values);

    if (data?.token) {
      saveTokenToLocal(data?.token);
      return navigate("/admin");
    }
    toast.error(error?.data?.message);
  };
  return (
    <div className="container mx-auto">
      <div className="px-5 py-6">
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={handleFormikSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col text-black">
                <div className="pb-5">
                  <input
                    type="text"
                    name="username"
                    className="w-full px-5 py-2 rounded"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                  />
                </div>
                {errors.username && touched.username && errors.username}
                <div className="pb-8">
                  <input
                    type="password"
                    name="password"
                    className="w-full px-5 py-2 rounded"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </div>
                {errors.password && touched.password && errors.password}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="text-white px-4 py-2 outline rounded"
                    disabled={isLoading}
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

export default Login;
