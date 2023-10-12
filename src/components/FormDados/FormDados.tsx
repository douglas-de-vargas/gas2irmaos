"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useAppState } from "@/hooks/context";
import { BsWhatsapp } from "react-icons/bs";
import { FiAlertTriangle } from "react-icons/fi";

export default function FormDados() {
  const [clientData, setClientData] = useState({
    name: "",
    phone: "",
    street: "",
    housenumber: "",
    complement: "",
    district: "",
    city: "",
    pay: "",
    additional: "",
  });

  const myphone: number = 5551981877876;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement |  HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setClientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsAppLink = `https://wa.me/${myphone}?text=Olá, eu gostaria de pedir gás!%0A*Cliente:*${" "}${
      clientData.name
    }%0A*Contato:*${" "}${clientData.phone}%0A%0A*Rua:*${" "}${
      clientData.street
    }%0A*Número:*${" "}${clientData.housenumber}%0A*Complemento:*${" "}${
      clientData.complement
    }%0A*Bairro:*${" "}${clientData.district}%0A*Cidade:*${" "}${
      clientData.city
    }%0A*Pagamento:*${" "}${clientData.pay}%0A%0A*Informações Adicionais:*%0A${
      clientData.additional
    }`;

    window.open(whatsAppLink, "_blank");
  };

  useEffect(() => {
    const selectElement = document.getElementById("city");
    if (selectElement) {
      if (clientData.city !== "") {
        selectElement.style.color = "black";
      }
    }
  }, [clientData.city]);

  useEffect(() => {
    const selectElement = document.getElementById("pay");
    if (selectElement) {
      if (clientData.pay !== "") {
        selectElement.style.color = "black";
      }
    }
  }, [clientData.pay]);

  interface AppState {
    valorTotal: number;
    setValorTotal: (value: number) => void;
  }

  const { valorTotal, setValorTotal } = useAppState() as unknown as AppState;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nome:
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome."
            value={clientData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="phone">
          Telefone de contato:
          <br />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Digite seu telefone para contato."
            value={clientData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="street">
          Nome da rua:
          <br />
          <input
            type="text"
            id="street"
            name="street"
            placeholder="Digite o nome da sua rua."
            value={clientData.street}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="housenumber">
          Número da casa:
          <br />
          <input
            type="text"
            id="housenumber"
            name="housenumber"
            placeholder="Digite o número da casa."
            value={clientData.housenumber}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="complement">
          Complemento:
          <br />
          Fundos, Casa 2, Bloco, etc...
          <br />
          <input
            type="text"
            id="complement"
            name="complement"
            placeholder="Digite o complemento, se houver."
            value={clientData.complement}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="district">
          Bairro:
          <br />
          <input
            type="text"
            id="district"
            name="district"
            placeholder="Digite o nome do bairro."
            value={clientData.district}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="city">
          Cidade:
          <br />
          <select
            id="city"
            name="city"
            value={clientData.city}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Selecione.
            </option>
            <option value="Guaíba-RS">Guaíba-RS</option>
          </select>
        </label>

        <label htmlFor="pay">
          Forma de pagamento:
          <br />
          <select
            id="pay"
            name="pay"
            value={clientData.pay}
            onChange={handleChange}
          >
            <option value="" disabled>
              Selecione.
            </option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Pix">Pix</option>
            <option value="Débito">Débito</option>
            <option value="Crédito">Crédito</option>
          </select>
        </label>

        <label htmlFor="additional">
          Observações:
          <br />
          • Pontos de referência
          <br />• Informações Adicionais
          <br />
          <textarea
            id="additional"
            name="additional"
            placeholder="Digite observações."
            value={clientData.additional}
            onChange={handleChange}
          />
        </label>
        <div>
          <p>
            Valor Total:{" "}
            {valorTotal.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>

        <button
          className="button"
          type="submit"
          disabled={clientData.city === "" || clientData.pay === ""}
        >
          <BsWhatsapp /> Fazer pedido
        </button>

        <div id="alerts">
          {clientData.city === "" && (
            <div>
              <FiAlertTriangle stroke={"#d33100"} />
              Selecione a cidade!
            </div>
          )}
          {clientData.pay === "" && (
            <div>
              <FiAlertTriangle stroke={"#d33100"} />
              Selecione a forma de pagamento!
            </div>
          )}
        </div>
      </form>
    </>
  );
}
