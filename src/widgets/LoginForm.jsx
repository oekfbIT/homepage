import PasswordInput from "@components/PasswordInput";
import BasicCheckbox from "@ui/BasicCheckbox";
import ResetPasswordPopup from "@components/ResetPasswordPopup";

// hooks
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// utils
import classNames from "classnames";

const LoginForm = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });
  const navigate = useNavigate();

  const onSubmit = () => navigate("/");

  const handleResetPassword = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <>
      <h1>Mannschaft Login</h1>
      <form>
        <div
          className="d-flex flex-column g-10"
          style={{ margin: "20px 0 30px" }}
        >
          <div className="d-flex flex-column g-20">
            <input
              className={classNames("field", { "field--error": errors.email })}
              type="text"
              placeholder="E-mail"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #888888",
                borderRadius: "4px",
                background: "#000000",
                color: "#e0e0e0",
                fontSize: "1rem",
              }}
            />
            <Controller
              control={control}
              name="password"
              rules={{ required: true }}
              render={({
                field: { ref, onChange, value },
                fieldState: { error },
              }) => (
                <PasswordInput
                  className={classNames("field", { "field--error": error })}
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  placeholder="Password"
                  innerRef={ref}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "15px",
                    border: "1px solid #888888",
                    borderRadius: "4px",
                    background: "#000000",
                    color: "#e0e0e0",
                    fontSize: "1rem",
                  }}
                />
              )}
            />
          </div>
          <div className="d-flex align-items-center g-10">
            <Controller
              control={control}
              name="rememberMe"
              render={({ field: { ref, onChange, value } }) => (
                <BasicCheckbox
                  id="rememberMe"
                  checked={value}
                  onChange={(e) => onChange(e.target.checked)}
                  innerRef={ref}
                />
              )}
            />
            <label htmlFor="rememberMe" style={{ color: "#e0e0e0" }}>
              Remember me
            </label>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <button
            className="btn btn--sm"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </button>
          <button
            className="text-button text-button--sm"
            onClick={handleResetPassword}
          >
            Reset password
          </button>
        </div>
      </form>
      <ResetPasswordPopup open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default LoginForm;
