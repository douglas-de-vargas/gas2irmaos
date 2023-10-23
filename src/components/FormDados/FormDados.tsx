"use client";

// ReactJs
import React, {
    useEffect,
    useState,
    useRef,
    ChangeEvent,
    FormEvent,
    Dispatch,
    SetStateAction
} from "react";

// Contexts / Types
import { useAppState, IclientData } from "@/contexts/dadosCompra";

// Components
import Button from "@/components/Button/Button";

// Data bases
import { products } from "../FormCarrinho/produtos";

// icons
import {
    BsArrowLeft,
    BsChevronCompactDown,
    BsChevronCompactUp
} from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { FiAlertTriangle } from "react-icons/fi";

// *** //

export default function FormDados() {
    const { valorTotal, clientData, setClientData, quantidade } = useAppState();

    const myphone: number = 5551981877876;

    // Mostrar produtos selecionados
    const selectedProducts = products
        .map(produto => ({
            produto,
            selectedQuantity: quantidade[produto.id] || 0
        }))
        .filter(selectedProduct => selectedProduct.selectedQuantity > 0); //fim

    // Resumo da compra para o link
    let productsSummary = selectedProducts
        .map(
            selectedProduct =>
                `${selectedProduct.produto.name} - Quantidade: ${selectedProduct.selectedQuantity}`
        )
        .join("%0A");
    if (selectedProducts.length === 0) {
        productsSummary = "Nenhum produto.";
    } //fim

    // Formata o valor total
    const formattedValorTotal = valorTotal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    }); //fim

    // Submit -> chama o WhatsApp link
    const onSubmit: SubmitHandler<IclientData> = data => {
        setClientData(data);

        const whatsAppLink = `https://wa.me/${myphone}?text=Olá, eu gostaria de fazer um pedido!%0A*Cliente:*${" "}${
            data.name
        }%0A*Contato:*${" "}${data.phone}%0A%0A*Rua:*${" "}${
            data.street
        }${", "}${data.housenumber}%0A*Complemento:*${" "}${
            data.complement
        }%0A*Bairro:*${" "}${data.district}${" / "}${
            data.city
        }%0A*Pagamento:*${" "}${data.pay}%0A%0A*Informações Adicionais:*%0A${
            data.additional
        }%0A%0A*Produtos Selecionados:*%0A${productsSummary}%0A${formattedValorTotal}`;

        window.open(whatsAppLink, "_blank");
    }; //fim
    return (
        <form onSubmit={() => onSubmit}>
            <label>
                Nome:
                <input
                    value={clientData.name}
                    placeholder="Nome"
                    name="name"
                    required
                />
                <span style={{ fontSize: ".7rem", color: "red" }}>
                    Requerido!
                </span>
            </label>
            <label>
                Telefone de contato:
                <span style={{ fontSize: ".7rem" }}>• DDD requerido.</span>
                <input
                    value={clientData.phone}
                    type="number"
                    name="phone"
                    placeholder="(00) 12345-6789"
                    required
                />
                <span style={{ fontSize: ".7rem", color: "red" }}>
                    Requerido!
                </span>
            </label>
            <label>
                Nome da rua:
                <input
                    value={clientData.street}
                    name="street"
                    placeholder="Endereço"
                    required
                />
                <span style={{ fontSize: ".7rem", color: "red" }}>
                    Requerido!
                </span>
            </label>
            <label>
                Número da casa:
                <input
                    value={clientData.housenumber}
                    type="number"
                    name="housenumber"
                    required
                    placeholder="Número da casa"
                />
                <span style={{ fontSize: ".7rem", color: "red" }}>
                    Requerido!
                </span>
            </label>
            <label>
                Complemento:
                <br />
                <span style={{ fontSize: ".7rem" }}>
                    • Fundos, Casa 2, Bloco, etc...
                </span>
                <input
                    value={clientData.complement}
                    name="complement"
                    placeholder="Complemento"
                />
            </label>
            <label>
                Bairro:
                <input
                    value={clientData.district}
                    name="district"
                    placeholder="Bairro"
                />
            </label>
            <label>
                Cidade:
                <select name="city" required>
                    <option value="" style={{ display: "none" }}>
                        Selecione
                    </option>
                    <option value="Guaíba-RS">Guaíba-RS</option>
                </select>
                <span style={{ fontSize: ".7rem", color: "red" }}>
                    Requerido!
                </span>
            </label>
            <label>
                Forma de pagamento:
                <select name="pay" required>
                    <option value="" style={{ display: "none" }}>
                        Selecione
                    </option>
                    <option value="Dinheiro">Dinheiro</option>
                    <option value="Pix">Pix</option>
                    <option value="Débito">Débito</option>
                    <option value="Crédito">Crédito</option>
                </select>
                <span style={{ fontSize: ".7rem", color: "red" }}>
                    Requerido!
                </span>
            </label>
            <label>
                Observações:
                <span style={{ fontSize: ".7rem" }}>
                    • Pontos de referência
                    <br />• Informações Adicionais
                </span>
                <textarea
                    value={clientData.additional}
                    name="additional"
                    placeholder="Obs"
                />
            </label>
            <Button
                to={"/pedido"}
                Icon={<BsArrowLeft />}
                text={"Voltar"}
            />
            {valorTotal > 0 ? (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px"
                    }}
                >
                    <h3>Resumo da Compra</h3>
                    <ul>
                        {selectedProducts.map(selectedProduct => (
                            <li key={selectedProduct.produto.id}>
                                {selectedProduct.produto.name} - Quantidade:{" "}
                                {selectedProduct.selectedQuantity}
                            </li>
                        ))}
                    </ul>
                    <h3>Valor Total: {formattedValorTotal}</h3>
                </div>
            ) : (
                <div id="alerts">
                    <div>
                        <FiAlertTriangle stroke={"hsl(38, 92.1%, 50.2%)"} />
                        Nenhum produto selecionado!
                    </div>
                </div>
            )}
            <button className="button" type="submit">
                <BsWhatsapp /> Fazer pedido
            </button>
        </form>
    );
}
