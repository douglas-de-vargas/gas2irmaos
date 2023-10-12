// Next
import Image from "next/image";

// Componentes
import Button from "@/components/Button/Button";
import FormCarrinho from "@/components/FormCarrinho/FormCarrinho";
import FormDados from "@/components/FormDados/FormDados";

// icons
import { BsArrowRight } from "react-icons/bs";

export default function SuperGas() {
  return (
    <>
      <div>
        <div id="img">
          <Image
            src={"/image1.png"}
            alt={"SuperGas"}
            width={1}
            height={1}
          />
        </div>
        <p id="sec1">
          <span style={{ fontWeight: "bold" }}>Bem-vindo(a)</span>, você está na
          central de vendas{" "}
          <span
            style={{
              color: "orange",
              fontWeight: "bold",
              fontFamily: "serif",
              textShadow: "1px 1px 1px rgba(0,0,0,.1)",
            }}
          >
            Gás 2 Irmãos
          </span>
          , trabalhamos com um atendimento diferenciado para te oferecer o{" "}
          <span
            style={{ background: "rgba(255,255,0,.2)", borderRadius: "3px" }}
          >
            melhor gás
          </span>
          ,{" "}
          <span
            style={{ background: "rgba(255,255,0,.2)", borderRadius: "3px" }}
          >
            máxima qualidade
          </span>{" "}
          e{" "}
          <span
            style={{ background: "rgba(255,255,0,.2)", borderRadius: "3px" }}
          >
            preço justo
          </span>
          .
          <br />• Fazer o seu pedido é rápido e simples.
          <br />• O gás chegará na sua casa em poucos minutos.
        </p>
      </div>
      <Button to={"/pedido"} Icon={<BsArrowRight />} text={"Avançar"} />
    </>
  );
}
