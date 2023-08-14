import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CarrinhoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
