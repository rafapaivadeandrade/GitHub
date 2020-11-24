import React, { useEffect, useState, useRef } from "react";
// import { Form } from "@unform/mobile";
import { Feather as Icon, AntDesign } from "@expo/vector-icons";
import { Container, ButtonPrimary, Text, Form } from "./styles";
import Input from "../../components/Input";
import getValidationErrors from "../../utils/getValidationErrors";
import axios from "axios";
import * as Yup from "yup";

export default function Login() {
  const formRef = useRef(null);
  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Campo obrigatório"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await axios.get(
        `https://api.github.com/users/${data.name}`
      );
      console.log(response.data);
      const { name = login, avatar_url, bio } = response.data;

      formRef.current.setErrors({});
      //   reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        // console.log(errors);
        formRef.current?.setErrors(errors);
      }
    }
  }
  return (
    <Container>
      <AntDesign name="github" size={120} color="#FFCE00" />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Usuário" />
        <ButtonPrimary onPress={() => formRef.current.submitForm()}>
          <Text>ENTRAR</Text>
          <Icon name="arrow-right" size={30} color="#000000" />
        </ButtonPrimary>
      </Form>
    </Container>
  );
}
