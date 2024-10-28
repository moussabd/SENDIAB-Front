import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import DropDown from "../../components/DropDown";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const options: { label: string; value: string }[] = [
    {
      label: "Patient",
      value: "patient",
    },
    {
      label: "Doctor",
      value: "doctor",
    },
  ];

  return (
    <div className="w-full  flex mt-10">
      <div className="flex-1 ml-20 flex-col ">
        <div>
          <Link
            to="/"
            className="flex items-center gap-3 text-base mb-8 font-semibold leading-7  text-black hover:text-primary-600"
          >
            <ArrowLeftIcon className="size-6" /> Créer un compte
          </Link>
          <h2 className="text-2xl text-center font-semibold leading-7 text-gray-900">
            Inscription
          </h2>
        </div>
        <form className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
          <Input
            label="Nom Complet"
            name="full-name"
            type="text"
            className="col-span-full"
          />
          <Input
            label="Lieu de Naissance"
            name="lieu-naissance"
            type="text"
            className="sm:col-span-3"
          />
          <Input
            label="Date de Naissance"
            name="birthdate"
            type="text"
            className="sm:col-span-3"
          />
          <DropDown
            label="Status"
            name="type"
            options={options}
            className="sm:col-span-3"
          />
          <Input
            label="Téléphone"
            name="phone"
            type="text"
            className="sm:col-span-3"
          />
          <Input
            label="Spécialité"
            name="specialite"
            type="text"
            className="sm:col-span-3"
          />
          <Input
            label="Matricule"
            name="matricule"
            type="text"
            className="sm:col-span-3"
          />
          <DropDown
            label="Genre"
            name="genre"
            options={options}
            className="sm:col-span-3"
          />
          <Input label="CNI" name="cni" type="text" className="sm:col-span-3" />
          <Input
            label="Addresse email"
            name="cni"
            type="text"
            className="col-span-full"
          />
          <Input
            label="Mot de passe"
            name="cni"
            type="text"
            className="col-span-full"
          />
          <div className="col-span-full flex items-center gap-x-3 mb-2">
            <input
              id="push-email"
              name="push-notifications"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="push-email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Acepto los términos, condiciones y política de privacidad
            </label>
          </div>
          <div className="col-span-full">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary border border-primar uppercase px-3 py-2 text-sm font-bold leading-6 text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Inscription
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">
          Vous avez déjà un compte ?{" "}
          <Link
            to="/login"
            className="font-semibold leading-6 text-primary hover:text-primary-600"
          >
            S'identifier
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
  );
};

export default RegisterPage;
