import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";

const LoginPage = () => {

  const navigate = useNavigate()

  return (
    <div className="w-full p-8">
      <Link
        to="/"
        className="flex gap-3 text-base font-semibold leading-7 text-black  hover:text-primary-600"
      >
        <ArrowLeftIcon className="size-6" /> Connexion
      </Link>
      <div className="w-full ml-6 flex  items-center">
        <div className="flex-1 ml-20 flex-col ">
          <div>
            <h2 className="text-3xl text-center font-bold leading-7 text-gray-900">
              Connexion
            </h2>
          </div>
          <form className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
            <Input
              label="Addresse email"
              name="email"
              type="text"
              className="col-span-full"
            />
            <Input
              label="Mot de passe"
              name="password"
              type="text"
              className="col-span-full"
            />

            <div className="col-span-full">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary border border-primar uppercase px-3 py-2 text-sm font-bold leading-6 text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                onClick={() => navigate("/dashboard")}
              >
                Connexion
              </button>
            </div>
          </form>
          <p className="mt-6 text-center text-sm text-gray-500">
            Vous n'avez pas de compte ?{" "}
            <Link
              to="/register"
              className="font-semibold leading-6 text-primary hover:text-primary-600"
            >
              S'inscrire
            </Link>
          </p>
        </div>
        <div className="flex-1">
          <img
            className="object-fill  w-full min-h-full"
            src="doctor.png"
            alt="Doctor"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
