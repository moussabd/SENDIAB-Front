import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="ml-10 flex flex-nowrap gap-3 mt-4">
      
      <div className="flex-col w-2/3">
      <div className="mb-10">
        <img
          className="max-w-48"
          src="sen-numerique.png"
          alt="senegal numerique"
        />
      </div>
        <h1 className="text-5xl uppercase font-[1100] text-primary mb-10 ">
          sendiab
        </h1>
        <p className="font-bold text-3xl mb-20">
          Votre plateforme de télésurveillance personnelle
        </p>
        <p className="font-[503] text-3xl mb-10">
          Planifiez des consultations immédiates, sauvegardez vos dossiers
          médicaux et recevez vos ordonnances numériques.
        </p>

        <div className="flex flex-col gap-10 text-center w-[400px] mt-24">
          <Link
            to="register"
            className="bg-primary text-lg text-white hover:text-white leading-6 font-medium  px-20 py-4 rounded-lg"
          >
            S'inscrire
          </Link>
          <p className="leading-5 font-medium">Vous avez déjà un compte ?</p>
          <Link
            to="register"
            className="text-primary text-lg border border-black hover:border-primary hover:bg-primary hover:text-white px-20 py-4 rounded-lg"
          >
            S'identifier
          </Link>
        </div>
      </div>
      <div className="w-full">
        <img className="object-fill w-full h-[100vh]" src="doctor.png" alt="Doctor" />
      </div>
    </div>
  );
};

export default HomePage;
