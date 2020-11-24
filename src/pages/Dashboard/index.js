import React, { useEffect, useState, useRef } from "react";
import { KeyboardAvoidingView, Platform, Dimensions } from "react-native";
import { Feather as Icon, AntDesign } from "@expo/vector-icons";
import { Container, ButtonPrimary, Text, Form, Github } from "./styles";
import Input from "../../components/Input";
import getValidationErrors from "../../utils/getValidationErrors";
import * as Yup from "yup";
import { useUser } from "../../hooks/ContextApi";

export default function Dashboard({ navigation }) {
  const { signIn, isSigned, setIsSigned } = useUser();
  const formRef = useRef(null);
  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Campo obrigatório"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      signIn({ name: data.name });
      if (isSigned) {
        navigation.navigate("Dashboard");
      }
      formRef.current.setErrors({});
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        setIsSigned(false);
        formRef.current?.setErrors(errors);
      }
    }
  }
  return (
    <Container
      style={{ flex: 1, width: Dimensions.get("screen").width }}
      behavior={Platform.OS === "android" ? "height" : "padding"}
    >
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Github name="github" size={120} color="#FFCE00" />
        <Input name="name" placeholder="Usuário" />
        <ButtonPrimary onPress={() => formRef.current.submitForm()}>
          <Text>ENTRAR</Text>
          <Icon name="arrow-right" size={30} color="#000000" />
        </ButtonPrimary>
      </Form>
    </Container>
  );
}
