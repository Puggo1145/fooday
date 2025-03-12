import { SafeArea } from "../../components/safe-area/index.jsx";
// components
import { Header } from "./_components/header/index.jsx";
import { Dashboard } from "./_components/dashboard/index.jsx";
import { Foods } from "./_components/foods/index.jsx";

export function Home() {
  return (
    <SafeArea>
      <Header />
      <Dashboard />
      <Foods />
    </SafeArea>
  )
}
