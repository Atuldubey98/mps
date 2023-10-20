import { ChangeEventHandler, FormEventHandler, useState } from "react";
import Container from "../common/Container";
import { useMutation } from "@apollo/client";
import { LOGIN_USER, REGISTER_USER } from "../../graphql/auth";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function AuthenticationPage() {
  const [typeOfAuth, setTypeOfAuth] = useState<"login" | "signup">("login");
  const isSignUp = typeOfAuth === "signup";
  const auth = useAuth();
  const defaultUser = { email: "", password: "", name: "" };
  const [user, setUser] = useState(defaultUser);
  const [
    register,
    { loading: registerLoading, error: registerError, reset: resetSignUpForm },
  ] = useMutation(REGISTER_USER);
  const navigate = useNavigate();
  const [
    login,
    { loading: loginLoading, error: loginError, reset: resetLoginForm },
  ] = useMutation(LOGIN_USER, {
    onCompleted(data) {
      localStorage.setItem("token", data.login.token);
      auth?.onSetAuthUser(data.login.user);
      navigate("/students");
    },
  });
  const onToggleAuth = () => {
    setTypeOfAuth(isSignUp ? "login" : "signup");
    resetLoginForm();
    resetSignUpForm();
  };
  const getFormValues = () => {
    return isSignUp ? user : { email: user.email, password: user.password };
  };
  const onChangeUser: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value });
  };
  const errorMessage = registerError
    ? registerError.message
    : loginError
    ? loginError.message
    : "";
  const optionsAuth = { variables: getFormValues() };
  const onLoginFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    login(optionsAuth);
  };
  const onRegisterFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    register(optionsAuth);
  };
  return (
    <Container>
      <div className="container-md mx-auto px-4">
        <form
          onSubmit={isSignUp ? onRegisterFormSubmit : onLoginFormSubmit}
          className="p-2 grid gap-3 rounded max-w-sm mx-auto mt-20"
        >
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={onChangeUser}
            placeholder="Email"
            className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={onChangeUser}
            value={user.password}
            className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
          />
          {isSignUp ? (
            <input
              type="name"
              id="name"
              name="name"
              placeholder="Name"
              onChange={onChangeUser}
              value={user.name}
              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
            />
          ) : null}
          <div className="mx-auto">
            {loginLoading || registerLoading ? null : (
              <button className="p-2 bg-sky-500 hover:bg-sky-700 active:bg-bg-sky-700 text-white rounded">
                {isSignUp ? "Register" : "Login"}
              </button>
            )}
          </div>
          <p
            onClick={onToggleAuth}
            className="text-sm text-center cursor-pointer underline hover:text-purple-600"
          >
            {isSignUp ? "Already registered? Login instead !" : "Register "}
          </p>
          {registerError || loginError ? (
            <p className="text-sm text-center text-red-500">{errorMessage}</p>
          ) : null}
        </form>
      </div>
    </Container>
  );
}
