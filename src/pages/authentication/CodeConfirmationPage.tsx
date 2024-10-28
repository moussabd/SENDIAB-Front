import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";

const CodeConfirmationPage = () => {
  return (
    <div className="w-full p-8">
      <Link
        to="/"
        className="flex items-center gap-2 text-base   font-semibold leading-7 text-black hover:text-primary-600"
      >
        <ArrowLeftIcon className="size-6" />{" "}
        Connexion
      </Link>
      <div className="w-full ml-6 flex  items-center">
        <div className="flex-1 ml-20 flex-col ">
          <div>
            <h2 className="text-3xl text-center font-bold leading-7 text-gray-900">
              Recevez un code de confirmation via
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
              label="Numéro de téléphone"
              name="phone"
              type="text"
              className="col-span-full"
            />

            <div className="col-span-full">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary border border-primary uppercase px-3 py-2 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Envoyer
              </button>
            </div>
          </form>
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

export default CodeConfirmationPage;
