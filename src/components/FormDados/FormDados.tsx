"use client";

// ReactJs
import React, {
    useEffect,
    useState,
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

// Reack Hook Form
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

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

    const methods = useForm<IclientData>();

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors }
    } = methods;

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

    // Salva o estado do form ao Voltar
    const handleVoltarClick = () => {
        const formData = getValues();
        setClientData(formData);
    };

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
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Nome:
                    <input
                        defaultValue={clientData.name}
                        {...register("name", { required: true })}
                        placeholder="Nome"
                    />
                    {errors.name && (
                        <span style={{ fontSize: ".7rem", color: "red" }}>
                            Requerido!
                        </span>
                    )}
                </label>
                <label>
                    Telefone de contato:
                    <span style={{ fontSize: ".7rem" }}>• DDD requerido.</span>
                    <input
                        defaultValue={clientData.phone}
                        type="number"
                        {...register("phone", {
                            required: true
                        })}
                        placeholder="(00) 12345-6789"
                    />
                    {errors.phone && (
                        <span style={{ fontSize: ".7rem", color: "red" }}>
                            Requerido!
                        </span>
                    )}
                </label>
                <label>
                    Nome da rua:
                    <input
                        defaultValue={clientData.street}
                        {...register("street", { required: true })}
                        placeholder="Endereço"
                    />
                    {errors.street && (
                        <span style={{ fontSize: ".7rem", color: "red" }}>
                            Requerido!
                        </span>
                    )}
                </label>
                <label>
                    Número da casa:
                    <input
                        defaultValue={clientData.housenumber}
                        type="number"
                        {...register("housenumber", { required: true })}
                        placeholder="Número da casa"
                    />
                    {errors.housenumber && (
                        <span style={{ fontSize: ".7rem", color: "red" }}>
                            Requerido!
                        </span>
                    )}
                </label>
                <label>
                    Complemento:
                    <br />
                    <span style={{ fontSize: ".7rem" }}>
                        • Fundos, Casa 2, Bloco, etc...
                    </span>
                    <input
                        defaultValue={clientData.complement}
                        {...register("complement")}
                        placeholder="Complemento"
                    />
                </label>
                <label>
                    Bairro:
                    <input
                        defaultValue={clientData.district}
                        {...register("district")}
                        placeholder="Bairro"
                    />
                </label>
                <label>
                    Cidade:
                    <select {...register("city", { required: true })}>
                        <option value="" style={{ display: "none" }}>
                            Selecione
                        </option>
                        <option value="Guaíba-RS">Guaíba-RS</option>
                    </select>
                    {errors.city && (
                        <span style={{ fontSize: ".7rem", color: "red" }}>
                            Requerido!
                        </span>
                    )}
                </label>
                <label>
                    Forma de pagamento:
                    <select {...register("pay", { required: true })}>
                        <option value="" style={{ display: "none" }}>
                            Selecione
                        </option>
                        <option value="Dinheiro">Dinheiro</option>
                        <option value="Pix">Pix</option>
                        <option value="Débito">Débito</option>
                        <option value="Crédito">Crédito</option>
                    </select>
                    {errors.pay && (
                        <span style={{ fontSize: ".7rem", color: "red" }}>
                            Requerido!
                        </span>
                    )}
                </label>
                <label>
                    Observações:
                    <span style={{ fontSize: ".7rem" }}>
                        • Pontos de referência
                        <br />• Informações Adicionais
                    </span>
                    <textarea
                        defaultValue={clientData.additional}
                        {...register("additional")}
                        placeholder="Obs"
                    />
                </label>
                <Button
                    onClick={handleVoltarClick}
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
        </FormProvider>
    );
}
