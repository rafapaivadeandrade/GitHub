import React, { useEffect, useRef, useState } from "react";

import { TextInput, StyleSheet, View } from "react-native";
import { useField } from "@unform/core";
import { Error, Container, TextError } from "./styles";
function Input({ name, ...rest }) {
  const inputRef = useRef(null);

  const {
    fieldName,
    registerField,
    defaultValue = "rafapaivadeandrade",
    error,
  } = useField(name);
  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      clearValue(ref) {
        ref.value = "";
        ref.clear();
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <TextInput
        autoCorrect={false}
        autoComplete={false}
        ref={inputRef}
        keyboardAppearance="light"
        defaultValue={defaultValue}
        placeholderTextColor="#767676"
        style={styles.input}
        onChangeText={(value) => {
          if (inputRef.current) {
            inputRef.current.value = value;
          }
        }}
        {...rest}
      />
      {error && (
        <Error>
          <TextError styles={{ color: "red" }}>{error}</TextError>
        </Error>
      )}
    </Container>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 10,
    maxWidth: 200,
    paddingHorizontal: 20,
    fontSize: 16,
  },
});

export default Input;
