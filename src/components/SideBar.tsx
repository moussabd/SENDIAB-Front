import { UserCircleIcon } from "@heroicons/react/16/solid";
import {
  FolderPlusIcon,
  ForwardIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

type IconType = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string;
    titleId?: string;
  } & React.RefAttributes<SVGSVGElement>
>;

const links: { path: string, StartIcon: IconType; label: string; EndIcon: IconType }[] = [
  { path: '/informations', StartIcon: UserCircleIcon, label: "Informations", EndIcon: ForwardIcon },
  { path: '/dashboard/patients', StartIcon: FolderPlusIcon, label: "Consultations", EndIcon: ForwardIcon },
  {
    path: '/examens',
    StartIcon: ClipboardDocumentListIcon,
    label: "Examen",
    EndIcon: ForwardIcon,
  },
];

const SideBar = () => {
  return (
    <aside className="flex flex-col w-1/5 gap-10 bg-white px-3 py-1  shadow-sm">
      <h2 className="mt-2 font-bold">Détails</h2>
      <div className="flex rounded-md">
        <img
          className="object-fit w-[85px] sm:w-[45px] md:w-[50px] rounded-l-md h-full"
          src="public/picture.jpeg"
          alt="profile"
        />
        <div className="flex flex-col justify-center pl-3">
          <h3 className="text-[16px] sm:text-[12px] font-bold">Aminata Sy</h3>
          <span className="font-mono text-[12px] text-gray-500">
            24 Mars 2024
          </span>
        </div>
      </div>
      <div className="py-4 px-2 text-sm rounded-md bg-primary text-white text-center">
        Motif de la visite : bilan de santé et état d’avancement du diabéte.
      </div>
      <div className="flex flex-col gap-5">
        {links.map(({path, StartIcon, label, EndIcon}) => (
          <Link to={path} className="flex items-center sm:gap-2 text-lg text-black border border-black px-2 justify-between rounded-md py-4 hover:bg-primary hover:border-primary hover:text-white">
            <StartIcon className="size-8 sm:size-6" />
            <span className="sm:text-sm ">{label}</span>
            <EndIcon className="size-6 sm:size-4" />
          </Link>
        ))}

      </div>
    </aside>
  );
};

export default SideBar;
