import CardCount from "../components/CardCount"

const DashboardPage = () => {
  return (
    <div className="w-full">
      <div className="flex gap-4 sm:gap-3">
        <CardCount label="Nombres d’examen éffectué" counter={20}/>
        <CardCount label="Etablissement de santé" counter={10}/>
        <CardCount label="Nombres de consultations effectué" counter={9}/>
      </div>
    </div>
  )
}

export default DashboardPage
