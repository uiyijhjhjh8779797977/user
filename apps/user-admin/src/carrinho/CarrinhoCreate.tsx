import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CarrinhoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <div />
      </SimpleForm>
    </Create>
  );
};
