import { useContext } from "react";
import ClimaContext from "../context/ClimaProvider";

const useClima = ()=>useContext(ClimaContext)

export default useClima