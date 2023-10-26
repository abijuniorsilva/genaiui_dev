import React, { useEffect, useState } from "react";

const loginUser = async (credentials) => {
  console.log(credentials);
  return credentials ? "token" : null;
}

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    console.log(token);
    localStorage.setItem("token", token);
    window.location.href = "/";
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) window.location.href = "/";
  }, []);

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex h-fit w-fit bg-white flex-col justify-center px-6 py-12 lg:px-8 border-1 rounded-lg">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autoComplete="email" required className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bees-pink sm:text-sm sm:leading-6 outline-none" onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              </div>
              <div className="mt-2">
                <input id="password" name="password" type="password" autoComplete="current-password" required className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bees-pink sm:text-sm sm:leading-6 outline-none"  onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-bees-pink px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-bees-pink/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bees-pink">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;