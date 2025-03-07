import { CarroComPlaca } from "./CarroComPlaca.mjs";
import { Locadora } from "./Locadora.mjs";

var locadora = new Locadora();
locadora.adicionaCarro(new CarroComPlaca("ABC-9123"));
locadora.adicionaCarro(new CarroComPlaca("ABC-9557"));
locadora.consultaCarros();

locadora.abasteceCarro(0, 30);
locadora.abasteceCarro(1, 30);
locadora.consultaCarros();

locadora.abasteceCarro(0, 30);
locadora.abasteceCarro(1, 30);
locadora.consultaCarros();
