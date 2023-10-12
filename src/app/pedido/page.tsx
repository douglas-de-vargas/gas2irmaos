// Next
import Image from "next/image";

// Components
import Loja from "@/components/FormCarrinho/FormCarrinho";
import Button from "@/components/Button/Button";

//Icons
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Pedido() {
  const cardIcon = true;
  return (
    <>
      <h2>Produtos</h2>
      <div
        id="iso"
        style={{
          width: "300px",
        }}
      >
        <Image src="/iso.png" alt={"imagem"} width={100} height={500} />
        <p>
          Nossos produtos são certificados pelo ISO 9001, garantia e segurança
          para sua família!
        </p>
      </div>
      <Loja />
      <Button
        to={"/pedido/dados"}
        Icon={<AiOutlineShoppingCart />}
        text={"Avançar"}
      />
      <Image src="/image2.png" alt={"imagem"} width={300} height={500} />
    </>
  );
}
