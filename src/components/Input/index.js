import React, { useEffect, useRef, useState } from "react";

import { TextInput, StyleSheet } from "react-native";
import { useField } from "@unform/core";

function Input({ name, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);
  console.log(error);
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
    <TextInput
      ref={inputRef}
      keyboardAppearance="light"
      defaultValue={defaultValue}
      placeholderTextColor="#666360"
      style={styles.input}
      onChangeText={(value) => {
        if (inputRef.current) {
          inputRef.current.value = value;
        }
      }}
      {...rest}
    />
  );
}
const styles = StyleSheet.create({
  input: {
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginTop: 40,
    width: 350,
    paddingHorizontal: 20,
    fontSize: 16,
  },
});

export default Input;
