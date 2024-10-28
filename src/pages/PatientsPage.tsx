import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import {
  ArrowDownTrayIcon,
  ArrowUpIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

type Paitent = {
  prenom: string;
  nom: string;
  email: string;
  tel: string;
  addresse: string;
};

const PatientsPage = () => {

  const entetes: string[] = ["Prénom", "Nom", "Email", "Tel", "Addresse","details"];

  const donnees: Paitent[] = [
    {
      prenom: "Modou",
      nom: "Diop",
      email: "moudou.diop@gmail.com",
      tel: "776668899",
      addresse: "Dakar",
    },
    {
      prenom: "Lamine",
      nom: "Seck",
      email: "lamine.seck@gmail.com",
      tel: "776668890",

      addresse: "thies",
    },
    {
      prenom: "Oumou",
      nom: "Sy",
      email: "oumou.sy@gmail.com",
      tel: "776668990",
      addresse: "Joal",
    },
    {
      prenom: "Aminata",
      nom: "Sall",
      email: "aminata.sall@gmail.com",
      tel: "776667890",
      addresse: "Ziguinchor",
    },
  ];

  return (
    <main className="mx-2">
      <div className="px-3 py-2 flex flex-nowrap text-white mb-4 bg-primary rounded-lg">
        <div className="flex flex-col gap-3 w-1/4 border-r mr-2">
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-2xl  uppercase">Dr.Daff</h4>
            <span className="text-[12px]">24 | Janvier | 2024</span>
          </div>
          <span className="text-sm text-center">Plus de details</span>
        </div>
        <div className="flex flex-col gap-4 font-[900] w-3/4">
          <h4 className="text-2xl  ">SENDIAB</h4>
          <h4 className="text-2xl text-end ">HOPITALE PRINCIPALE</h4>
        </div>
      </div>
      <div className="flex justify-center gap-3 mx-20 mb-5">
        <div className="px-2 py-3  flex items-center gap-2 justify-between bg-primary text-white rounded-md w-[300px]">
          <UserCircleIcon className="size-9" />
          <div className="flex flex-col text-sm">
            <span className="text-[16px] font-bold">Total Patients</span>
            <span>46</span>
          </div>
          <ArrowUpIcon className="size-9" />
        </div>
        <div className="px-2 py-3 flex items-center gap-2 justify-between bg-primary text-white rounded-md w-[300px]">
          <UserCircleIcon className="size-9" />
          <div className="flex flex-col text-sm">
            <span className="font-bold text-[16px]">Mes consultations</span>
            <span>46</span>
          </div>
          <ArrowUpIcon className="size-9" />
        </div>

        <div className="px-2 py-3 flex items-center gap-2 justify-between bg-primary text-white rounded-md w-[300px]">
          <UserCircleIcon className="size-9" />
          <div className="flex flex-col text-sm">
            <span className="text-[16px] font-bold">Cas critique</span>
            <span>6</span>
          </div>
          <ArrowUpIcon className="size-9" />
        </div>
      </div>

      <div className="flex w-full shadow-md px-3 py-3 rounded-md mb-6">
        <div className="flex gap-3 items-center w-1/2">
          <h4 className="font-[700] text-lg">Liste des patients</h4>
          <div className="bg-yellow-500 w-6 h-6 rounded-full px-2 text-center">
            <span className="text-[0.8rem]">8</span>
          </div>
        </div>
        <div className="w-1/2 flex items-center gap-2">
          <div className="flex justify-center items-center border border-primary w-8 h-8 rounded-full px-[1px] text-primary hover:text-white hover:bg-primary">
          <FontAwesomeIcon  icon={faHeartPulse} className="size-5" />
          </div>
          <div className="flex justify-center items-center border border-primary w-8 h-8 rounded-full px-[1px] text-primary hover:text-white hover:bg-primary">
            <DocumentTextIcon className="size-5" />
          </div>
          <div className="flex justify-center items-center border border-primary w-8 h-8 rounded-full px-[1px] text-primary hover:text-white hover:bg-primary">
            <ArrowDownTrayIcon className="size-5" />
          </div>
          
        </div>
      </div>

      <div className="mx-auto rounded-md">
        <div className="flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-lg border border-slate-200 p-2">
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr className="border border-slate-200 bg-white  rounded-lg">
                {entetes.map((title) => (
                  <th key={title} className="p-4">
                    <p className="text-sm font-normal leading-none text-slate-500">
                      {title}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {donnees.map((donnee) => (
                <tr key={donnee.prenom} className="hover:bg-slate-50">
                  <td className="p-4 py-5">
                    <p className="block font-semibold text-sm text-slate-800">
                      {donnee.prenom}
                    </p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">{donnee.nom}</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">{donnee.email}</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">{donnee.tel}</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">{donnee.addresse}</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="bg-primary py-1 text-[12px] text-white text-center rounded-xl">Voir plus</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default PatientsPage;
