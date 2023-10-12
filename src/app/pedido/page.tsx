// Next
import Link from "next/link";

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
      <div id="iso" style={{
      	width: '300px',
      }}>
        <img width="80px" src="/iso.png" />
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
      <img src="/image2.png" width="300px" />
    </>
  );
}
